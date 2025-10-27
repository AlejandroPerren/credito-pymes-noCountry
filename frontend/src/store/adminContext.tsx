"use client";

import { AdminContextT } from "@/utils/types/contexts";
import { createContext, useContext, useReducer } from "react";
import { adminContextInitialState, adminReducer } from "./adminReducer";

const AdminContext = createContext<AdminContextT | undefined>(undefined);

export function AdminContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(adminReducer, adminContextInitialState);
  return <AdminContext.Provider value={{ state, dispatch }}>{children}</AdminContext.Provider>;
}

export function useAdminContext() {
  const context = useContext(AdminContext);

  if (!context) throw new Error("useAdminContext must be used inside AdminContextProvider");

  return context;
}
