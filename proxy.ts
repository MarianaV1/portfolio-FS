import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "@/content/i18n";

function detectLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language") ?? "";
  const preferred = header.split(",")[0]?.split("-")[0]?.toLowerCase();
  return (locales as readonly string[]).includes(preferred ?? "")
    ? (preferred as string)
    : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip if the path already starts with a supported locale.
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return;

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Run on everything except Next internals, generated metadata routes
  // (icon, sitemap, robots, og images), and files with an extension
  // (assets like /cv-mariana-vega.pdf, images).
  matcher: [
    "/((?!_next|icon|apple-icon|opengraph-image|twitter-image|sitemap|robots|manifest|.*\\..*).*)",
  ],
};
