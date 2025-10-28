import { Dispatch } from "react";
import { LoggedUser } from "./loggedUser";
import { Credit } from "./credit";

export interface GlobalContextState {
  loggedUser: LoggedUser | null;
}

export type GlobalContextAction = { type: "LOGIN_USER"; payload: LoggedUser } | { type: "LOGOUT_USER" };

export interface GlobalContextT {
  state: GlobalContextState;
  dispatch: Dispatch<GlobalContextAction>;
}

export interface UserContextState {
  credits: Credit[];
}

export type UserContextAction = { type: "UNDER_DEV" };

export interface UserContextT {
  state: UserContextState;
  dispatch: Dispatch<UserContextAction>;
}

export interface AdminContextState {
  credits: Credit[];
}

export type AdminContextAction = { type: "UNDER_DEV" };

export interface AdminContextT {
  state: AdminContextState;
  dispatch: Dispatch<AdminContextAction>;
}
