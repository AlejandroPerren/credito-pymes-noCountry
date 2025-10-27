import { AdminContextAction, AdminContextState } from "@/utils/types/contexts";

export const adminContextInitialState: AdminContextState = {
  credits: [],
};

export function adminReducer(state: AdminContextState, action: AdminContextAction): AdminContextState {
  switch (action.type) {
    default:
      return { ...state };
  }
}
