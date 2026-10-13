import type { Metadata } from "next"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "About — outinthecode",
  description:
    "Jesus Gonzalez, based in Roswell, NM, builds ready-made skill files for Claude Code. Learn what outinthecode sells, who it is for, and how to reach us.",
  alternates: { canonical: "/about" },
}

const h2Class =
  "pt-4 text-xl font-black uppercase text-[#F0EDE8]"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="relative pt-24">
        <div className="flex items-center justify-between border-b border-[#1A1A18] px-6 py-6 md:px-10">
          <span
            className="text-xs uppercase tracking-[0.4em] text-[#6B6865]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            About
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.3em] text-[#6B6865]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Founder
          </span>
        </div>

        <div className="px-6 py-16 md:px-10 md:py-24">
          <div className="absolute left-6 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-[#F5A623] md:block" />

          <p
            className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#F5A623]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Founder
          </p>

          <h1
            className="mb-10 max-w-3xl text-4xl font-black uppercase leading-none text-[#F0EDE8] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Jesus Gonzalez
          </h1>

          <div
            className="max-w-2xl space-y-6 text-sm leading-relaxed text-[#6B6865] md:text-base"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            <p>
              Jesus Gonzalez, based in Roswell, NM, built outinthecode after
              more than 20 years in customer service and sales, including
              training sales teams and developing his own sales methodology.
              That work taught him to spot what&apos;s actually broken, not
              just what looks broken. outinthecode is a small, independent
              digital products studio. Every product here is made by one
              person and supported directly.
            </p>

            {/*
              TODO(Jesus, optional): Add a sentence or two on how you got into
              building with AI tools and why you started outinthecode, if you
              want that story on the page. Only add what is true.
            */}

            <h2
              className={h2Class}
              style={{ fontFamily: "var(--font-syne)" }}
            >
              What outinthecode sells
            </h2>
            <p>
              outinthecode sells digital products for people who build with
              Claude Code, Anthropic&apos;s coding assistant. A skill file is a
              plain text instruction file that Claude Code reads, so it already
              knows how to carry out a specific job the way you want it done.
              Instead of re-explaining the same setup on every project, you
              drop the file in and start from a working base.
            </p>
            <p>
              Claude Niche Site OS is a set of five skill files covering site
              structure, SEO schema, an ad layout component, sitemap and
              robots files, and a blog content workflow. Claude Video OS is a
              component library and a documentary builder for rendering videos
              with Remotion. Claude Auto-Publisher OS is a publishing pipeline
              with an automation script, a GitHub Actions scheduler, a Google
              Sheets content calendar and a plain-English setup guide. Claude AI
              Lens Skill creates the machine-readable files — llms.txt,
              agents.md, site-manifest.json and schema markup — that help AI
              assistants understand a website. The Complete Builder Bundle
              combines Niche Site OS, Video OS and Auto-Publisher OS at one
              price.
            </p>

            <h2
              className={h2Class}
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Who it is for
            </h2>
            <p>
              The products are built for aspiring entrepreneurs, content
              creators and small business owners who want to build an online
              presence with AI tools without spending months learning to code.
              You do not need a development background, but you do need to be
              willing to follow a setup guide and review what the tools produce.
            </p>

            <h2
              className={h2Class}
              style={{ fontFamily: "var(--font-syne)" }}
            >
              What we do not promise
            </h2>
            <p>
              These are tools, not shortcuts to income. We do not guarantee
              traffic, rankings, ad approval or revenue, and AI output always
              needs a human check before it goes live. Read the{" "}
              <a
                href="/disclaimer"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                disclaimer
              </a>{" "}
              and the{" "}
              <a
                href="/refund-policy"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                refund policy
              </a>{" "}
              before you buy.
            </p>

            <h2
              className={h2Class}
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Get in touch
            </h2>
            <p>
              Questions before you buy, or trouble after? Use the{" "}
              <a
                href="/contact"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                contact page
              </a>{" "}
              or email{" "}
              <a
                href="mailto:hello@outinthecode.com"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                hello@outinthecode.com
              </a>
              .
            </p>
          </div>

          <a
            href="/#products"
            className="mt-12 inline-block border border-[#F5A623] px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#F5A623] transition-colors duration-300 hover:bg-[#F5A623] hover:text-[#080808]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Explore the Stack →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
