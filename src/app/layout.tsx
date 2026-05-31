import type { Metadata } from "next"
import { Syne, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { GrainOverlay } from "@/components/GrainOverlay"

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "outinthecode — Don't Get Left Out in the Code",
  description:
    "AI-built tools, skills, and systems for digital builders who move fast.",
  openGraph: {
    title: "outinthecode",
    description:
      "AI-built tools, skills, and systems for digital builders who move fast.",
    url: "https://outinthecode.com",
    siteName: "outinthecode",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${jetbrainsMono.variable}`}>
      <body>
        <GrainOverlay />
        {children}
      </body>
    </html>
  )
}
