"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BuildingTypePage() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/estimate/style")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-2xl py-8">
        <Progress value={66} className="mb-8" />
        <Card className="bg-white">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl">
              What kind of home are you renovating?
            </CardTitle>
            <p className="text-muted-foreground">
              This helps us estimate details about your building construction, such as if the walls are made of plaster & lath.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Building Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Building Age" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-5">0-5 years</SelectItem>
                  <SelectItem value="5-10">5-10 years</SelectItem>
                  <SelectItem value="10-20">10-20 years</SelectItem>
                  <SelectItem value="20+">20+ years</SelectItem>
                </SelectContent>
              </Select>
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
