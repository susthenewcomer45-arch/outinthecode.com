import type { Metadata } from "next"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Contact — outinthecode",
  description:
    "Contact Out In The Code. Email hello@outinthecode.com or privacy@outinthecode.com.",
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="relative pt-24">
        <div className="flex items-center justify-between border-b border-[#1A1A18] px-6 py-6 md:px-10">
          <span
            className="text-xs uppercase tracking-[0.4em] text-[#6B6865]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Contact
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.3em] text-[#6B6865]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Reach us
          </span>
        </div>

        <div className="px-6 py-16 md:px-10 md:py-24">
          <p
            className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#F5A623]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Contact
          </p>

          <h1
            className="mb-10 max-w-3xl text-4xl font-black uppercase leading-none text-[#F0EDE8] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Get in touch
          </h1>

          <div
            className="max-w-2xl space-y-6 text-sm leading-relaxed text-[#6B6865] md:text-base"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            <p>
              For questions, feedback, product support, or anything else, email
              us at{" "}
              <a
                href="mailto:hello@outinthecode.com"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                hello@outinthecode.com
              </a>
              .
            </p>
            <p>
              For privacy-related inquiries, use{" "}
              <a
                href="mailto:privacy@outinthecode.com"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                privacy@outinthecode.com
              </a>
              .
            </p>
            <p>
              We are a small team and respond to most messages within a few
              business days.
            </p>
            <p>
              Founder: Jesus Gonzalez · Roswell, NM ·{" "}
              <a
                href="/about"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                About
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
