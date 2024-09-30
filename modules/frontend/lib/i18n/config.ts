import {getRequestConfig} from "next-intl/server";
import {fetchSingle} from "@/services/strapi";

export default getRequestConfig(async ({locale}) => ({
    messages: (await fetchSingle("api::localization.localization", {locale})
        .then((res) => res.data?.attributes.main)
        .catch(console.warn))
}))
