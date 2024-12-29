import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Mon-Fri, 9am-6pm EST"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@interio.com", "support@interio.com"],
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Design Street", "New York, NY 10001"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday-Friday: 9am-6pm", "Saturday: 10am-4pm"],
    },
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
                Contact Us
              </h1>
              <p className="mt-6 text-lg text-neutral-200">
                Get in touch with our team to discuss your renovation project or schedule a consultation.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url(/pattern.svg)] opacity-50" />
        </section>

        {/* Contact Grid */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="rounded-lg bg-neutral-50 p-8">
                <h2 className="font-serif text-2xl text-neutral-900">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-neutral-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <form className="mt-8 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-neutral-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        className="mt-1 block w-full rounded-lg border border-neutral-200 px-4 py-2 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-neutral-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        className="mt-1 block w-full rounded-lg border border-neutral-200 px-4 py-2 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-lg border border-neutral-200 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 block w-full rounded-lg border border-neutral-200 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-lg border border-neutral-200 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary w-full"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="font-serif text-2xl text-neutral-900">
                  Contact Information
                </h2>
                <p className="mt-2 text-neutral-600">
                  Choose the most convenient way to reach us.
                </p>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-neutral-900">
                          {item.title}
                        </h3>
                        {item.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="mt-1 text-sm text-neutral-600"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="mt-12">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1577086664693-894d8405334a?q=80&w=2940&auto=format&fit=crop"
                      alt="Office Location"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
