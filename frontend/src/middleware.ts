import { NextRequest, NextResponse } from "next/server";
import { decodeJwt } from "jose";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const protectedRoutes = [
    { prefix: "/user", role: "USER" },
    { prefix: "/admin", role: "ADMIN" },
  ];

  const route = protectedRoutes.find((route) => pathname.startsWith(route.prefix));

  if (!route) return NextResponse.next();

  const token = request.cookies.get("access_token")?.value;

  if (!token) return redirectToHome(request);

  try {
    const payload = decodeJwt(token);

    const expirationTime = payload.exp;
    const nowTime = new Date().getTime();

    if (expirationTime && expirationTime > nowTime) return redirectToHome(request);

    const userRole = payload.role as string | undefined;

    if (userRole !== route.role) return redirectToHome(request);

    return NextResponse.next();
  } catch {
    return redirectToHome(request);
  }
}

function redirectToHome(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
}
