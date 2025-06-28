import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary py-24 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="mt-6 text-lg text-neutral-200">
                How we collect, use, and protect your personal information.
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

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Information We Collect</h2>
                <p className="text-neutral-600 mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
                  <li>Fill out contact forms or request estimates</li>
                  <li>Schedule consultations or appointments</li>
                  <li>Sign up for our newsletter or marketing communications</li>
                  <li>Engage with our services or customer support</li>
                  <li>Provide feedback or testimonials</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Personal Information</h3>
                <p className="text-neutral-600 mb-6">
                  This may include your name, email address, phone number, mailing address, project details, and any other information you choose to provide.
                </p>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Automatically Collected Information</h3>
                <p className="text-neutral-600 mb-6">
                  When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-neutral-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process and fulfill your requests for estimates and services</li>
                  <li>Communicate with you about your projects and our services</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                  <li>Personalize and improve your experience on our website</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. Information Sharing</h2>
                <p className="text-neutral-600 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction</li>
                  <li><strong>Safety and Security:</strong> We may disclose information to protect the safety and security of our users, employees, or the public</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Data Security</h2>
                <p className="text-neutral-600 mb-6">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Cookies and Tracking Technologies</h2>
                <p className="text-neutral-600 mb-6">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Your Rights and Choices</h2>
                <p className="text-neutral-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Rectify any personal information that is inaccurate or incomplete</li>
                  <li>Request the deletion of your personal information</li>
                  <li>Object to the processing of your personal information</li>
                  <li>Request restriction of processing your personal information</li>
                  <li>Data portability - receive your personal information in a structured format</li>
                  <li>Withdraw consent at any time where we rely on consent to process your information</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Marketing Communications</h2>
                <p className="text-neutral-600 mb-6">
                  If you receive marketing communications from us, you may opt out at any time by following the unsubscribe instructions provided in the communication or by contacting us directly.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Children's Privacy</h2>
                <p className="text-neutral-600 mb-6">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. International Data Transfers</h2>
                <p className="text-neutral-600 mb-6">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Changes to This Policy</h2>
                <p className="text-neutral-600 mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">11. Contact Us</h2>
                <p className="text-neutral-600 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <p className="text-neutral-600">
                    <strong>Interio</strong><br />
                    123 Design Street<br />
                    New York, NY 10001<br />
                    Phone: +1 (555) 123-4567<br />
                    Email: info@interio.com<br />
                    Privacy Officer: privacy@interio.com
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