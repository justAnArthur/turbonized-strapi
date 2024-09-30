export const locales = ['sk', 'en'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale = locales[0]
