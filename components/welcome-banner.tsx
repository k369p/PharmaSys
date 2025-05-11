"use client"

import { useAuth } from "@/context/auth-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState } from "react"

export function WelcomeBanner() {
  const { user } = useAuth()
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mb-5">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome back, {user?.name}!</h2>
            <p className="text-gray-300 mb-4">
              You're logged in as {user?.role}. Here's what's happening in your pharmacy today.
            </p>
            <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
              View Today's Tasks
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-gray-300 hover:text-white"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
