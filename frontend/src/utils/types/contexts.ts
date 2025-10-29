import { Dispatch } from "react";
import { LoggedUser } from "./loggedUser";
import { Credit } from "./credit";

export interface GlobalContextState {
  loggedUser: {
    user: LoggedUser | null;
    status: ContextStatus;
  };
}

export type GlobalContextAction =
  | { type: "LOGIN_USER"; payload: LoggedUser }
  | { type: "LOGIN_USER_LOADING" }
  | { type: "LOGOUT_USER" };

export interface GlobalContextT {
  state: GlobalContextState;
  dispatch: Dispatch<GlobalContextAction>;
  logout: () => void;
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

type ContextStatus = "loading" | "error" | "idle";
