"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { contactInfo } from "@/lib/contact-info"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const contactInfoData = [
    {
      icon: Phone,
      title: "Phone",
      details: [contactInfo.phone, contactInfo.phoneHours],
    },
    {
      icon: Mail,
      title: "Email",
      details: [contactInfo.email, contactInfo.supportEmail],
    },
    {
      icon: MapPin,
      title: "Office",
      details: [contactInfo.address.street, contactInfo.address.city],
    },
    {
      icon: Clock,
      title: "Hours",
      details: [contactInfo.hours.weekdays, contactInfo.hours.saturday],
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData)
      
      setSubmitStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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
                Ready to start your renovation project or have questions? Reach out to our team and we'll get back to you as soon as possible.
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
                
                {submitStatus === "success" && (
                  <div className="mt-6 rounded-lg bg-green-50 p-4 border border-green-200">
                    <p className="text-green-800">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-6 rounded-lg bg-red-50 p-4 border border-red-200">
                    <p className="text-red-800">
                      Sorry, there was an error sending your message. Please try again or contact us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-neutral-200 px-4 py-2 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-lg border border-neutral-200 px-4 py-2 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
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
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border border-neutral-200 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="mt-1 block w-full rounded-lg border border-neutral-200 px-4 py-2 focus:border-primary focus:ring-primary"
                      placeholder="Tell us about your project, questions, or how we can help you..."
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
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
                  {contactInfoData.map((item, index) => (
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
      <Footer />
    </>
  )
}
