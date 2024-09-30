import type { ReactNode } from "react"
import type { Locale } from "@/lib/i18n/locales"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { DraftModeWidget } from "@/components/layout/draft-mode"

import "./globals.css"

// todo implement strapi hooks to revalidate data
export const revalidate = 3600

export type LocaleParams = {
  params: {
    locale: Locale;
  }
}

export default function RootLayout({ children, params }: Readonly<{ children: ReactNode }> & LocaleParams) {
  return (
    <html lang={params.locale}>
    <body className="antialiased">

    <Header locale={params.locale}/>
    {children}
    <Footer locale={params.locale}/>

    <DraftModeWidget/>

    </body>
    </html>
  )
}
