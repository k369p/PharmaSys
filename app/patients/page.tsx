import type { Metadata } from "next"
import { PatientsPage } from "@/components/patients-page"

export const metadata: Metadata = {
  title: "Patients | Pharmacy Management System",
  description: "Manage patient records",
}

export default function Patients() {
  return <PatientsPage />
}
