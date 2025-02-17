import type React from "react"
import "./globals.css"
import { Inter, Outfit } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })

export const metadata = {
  title: "VibeRiley | AI-Powered Development Creator",
  description: "Content creator and vibe-coding pioneer, showing how to build software without traditional coding.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'