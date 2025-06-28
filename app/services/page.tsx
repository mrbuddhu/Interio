import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function ServicesPage() {
  const services = [
    {
      title: "Kitchen Renovation",
      description: "Transform your kitchen into a modern, functional space with custom cabinetry, premium countertops, and state-of-the-art appliances.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940&auto=format&fit=crop",
      features: ["Custom Cabinetry", "Premium Countertops", "Modern Appliances", "Lighting Design"]
    },
    {
      title: "Bathroom Remodeling",
      description: "Create your perfect bathroom oasis with luxury fixtures, custom tilework, and elegant finishes that blend style with functionality.",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2940&auto=format&fit=crop",
      features: ["Custom Vanities", "Luxury Fixtures", "Custom Tilework", "Modern Lighting"]
    },
    {
      title: "Living Room Design",
      description: "Revitalize your living space with custom built-ins, architectural details, and perfect lighting to create the ideal gathering place.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2940&auto=format&fit=crop",
      features: ["Custom Built-ins", "Lighting Design", "Flooring Options", "Wall Treatments"]
    },
    {
      title: "Bedroom Renovation",
      description: "Design your perfect retreat with custom storage solutions, lighting, and finishes that create a peaceful and organized space.",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2940&auto=format&fit=crop",
      features: ["Custom Closets", "Lighting Design", "Flooring Options", "Paint & Wallpaper"]
    },
    {
      title: "Home Office",
      description: "Create a productive workspace with custom desks, storage solutions, and technology integration for the modern work environment.",
      image: "https://images.unsplash.com/photo-1585634917202-6f03b28fc6d0?q=80&w=2940&auto=format&fit=crop",
      features: ["Built-in Desks", "Storage Solutions", "Lighting Design", "Tech Integration"]
    },
    {
      title: "Outdoor Living",
      description: "Extend your living space outdoors with custom decks, patios, and outdoor kitchens that blend seamlessly with your home.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2940&auto=format&fit=crop",
      features: ["Custom Decks", "Outdoor Kitchens", "Landscaping", "Lighting"]
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
                Our Services
              </h1>
              <p className="mt-6 text-lg text-neutral-200">
                Transform your space with our comprehensive renovation and design services. 
                From kitchens to outdoor spaces, we bring your vision to life.
              </p>
              <div className="mt-8">
                <Link href="/estimate" className="btn btn-secondary">
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url(/pattern.svg)] opacity-50" />
        </section>

        {/* Services Grid */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} className="group overflow-hidden rounded-lg bg-neutral-50">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-neutral-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-neutral-600">
                      {service.description}
                    </p>
                    <ul className="mt-4 grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-neutral-600">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link 
                        href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-primary hover:text-primary-dark"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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
                Get in touch with our team to discuss your renovation needs and receive a customized estimate.
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
