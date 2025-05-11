import type { Metadata } from "next"
import { PatientProfile } from "@/components/patient-profile"

export const metadata: Metadata = {
  title: "My Profile | Patient Portal",
  description: "View and update your profile information",
}

export default function ProfilePage() {
  return <PatientProfile />
}
