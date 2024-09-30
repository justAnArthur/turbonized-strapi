import { createSharedPathnamesNavigation } from "next-intl/navigation"

import { locales } from "./locales"

export const localePrefix = "as-needed"

export const pathnames = {}

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales })
