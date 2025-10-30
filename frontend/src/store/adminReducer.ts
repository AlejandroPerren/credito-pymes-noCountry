import { AdminContextAction, AdminContextState } from "@/utils/types/contexts";

// export const adminContextInitialState: AdminContextState = {
//   credits: mockCredits,
// };

export const adminContextInitialState: AdminContextState = {
  credits: {
    data: [],
    status: "loading",
  },
};

export function adminReducer(state: AdminContextState, action: AdminContextAction): AdminContextState {
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
