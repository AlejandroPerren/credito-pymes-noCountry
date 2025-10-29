"use client";

import { GlobalContextT } from "@/utils/types/contexts";
import { createContext, useContext, useEffect, useReducer } from "react";
import { globalContextInitialState, globalReducer } from "./globalReducer";
import { loginUser, loginUserLoading, logoutUser } from "./globalContextActions";

const GlobalContext = createContext<GlobalContextT | undefined>(undefined);

export function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(globalReducer, globalContextInitialState);

  useEffect(() => {
    const persistedLoggedUser = localStorage.getItem("loggedUser");

    if (persistedLoggedUser) {
      dispatch(loginUserLoading());
      dispatch(loginUser(JSON.parse(persistedLoggedUser)));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedUser");
    dispatch(logoutUser());
  };

  return <GlobalContext.Provider value={{ state, dispatch, logout }}>{children}</GlobalContext.Provider>;
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobalContext must be used inside GlobalContextProvider");
  return context;
}
