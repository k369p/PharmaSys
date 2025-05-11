"use client"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function SettingsPage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>

        <Tabs defaultValue="general">
          <div className="flex">
            <div className="w-64 pr-8 hidden md:block">
              <TabsList className="flex flex-col h-auto bg-transparent p-0 space-y-1">
                <TabsTrigger value="general" className="justify-start w-full">
                  General
                </TabsTrigger>
                <TabsTrigger value="users" className="justify-start w-full">
                  Users & Permissions
                </TabsTrigger>
                <TabsTrigger value="notifications" className="justify-start w-full">
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="backup" className="justify-start w-full">
                  Backup & Restore
                </TabsTrigger>
                <TabsTrigger value="taxes" className="justify-start w-full">
                  Taxes & Billing
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="flex-1">
              <TabsList className="md:hidden mb-4">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="backup">Backup</TabsTrigger>
                <TabsTrigger value="taxes">Taxes</TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>Pharmacy Information</CardTitle>
                    <CardDescription>Update your pharmacy details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pharmacy-name">Pharmacy Name</Label>
                        <Input id="pharmacy-name" defaultValue="PharmaSys Pharmacy" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="license-number">License Number</Label>
                        <Input id="license-number" defaultValue="PHR-12345-XYZ" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue="(555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="contact@pharmasys.com" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue="123 Pharmacy Street, Medville, MV 12345" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>System Preferences</CardTitle>
                    <CardDescription>Configure system behavior</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="low-stock-alerts">Low Stock Alerts</Label>
                        <p className="text-sm text-gray-500">Notify when inventory items are running low</p>
                      </div>
                      <Switch id="low-stock-alerts" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="expiry-alerts">Expiry Alerts</Label>
                        <p className="text-sm text-gray-500">Notify about products nearing expiration</p>
                      </div>
                      <Switch id="expiry-alerts" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="auto-backup">Automatic Backups</Label>
                        <p className="text-sm text-gray-500">Automatically backup system data</p>
                      </div>
                      <Switch id="auto-backup" defaultChecked />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select defaultValue="usd">
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                          <SelectItem value="cad">CAD ($)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date-format">Date Format</Label>
                      <Select defaultValue="mdy">
                        <SelectTrigger>
                          <SelectValue placeholder="Select date format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Preferences</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="users">
                <Card>
                  <CardHeader>
                    <CardTitle>Users & Permissions</CardTitle>
                    <CardDescription>Manage system users and their access levels</CardDescription>
                  </CardHeader>
                  <CardContent>{/* User management content */}</CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Configure system notifications</CardDescription>
                  </CardHeader>
                  <CardContent>{/* Notification settings content */}</CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="backup">
                <Card>
                  <CardHeader>
                    <CardTitle>Backup & Restore</CardTitle>
                    <CardDescription>Manage system data backups</CardDescription>
                  </CardHeader>
                  <CardContent>{/* Backup settings content */}</CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="taxes">
                <Card>
                  <CardHeader>
                    <CardTitle>Taxes & Billing</CardTitle>
                    <CardDescription>Configure tax rates and billing settings</CardDescription>
                  </CardHeader>
                  <CardContent>{/* Tax settings content */}</CardContent>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </MainLayout>
  )
}
