import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PrescriptionQueue() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Prescription Queue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { id: "RX-2023-001", patient: "John Smith", status: "Ready", time: "10:15 AM" },
            { id: "RX-2023-002", patient: "Mary Johnson", status: "Processing", time: "10:30 AM" },
            { id: "RX-2023-003", patient: "Robert Brown", status: "Waiting", time: "10:45 AM" },
            { id: "RX-2023-004", patient: "Emily Davis", status: "Ready", time: "11:00 AM" },
            { id: "RX-2023-005", patient: "Michael Wilson", status: "Waiting", time: "11:15 AM" },
          ].map((prescription, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{prescription.id}</p>
                <p className="text-xs text-gray-500">
                  {prescription.patient} | {prescription.time}
                </p>
              </div>
              <Badge
                variant={
                  prescription.status === "Ready"
                    ? "success"
                    : prescription.status === "Processing"
                      ? "default"
                      : "secondary"
                }
              >
                {prescription.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
