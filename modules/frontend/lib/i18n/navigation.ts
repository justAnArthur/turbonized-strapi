import { createSharedPathnamesNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"
import { blogPrefix } from "@/services/strapi/pages"
import { defaultLocale, locales } from "./locales"

export const localePrefix = "as-needed"

export const pathnames = {
  '/': '/',

  [`/${blogPrefix}/[...slug]`]: {
    en: `/${blogPrefix}/[...slug]`,
    sk: `/blogy/[...slug]`
  }
}

export const routing = defineRouting({
  locales,
  pathnames,
  localePrefix,
  defaultLocale
})

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing)
