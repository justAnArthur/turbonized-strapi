import { draftMode } from "next/headers"
import { notFound, redirect } from "next/navigation"
import { handlePagePrefix } from "@/app/[locale]/(internal)/preview/[type]/handle-page-prefix"

type TypeParams = {
  params: {
    type: string
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
