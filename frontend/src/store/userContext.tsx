"use client";

import { UserContextT } from "@/utils/types/contexts";
import { createContext, useContext, useEffect, useReducer } from "react";
import { userContextInitialState, userReducer } from "./userReducer";
import { loadUserCredits } from "./userContextActions";

const UserContext = createContext<UserContextT | undefined>(undefined);

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(userReducer, userContextInitialState);

  useEffect(() => {
    loadUserCredits(dispatch);
  }, []);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) throw new Error("useUserContext must be used inside UserContextProvider");

  return context;
}
