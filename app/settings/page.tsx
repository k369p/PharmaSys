import type { Metadata } from "next"
import { SettingsPage } from "@/components/settings-page"

export const metadata: Metadata = {
  title: "Settings | Pharmacy Management System",
  description: "Configure pharmacy system settings",
}

export default function Settings() {
  return <SettingsPage />
}
