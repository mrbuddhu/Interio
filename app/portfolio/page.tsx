"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function PortfolioPage() {
  const categories = ["All", "Kitchen", "Bathroom", "Living Room", "Bedroom", "Office", "Outdoor"]
  const [selected, setSelected] = useState("All")

  const projects = [
    {
      title: "Modern Kitchen Renovation",
      category: "Kitchen",
      location: "Manhattan, NY",
      description: "Complete kitchen transformation with custom cabinetry and high-end appliances.",
      image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2940&auto=format&fit=crop",
      slug: "modern-kitchen-renovation"
    },
    {
      title: "Luxury Master Bath",
      category: "Bathroom",
      location: "Brooklyn, NY",
      description: "Spa-like master bathroom with custom tilework and freestanding tub.",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2940&auto=format&fit=crop",
      slug: "luxury-master-bath"
    },
    {
      title: "Contemporary Living Room",
      category: "Living Room",
      location: "Queens, NY",
      description: "Open-concept living room with custom built-ins and modern finishes.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2940&auto=format&fit=crop",
      slug: "contemporary-living-room"
    },
    {
      title: "Minimalist Home Office",
      category: "Office",
      location: "Staten Island, NY",
      description: "Clean and functional home office with built-in storage solutions.",
      image: "https://images.unsplash.com/photo-1585634917202-6f03b28fc6d0?q=80&w=2940&auto=format&fit=crop",
      slug: "minimalist-home-office"
    },
    {
      title: "Serene Master Bedroom",
      category: "Bedroom",
      location: "Long Island, NY",
      description: "Calming master bedroom with custom closets and ambient lighting.",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2940&auto=format&fit=crop",
      slug: "serene-master-bedroom"
    },
    {
      title: "Modern Outdoor Kitchen",
      category: "Outdoor",
      location: "Hamptons, NY",
      description: "Fully equipped outdoor kitchen and entertainment area.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2940&auto=format&fit=crop",
      slug: "modern-outdoor-kitchen"
    }
  ]

  const filtered = selected === "All" ? projects : projects.filter(p => p.category === selected)

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary py-24 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">
                Our Portfolio
              </h1>
              <p className="mt-6 text-lg text-neutral-200">
                Explore our collection of beautifully designed and expertly crafted renovation projects.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url(/pattern.svg)] opacity-50" />
        </section>

        {/* Filter Section */}
        <section className="border-b border-neutral-200 bg-white">
          <div className="container">
            <div className="flex overflow-x-auto py-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`shrink-0 rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  } ${index > 0 ? "ml-2" : ""}`}
                  onClick={() => setSelected(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, index) => (
                <Link
                  key={index}
                  href={`/portfolio/${project.slug}`}
                  className="group block overflow-hidden rounded-lg bg-neutral-50"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-sm font-medium text-primary">
                      {project.category}
                    </div>
                    <h3 className="font-serif text-xl text-neutral-900">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      {project.location}
                    </p>
                    <p className="mt-2 text-neutral-600">
                      {project.description}
                    </p>
                    <div className="mt-4 text-primary group-hover:underline">
                      View Project →
                    </div>
                  </div>
                </Link>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full text-center text-neutral-500 py-12">No projects found for this category.</div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-display-sm font-serif text-neutral-900 md:text-display-md">
                Ready to Start Your Project?
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Let's work together to create your dream space.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/estimate" className="btn btn-primary">
                  Get Free Estimate
                </Link>
                <Link href="/contact" className="btn bg-neutral-200 text-neutral-900 hover:bg-neutral-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
