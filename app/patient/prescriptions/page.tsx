import type { Metadata } from "next"
import { PatientPrescriptions } from "@/components/patient-prescriptions"

export const metadata: Metadata = {
  title: "My Prescriptions | Patient Portal",
  description: "View and manage your prescriptions",
}

export default function PrescriptionsPage() {
  return <PatientPrescriptions />
}
