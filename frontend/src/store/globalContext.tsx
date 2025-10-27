"use client";

import { GlobalContextT } from "@/utils/types/contexts";
import { createContext, useContext, useReducer } from "react";
import { globalContextInitialState, globalReducer } from "./globalReducer";

const GlobalContext = createContext<GlobalContextT | undefined>(undefined);

export function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(globalReducer, globalContextInitialState);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobalContext must be used inside GlobalContextProvider");
  return context;
}
