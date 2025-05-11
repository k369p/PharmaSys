"use client"

import type React from "react"

import { useState } from "react"
import { PatientLayout } from "@/components/patient-layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, FileText } from "lucide-react"

export function RequestRefill() {
  const [selectedPrescriptions, setSelectedPrescriptions] = useState<string[]>([])
  const [deliveryMethod, setDeliveryMethod] = useState("pickup")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const prescriptions = [
    {
      id: "RX-2023-001",
      name: "Amoxicillin 500mg",
      doctor: "Dr. Sarah Johnson",
      prescribed: "May 1, 2023",
      refills: 2,
    },
    {
      id: "RX-2023-002",
      name: "Lisinopril 10mg",
      doctor: "Dr. Michael Chen",
      prescribed: "Apr 15, 2023",
      refills: 5,
    },
    {
      id: "RX-2023-003",
      name: "Metformin 850mg",
      doctor: "Dr. Michael Chen",
      prescribed: "Apr 10, 2023",
      refills: 3,
    },
    {
      id: "RX-2023-004",
      name: "Atorvastatin 20mg",
      doctor: "Dr. Sarah Johnson",
      prescribed: "Apr 5, 2023",
      refills: 5,
    },
    {
      id: "RX-2023-005",
      name: "Levothyroxine 50mcg",
      doctor: "Dr. Robert Williams",
      prescribed: "Mar 28, 2023",
      refills: 6,
    },
  ]

  const handlePrescriptionToggle = (id: string) => {
    setSelectedPrescriptions((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <PatientLayout>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-green-600">Refill Request Submitted</CardTitle>
            <CardDescription className="text-center">
              Your refill request has been successfully submitted.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="bg-green-50 p-6 rounded-md mb-6">
              <p className="text-green-800">
                We have received your request for {selectedPrescriptions.length} prescription refill(s). You will
                receive a notification when your prescription(s) are ready.
              </p>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Request ID: REQ-{Math.random().toString(36).substring(2, 10).toUpperCase()}
            </p>
            <Button asChild>
              <a href="/patient">Return to Dashboard</a>
            </Button>
          </CardContent>
        </Card>
      </PatientLayout>
    )
  }

  return (
    <PatientLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Request Prescription Refill</h1>

        <form onSubmit={handleSubmit}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Select Prescriptions</CardTitle>
              <CardDescription>Choose the prescriptions you need refilled</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {prescriptions.map((prescription) => (
                  <div key={prescription.id} className="flex items-start space-x-3 p-3 rounded-md border">
                    <Checkbox
                      id={prescription.id}
                      checked={selectedPrescriptions.includes(prescription.id)}
                      onCheckedChange={() => handlePrescriptionToggle(prescription.id)}
                    />
                    <div className="flex-1">
                      <Label htmlFor={prescription.id} className="font-medium cursor-pointer">
                        {prescription.name}
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
                        <p className="text-sm text-gray-500 flex items-center">
                          <FileText className="h-3 w-3 mr-1" /> {prescription.doctor}
                        </p>
                        <p className="text-sm text-gray-500 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" /> Prescribed: {prescription.prescribed}
                        </p>
                        <p className="text-sm text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> Refills left: {prescription.refills}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Delivery Method</CardTitle>
              <CardDescription>Choose how you want to receive your medications</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                <div className="flex items-start space-x-3 p-3 rounded-md border mb-3">
                  <RadioGroupItem value="pickup" id="pickup" />
                  <div className="flex-1">
                    <Label htmlFor="pickup" className="font-medium cursor-pointer">
                      Pickup at Pharmacy
                    </Label>
                    <p className="text-sm text-gray-500">
                      You'll receive a notification when your prescriptions are ready for pickup.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-md border">
                  <RadioGroupItem value="delivery" id="delivery" />
                  <div className="flex-1">
                    <Label htmlFor="delivery" className="font-medium cursor-pointer">
                      Home Delivery
                    </Label>
                    <p className="text-sm text-gray-500">
                      We'll deliver your prescriptions to your registered address.
                    </p>
                    {deliveryMethod === "delivery" && (
                      <div className="mt-3 space-y-3">
                        <div className="space-y-1">
                          <Label htmlFor="address">Delivery Address</Label>
                          <Textarea
                            id="address"
                            defaultValue="123 Main St, Apt 4B, Anytown, ST 12345"
                            className="resize-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="delivery-time">Preferred Delivery Time</Label>
                          <Select defaultValue="anytime">
                            <SelectTrigger id="delivery-time">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="anytime">Anytime</SelectItem>
                              <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                              <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
              <CardDescription>Any special instructions or notes for your refill</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea placeholder="Add any special instructions or notes here..." className="resize-none" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Review and Submit</CardTitle>
              <CardDescription>Please review your refill request before submitting</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium">Selected Prescriptions:</h3>
                  {selectedPrescriptions.length === 0 ? (
                    <p className="text-sm text-red-500">Please select at least one prescription</p>
                  ) : (
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {selectedPrescriptions.map((id) => (
                        <li key={id}>{prescriptions.find((p) => p.id === id)?.name}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div>
                  <h3 className="font-medium">Delivery Method:</h3>
                  <p className="text-sm text-gray-700">
                    {deliveryMethod === "pickup" ? "Pickup at Pharmacy" : "Home Delivery"}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={selectedPrescriptions.length === 0 || isSubmitting}>
                {isSubmitting ? "Processing..." : "Submit Refill Request"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </PatientLayout>
  )
}
