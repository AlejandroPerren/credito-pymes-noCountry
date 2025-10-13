/**
 * 🔹 Configuración centralizada de rutas de la aplicación.
 */

export const ROUTES = {
  ROOT: "/",
  AUTH: {
    ROOT: "/auth",
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    VERIFY_EMAIL: (token?: string) =>
      token ? `/verify-email?token=${token}` : "/verify-email",
  },
  DASHBOARD: {
    ROOT: "/dashboard",
    PROFILE: "/dashboard/profile",
    SETTINGS: "/dashboard/settings",
    REQUESTS: {
      ROOT: "/dashboard/requests",
      DETAIL: (id?: string) =>
        id ? `/dashboard/requests/${id}` : "/dashboard/requests/[id]",
      NEW: "/dashboard/requests/new",
    },
  },
  HELP: {
    ROOT: "/help",
    TERMS: "/help/terms",
    PRIVACY: "/help/privacy",
    CONTACT: "/help/contact",
  },
  LEGAL: {
    TERMS: "/terms",
    PRIVACY: "/privacy",
  },
  SYSTEM: {
    ERROR_404: "/404",
  },
} as const;

export type AppRoutes = typeof ROUTES;
