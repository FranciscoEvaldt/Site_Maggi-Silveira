import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { WhatsappButton } from "@/components/WhatsappButton";

const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
   title: "Maggi & Silveira | Advogado em Torres RS",
  description: "Assessoria jurídica em Torres RS. Atendimento especializado em direito trabalhista, civil e previdenciário.",
  icons: {
    icon: "/favicon.ico",
  },
};
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <WhatsappButton />
      </body>
    </html>
  )
}
