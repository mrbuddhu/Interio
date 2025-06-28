import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Anderson",
      role: "Principal Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2940&auto=format&fit=crop",
      bio: "With over 15 years of experience in interior design, Sarah leads our design team with passion and innovation."
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
      bio: "Michael ensures every project runs smoothly, on time, and within budget while maintaining the highest quality standards."
    },
    {
      name: "Emily Rodriguez",
      role: "Interior Architect",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2940&auto=format&fit=crop",
      bio: "Emily specializes in creating functional and beautiful spaces that perfectly align with our clients' lifestyles."
    }
  ]

  const values = [
    {
      title: "Quality Craftsmanship",
      description: "We partner with the finest artisans and use premium materials to ensure lasting beauty and durability."
    },
    {
      title: "Innovative Design",
      description: "Our designs blend contemporary trends with timeless elements to create spaces that remain relevant."
    },
    {
      title: "Client Focus",
      description: "Your vision and satisfaction are our top priorities. We listen, adapt, and deliver beyond expectations."
    },
    {
      title: "Sustainability",
      description: "We prioritize eco-friendly materials and practices to minimize environmental impact."
    }
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary py-24 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">
                About Interio
              </h1>
              <p className="mt-6 text-lg text-neutral-200">
                We're passionate about creating beautiful, functional spaces that inspire and delight.
                Our team brings together expertise in design, architecture, and project management.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url(/pattern.svg)] opacity-50" />
        </section>

        {/* Story Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">
                  Our Story
                </h2>
                <p className="mt-6 text-neutral-600">
                  Founded in 2010, Interio has grown from a small design studio to a full-service 
                  renovation company. We've completed over 500 projects, each unique and tailored 
                  to our clients' needs and dreams.
                </p>
                <p className="mt-4 text-neutral-600">
                  Our approach combines traditional craftsmanship with modern innovation, 
                  ensuring every project we undertake is completed to the highest standards 
                  of quality and design excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">
                Our Values
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                These core principles guide everything we do
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-xl text-neutral-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-neutral-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                The talented professionals behind our exceptional work
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto aspect-square w-48 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={192}
                      height={192}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-neutral-900">
                    {member.name}
                  </h3>
                  <p className="text-primary">
                    {member.role}
                  </p>
                  <p className="mt-2 text-neutral-600">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-display-sm font-serif text-white md:text-display-md">
                Ready to Transform Your Space?
              </h2>
              <p className="mt-4 text-lg text-neutral-200">
                Let's work together to bring your vision to life.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
                <Link href="/portfolio" className="btn bg-white/10 text-white hover:bg-white/20">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url(/pattern.svg)] opacity-50" />
        </section>
      </main>
      <Footer />
    </>
  )
}
