import type { Metadata } from "next"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "About — outinthecode",
  description:
    "Jesus Gonzalez built Out In The Code. Every skill runs on real sites first.",
}

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
              Jesus Gonzalez, based in Roswell, NM, built Out In The Code after
              years of hands-on customer service and problem-solving work — the
              kind where you learn to spot what&apos;s actually broken, not just
              what looks broken.
            </p>
            <p>
              Every skill sold here runs on real sites first. Auto-Publisher OS
              powers the daily blog on nocallquotenow.com. AI Lens Skill is
              deployed across every site in the stack. Nothing ships until
              it&apos;s proven on our own work.
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
