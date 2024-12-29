import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"

// This would typically come from a CMS or database
const projectData = {
  "modern-kitchen-renovation": {
    title: "Modern Kitchen Renovation",
    category: "Kitchen",
    location: "Manhattan, NY",
    date: "Completed January 2024",
    duration: "8 weeks",
    description: "A complete transformation of a dated kitchen into a modern culinary haven. This project focused on maximizing space efficiency while incorporating high-end finishes and smart appliances.",
    challenge: "The main challenge was working within the constraints of a New York City apartment while creating an open and functional space. The existing layout had poor flow and outdated infrastructure.",
    solution: "We reimagined the layout to create better workflow, installed custom cabinetry to maximize storage, and integrated state-of-the-art appliances. The new design features a large island that serves as both a prep area and casual dining space.",
    features: [
      "Custom white oak cabinetry",
      "Quartz countertops",
      "Smart appliances",
      "LED lighting system",
      "Hidden storage solutions",
      "Breakfast bar",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2940&auto=format&fit=crop",
        alt: "Kitchen Overview"
      },
      {
        url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2940&auto=format&fit=crop",
        alt: "Kitchen Island"
      },
      {
        url: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2940&auto=format&fit=crop",
        alt: "Custom Cabinetry"
      },
      {
        url: "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&w=2940&auto=format&fit=crop",
        alt: "Appliances"
      }
    ],
    testimonial: {
      quote: "Interio transformed our outdated kitchen into a stunning modern space that's both beautiful and functional. The attention to detail and quality of work exceeded our expectations.",
      author: "Sarah & Michael Thompson",
      location: "Manhattan, NY"
    }
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug as keyof typeof projectData]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary py-24 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <Link
                href="/portfolio"
                className="mb-8 inline-flex items-center text-neutral-200 hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
              <h1 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-neutral-200">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  {project.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {project.date}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url(/pattern.svg)] opacity-50" />
        </section>

        {/* Main Image */}
        <section className="relative -mt-20">
          <div className="container">
            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={project.images[0].url}
                alt={project.images[0].alt}
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl text-neutral-900">
                  Project Overview
                </h2>
                <p className="mt-4 text-neutral-600">
                  {project.description}
                </p>

                <h3 className="mt-8 font-serif text-xl text-neutral-900">
                  The Challenge
                </h3>
                <p className="mt-4 text-neutral-600">
                  {project.challenge}
                </p>

                <h3 className="mt-8 font-serif text-xl text-neutral-900">
                  Our Solution
                </h3>
                <p className="mt-4 text-neutral-600">
                  {project.solution}
                </p>

                {/* Image Gallery */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={image.url}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="rounded-lg bg-neutral-50 p-6">
                  <h3 className="font-serif text-xl text-neutral-900">
                    Project Details
                  </h3>
                  <dl className="mt-4 space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-neutral-900">Duration</dt>
                      <dd className="text-neutral-600">{project.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-neutral-900">Location</dt>
                      <dd className="text-neutral-600">{project.location}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-neutral-900">Features</dt>
                      <dd className="mt-2 space-y-2">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-neutral-600">{feature}</span>
                          </div>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Testimonial */}
                <div className="mt-6 rounded-lg bg-primary p-6 text-white">
                  <h3 className="font-serif text-xl">Client Testimonial</h3>
                  <blockquote className="mt-4">
                    <p className="text-neutral-200">"{project.testimonial.quote}"</p>
                    <footer className="mt-4">
                      <div className="font-medium">{project.testimonial.author}</div>
                      <div className="text-sm text-neutral-300">
                        {project.testimonial.location}
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-display-sm font-serif text-neutral-900 md:text-display-md">
                Ready to Transform Your Space?
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Let's create something amazing together.
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
