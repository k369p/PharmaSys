import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { name: "John Doe", email: "john@example.com", amount: "$45.50", initials: "JD" },
            { name: "Sarah Smith", email: "sarah@example.com", amount: "$124.00", initials: "SS" },
            { name: "Michael Brown", email: "michael@example.com", amount: "$67.25", initials: "MB" },
            { name: "Emma Wilson", email: "emma@example.com", amount: "$32.75", initials: "EW" },
            { name: "David Lee", email: "david@example.com", amount: "$89.99", initials: "DL" },
          ].map((sale, index) => (
            <div key={index} className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>{sale.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">{sale.name}</p>
                <p className="text-xs text-gray-500">{sale.email}</p>
              </div>
              <div className="text-sm font-medium">{sale.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
