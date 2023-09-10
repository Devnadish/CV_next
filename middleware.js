
import { i18n } from "@/i18n.config";
import { NextResponse,NextRequest  } from "next/server";
import { getLocale } from "@/lib/getlocal"

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  // const requestHeaders = new Headers(request.headers);
  // const ip = request.ip || "";
  // requestHeaders.set("x-forwarded-for", ip);
  // console.log(requestHeaders,ip)
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

// import { i18n } from '@/i18n.config';
// import { NextResponse } from 'next/server';

// const { match: matchLocale } = require('@formatjs/intl-localematcher');
// const Negotiator = require('negotiator');

// function getLocale(request) {
//   const negotiatorHeaders = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//   const locales = i18n.locales;
//   const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

//   const locale = matchLocale(languages, locales, i18n.defaultLocale);
//   return locale;
// }

// export function middleware(request) {
//   const pathname = request.nextUrl.pathname;
//   // console.log("pathname : ",pathname)
//   const pathnameIsMissingLocale = i18n.locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   );
//   if (/^\/assets(\/|$)/.test(pathname)) { // Exclude /assets path
//     return null; // Return null to bypass the middleware for /assets paths
//   }

//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);
//     return NextResponse.redirect(
//       new URL(
//         `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
//         request.url
//       )
//     );
//   }
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
// };
