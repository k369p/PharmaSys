import type { ReactNode } from "react"

interface AuthLayoutProps {
  children: ReactNode
  title: string
  subtitle: string
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Branding */}
      <div className="bg-gray-900 text-white md:w-1/3 p-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-2">PharmaSys</h1>
          <p className="text-gray-400 mb-6">Pharmacy Management System</p>
          <p className="text-sm text-gray-300">
            A comprehensive solution for managing pharmacy operations, inventory, prescriptions, and sales.
          </p>
        </div>
      </div>

      {/* Right side - Auth form */}
      <div className="bg-white md:w-2/3 p-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-500 mb-8">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
