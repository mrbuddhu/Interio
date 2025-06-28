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
  description: "Professional home renovation and interior design services",
  icons: {
    icon: "/interio.png"
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
