"use client"

import { useState } from "react"
import { PatientLayout } from "@/components/patient-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Clock, FileText } from "lucide-react"

export function PatientPrescriptions() {
  const [searchTerm, setSearchTerm] = useState("")

  const activePrescriptions = [
    {
      id: "RX-2023-001",
      name: "Amoxicillin 500mg",
      doctor: "Dr. Sarah Johnson",
      prescribed: "May 1, 2023",
      expires: "May 1, 2024",
      instructions: "Take 1 capsule 3 times daily with food",
      refills: 2,
      status: "Ready for Pickup",
    },
    {
      id: "RX-2023-002",
      name: "Lisinopril 10mg",
      doctor: "Dr. Michael Chen",
      prescribed: "Apr 15, 2023",
      expires: "Apr 15, 2024",
      instructions: "Take 1 tablet daily in the morning",
      refills: 5,
      status: "Active",
    },
    {
      id: "RX-2023-003",
      name: "Metformin 850mg",
      doctor: "Dr. Michael Chen",
      prescribed: "Apr 10, 2023",
      expires: "Apr 10, 2024",
      instructions: "Take 1 tablet twice daily with meals",
      refills: 3,
      status: "Active",
    },
    {
      id: "RX-2023-004",
      name: "Atorvastatin 20mg",
      doctor: "Dr. Sarah Johnson",
      prescribed: "Apr 5, 2023",
      expires: "Apr 5, 2024",
      instructions: "Take 1 tablet daily in the evening",
      refills: 5,
      status: "Active",
    },
    {
      id: "RX-2023-005",
      name: "Levothyroxine 50mcg",
      doctor: "Dr. Robert Williams",
      prescribed: "Mar 28, 2023",
      expires: "Mar 28, 2024",
      instructions: "Take 1 tablet daily on an empty stomach",
      refills: 6,
      status: "Active",
    },
  ]

  const pastPrescriptions = [
    {
      id: "RX-2022-045",
      name: "Amoxicillin 500mg",
      doctor: "Dr. Sarah Johnson",
      prescribed: "Dec 15, 2022",
      expires: "Dec 15, 2023",
      instructions: "Take 1 capsule 3 times daily with food",
      refills: 0,
      status: "Expired",
    },
    {
      id: "RX-2022-038",
      name: "Prednisone 10mg",
      doctor: "Dr. Michael Chen",
      prescribed: "Nov 10, 2022",
      expires: "Nov 10, 2023",
      instructions: "Take as directed on the tapering schedule",
      refills: 0,
      status: "Completed",
    },
    {
      id: "RX-2022-032",
      name: "Azithromycin 250mg",
      doctor: "Dr. Robert Williams",
      prescribed: "Oct 5, 2022",
      expires: "Oct 5, 2023",
      instructions: "Take 2 tablets on day 1, then 1 tablet daily for 4 days",
      refills: 0,
      status: "Completed",
    },
  ]

  const filteredActive = activePrescriptions.filter(
    (rx) =>
      rx.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rx.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredPast = pastPrescriptions.filter(
    (rx) =>
      rx.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rx.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <PatientLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">My Prescriptions</h1>
          <Button>Request New Prescription</Button>
        </div>

        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search prescriptions..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs defaultValue="active">
          <TabsList>
            <TabsTrigger value="active">Active Prescriptions</TabsTrigger>
            <TabsTrigger value="past">Past Prescriptions</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="mt-4">
            {filteredActive.length === 0 ? (
              <Card>
                <CardContent className="py-10 text-center">
                  <p className="text-gray-500">No active prescriptions found.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredActive.map((prescription) => (
                  <Card key={prescription.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-medium">{prescription.name}</h3>
                              <p className="text-sm text-gray-500">Prescription #{prescription.id}</p>
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
                          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div>
                              <p className="text-sm text-gray-500 flex items-center">
                                <FileText className="h-4 w-4 mr-1" /> Prescribed by {prescription.doctor}
                              </p>
                              <p className="text-sm text-gray-500 flex items-center">
                                <Calendar className="h-4 w-4 mr-1" /> Prescribed: {prescription.prescribed}
                              </p>
                              <p className="text-sm text-gray-500 flex items-center">
                                <Clock className="h-4 w-4 mr-1" /> Expires: {prescription.expires}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Instructions:</p>
                              <p className="text-sm text-gray-700">{prescription.instructions}</p>
                              <p className="text-sm text-gray-500 mt-1">Refills remaining: {prescription.refills}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-col gap-2 mt-3 md:mt-0">
                          {prescription.status === "Ready for Pickup" ? (
                            <Button className="flex-1">Schedule Pickup</Button>
                          ) : (
                            <Button className="flex-1">Request Refill</Button>
                          )}
                          <Button variant="outline" className="flex-1">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          <TabsContent value="past" className="mt-4">
            {filteredPast.length === 0 ? (
              <Card>
                <CardContent className="py-10 text-center">
                  <p className="text-gray-500">No past prescriptions found.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredPast.map((prescription) => (
                  <Card key={prescription.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-medium">{prescription.name}</h3>
                              <p className="text-sm text-gray-500">Prescription #{prescription.id}</p>
                            </div>
                            <Badge
                              className={
                                prescription.status === "Expired"
                                  ? "bg-red-100 text-red-800 hover:bg-red-100"
                                  : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                              }
                            >
                              {prescription.status}
                            </Badge>
                          </div>
                          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div>
                              <p className="text-sm text-gray-500 flex items-center">
                                <FileText className="h-4 w-4 mr-1" /> Prescribed by {prescription.doctor}
                              </p>
                              <p className="text-sm text-gray-500 flex items-center">
                                <Calendar className="h-4 w-4 mr-1" /> Prescribed: {prescription.prescribed}
                              </p>
                              <p className="text-sm text-gray-500 flex items-center">
                                <Clock className="h-4 w-4 mr-1" /> Expired: {prescription.expires}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Instructions:</p>
                              <p className="text-sm text-gray-700">{prescription.instructions}</p>
                              <p className="text-sm text-gray-500 mt-1">Refills remaining: {prescription.refills}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-col gap-2 mt-3 md:mt-0">
                          <Button variant="outline" className="flex-1">
                            View Details
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Request Renewal
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </PatientLayout>
  )
}
