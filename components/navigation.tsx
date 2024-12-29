"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container flex h-20 items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-semibold text-primary">
          Interio
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link href="/estimate" className="btn btn-primary">
            Get Estimate
          </Link>
        </div>

        {/* Mobile navigation */}
        <button
          type="button"
          className="rounded-lg p-2.5 text-neutral-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="container md:hidden">
          <div className="divide-y divide-neutral-100 rounded-lg bg-white py-2 shadow-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-4">
              <Link
                href="/estimate"
                className="btn btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                Get Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
