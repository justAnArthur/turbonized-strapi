import type {Metadata} from "next"
import type {SeoComponent} from "@turbonized-strapi/backend"

export function getMetaFromSeo(seo: SeoComponent) {
    const meta: Metadata = {
        title: seo.metaTitle,
        description: seo.metaDescription,
        openGraph: {
            title: seo.metaTitle,
            description: seo.metaDescription
        }
    }

    if (seo.metaImage?.data) {
        // @ts-ignore
        meta.openGraph.images = [
            {
                url: process.env.NEXT_PUBLIC_FRONTEND_BACKEND_URL + seo.metaImage.data.attributes.url,
                width: seo.metaImage.data.attributes.width,
                height: seo.metaImage.data.attributes.height,
                alt: seo.metaImage.data.attributes.alternativeText
            }
        ]
    }

    if (seo.metaSocial) {
        seo.metaSocial.forEach((social) => {
            if (social.socialNetwork === 'Facebook') {
                meta.openGraph = {
                    ...meta.openGraph,
                    title: social.title,
                    description: social.description
                }
            } else {
                // @ts-ignore
                if (social.socialNetwork === 'X') {
                    meta.twitter = {
                        title: social.title,
                        description: social.description
                    }
                }
            }
        })
    }

    return meta
}
