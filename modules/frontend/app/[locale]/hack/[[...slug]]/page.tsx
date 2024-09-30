import type {SlugParams} from "@/app/[locale]/hack/[[...slug]]/layout";
import type {LocaleParams} from "@/app/[locale]/layout";
import {blogPrefix, fetchPageAndMapToMeta, fetchPagesByTypeAndSlug} from "@/services/strapi/pages";
import {unstable_setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import {blockRenderer} from "@/components/blocks";

function handleOptionalDynamicCatchAllSlug(slug?: string[]) {
    if (slug && slug?.length > 0 && slug[0] === blogPrefix)
        return ({type: 'page-blog', slug: slug.slice(1).join('/')})

    return ({slug: slug ? slug.join('/') : 'null'})
}

export async function generateMetadata({params}: SlugParams & LocaleParams) {
    const handledParams = {
        ...params,
        ...handleOptionalDynamicCatchAllSlug(params.slug)
    }

    return fetchPageAndMapToMeta(handledParams)
}

export async function generateStaticParams({params}: SlugParams & LocaleParams) {
    const handledParams = {
        ...params,
        ...handleOptionalDynamicCatchAllSlug(params.slug)
    }

    return fetchPagesByTypeAndSlug(handledParams, {fields: 'id', populate: {type: {populate: '*'}}})
        .then(response =>
            response.data?.reduce((params, {attributes: {type: [type]}}) => {
                if (!type.slug)
                    return params

                const pageType = type.__component.split('.')[1]

                switch (pageType) {
                    case 'page-standart':
                        params.push({slug: type.slug.split('/')})
                        break
                    case 'page-blog':
                        params.push({slug: [blogPrefix, ...type.slug.split('/')]})
                        break
                    default:
                        console.warn(`Unhandled page type in generateStaticParams: ${pageType}`)
                }

                return params
            }, [] as { slug: string[] }[]) || []
        )
}

export default async function Page({params}: SlugParams & LocaleParams) {
    unstable_setRequestLocale(params.locale)

    const handledParams = {
        ...params,
        ...handleOptionalDynamicCatchAllSlug(params.slug)
    }

    /*{
         ...params,
         slug: (!params.slug || params.slug.length < 1) ? 'null' : params.slug.join('/')
     }*/

    const response = await fetchPagesByTypeAndSlug(handledParams)

    if (response.data === null && response.error)
        throw new Error(response.error.message)

    const page = response.data?.[0]

    if (!page)
        return notFound()

    return page.attributes.blocks?.map((block: any, index: number) =>
        blockRenderer(block, index, {params})
    )
}