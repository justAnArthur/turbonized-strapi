import type { LocaleParams } from "@/app/[locale]/layout"

export default function NotFound({ params }: LocaleParams) {
  return <main className="section h-96 grid place-content-center">
    not found
  </main>
}
