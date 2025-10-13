import { AuthRoutes, DashboardRoutes } from "../../types/routesApp";

export interface INavigationService {
  goToLogin(): AuthRoutes["LOGIN"];
  goToRegister(): AuthRoutes["REGISTER"];
  goToForgotPassword(): AuthRoutes["FORGOT_PASSWORD"];

  goToDashboard(): DashboardRoutes["ROOT"];
  goToProfile(): DashboardRoutes["PROFILE"];
  goToRequestDetail(
    id: string
  ): ReturnType<DashboardRoutes["REQUESTS"]["DETAIL"]>;
}
