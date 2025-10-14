/**
 * Configuración de acceso según rol de usuario y tipo de ruta.
 * Facilita los guards de navegación.
 */

import { ROUTES } from "./routes";

export const PUBLIC_ROUTES = [
  ROUTES.ROOT,
  ROUTES.AUTH.LOGIN,
  ROUTES.AUTH.REGISTER,
  ROUTES.AUTH.FORGOT_PASSWORD,
  ROUTES.AUTH.VERIFY_EMAIL(),
];

export const PRIVATE_ROUTES = [
  ROUTES.DASHBOARD.ROOT,
  ROUTES.DASHBOARD.PROFILE,
  ROUTES.DASHBOARD.SETTINGS,
  ROUTES.DASHBOARD.REQUESTS.ROOT,
];

export const ROLE_ROUTES = {
  admin: [...PRIVATE_ROUTES, ROUTES.DASHBOARD.REQUESTS.NEW],
  user: PRIVATE_ROUTES,
} as const;
