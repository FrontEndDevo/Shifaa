import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const sessionSecret = request.cookies.get("patient-user-id")?.value;

  const areProtectedRoutes =
    path.startsWith("/new-appointment") || path.startsWith("/profile");

  // Protected pages -> redirect to login.
  if (areProtectedRoutes && !sessionSecret) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  const isAuthRoute = path.startsWith("/auth/login");

  // User already logged in.
  if (isAuthRoute && sessionSecret) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const adminPasskey = request.cookies.get("admin_access_token")?.value;
  const isProtectedAdmin = path.startsWith("/admin");

  // User is not the Admin.
  if (isProtectedAdmin && !adminPasskey) {
    if (sessionSecret) {
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/new-appointment/:path*",
    "/auth/:path*",
    "/profile",
  ],
};
