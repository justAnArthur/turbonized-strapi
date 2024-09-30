import { redirect } from "@/lib/i18n/navigation"
import { draftMode } from "next/headers"

export function DraftModeWidget() {
  async function handleDisable() {
    "use server"

    draftMode().disable()
    redirect("/")
  }

  if (draftMode().isEnabled)
    return (
      <form action={handleDisable} className="absolute left-0 right-0">
        Draft Mode is Enabled
        <button type="submit">Disable</button>
      </form>
    )
}
