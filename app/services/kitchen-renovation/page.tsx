import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function KitchenRenovationPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary py-24 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">
                Kitchen Renovation
              </h1>
              <p className="mt-6 text-lg text-neutral-200">
                Transform your kitchen into a modern, functional space with custom cabinetry, premium countertops, and state-of-the-art appliances.
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

        {/* Main Content */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Content */}
              <div>
                <h2 className="text-display-sm font-serif text-neutral-900">
                  Create Your Dream Kitchen
                </h2>
                <p className="mt-6 text-lg text-neutral-600">
                  Our kitchen renovation service combines expert craftsmanship with innovative design to create a space that's both beautiful and highly functional. We work with you to understand your lifestyle, cooking habits, and design preferences to deliver a kitchen that exceeds your expectations.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900">What We Offer</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Custom cabinetry designed to maximize storage and functionality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Premium countertops in granite, quartz, or marble</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">State-of-the-art appliances and smart home integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Professional lighting design for ambiance and task lighting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Custom backsplashes and tile work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Flooring options including hardwood, tile, and luxury vinyl</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900">Our Process</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">1</div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">Consultation & Design</h4>
                        <p className="text-neutral-600">We meet to discuss your vision, budget, and timeline</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">2</div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">Detailed Planning</h4>
                        <p className="text-neutral-600">Create detailed plans and 3D renderings of your new kitchen</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">3</div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">Professional Installation</h4>
                        <p className="text-neutral-600">Expert craftsmen bring your design to life with precision</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">4</div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">Final Inspection</h4>
                        <p className="text-neutral-600">Quality check and walkthrough to ensure perfection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="space-y-6">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940&auto=format&fit=crop"
                    alt="Modern kitchen with custom cabinetry"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940&auto=format&fit=crop"
                      alt="Kitchen detail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940&auto=format&fit=crop"
                      alt="Kitchen detail"
                      fill
                      className="object-cover"
                    />
                  </div>
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
                Ready to Transform Your Kitchen?
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Get in touch with our team to discuss your kitchen renovation project and receive a customized estimate.
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
      <Footer />
    </>
  )
} 