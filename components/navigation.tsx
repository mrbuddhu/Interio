"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-[100] bg-white/80 backdrop-blur-sm pointer-events-auto animate-slide-down">
      <nav className="container flex h-14 items-center justify-between">
        {/* Logo only, no text */}
        <Link href="/" className="flex items-center animate-fade-in-scale">
          <Image src="/interio.png" alt="Interio Logo" width={40} height={40} className="rounded" />
        </Link>
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item, index) => (
            <div
              key={item.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <Link
                href={item.href}
                className="text-base font-medium text-neutral-700 hover:text-emerald-600 transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
            <Link
              href="/estimate"
              className="ml-2 px-4 py-2 rounded bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors"
            >
              Get your estimate
            </Link>
          </div>
        </div>
        {/* Mobile navigation toggle */}
        <button
          type="button"
          className="rounded-lg p-2.5 text-neutral-700 md:hidden animate-fade-in-scale"
          style={{ animationDelay: '0.4s' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="container md:hidden animate-fade-in-up">
          <div className="divide-y divide-neutral-100 rounded-lg bg-white py-2 shadow-lg">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-neutral-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-4 flex flex-col gap-2">
              <Link
                href="/estimate"
                className="btn btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                Get your estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
