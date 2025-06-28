"use client"

import React from "react"
import Image from "next/image"

export default function ClientLayout({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) {
  return (
    <body className={className}>
      <div className="relative min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </div>
    </body>
  )
}
