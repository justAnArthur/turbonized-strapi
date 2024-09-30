export default ({env}) => ({
  "seo": {
    enabled: true,
  },
  "schemas-to-ts": {
    enabled: true,
    config: {
      acceptedNodeEnvs: ["development"],
      verboseLogs: true,
      alwaysAddEnumSuffix: true,
      alwaysAddComponentSuffix: true,
    }
  },
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: 'api::page.page',
          draft: {
            url: env("FRONTEND_PREVIEW_DRAFT_URL", "http://localhost:3000/{locale}/preview/draft"),
            query: {
              secret: env('FRONTEND_PREVIEW_SECRET', "3141592"),
            }
          },
          published: {
            url: env("FRONTEND_PREVIEW_PUBLISHED_URL", "http://localhost:3000/{locale}/preview/published"),
            query: {
              secret: env('FRONTEND_PREVIEW_SECRET', "3141592"),
            }
          }
        }
      ]
    }
  },
  'extend-preview-button': {
    enabled: true,
    resolve: './src/plugins/extend-preview-button',
  },
})
