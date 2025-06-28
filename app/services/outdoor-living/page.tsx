import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function OutdoorLivingPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary py-24 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">
                Outdoor Living
              </h1>
              <p className="mt-6 text-lg text-neutral-200">
                Extend your living space outdoors with custom decks, patios, and outdoor kitchens.
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
                  Your Outdoor Sanctuary
                </h2>
                <p className="mt-6 text-lg text-neutral-600">
                  Transform your backyard into an extension of your home with beautiful outdoor living spaces. Our outdoor design service creates functional, beautiful areas for entertaining, relaxation, and enjoying nature.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900">What We Offer</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Custom decks and patios with premium materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Outdoor kitchens and dining areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Professional landscaping and hardscaping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Outdoor lighting and electrical systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Fire pits and outdoor fireplaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Water features and pools</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900">Outdoor Features</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">1</div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">Entertainment Areas</h4>
                        <p className="text-neutral-600">Perfect spaces for hosting friends and family</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">2</div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">Relaxation Zones</h4>
                        <p className="text-neutral-600">Peaceful areas for unwinding and meditation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">3</div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">Dining Spaces</h4>
                        <p className="text-neutral-600">Al fresco dining with outdoor kitchens</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">4</div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">Recreation Areas</h4>
                        <p className="text-neutral-600">Spaces for games, sports, and activities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="space-y-6">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2940&auto=format&fit=crop"
                    alt="Beautiful outdoor living space with deck and landscaping"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2940&auto=format&fit=crop"
                      alt="Outdoor detail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2940&auto=format&fit=crop"
                      alt="Outdoor detail"
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
                Ready to Create Your Outdoor Oasis?
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Get in touch with our team to discuss your outdoor living project and receive a customized estimate.
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