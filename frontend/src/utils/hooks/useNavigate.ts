"use client";

import { useRouter } from "next/navigation";
import { NavigationService } from "../config/routesApp/service";

export const useNavigateApp = () => {
  const router = useRouter();

  return {
    toLogin: () => router.push(NavigationService.goToLogin()),
    toRegister: () => router.push(NavigationService.goToRegister()),
    toForgotPassword: () => router.push(NavigationService.goToForgotPassword()),

    toDashboard: () => router.push(NavigationService.goToDashboard()),
    toProfile: () => router.push(NavigationService.goToProfile()),
    toRequestDetail: (id: string) =>
      router.push(NavigationService.goToRequestDetail(id)),
  };
};
