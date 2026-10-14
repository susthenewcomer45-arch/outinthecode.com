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
  metadataBase: new URL("https://outinthecode.com"),
  title: "outinthecode — Don't Get Left Out in the Code",
  description:
    "Ready-made skill files for Claude Code that give you a working starting point for building a site, publishing content and making videos.",
  openGraph: {
    title: "outinthecode",
    description:
      "Ready-made skill files for Claude Code that give you a working starting point for building a site, publishing content and making videos.",
    url: "https://outinthecode.com",
    siteName: "outinthecode",
  },
  twitter: {
    description:
      "Ready-made skill files for Claude Code that give you a working starting point for building a site, publishing content and making videos.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-4437016471828719"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4437016471828719"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://outinthecode.com/#website",
                  "url": "https://outinthecode.com",
                  "name": "outinthecode",
                  "description": "Ready-made skill files for Claude Code that give you a working starting point for building a site, publishing content and making videos.",
                  "publisher": {
                    "@id": "https://outinthecode.com/#organization"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://outinthecode.com/#organization",
                  "name": "outinthecode",
                  "url": "https://outinthecode.com",
                  "email": "hello@outinthecode.com",
                  "description": "Digital products store selling ready-made AI skill files for Claude Code.",
                  "founder": {
                    "@type": "Person",
                    "name": "Jesus Gonzalez"
                  }
                },
                {
                  "@type": "ItemList",
                  "name": "outinthecode Products",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "item": {
                        "@type": "Product",
                        "name": "Claude Niche Site OS",
                        "description": "5 Claude Code skill files for setting up a niche site: Website Authority Builder, SEO Schema Utilities, Ad Layout Component, Dynamic Sitemap + Robots, and Blog Content Workflow.",
                        "url": "https://payhip.com/b/4BSFj",
                        "offers": {
                          "@type": "Offer",
                          "price": "129",
                          "priceCurrency": "USD",
                          "availability": "https://schema.org/InStock"
                        }
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "item": {
                        "@type": "Product",
                        "name": "Claude Video OS",
                        "description": "2 skill files that render cinematic AI videos inside Claude Code. No After Effects required.",
                        "url": "https://payhip.com/b/Dn3LZ",
                        "offers": {
                          "@type": "Offer",
                          "price": "39",
                          "priceCurrency": "USD",
                          "availability": "https://schema.org/InStock"
                        }
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "item": {
                        "@type": "Product",
                        "name": "Claude Auto-Publisher OS",
                        "description": "Blog publishing pipeline that publishes fresh content every weekday: core automation script, GitHub Actions scheduler, Google Sheets content calendar, and Claude Code skill file.",
                        "url": "https://payhip.com/b/TgsZF",
                        "offers": {
                          "@type": "Offer",
                          "price": "147",
                          "priceCurrency": "USD",
                          "availability": "https://schema.org/InStock"
                        }
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "item": {
                        "@type": "Product",
                        "name": "Complete Builder Bundle",
                        "description": "Claude Niche Site OS, Claude Video OS, and Claude Auto-Publisher OS in one purchase, plus prompt cheat sheet, full documentation, and all future updates. Does not include AI Lens Skill.",
                        "url": "https://payhip.com/b/K367j",
                        "offers": {
                          "@type": "Offer",
                          "price": "229",
                          "priceCurrency": "USD",
                          "availability": "https://schema.org/InStock"
                        }
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 5,
                      "item": {
                        "@type": "Product",
                        "name": "Claude AI Lens Skill",
                        "description": "Machine-readable website infrastructure for AI assistants: llms.txt, agents.md, site-manifest.json, and schema markup.",
                        "url": "https://payhip.com/b/peZtg",
                        "offers": {
                          "@type": "Offer",
                          "price": "59",
                          "priceCurrency": "USD",
                          "availability": "https://schema.org/InStock"
                        }
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
        <GrainOverlay />
        {children}
      </body>
    </html>
  )
}
