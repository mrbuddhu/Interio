import Link from "next/link"
import { contactInfo } from "@/lib/contact-info"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-neutral-900">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/kitchen-renovation" className="text-neutral-600 hover:text-neutral-900">Kitchen Renovation</Link></li>
              <li><Link href="/services/bathroom-remodeling" className="text-neutral-600 hover:text-neutral-900">Bathroom Remodeling</Link></li>
              <li><Link href="/services/living-room-design" className="text-neutral-600 hover:text-neutral-900">Living Room Design</Link></li>
              <li><Link href="/services" className="text-neutral-600 hover:text-neutral-900">All Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-neutral-900">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-neutral-600 hover:text-neutral-900">About Us</Link></li>
              <li><Link href="/portfolio" className="text-neutral-600 hover:text-neutral-900">Portfolio</Link></li>
              <li><Link href="/services" className="text-neutral-600 hover:text-neutral-900">Services</Link></li>
              <li><Link href="/contact" className="text-neutral-600 hover:text-neutral-900">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-neutral-900">Contact</h3>
            <ul className="space-y-2">
              <li className="text-neutral-600">{contactInfo.phone}</li>
              <li className="text-neutral-600">{contactInfo.email}</li>
              <li className="text-neutral-600">{contactInfo.address.street}</li>
              <li className="text-neutral-600">{contactInfo.address.city}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-neutral-900">Hours</h3>
            <ul className="space-y-2">
              <li className="text-neutral-600">{contactInfo.hours.weekdays}</li>
              <li className="text-neutral-600">{contactInfo.hours.saturday}</li>
              <li className="text-neutral-600">{contactInfo.hours.sunday}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
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
        </div>
      </div>
    </footer>
  )
} 