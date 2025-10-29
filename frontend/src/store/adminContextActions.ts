import { apiFetch } from "@/network/utils/FetchApi";
import { AdminContextAction } from "@/utils/types/contexts";
import { Credit } from "@/utils/types/credit";

export async function loadAdminCredits(dispatch: React.Dispatch<AdminContextAction>) {
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
