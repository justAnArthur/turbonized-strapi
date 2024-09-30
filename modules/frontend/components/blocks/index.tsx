import type { SlugParams } from "@/app/[locale]/hack/[[...slug]]/layout"
import type { LocaleParams } from "@/app/[locale]/layout"
import dynamic from "next/dynamic"

export type SectionRendererOptions = SlugParams & LocaleParams;

export function blockRenderer(
  block: any,
  index: number,
  options: SectionRendererOptions
) {
  const Component = dynamic(() => {
    const handledBlock = block.__component.replaceAll("blocks.", "")

    return import("./" + handledBlock).catch((error) => {
      console.warn(
        "Error while resolving section ",
        block,
        error,
        "skipping..."
      )
      return () => null
    })
  })

  return <Component key={index} {...block} {...options} />
}
