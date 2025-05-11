"use client"

import { useAuth } from "@/context/auth-context"
import { PatientLayout } from "@/components/patient-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, FileText, Pill, CreditCard, AlertCircle } from "lucide-react"
import Link from "next/link"

export function PatientDashboard() {
  const { user } = useAuth()

  return (
    <PatientLayout>
      {/* Welcome Card */}
      <Card className="mb-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-2">Welcome, {user?.name}!</h1>
          <p className="text-gray-300 mb-4">
            Here you can manage your prescriptions, request refills, and view your medication history.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/patient/request">Request Refill</Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-gray-700">
              <Link href="/patient/prescriptions">View Prescriptions</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Active Prescriptions */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Active Prescriptions
            </CardTitle>
            <CardDescription>Your current prescription medications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "RX-2023-001",
                  name: "Amoxicillin 500mg",
                  instructions: "Take 1 capsule 3 times daily",
                  refills: 2,
                  status: "Ready for Pickup",
                },
                {
                  id: "RX-2023-002",
                  name: "Lisinopril 10mg",
                  instructions: "Take 1 tablet daily",
                  refills: 5,
                  status: "Active",
                },
                {
                  id: "RX-2023-003",
                  name: "Metformin 850mg",
                  instructions: "Take 1 tablet twice daily with meals",
                  refills: 3,
                  status: "Active",
                },
              ].map((prescription) => (
                <div key={prescription.id} className="border rounded-md p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{prescription.name}</h3>
                      <p className="text-sm text-gray-500">{prescription.instructions}</p>
                      <p className="text-sm text-gray-500">Refills remaining: {prescription.refills}</p>
                    </div>
                    <Badge
                      className={
                        prescription.status === "Ready for Pickup"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                      }
                    >
                      {prescription.status}
                    </Badge>
                  </div>
                  {prescription.status === "Ready for Pickup" ? (
                    <Button size="sm" className="mt-2 w-full">
                      Schedule Pickup
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" className="mt-2 w-full">
                      Request Refill
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button asChild variant="ghost" size="sm">
                <Link href="/patient/prescriptions">View All Prescriptions</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Refills */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Upcoming Refills
            </CardTitle>
            <CardDescription>Medications due for refill soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "RX-2023-004",
                  name: "Atorvastatin 20mg",
                  daysLeft: 5,
                  lastFilled: "Apr 15, 2023",
                },
                {
                  id: "RX-2023-005",
                  name: "Levothyroxine 50mcg",
                  daysLeft: 12,
                  lastFilled: "Apr 8, 2023",
                },
              ].map((medication) => (
                <div key={medication.id} className="border rounded-md p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{medication.name}</h3>
                      <p className="text-sm text-gray-500">Last filled: {medication.lastFilled}</p>
                    </div>
                    <Badge
                      className={
                        medication.daysLeft < 7
                          ? "bg-red-100 text-red-800 hover:bg-red-100"
                          : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                      }
                    >
                      {medication.daysLeft} days left
                    </Badge>
                  </div>
                  <Button size="sm" className="mt-2 w-full">
                    Request Refill Now
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Medication History */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Pill className="h-5 w-5 mr-2" />
              Recent Medication History
            </CardTitle>
            <CardDescription>Your recently filled medications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  id: "RX-2023-006",
                  name: "Amoxicillin 500mg",
                  date: "May 2, 2023",
                  quantity: 30,
                },
                {
                  id: "RX-2023-007",
                  name: "Lisinopril 10mg",
                  date: "Apr 28, 2023",
                  quantity: 30,
                },
                {
                  id: "RX-2023-008",
                  name: "Metformin 850mg",
                  date: "Apr 25, 2023",
                  quantity: 60,
                },
                {
                  id: "RX-2023-009",
                  name: "Atorvastatin 20mg",
                  date: "Apr 15, 2023",
                  quantity: 30,
                },
              ].map((medication) => (
                <div key={medication.id} className="flex justify-between items-center border-b pb-2 last:border-0">
                  <div>
                    <h3 className="font-medium">{medication.name}</h3>
                    <p className="text-sm text-gray-500">Qty: {medication.quantity}</p>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {medication.date}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button asChild variant="ghost" size="sm">
                <Link href="/patient/medications">View Full History</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Payment Information */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Payment Information
            </CardTitle>
            <CardDescription>Recent transactions and payment methods</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="border rounded-md p-3 mb-4">
                <h3 className="font-medium">Payment Methods</h3>
                <div className="flex items-center mt-2 text-sm">
                  <div className="w-8 h-5 bg-blue-500 rounded mr-2"></div>
                  <span>Visa ending in 4242</span>
                  <Badge className="ml-2">Default</Badge>
                </div>
                <div className="flex items-center mt-2 text-sm">
                  <div className="w-8 h-5 bg-red-500 rounded mr-2"></div>
                  <span>Insurance - HealthPlus</span>
                </div>
                <Button size="sm" variant="outline" className="mt-2">
                  Manage Payment Methods
                </Button>
              </div>

              <h3 className="font-medium">Recent Transactions</h3>
              {[
                {
                  id: "TRX-2023-001",
                  date: "May 2, 2023",
                  amount: 15.99,
                  description: "Prescription Copay",
                },
                {
                  id: "TRX-2023-002",
                  date: "Apr 28, 2023",
                  amount: 5.0,
                  description: "Prescription Copay",
                },
                {
                  id: "TRX-2023-003",
                  date: "Apr 25, 2023",
                  amount: 10.5,
                  description: "Over-the-counter items",
                },
              ].map((transaction) => (
                <div key={transaction.id} className="flex justify-between items-center border-b pb-2 last:border-0">
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                  <div className="font-medium">${transaction.amount.toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button asChild variant="ghost" size="sm">
                <Link href="/patient/payments">View All Transactions</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Health Reminders */}
      <Card className="mt-6">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            Health Reminders
          </CardTitle>
          <CardDescription>Important information about your health</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-md">
              <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-blue-800">Annual Health Checkup</h3>
                <p className="text-sm text-blue-700">
                  It's been 10 months since your last health checkup. Consider scheduling your annual checkup in the
                  next 2 months.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-md">
              <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-yellow-800">Medication Interaction Alert</h3>
                <p className="text-sm text-yellow-700">
                  Be cautious when taking Lisinopril and over-the-counter NSAIDs like ibuprofen together. Consult your
                  doctor if you need pain relief.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </PatientLayout>
  )
}
