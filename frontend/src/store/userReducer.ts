// import { mockUserCredits } from "@/utils/consts/credits";
import { UserContextAction, UserContextState } from "@/utils/types/contexts";

// export const userContextInitialState: UserContextState = {
//   credits: mockUserCredits,
// };

export const userContextInitialState: UserContextState = {
  credits: {
    data: [],
    status: "loading",
  },
};

export function userReducer(state: UserContextState, action: UserContextAction): UserContextState {
  switch (action.type) {
    case "LOAD_CREDITS_START":
      return {
        ...state,
        credits: {
          ...state.credits,
          status: "loading",
        },
      };
    case "LOAD_CREDITS_SUCCESS":
      return {
        ...state,
        credits: {
          status: "idle",
          data: action.payload,
        },
      };
    case "LOAD_CREDITS_ERROR":
      return {
        ...state,
        credits: {
          status: "error",
          data: [],
        },
      };
    default:
      return { ...state };
  }
}
