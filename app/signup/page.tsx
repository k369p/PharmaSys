import { AuthLayout } from "@/components/auth-layout"
import { SignupForm } from "@/components/signup-form"

export default function SignupPage() {
  return (
    <AuthLayout title="Create an account" subtitle="Sign up to get started with PharmaSys">
      <SignupForm />
    </AuthLayout>
  )
}
