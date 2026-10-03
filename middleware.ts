import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const userId = request.cookies.get("patient-user-id")?.value;

  const isProtectedRoute = path.startsWith("/new-appointment");

  // Protected pages, when unauth... redirect to login.
  if (isProtectedRoute && !userId) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  const isAuthRoute = path.startsWith("/auth/login");

  // User already logged in.
  if (isAuthRoute && userId) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/new-appointment/:path*", "/login", "/register"],
};
