import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary py-24 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">
                Terms of Use
              </h1>
              <p className="mt-6 text-lg text-neutral-200">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url(/pattern.svg)] opacity-50" />
        </section>

        {/* Content Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-600 mb-8">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-neutral-600 mb-6">
                  By accessing and using the Interio website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Description of Service</h2>
                <p className="text-neutral-600 mb-6">
                  Interio provides interior design and renovation services, including but not limited to kitchen renovations, bathroom remodeling, living room design, bedroom renovations, home office design, and outdoor living spaces. Our services include consultation, design, planning, and project management.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. User Responsibilities</h2>
                <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
                  <li>Provide accurate and complete information when requesting estimates or services</li>
                  <li>Maintain the security of any account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect the intellectual property rights of Interio and third parties</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Service Agreements</h2>
                <p className="text-neutral-600 mb-6">
                  All renovation and design projects are subject to separate service agreements that will be provided upon project initiation. These agreements will detail project scope, timelines, costs, and other specific terms and conditions.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Payment Terms</h2>
                <p className="text-neutral-600 mb-6">
                  Payment terms will be specified in individual service agreements. Generally, we require a deposit to begin work, with progress payments throughout the project and final payment upon completion. All payments are due within the terms specified in your service agreement.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Cancellation Policy</h2>
                <p className="text-neutral-600 mb-6">
                  Cancellation policies vary by service type and will be detailed in your service agreement. Generally, cancellations must be made in writing and may be subject to cancellation fees depending on the stage of the project.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Warranty and Guarantees</h2>
                <p className="text-neutral-600 mb-6">
                  Interio provides warranties on workmanship and materials as specified in individual service agreements. Warranty terms and coverage will be detailed in your project documentation.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-neutral-600 mb-6">
                  Interio's liability is limited to the amount paid for the specific service in question. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Intellectual Property</h2>
                <p className="text-neutral-600 mb-6">
                  All content on this website, including but not limited to text, graphics, logos, and design elements, is the property of Interio and is protected by copyright laws. Custom designs created for clients remain the property of Interio until full payment is received.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Privacy and Data Protection</h2>
                <p className="text-neutral-600 mb-6">
                  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">11. Modifications to Terms</h2>
                <p className="text-neutral-600 mb-6">
                  Interio reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of our services constitutes acceptance of any modifications.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">12. Governing Law</h2>
                <p className="text-neutral-600 mb-6">
                  These terms are governed by the laws of the State of New York. Any disputes arising from these terms or our services will be resolved in the courts of New York.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">13. Contact Information</h2>
                <p className="text-neutral-600 mb-6">
                  If you have any questions about these Terms of Use, please contact us at:
                </p>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <p className="text-neutral-600">
                    <strong>Interio</strong><br />
                    123 Design Street<br />
                    New York, NY 10001<br />
                    Phone: +1 (555) 123-4567<br />
                    Email: info@interio.com
                  </p>
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