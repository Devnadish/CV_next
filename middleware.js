import { i18n } from "@/i18n.config";
import { NextResponse, NextRequest } from "next/server";
import { getLocale } from "@/lib/getlocal";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  if (/^\/assets(\/|$)/.test(pathname)) {
    // Exclude /assets path
    return null; // Return null to bypass the middleware for /assets paths
  }

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
