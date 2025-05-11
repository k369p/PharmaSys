import type { Metadata } from "next"
import { ReportsPage } from "@/components/reports-page"

export const metadata: Metadata = {
  title: "Reports | Pharmacy Management System",
  description: "View pharmacy reports and analytics",
}

export default function Reports() {
  return <ReportsPage />
}
