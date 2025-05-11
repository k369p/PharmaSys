import type { Metadata } from "next"
import { SalesPage } from "@/components/sales-page"

export const metadata: Metadata = {
  title: "Sales | Pharmacy Management System",
  description: "Manage pharmacy sales and billing",
}

export default function Sales() {
  return <SalesPage />
}
