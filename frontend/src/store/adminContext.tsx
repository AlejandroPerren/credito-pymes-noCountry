"use client";

import { AdminContextT } from "@/utils/types/contexts";
import { createContext, useContext, useEffect, useReducer } from "react";
import { adminContextInitialState, adminReducer } from "./adminReducer";
import { loadAdminCredits } from "./adminContextActions";

const AdminContext = createContext<AdminContextT | undefined>(undefined);

export function AdminContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(adminReducer, adminContextInitialState);

  useEffect(() => {
    loadAdminCredits(dispatch);
  }, []);

  return <AdminContext.Provider value={{ state, dispatch }}>{children}</AdminContext.Provider>;
}

export function useAdminContext() {
  const context = useContext(AdminContext);

  if (!context) throw new Error("useAdminContext must be used inside AdminContextProvider");

  return context;
}
