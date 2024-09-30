import createNextIntlPlugin from "next-intl/plugin"

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/:locale/preview/:type",
          destination: "/:locale/preview/:type"
        },
        {
          source: "/:locale/:slug*",
          destination: "/:locale/hack/:slug*"
        }
      ]
    }
  }
}

const withNextIntl = createNextIntlPlugin("./lib/i18n/config.ts")(nextConfig)

export default withNextIntl
