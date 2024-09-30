import { defaultLocale, locales } from "@/lib/i18n/locales"
import { localePrefix, pathnames } from "@/lib/i18n/navigation"
import createMiddleware from "next-intl/middleware"
import type { NextRequest } from "next/server"

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
    pathnames,
    localePrefix,
    localeDetection: false
  })
  return handleI18nRouting(request)
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|assets|manifest.json|favicon.ico).*)"
}
