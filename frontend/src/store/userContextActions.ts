import { apiFetch } from "@/network/utils/FetchApi";
import { UserContextAction } from "@/utils/types/contexts";
import { Credit } from "@/utils/types/credit";

export async function loadUserCredits(dispatch: React.Dispatch<UserContextAction>) {
  dispatch({ type: "LOAD_CREDITS_START" });
  try {
    const response = await apiFetch("/credit", { method: "GET" });
    if (response.ok) {
      dispatch({ type: "LOAD_CREDITS_SUCCESS", payload: response.data as Credit[] });
    }
  } catch {
    dispatch({ type: "LOAD_CREDITS_ERROR" });
  }
}
