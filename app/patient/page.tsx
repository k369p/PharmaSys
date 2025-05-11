import type { Metadata } from "next"
import { PatientDashboard } from "@/components/patient-dashboard"

export const metadata: Metadata = {
  title: "Patient Dashboard | Pharmacy Management System",
  description: "View your prescriptions and medication information",
}

export default function PatientPage() {
  return <PatientDashboard />
}
