import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

// Google fonts
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})



export const metadata: Metadata = {
  title: "Shef Habibi",
  description: "Authentic Middle Eastern Cuisine",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#dabd91" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
