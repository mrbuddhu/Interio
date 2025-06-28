import { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import ClientLayout from "./components/client-layout"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif"
})

export const metadata: Metadata = {
  title: "Interio - Transform Your Living Space",
  description: "Professional home renovation and interior design services. Transform your living space into a dream home with our expert renovation services.",
  keywords: "interior design, home renovation, kitchen renovation, bathroom remodeling, living room design",
  authors: [{ name: "Interio" }],
  creator: "Interio",
  publisher: "Interio",
  icons: {
    icon: [
      { url: "/interio.png", sizes: "32x32", type: "image/png" },
      { url: "/interio.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/interio.png",
    apple: "/interio.png"
  },
  openGraph: {
    title: "Interio - Transform Your Living Space",
    description: "Professional home renovation and interior design services. Transform your living space into a dream home with our expert renovation services.",
    type: "website",
    locale: "en_US",
    siteName: "Interio",
    url: "https://interio-eta.vercel.app/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Interio - Modern luxury living room with large windows and elegant furniture"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Interio - Transform Your Living Space",
    description: "Professional home renovation and interior design services. Transform your living space into a dream home.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <ClientLayout className={`${inter.className} antialiased`}>
        {children}
      </ClientLayout>
    </html>
  )
}
