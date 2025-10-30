import { GlobalContextAction, GlobalContextState } from "@/utils/types/contexts";

export const globalContextInitialState: GlobalContextState = {
  loggedUser: {
    user: null,
    status: "idle",
  },
};

export function globalReducer(state: GlobalContextState, action: GlobalContextAction): GlobalContextState {
  switch (action.type) {
    case "LOGIN_USER_LOADING":
      return {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          status: "loading",
        },
      };
    case "LOGIN_USER":
      return {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          status: "idle",
          user: action.payload,
        },
      };
    case "LOGOUT_USER":
      return {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          status: "idle",
          user: null,
        },
      };
    default:
      return { ...state };
  }
}
