import { Locale } from "@/lib/i18n/locales"
import { blogPrefix, fetchPagesByTypeAndSlug } from "@/services/strapi/pages"
import { Link } from "@/lib/i18n/navigation"

export async function Footer({ locale }: { locale: Locale }) {
  const blogs = await fetchPagesByTypeAndSlug({ type: 'page-blog', locale }, { populate: { type: { populate: '*' } } })

  console.log({ blogs })

  return (
    <footer className="section grid grid-cols-4 gap-3 py-4">
      <h3>Turbonized Strapi</h3>

      <div className="grid gap-[inherit]">
        <h4>blogs</h4>

        {blogs.data?.map((blog, index) => (
          <Link key={index} href={`/${blogPrefix}/${blog.attributes.type[0].slug}`}>
            {blog.attributes.type[0].slug}
          </Link>
        ))}
      </div>
    </footer>
  )
}
