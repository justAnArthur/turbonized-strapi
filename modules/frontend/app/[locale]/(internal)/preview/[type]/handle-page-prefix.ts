import { blogPrefix } from "@/services/strapi/pages"

export function handlePagePrefix(pageType: string | null) {
  switch (pageType) {
    case "page-standart":
      return ""
    case "page-blog":
      return `/${blogPrefix}`
    default:
      return ""
  }
}
