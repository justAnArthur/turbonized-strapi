import { type Locale, locales } from "@/lib/i18n/locales"
import { Link } from "@/lib/i18n/navigation"

export function Header({ locale }: { locale: Locale }) {
  const anotherLocale = locales.find((_locale) => _locale !== locale)

  return (
    <header className="section">
      <Link href="/" locale={anotherLocale}>
        {anotherLocale}
      </Link>
    </header>
  )
}
