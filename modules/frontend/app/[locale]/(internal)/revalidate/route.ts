import { LocaleParams } from "@/app/[locale]/layout"
import { revalidatePath } from "next/cache"
import { handlePagePrefix } from "@/app/[locale]/(internal)/preview/[type]/handle-page-prefix"

export async function POST(request: Request, { params }: LocaleParams) {
  const body = await request.json()

  if (!body.model)
    return

  switch (body.model) {
    case 'api::page.page':
      const path = `/${params.locale}${handlePagePrefix(body.pageType)}${body.slug ? `/${body.slug}` : ''}`
      console.log('Revalidating ', path)
      revalidatePath(path)
      break
    default:
      console.warn('Unhandled revalidate model: ', body.model)
  }

  return new Response()
}
