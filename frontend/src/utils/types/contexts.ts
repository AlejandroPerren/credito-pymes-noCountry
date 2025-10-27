import { Dispatch } from "react";
import { LoggedUser } from "./loggedUser";

export interface GlobalContextState {
  loggedUser: LoggedUser | null;
}

export type GlobalContextAction = { type: "LOGIN_USER"; payload: LoggedUser } | { type: "LOGOUT_USER" };

export interface GlobalContextT {
  state: GlobalContextState;
  dispatch: Dispatch<GlobalContextAction>;
}
