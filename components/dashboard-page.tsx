"use client"
import { MainLayout } from "@/components/main-layout"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentSales } from "@/components/recent-sales"
import { LowStockAlert } from "@/components/low-stock-alert"
import { ExpiringMedicines } from "@/components/expiring-medicines"
import { PrescriptionQueue } from "@/components/prescription-queue"
import { WelcomeBanner } from "@/components/welcome-banner"

export function DashboardPage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-5">
        <WelcomeBanner />
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <DashboardStats />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <RecentSales />
          <PrescriptionQueue />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <LowStockAlert />
          <ExpiringMedicines />
        </div>
      </div>
    </MainLayout>
  )
}
