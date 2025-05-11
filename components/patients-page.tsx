"use client"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Search } from "lucide-react"

export function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <MainLayout>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Patient Management</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add New Patient
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Patient</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right">
                    Full Name
                  </label>
                  <Input id="name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="dob" className="text-right">
                    Date of Birth
                  </label>
                  <Input id="dob" type="date" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="gender" className="text-right">
                    Gender
                  </label>
                  <Input id="gender" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="phone" className="text-right">
                    Phone
                  </label>
                  <Input id="phone" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="email" className="text-right">
                    Email
                  </label>
                  <Input id="email" type="email" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="address" className="text-right">
                    Address
                  </label>
                  <Input id="address" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="allergies" className="text-right">
                    Allergies
                  </label>
                  <Input id="allergies" className="col-span-3" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Save Patient</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search patients..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "John Smith",
                  age: 45,
                  gender: "Male",
                  phone: "(555) 123-4567",
                  email: "john@example.com",
                  lastVisit: "2023-05-10",
                },
                {
                  name: "Mary Johnson",
                  age: 32,
                  gender: "Female",
                  phone: "(555) 234-5678",
                  email: "mary@example.com",
                  lastVisit: "2023-05-08",
                },
                {
                  name: "Robert Brown",
                  age: 58,
                  gender: "Male",
                  phone: "(555) 345-6789",
                  email: "robert@example.com",
                  lastVisit: "2023-05-05",
                },
                {
                  name: "Emily Davis",
                  age: 27,
                  gender: "Female",
                  phone: "(555) 456-7890",
                  email: "emily@example.com",
                  lastVisit: "2023-05-03",
                },
                {
                  name: "Michael Wilson",
                  age: 41,
                  gender: "Male",
                  phone: "(555) 567-8901",
                  email: "michael@example.com",
                  lastVisit: "2023-04-28",
                },
                {
                  name: "Sarah Taylor",
                  age: 36,
                  gender: "Female",
                  phone: "(555) 678-9012",
                  email: "sarah@example.com",
                  lastVisit: "2023-04-25",
                },
                {
                  name: "David Moore",
                  age: 52,
                  gender: "Male",
                  phone: "(555) 789-0123",
                  email: "david@example.com",
                  lastVisit: "2023-04-20",
                },
                {
                  name: "Jennifer Lee",
                  age: 29,
                  gender: "Female",
                  phone: "(555) 890-1234",
                  email: "jennifer@example.com",
                  lastVisit: "2023-04-18",
                },
                {
                  name: "James Martin",
                  age: 63,
                  gender: "Male",
                  phone: "(555) 901-2345",
                  email: "james@example.com",
                  lastVisit: "2023-04-15",
                },
                {
                  name: "Lisa Rodriguez",
                  age: 38,
                  gender: "Female",
                  phone: "(555) 012-3456",
                  email: "lisa@example.com",
                  lastVisit: "2023-04-12",
                },
              ].map((patient, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{patient.name}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.gender}</TableCell>
                  <TableCell>{patient.phone}</TableCell>
                  <TableCell>{patient.email}</TableCell>
                  <TableCell>{patient.lastVisit}</TableCell>
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
      </div>
    </MainLayout>
  )
}
