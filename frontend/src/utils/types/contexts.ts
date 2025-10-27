import { Dispatch } from "react";
import { LoggedUser } from "./loggedUser";
import { Credit } from "./credit";

export interface GlobalContextState {
  loggedUser: LoggedUser | null;
}

export interface AdminContextState {
  credits: Credit[];
}
export type GlobalContextAction = { type: "LOGIN_USER"; payload: LoggedUser } | { type: "LOGOUT_USER" };

export type AdminContextAction = { type: "UNDER_DEV" };

export interface GlobalContextT {
  state: GlobalContextState;
  dispatch: Dispatch<GlobalContextAction>;
}

export interface AdminContextT {
  state: AdminContextState;
  dispatch: Dispatch<AdminContextAction>;
}
