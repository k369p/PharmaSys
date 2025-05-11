import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExpiringMedicines() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expiring Medicines</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { name: "Amoxicillin 500mg", batch: "AMX2023-45", expiry: "Jun 15, 2025", daysLeft: 25 },
            { name: "Metformin 850mg", batch: "MET2022-78", expiry: "May 30, 2025", daysLeft: 10 },
            { name: "Atorvastatin 20mg", batch: "ATV2023-12", expiry: "Jul 05, 2025", daysLeft: 45 },
            { name: "Losartan 50mg", batch: "LOS2023-34", expiry: "Jun 22, 2025", daysLeft: 32 },
            { name: "Salbutamol Inhaler", batch: "SAL2023-56", expiry: "May 25, 2025", daysLeft: 5 },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">
                  Batch: {item.batch} | Expires: {item.expiry}
                </p>
              </div>
              <Badge variant={item.daysLeft < 15 ? "destructive" : "outline"}>{item.daysLeft} days left</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
