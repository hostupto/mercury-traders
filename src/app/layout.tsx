import type React from "react"
import { Inter, Caveat } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
})

export const metadata = {
  title: "Mercy Traders - All Kind of Scrap Buyers",
  description:
    "Professional scrap buying services for iron, cotton box, papers, furniture and all types of scrap materials.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
