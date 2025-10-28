import { GlobalContextAction, GlobalContextState } from "@/utils/types/contexts";

export const globalContextInitialState: GlobalContextState = {
  loggedUser: {
    username: "Pedro Morales",
    role: "USER",
  },
};
// export const globalContextInitialState: GlobalContextState = {
//   loggedUser: null,
// };

export function globalReducer(state: GlobalContextState, action: GlobalContextAction): GlobalContextState {
  switch (action.type) {
    default:
      return { ...state };
  }
}
