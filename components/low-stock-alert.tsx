import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function LowStockAlert() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Low Stock Alert</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { name: "Paracetamol 500mg", quantity: 15, threshold: 20 },
            { name: "Amoxicillin 250mg", quantity: 8, threshold: 25 },
            { name: "Ibuprofen 400mg", quantity: 12, threshold: 30 },
            { name: "Cetirizine 10mg", quantity: 5, threshold: 15 },
            { name: "Omeprazole 20mg", quantity: 10, threshold: 20 },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">
                  {item.quantity} units left (min: {item.threshold})
                </p>
              </div>
              <Badge variant={item.quantity < 10 ? "destructive" : "outline"}>
                {item.quantity < 10 ? "Critical" : "Low"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
