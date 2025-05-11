import type { Metadata } from "next"
import { PrescriptionsPage } from "@/components/prescriptions-page"

export const metadata: Metadata = {
  title: "Prescriptions | Pharmacy Management System",
  description: "Manage patient prescriptions",
}

export default function Prescriptions() {
  return <PrescriptionsPage />
}
