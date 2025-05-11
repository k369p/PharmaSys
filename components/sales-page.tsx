"use client"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search } from "lucide-react"

export function SalesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <MainLayout>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Sales & Billing</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Sale
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>New Sale</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select patient (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="john">John Smith</SelectItem>
                          <SelectItem value="mary">Mary Johnson</SelectItem>
                          <SelectItem value="robert">Robert Brown</SelectItem>
                          <SelectItem value="emily">Emily Davis</SelectItem>
                          <SelectItem value="michael">Michael Wilson</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline">Walk-in</Button>
                    </div>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input type="search" placeholder="Search products..." className="pl-9" />
                    </div>
                    <div className="border rounded-md p-4 h-64 overflow-y-auto">
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { name: "Paracetamol 500mg", price: 5.99 },
                          { name: "Amoxicillin 250mg", price: 12.5 },
                          { name: "Ibuprofen 400mg", price: 7.25 },
                          { name: "Cetirizine 10mg", price: 8.99 },
                          { name: "Omeprazole 20mg", price: 15.75 },
                          { name: "Salbutamol Inhaler", price: 22.5 },
                          { name: "Metformin 850mg", price: 9.25 },
                          { name: "Atorvastatin 20mg", price: 18.99 },
                          { name: "Losartan 50mg", price: 14.5 },
                          { name: "Cough Syrup", price: 8.75 },
                        ].map((product, index) => (
                          <Card key={index} className="cursor-pointer hover:bg-gray-50">
                            <CardContent className="p-3">
                              <div className="font-medium">{product.name}</div>
                              <div className="text-sm text-gray-500">${product.price.toFixed(2)}</div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Current Sale</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Paracetamol 500mg x 2</span>
                            <span>$11.98</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Cough Syrup x 1</span>
                            <span>$8.75</span>
                          </div>
                          <div className="border-t my-2"></div>
                          <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>$20.73</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Tax (10%)</span>
                            <span>$2.07</span>
                          </div>
                          <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>$22.80</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Payment Method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cash">Cash</SelectItem>
                              <SelectItem value="card">Credit/Debit Card</SelectItem>
                              <SelectItem value="insurance">Insurance</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button className="w-full">Complete Sale</Button>
                          <Button variant="outline" className="w-full">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="sales">
          <TabsList>
            <TabsTrigger value="sales">Sales History</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
          </TabsList>
          <TabsContent value="sales" className="mt-4">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search sales..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Input type="date" className="w-[180px]" />
                <span>to</span>
                <Input type="date" className="w-[180px]" />
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice #</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      invoice: "INV-2023-001",
                      date: "2023-05-10",
                      customer: "John Smith",
                      items: 3,
                      total: 45.5,
                      payment: "Cash",
                    },
                    {
                      invoice: "INV-2023-002",
                      date: "2023-05-10",
                      customer: "Walk-in Customer",
                      items: 1,
                      total: 22.5,
                      payment: "Card",
                    },
                    {
                      invoice: "INV-2023-003",
                      date: "2023-05-09",
                      customer: "Mary Johnson",
                      items: 4,
                      total: 124.0,
                      payment: "Insurance",
                    },
                    {
                      invoice: "INV-2023-004",
                      date: "2023-05-09",
                      customer: "Walk-in Customer",
                      items: 2,
                      total: 18.25,
                      payment: "Cash",
                    },
                    {
                      invoice: "INV-2023-005",
                      date: "2023-05-08",
                      customer: "Robert Brown",
                      items: 1,
                      total: 67.25,
                      payment: "Card",
                    },
                    {
                      invoice: "INV-2023-006",
                      date: "2023-05-08",
                      customer: "Emily Davis",
                      items: 3,
                      total: 32.75,
                      payment: "Cash",
                    },
                    {
                      invoice: "INV-2023-007",
                      date: "2023-05-07",
                      customer: "Walk-in Customer",
                      items: 2,
                      total: 15.5,
                      payment: "Cash",
                    },
                    {
                      invoice: "INV-2023-008",
                      date: "2023-05-07",
                      customer: "Michael Wilson",
                      items: 5,
                      total: 89.99,
                      payment: "Insurance",
                    },
                    {
                      invoice: "INV-2023-009",
                      date: "2023-05-06",
                      customer: "Walk-in Customer",
                      items: 1,
                      total: 8.75,
                      payment: "Cash",
                    },
                    {
                      invoice: "INV-2023-010",
                      date: "2023-05-06",
                      customer: "Sarah Taylor",
                      items: 2,
                      total: 45.25,
                      payment: "Card",
                    },
                  ].map((sale, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{sale.invoice}</TableCell>
                      <TableCell>{sale.date}</TableCell>
                      <TableCell>{sale.customer}</TableCell>
                      <TableCell>{sale.items}</TableCell>
                      <TableCell>${sale.total.toFixed(2)}</TableCell>
                      <TableCell>{sale.payment}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                        <Button variant="ghost" size="sm">
                          Print
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="invoices" className="mt-4">
            {/* Similar table structure with invoice data */}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}
