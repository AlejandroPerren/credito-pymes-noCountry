import { GlobalContextAction } from "@/utils/types/contexts";
import { LoggedUser } from "@/utils/types/loggedUser";

export function loginUser(loggedUser: LoggedUser): GlobalContextAction {
  return { type: "LOGIN_USER", payload: loggedUser };
}

export function loginUserLoading(): GlobalContextAction {
  return { type: "LOGIN_USER_LOADING" };
}

export function logoutUser(): GlobalContextAction {
  return { type: "LOGOUT_USER" };
}
