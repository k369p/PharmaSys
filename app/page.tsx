import type { Metadata } from "next"
import { DashboardPage } from "@/components/dashboard-page"

export const metadata: Metadata = {
  title: "Pharmacy Management System",
  description: "A comprehensive system for managing pharmacy operations",
}

export default function Home() {
  return <DashboardPage />
}
