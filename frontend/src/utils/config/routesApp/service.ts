import { ROUTES } from "./routes";
import type { INavigationService } from "./contract";
export const NavigationService: INavigationService = {
  goToLogin: () => ROUTES.AUTH.LOGIN,
  goToRegister: () => ROUTES.AUTH.REGISTER,
  goToForgotPassword: () => ROUTES.AUTH.FORGOT_PASSWORD,

  goToDashboard: () => ROUTES.DASHBOARD.ROOT,
  goToProfile: () => ROUTES.DASHBOARD.PROFILE,
  goToRequestDetail: (id) => ROUTES.DASHBOARD.REQUESTS.DETAIL(id),
};
