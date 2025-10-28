// import { mockUserCredits } from "@/utils/consts/credits";
import { UserContextAction, UserContextState } from "@/utils/types/contexts";

// export const userContextInitialState: UserContextState = {
//   credits: mockUserCredits,
// };

export const userContextInitialState: UserContextState = {
  credits: [],
};

export function userReducer(state: UserContextState, action: UserContextAction): UserContextState {
  switch (action.type) {
    default:
      return { ...state };
  }
}
