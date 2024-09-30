import type {Metadata} from "next";
import type {APICollectionResponse} from "@/services/strapi/types";
import {fetchStrapi} from "@/services/strapi";
import {getMetaFromSeo} from "@/services/strapi/seo";
import {pagePopulateParams} from "@/services/strapi/pages/populate";

export const blogPrefix = 'blogs'

export async function fetchPagesByTypeAndSlug(params: {
    type?: string,
    slug?: string | null,
    locale: string
}, options: Object = {}) {
    const link = `/pages/findByTypeAndSlug/${params.type || 'page-standart'}${params.slug ? '/' + params.slug : ''}`

    // @ts-ignore
    return (await fetchStrapi(link, {
        populate: pagePopulateParams,
        locale: params.locale,
        ...options
    })) as APICollectionResponse<'api::page.page'>
}

export async function fetchPageAndMapToMeta(arg: Parameters<typeof fetchPagesByTypeAndSlug>[0]) {
    const response = await fetchPagesByTypeAndSlug(arg, {
        fields: ['seo'],
        populate: {
            seo: {
                populate: '*'
            }
        }
    })

    if (response.data?.[0]?.attributes.seo)
        return getMetaFromSeo(response.data[0].attributes.seo)
    else
        console.warn(`Unprovided seo details for ${arg?.type || 'page-standart'} ${arg?.slug}`)

    return {} as Metadata
}