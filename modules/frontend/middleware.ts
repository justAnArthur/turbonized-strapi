import { routing } from "@/lib/i18n/navigation"
import createMiddleware from "next-intl/middleware"
import type { NextRequest } from "next/server"

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware(routing)
  return handleI18nRouting(request)
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|assets|manifest.json|favicon.ico).*)"
}
