// @ts-nocheck

/**
 * page controller
 */

import { factories } from "@strapi/strapi"

export default factories.createCoreController(
  "api::page.page",
  ({ strapi }) => ({
    async findByTypeAndSlug(ctx) {
      const { type: typeName, slug } = ctx.request.params

      const { populate, ...sanitized } = await this.sanitizeQuery(ctx)

      let { results, pagination } = await strapi
        .service("api::page.page")
        .find({
          ...sanitized,
          populate: {
            ...populate,
            type: {
              populate: "*"
            }
          }
        })

      results = results?.filter(({ type: [type] = [] }) => {
        return (
          type.__component === "blocks." + typeName &&
          (slug
            ? slug !== "null"
              ? type.slug === slug
              : !type.slug || type.slug.length < 1
            : true)
        )
      })

      return this.transformResponse(results, { pagination })
    }
  })
)
