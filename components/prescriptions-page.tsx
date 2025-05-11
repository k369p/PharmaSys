"use client"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, Filter } from "lucide-react"

export function PrescriptionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  return (
    <MainLayout>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Prescription Management</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Prescription
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Create New Prescription</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="patient" className="text-right">
                    Patient
                  </label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select patient" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Smith</SelectItem>
                      <SelectItem value="mary">Mary Johnson</SelectItem>
                      <SelectItem value="robert">Robert Brown</SelectItem>
                      <SelectItem value="emily">Emily Davis</SelectItem>
                      <SelectItem value="michael">Michael Wilson</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="doctor" className="text-right">
                    Doctor
                  </label>
                  <Input id="doctor" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="date" className="text-right">
                    Date
                  </label>
                  <Input id="date" type="date" className="col-span-3" />
                </div>
                <div className="col-span-4">
                  <h3 className="font-medium mb-2">Medications</h3>
                  <div className="space-y-2">
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-5">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select medication" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="paracetamol">Paracetamol 500mg</SelectItem>
                            <SelectItem value="amoxicillin">Amoxicillin 250mg</SelectItem>
                            <SelectItem value="ibuprofen">Ibuprofen 400mg</SelectItem>
                            <SelectItem value="cetirizine">Cetirizine 10mg</SelectItem>
                            <SelectItem value="omeprazole">Omeprazole 20mg</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="col-span-2">
                        <Input type="number" placeholder="Qty" />
                      </div>
                      <div className="col-span-4">
                        <Input placeholder="Instructions" />
                      </div>
                      <div className="col-span-1">
                        <Button variant="ghost" size="icon">
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-5">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select medication" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="paracetamol">Paracetamol 500mg</SelectItem>
                            <SelectItem value="amoxicillin">Amoxicillin 250mg</SelectItem>
                            <SelectItem value="ibuprofen">Ibuprofen 400mg</SelectItem>
                            <SelectItem value="cetirizine">Cetirizine 10mg</SelectItem>
                            <SelectItem value="omeprazole">Omeprazole 20mg</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="col-span-2">
                        <Input type="number" placeholder="Qty" />
                      </div>
                      <div className="col-span-4">
                        <Input placeholder="Instructions" />
                      </div>
                      <div className="col-span-1">
                        <Button variant="ghost" size="icon">
                          -
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="notes" className="text-right">
                    Notes
                  </label>
                  <Input id="notes" className="col-span-3" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Save Prescription</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="waiting">Waiting</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="ready">Ready</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search prescriptions..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="waiting">Waiting</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="ready">Ready</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Patient</TableHead>
                    <TableHead>Doctor</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "RX-2023-001",
                      patient: "John Smith",
                      doctor: "Dr. Williams",
                      date: "2023-05-10",
                      items: 3,
                      status: "Ready",
                    },
                    {
                      id: "RX-2023-002",
                      patient: "Mary Johnson",
                      doctor: "Dr. Garcia",
                      date: "2023-05-10",
                      items: 2,
                      status: "Processing",
                    },
                    {
                      id: "RX-2023-003",
                      patient: "Robert Brown",
                      doctor: "Dr. Martinez",
                      date: "2023-05-10",
                      items: 1,
                      status: "Waiting",
                    },
                    {
                      id: "RX-2023-004",
                      patient: "Emily Davis",
                      doctor: "Dr. Anderson",
                      date: "2023-05-09",
                      items: 4,
                      status: "Ready",
                    },
                    {
                      id: "RX-2023-005",
                      patient: "Michael Wilson",
                      doctor: "Dr. Thomas",
                      date: "2023-05-09",
                      items: 2,
                      status: "Waiting",
                    },
                    {
                      id: "RX-2023-006",
                      patient: "Sarah Taylor",
                      doctor: "Dr. Jackson",
                      date: "2023-05-08",
                      items: 3,
                      status: "Completed",
                    },
                    {
                      id: "RX-2023-007",
                      patient: "David Moore",
                      doctor: "Dr. White",
                      date: "2023-05-08",
                      items: 1,
                      status: "Completed",
                    },
                    {
                      id: "RX-2023-008",
                      patient: "Jennifer Lee",
                      doctor: "Dr. Harris",
                      date: "2023-05-07",
                      items: 2,
                      status: "Completed",
                    },
                    {
                      id: "RX-2023-009",
                      patient: "James Martin",
                      doctor: "Dr. Clark",
                      date: "2023-05-07",
                      items: 5,
                      status: "Completed",
                    },
                    {
                      id: "RX-2023-010",
                      patient: "Lisa Rodriguez",
                      doctor: "Dr. Lewis",
                      date: "2023-05-06",
                      items: 3,
                      status: "Completed",
                    },
                  ].map((prescription, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{prescription.id}</TableCell>
                      <TableCell>{prescription.patient}</TableCell>
                      <TableCell>{prescription.doctor}</TableCell>
                      <TableCell>{prescription.date}</TableCell>
                      <TableCell>{prescription.items}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            prescription.status === "Ready"
                              ? "bg-green-100 text-green-800"
                              : prescription.status === "Processing"
                                ? "bg-blue-100 text-blue-800"
                                : prescription.status === "Waiting"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {prescription.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="waiting" className="mt-4">
            {/* Similar table structure with filtered data */}
          </TabsContent>
          <TabsContent value="processing" className="mt-4">
            {/* Similar table structure with filtered data */}
          </TabsContent>
          <TabsContent value="ready" className="mt-4">
            {/* Similar table structure with filtered data */}
          </TabsContent>
          <TabsContent value="completed" className="mt-4">
            {/* Similar table structure with filtered data */}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}
