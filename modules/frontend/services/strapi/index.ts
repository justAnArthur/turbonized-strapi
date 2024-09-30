import qs from "qs"
import {draftMode} from "next/headers";
import type {UID} from "@/services/strapi/uids";
import {APICollectionResponse, APIResponse, APIUrlParams} from "@/services/strapi/types";

export type Parameters<T extends keyof UID> =
    | []
    | [APIUrlParams<UID[T]>]
    | [APIUrlParams<UID[T]>, Partial<RequestInit>]

export async function fetchStrapi<T extends keyof UID>(path: string, ...args: Parameters<T>) {
    const token = process.env.BACKEND_API_SECRET
    const basePath = process.env.BACKEND_URL

    let [params, options] = args || [{}, {}]

    try {
        params = {
            publicationState: draftMode().isEnabled ? 'preview' : 'live',
            ...params
        }
    } catch (_) {
    }

    options = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        ...options
    }

    const queryString = qs.stringify(params, {encode: false})
    const url = `${basePath}/api${path}${queryString?.length > 0 ? `?${queryString}` : ""}`

    const response = await fetch(url, options)

    return await response.json()
}

// ###

export async function fetchSingle<T extends keyof UID>(
    uid: T,
    ...args: Parameters<T>
) {
    const path = `/${uid.split(".")[1]}`

    return (await fetchStrapi(path, ...args)) as APIResponse<T>
}


function makePlural(word: string) {
    if (word.endsWith('y'))
        return word.slice(0, -1) + 'ies'
    else if (word.endsWith('s') || word.endsWith('x') || word.endsWith('ch') || word.endsWith('sh'))
        return word + 'es'
    else
        return word + 's'
}

export async function fetchMany<T extends keyof UID>(
    uid: T | string,
    ...args: Parameters<T>
) {
    const [_uid, id] = uid.split('/')

    const path = `/${makePlural(_uid.split(".")[1])}${id ? `/${id}` : ''}`

    return (await fetchStrapi(path, ...args)) as APICollectionResponse<T>
}


export async function fetchOneById<T extends keyof UID>(
    uid: T,
    id: number | string,
    ...args: Parameters<T>
) {

    return (await fetchMany(String(uid) + '/' + id, ...args)) as APIResponse<T>
}


export async function fetchOneBySlug<T extends keyof UID>(
    uid: T,
    slug?: string | null,
    ...args: Parameters<T>
) {
    args[0] = {
        filters: {
            // @ts-ignore
            slug: (slug && slug?.length > 0) ? slug : {$null: true},
            ...args[0]?.['filters']
        },
        ...args[0]
    }

    return fetchMany(uid, ...args)
}