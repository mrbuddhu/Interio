"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EstimatePage() {
  const router = useRouter()
  const [postalCode, setPostalCode] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/estimate/building-type")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-2xl py-8">
        <Progress value={33} className="mb-8" />
        <Card className="bg-white">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl">
              Hi there, let's start with the basics. Where are you renovating?
            </CardTitle>
            <p className="text-muted-foreground">
              With Reno, gain access to local renovation expertise. Reserve today for our chance to get accepted.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                Continue
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
