import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function BathroomRemodelingPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary py-24 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">
                Bathroom Remodeling
              </h1>
              <p className="mt-6 text-lg text-neutral-200">
                Create your perfect bathroom oasis with luxury fixtures, custom tilework, and elegant finishes.
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
                  Your Personal Spa Retreat
                </h2>
                <p className="mt-6 text-lg text-neutral-600">
                  Transform your bathroom into a luxurious retreat that combines style, comfort, and functionality. Our bathroom remodeling service creates spaces that not only look stunning but also provide the perfect environment for relaxation and rejuvenation.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900">What We Offer</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Custom vanities with premium materials and finishes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Luxury fixtures from top brands</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Custom tilework and mosaic designs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Modern lighting solutions for ambiance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Walk-in showers and freestanding tubs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">✓</span>
                      <span className="text-neutral-600">Heated floors and towel warmers</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900">Design Options</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">1</div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">Modern Minimalist</h4>
                        <p className="text-neutral-600">Clean lines, neutral colors, and sleek fixtures</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">2</div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">Traditional Elegance</h4>
                        <p className="text-neutral-600">Classic designs with timeless appeal</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">3</div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">Spa-Inspired</h4>
                        <p className="text-neutral-600">Luxurious features for ultimate relaxation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">4</div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">Contemporary</h4>
                        <p className="text-neutral-600">Bold colors and innovative design elements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="space-y-6">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2940&auto=format&fit=crop"
                    alt="Luxury bathroom with modern fixtures"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2940&auto=format&fit=crop"
                      alt="Bathroom detail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2940&auto=format&fit=crop"
                      alt="Bathroom detail"
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
                Ready to Create Your Dream Bathroom?
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Get in touch with our team to discuss your bathroom remodeling project and receive a customized estimate.
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