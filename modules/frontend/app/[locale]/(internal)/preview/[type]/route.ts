import { blogPrefix } from "@/services/strapi/pages"
import { draftMode } from "next/headers"
import { notFound, redirect } from "next/navigation"

type TypeParams = {
  params: {
    type: string;
  };
};

function handlePagePrefix(pageType: string | null) {
  switch (pageType) {
    case "page-standart":
      return ""
    case "page-blog":
      return `/${blogPrefix}`
    default:
      return ""
  }
}

export async function GET(request: Request, { params }: TypeParams) {
  const { searchParams } = new URL(request.url)

  const secret = searchParams.get("secret")
  const slug = searchParams.get("slug")
  const pageType = searchParams.get("pageType")

  if (secret !== "3141592") return new Response("Invalid token")

  switch (params.type) {
    case "draft":
      console.log("Draft mode enabled")
      draftMode().enable()
      break
    case "published":
      console.log("Draft mode disabled")
      draftMode().disable()
      break
    default:
      notFound()
  }

  redirect(`${handlePagePrefix(pageType)}/${slug}`)
}
