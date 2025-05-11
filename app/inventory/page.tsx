import type { Metadata } from "next"
import { InventoryPage } from "@/components/inventory-page"

export const metadata: Metadata = {
  title: "Inventory Management | Pharmacy Management System",
  description: "Manage your pharmacy inventory",
}

export default function Inventory() {
  return <InventoryPage />
}
