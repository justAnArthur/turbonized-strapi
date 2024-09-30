import { type Locale, locales } from "@/lib/i18n/locales"
import { Link } from "@/lib/i18n/navigation"

export function Header({ locale }: { locale: Locale }) {
  const anotherLocale = locales.find((_locale) => _locale !== locale)

  return (
    <header className="section grid gap-3 py-4">
      <Link href="/">
        <h3>Turbonized Strapi</h3>
      </Link>

      <Link href="/" locale={anotherLocale} className="col-start-4 ml-auto">
        {anotherLocale}
      </Link>
    </header>
  )
}
