"use client"

import { useRouter } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"

export default function StylePage() {
  const router = useRouter()
  const styles = [
    {
      name: "Two-Tone Traditional",
      description: "White and gray cabinets. Bronze hardware. Charming octagon dot flooring.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Blue Contemporary",
      description: "Navy, black, and white palette. Trendy 4x4 subway tile.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Warm Traditional",
      description: "Traditional cabinet door style. Bronze hardware. 2x8 tile backsplash.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940&auto=format&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-4xl py-8">
        <Progress value={100} className="mb-8" />
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-2">
              Choose a style to start customizing.
            </h1>
            <p className="text-muted-foreground">
              This acts as a base for your palette. You can still access our entire design system at any point.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {styles.map((style) => (
              <Card key={style.name} className="overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{style.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {style.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => router.push("/estimate/details")}
                  >
                    Select
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
