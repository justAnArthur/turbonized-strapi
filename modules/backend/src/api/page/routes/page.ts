/**
 * page router
 */

import { factories } from "@strapi/strapi"
import type { CoreApi } from "@strapi/types"

const defaultRouter = factories.createCoreRouter("api::page.page")

const customRouter = (
  innerRouter: CoreApi.Router.Router,
  extraRoutes: any[] = []
) => {
  let routes
  return {
    get prefix() {
      return innerRouter.prefix
    },
    get routes() {
      // @ts-ignore
      if (!routes) routes = innerRouter.routes.concat(extraRoutes)
      return routes
    }
  }
}

const myExtraRoutes = [
  {
    method: "GET",
    path: "/pages/findByTypeAndSlug/:type/:slug?",
    handler: "api::page.page.findByTypeAndSlug"
  }
]

module.exports = customRouter(defaultRouter, myExtraRoutes)
