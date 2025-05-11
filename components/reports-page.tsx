"use client"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"

export function ReportsPage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <div className="flex items-center gap-2">
            <Input type="date" className="w-[180px]" />
            <span>to</span>
            <Input type="date" className="w-[180px]" />
            <Button>Generate</Button>
          </div>
        </div>

        <Tabs defaultValue="sales">
          <TabsList>
            <TabsTrigger value="sales">Sales Reports</TabsTrigger>
            <TabsTrigger value="inventory">Inventory Reports</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescription Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="sales" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                  <CardDescription>Monthly sales performance</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <BarChart className="h-64 w-64 text-gray-300" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Top Selling Products</CardTitle>
                  <CardDescription>Most popular items by quantity</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <PieChart className="h-64 w-64 text-gray-300" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trends</CardTitle>
                  <CardDescription>Daily revenue for the period</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <LineChart className="h-64 w-64 text-gray-300" />
                </CardContent>
              </Card>
              <Card className="md:col-span-2 lg:col-span-3">
                <CardHeader>
                  <CardTitle>Sales by Category</CardTitle>
                  <CardDescription>Revenue breakdown by product category</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <BarChart className="h-64 w-full text-gray-300" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="inventory" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <Card>
                <CardHeader>
                  <CardTitle>Stock Levels</CardTitle>
                  <CardDescription>Current inventory status</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <BarChart className="h-64 w-64 text-gray-300" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Expiring Products</CardTitle>
                  <CardDescription>Items expiring in next 90 days</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <PieChart className="h-64 w-64 text-gray-300" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Turnover</CardTitle>
                  <CardDescription>Product movement analysis</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <LineChart className="h-64 w-64 text-gray-300" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="prescriptions" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <Card>
                <CardHeader>
                  <CardTitle>Prescription Volume</CardTitle>
                  <CardDescription>Daily prescription count</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <LineChart className="h-64 w-64 text-gray-300" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Prescriptions by Doctor</CardTitle>
                  <CardDescription>Top referring physicians</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <PieChart className="h-64 w-64 text-gray-300" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Processing Time</CardTitle>
                  <CardDescription>Average time to fulfill prescriptions</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <BarChart className="h-64 w-64 text-gray-300" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}
