"use client"

import { useState } from "react"
import { PatientLayout } from "@/components/patient-layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useAuth } from "@/context/auth-context"

export function PatientProfile() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setIsEditing(false)
    }, 1000)
  }

  return (
    <PatientLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">My Profile</h1>

        <Tabs defaultValue="personal">
          <TabsList className="mb-6">
            <TabsTrigger value="personal">Personal Information</TabsTrigger>
            <TabsTrigger value="medical">Medical Information</TabsTrigger>
            <TabsTrigger value="insurance">Insurance</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Manage your personal details</CardDescription>
                  </div>
                  <Button variant={isEditing ? "outline" : "default"} onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "Cancel" : "Edit"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        defaultValue={user?.name || "John Doe"}
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input
                        id="dob"
                        type="date"
                        defaultValue="1985-05-15"
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue={user?.email || "john.doe@example.com"}
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        defaultValue="(555) 123-4567"
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        defaultValue="123 Main St, Apt 4B, Anytown, ST 12345"
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50 resize-none" : "resize-none"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      {isEditing ? (
                        <Select defaultValue="male">
                          <SelectTrigger id="gender">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <Input id="gender" defaultValue="Male" readOnly className="bg-gray-50" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergency-contact">Emergency Contact</Label>
                      <Input
                        id="emergency-contact"
                        defaultValue="Jane Doe - (555) 987-6543"
                        readOnly={!isEditing}
                        className={!isEditing ? "bg-gray-50" : ""}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              {isEditing && (
                <CardFooter>
                  <Button onClick={handleSave} disabled={isSaving} className="ml-auto">
                    {isSaving ? "Saving..." : "Save Changes"}
                  </Button>
                </CardFooter>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="medical">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Medical Information</CardTitle>
                    <CardDescription>Your health information and history</CardDescription>
                  </div>
                  <Button variant="default">Edit</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Allergies</h3>
                    <div className="p-3 rounded-md border">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Penicillin</li>
                        <li>Peanuts</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Medical Conditions</h3>
                    <div className="p-3 rounded-md border">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Hypertension</li>
                        <li>Type 2 Diabetes</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Primary Care Physician</h3>
                    <div className="p-3 rounded-md border">
                      <p>Dr. Michael Chen</p>
                      <p className="text-sm text-gray-500">Cityview Medical Group</p>
                      <p className="text-sm text-gray-500">(555) 234-5678</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insurance">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Insurance Information</CardTitle>
                    <CardDescription>Your health insurance details</CardDescription>
                  </div>
                  <Button variant="default">Edit</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-3 rounded-md border">
                    <h3 className="font-medium">Primary Insurance</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <div>
                        <p className="text-sm text-gray-500">Provider</p>
                        <p>HealthPlus Insurance</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Policy Number</p>
                        <p>HP12345678</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Group Number</p>
                        <p>GRP987654</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Policyholder</p>
                        <p>Self</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">Add Secondary Insurance</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle>Communication Preferences</CardTitle>
                <CardDescription>Manage how we contact you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-gray-500">Receive prescription and refill notifications via email</p>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-notifications">SMS Notifications</Label>
                      <p className="text-sm text-gray-500">
                        Receive prescription and refill notifications via text message
                      </p>
                    </div>
                    <Switch id="sms-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketing-emails">Marketing Emails</Label>
                      <p className="text-sm text-gray-500">Receive promotional offers and health tips</p>
                    </div>
                    <Switch id="marketing-emails" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="refill-reminders">Refill Reminders</Label>
                      <p className="text-sm text-gray-500">Get reminders when your prescriptions are due for refill</p>
                    </div>
                    <Switch id="refill-reminders" defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PatientLayout>
  )
}
