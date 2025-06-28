import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Star, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { contactInfo } from "@/lib/contact-info"
import { motion } from "framer-motion"

// Site Header Component
function SiteHeader() {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-background"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/" className="text-xl font-semibold">
            Interio
          </Link>
        </motion.div>
        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: "/about", label: "How it works" },
            { href: "/services", label: "Services" },
            { href: "/services", label: "Contractors" },
            { href: "/portfolio", label: "Gallery" }
          ].map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Link href={item.href} className="text-sm hover:text-emerald-600 transition-colors">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
        <motion.div 
          className="flex items-center gap-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button variant="ghost">Log in</Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Get your estimate
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative bg-primary pt-20">
      <div className="container relative z-10 grid gap-8 pb-16 pt-12 md:grid-cols-2 md:gap-12 md:pb-24 md:pt-16">
        <motion.div 
          className="flex flex-col justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-display-md font-serif text-white md:text-display-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your Living Space Into a Dream Home
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg/relaxed text-neutral-200"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience exceptional home renovation services tailored to your style and budget. Get started with a free estimate today.
          </motion.p>
          <motion.div 
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild>
              <Link href="/estimate" className="bg-white text-primary hover:bg-white/90">
                Get Free Estimate
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/portfolio" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                View Our Projects
              </Link>
            </Button>
          </motion.div>
          <motion.div 
            className="mt-12 flex items-center gap-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-semibold text-white">{stat.number}</div>
                <div className="mt-1 text-sm text-neutral-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div 
          className="relative aspect-[4/3] overflow-hidden rounded-lg md:aspect-auto"
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
            alt="Modern luxury living room with large windows and elegant furniture"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url(/pattern.svg)] opacity-50" />
    </section>
  )
}

// Renovation Options Component
function RenovationOptions() {
  const options = [
    {
      title: "Bathroom",
      duration: "4 WEEKS TO BUILD",
      description: "Build your dream bathroom with premium fixtures and finishes.",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2940&auto=format&fit=crop",
      href: "/services/bathroom-remodeling"
    },
    {
      title: "Kitchen",
      duration: "6 WEEKS TO BUILD",
      description: "Create your ideal kitchen with quality, lasting materials.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940&auto=format&fit=crop",
      href: "/services/kitchen-renovation"
    },
    {
      title: "Backyard",
      duration: "9 WEEKS TO BUILD",
      description: "Create your backyard getaway with durable materials and beautiful finishes.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2940&auto=format&fit=crop",
      href: "/services/outdoor-living"
    },
    {
      title: "Basement",
      duration: "7 WEEKS TO BUILD",
      description: "Transform your basement into a functional and beautiful space.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2940&auto=format&fit=crop",
      href: "/services"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Options
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="overflow-hidden h-full">
                <CardHeader className="p-0">
                  <motion.img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{option.title}</CardTitle>
                  <p className="text-sm text-emerald-600 mb-2">{option.duration}</p>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={option.href}>
                      Learn more
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Process Section Component
function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Design Consultation",
      description: "Meet with our expert designers to discuss your vision and requirements.",
      image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2940&auto=format&fit=crop"
    },
    {
      step: "02",
      title: "Detailed Planning",
      description: "Get a comprehensive plan with 3D renderings and material selections.",
      image: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=2940&auto=format&fit=crop"
    },
    {
      step: "03",
      title: "Expert Execution",
      description: "Watch as our skilled team brings your dream space to life.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940&auto=format&fit=crop"
    }
  ]

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display-sm font-serif text-neutral-900 md:text-display-md">
            Our Simple Process
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            We make home renovation easy with our streamlined approach
          </p>
        </motion.div>
        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="aspect-[4/3] relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
              <div className="p-6">
                <motion.div 
                  className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  Step {step.step}
                </motion.div>
                <h3 className="font-serif text-xl text-neutral-900">{step.title}</h3>
                <p className="mt-2 text-neutral-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Testimonials Component
function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, NY",
      quote: "The attention to detail and quality of work exceeded our expectations. Our kitchen is now a joy to cook in!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2940&auto=format&fit=crop",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "San Francisco, CA",
      quote: "Professional team, transparent process, and stunning results. They transformed our dated bathroom into a modern spa.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      location: "Miami, FL",
      quote: "From design to completion, the team was incredible. They helped us create our dream home within budget.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop",
      rating: 5
    }
  ]

  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display-sm font-serif text-neutral-900 md:text-display-md">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Real stories from homeowners who transformed their spaces with us
          </p>
        </motion.div>
        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-neutral-50 p-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className="relative h-12 w-12 overflow-hidden rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div>
                  <div className="font-medium text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.location}</div>
                </div>
              </div>
              <motion.div 
                className="mt-4 flex"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                  </motion.div>
                ))}
              </motion.div>
              <p className="mt-4 text-neutral-600">{testimonial.quote}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <motion.footer 
      className="border-t bg-white"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-neutral-900">Rooms</h3>
            <ul className="space-y-2">
              <li><Link href="/services/bathroom-remodeling" className="text-neutral-600 hover:text-neutral-900 transition-colors">Bathrooms</Link></li>
              <li><Link href="/services/kitchen-renovation" className="text-neutral-600 hover:text-neutral-900 transition-colors">Kitchens</Link></li>
              <li><Link href="/services/outdoor-living" className="text-neutral-600 hover:text-neutral-900 transition-colors">Backyards</Link></li>
              <li><Link href="/services" className="text-neutral-600 hover:text-neutral-900 transition-colors">All Services</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-neutral-900">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-neutral-600 hover:text-neutral-900 transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-neutral-600 hover:text-neutral-900 transition-colors">Gallery</Link></li>
              <li><Link href="/services" className="text-neutral-600 hover:text-neutral-900 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-neutral-600 hover:text-neutral-900 transition-colors">Contact</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-neutral-900">Contact</h3>
            <ul className="space-y-2">
              <li className="text-neutral-600">{contactInfo.phone}</li>
              <li className="text-neutral-600">{contactInfo.email}</li>
              <li className="text-neutral-600">{contactInfo.address.street}</li>
              <li className="text-neutral-600">{contactInfo.address.city}</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-neutral-900">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/legal/terms" className="text-neutral-600 hover:text-neutral-900 transition-colors">Terms of Use</Link></li>
              <li><Link href="/legal/privacy" className="text-neutral-600 hover:text-neutral-900 transition-colors">Privacy Policy</Link></li>
            </ul>
          </motion.div>
        </div>
        <motion.div 
          className="mt-12 pt-8 border-t"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600">&copy; {new Date().getFullYear()} Interio. All rights reserved.</p>
            <div className="flex items-center gap-2 text-neutral-600">
              <span>Built by</span>
              <Link 
                href="https://www.sanganak.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Sanganak
              </Link>
              <span>- #1 Premium IT Boutique</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <RenovationOptions />
      <ProcessSection />
      <Testimonials />
      <Footer />
    </>
  )
}
