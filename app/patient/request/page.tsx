import type { Metadata } from "next"
import { RequestRefill } from "@/components/request-refill"

export const metadata: Metadata = {
  title: "Request Refill | Patient Portal",
  description: "Request a prescription refill",
}

export default function RequestRefillPage() {
  return <RequestRefill />
}
