import { NextResponse, NextRequest } from "next/server";

export function middleware(request: any) {
  const LANG = request.cookies.NEXT_LOCALE || "en";

  const shouldHandleLocale =
    !request.nextUrl.pathname.includes("/api/") &&
    !request.nextUrl.pathname.includes("/assets/") &&
    request.nextUrl.locale === "default";

  return shouldHandleLocale
    ? NextResponse.redirect(`/${LANG}${request.nextUrl.pathname}`)
    : undefined;
}
