"use client"

import { useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Search, Filter } from "lucide-react"

export function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  return (
    <MainLayout>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Inventory Management</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add New Item
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Inventory Item</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right">
                    Name
                  </label>
                  <Input id="name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="category" className="text-right">
                    Category
                  </label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tablets">Tablets</SelectItem>
                      <SelectItem value="capsules">Capsules</SelectItem>
                      <SelectItem value="syrups">Syrups</SelectItem>
                      <SelectItem value="injectables">Injectables</SelectItem>
                      <SelectItem value="topical">Topical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="quantity" className="text-right">
                    Quantity
                  </label>
                  <Input id="quantity" type="number" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="price" className="text-right">
                    Price
                  </label>
                  <Input id="price" type="number" step="0.01" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="expiry" className="text-right">
                    Expiry Date
                  </label>
                  <Input id="expiry" type="date" className="col-span-3" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Save Item</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search inventory..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="tablets">Tablets</SelectItem>
                <SelectItem value="capsules">Capsules</SelectItem>
                <SelectItem value="syrups">Syrups</SelectItem>
                <SelectItem value="injectables">Injectables</SelectItem>
                <SelectItem value="topical">Topical</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "Paracetamol 500mg",
                  category: "Tablets",
                  stock: 150,
                  price: 5.99,
                  expiry: "2025-06-15",
                  status: "In Stock",
                },
                {
                  name: "Amoxicillin 250mg",
                  category: "Capsules",
                  stock: 80,
                  price: 12.5,
                  expiry: "2025-05-20",
                  status: "In Stock",
                },
                {
                  name: "Ibuprofen 400mg",
                  category: "Tablets",
                  stock: 120,
                  price: 7.25,
                  expiry: "2025-07-10",
                  status: "In Stock",
                },
                {
                  name: "Cetirizine 10mg",
                  category: "Tablets",
                  stock: 50,
                  price: 8.99,
                  expiry: "2025-08-05",
                  status: "Low Stock",
                },
                {
                  name: "Omeprazole 20mg",
                  category: "Capsules",
                  stock: 100,
                  price: 15.75,
                  expiry: "2025-09-12",
                  status: "In Stock",
                },
                {
                  name: "Salbutamol Inhaler",
                  category: "Inhalers",
                  stock: 25,
                  price: 22.5,
                  expiry: "2025-05-25",
                  status: "Low Stock",
                },
                {
                  name: "Metformin 850mg",
                  category: "Tablets",
                  stock: 200,
                  price: 9.25,
                  expiry: "2025-10-18",
                  status: "In Stock",
                },
                {
                  name: "Atorvastatin 20mg",
                  category: "Tablets",
                  stock: 180,
                  price: 18.99,
                  expiry: "2025-11-30",
                  status: "In Stock",
                },
                {
                  name: "Losartan 50mg",
                  category: "Tablets",
                  stock: 120,
                  price: 14.5,
                  expiry: "2025-12-15",
                  status: "In Stock",
                },
                {
                  name: "Cough Syrup",
                  category: "Syrups",
                  stock: 45,
                  price: 8.75,
                  expiry: "2025-06-22",
                  status: "In Stock",
                },
              ].map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>{item.expiry}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        item.status === "Low Stock" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
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
