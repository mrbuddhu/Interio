"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-2xl py-16">
        <Card className="bg-white text-center">
          <CardHeader className="space-y-4">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-emerald-500" />
            </div>
            <CardTitle className="text-3xl">
              Thank You for Your Interest!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">
                We've received your project details and will review them carefully.
              </p>
              <p className="text-muted-foreground">
                One of our renovation experts will contact you within 24-48 hours with a detailed estimate.
              </p>
            </div>
            <div className="space-y-4 pt-4">
              <p className="font-medium">What happens next?</p>
              <ol className="space-y-2 text-left list-decimal list-inside text-muted-foreground">
                <li>Our team reviews your project requirements</li>
                <li>We prepare a detailed estimate based on your needs</li>
                <li>Schedule a free consultation to discuss your vision</li>
                <li>Begin planning your dream renovation</li>
              </ol>
            </div>
            <div className="space-y-4 pt-4">
              <Link href="/portfolio">
                <Button variant="outline" className="mr-4">
                  View Our Portfolio
                </Button>
              </Link>
              <Link href="/">
                <Button>
                  Return Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
