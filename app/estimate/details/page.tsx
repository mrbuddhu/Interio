"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DetailsPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    router.push("/estimate/confirmation")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-2xl py-8">
        <Progress value={100} className="mb-8" />
        <Card className="bg-white">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl">
              Tell us about your project
            </CardTitle>
            <p className="text-muted-foreground">
              Help us understand your renovation needs better so we can provide an accurate estimate.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="25-50k">$25,000 - $50,000</SelectItem>
                  <SelectItem value="50-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100-200k">$100,000 - $200,000</SelectItem>
                  <SelectItem value="200k+">$200,000+</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Desired Timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-3">1-3 months</SelectItem>
                  <SelectItem value="3-6">3-6 months</SelectItem>
                  <SelectItem value="6-12">6-12 months</SelectItem>
                  <SelectItem value="12+">12+ months</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                name="description"
                placeholder="Tell us more about your project (optional)"
                value={formData.description}
                onChange={handleChange}
                className="h-32"
              />
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                Get Your Estimate
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
