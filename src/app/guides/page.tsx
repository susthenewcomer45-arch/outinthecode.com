import type { Metadata } from "next"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { guides } from "@/lib/guides"

export const metadata: Metadata = {
  title: "Guides — outinthecode",
  description:
    "Plain-English guides on Claude Code skills, llms.txt, reviewing AI-written content and planning a content calendar.",
  alternates: { canonical: "/guides" },
}

export default function GuidesPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="relative pt-24">
        <div className="flex items-center justify-between border-b border-[#1A1A18] px-6 py-6 md:px-10">
          <span
            className="text-xs uppercase tracking-[0.4em] text-[#6B6865]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Guides
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.3em] text-[#6B6865]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {guides.length} guides
          </span>
        </div>

        <div className="px-6 py-16 md:px-10 md:py-24">
          <h1
            className="mb-6 max-w-3xl text-4xl font-black uppercase leading-none text-[#F0EDE8] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Guides
          </h1>
          <p
            className="mb-12 max-w-2xl text-sm leading-relaxed text-[#6B6865] md:text-base"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Plain-English explanations for people building with Claude Code and
            publishing on the web. Technical details are checked against the
            official documentation and dated on each page.
          </p>

          <ul className="max-w-3xl divide-y divide-[#1A1A18] border-y border-[#1A1A18]">
            {guides.map((g) => (
              <li key={g.slug}>
                <a
                  href={`/guides/${g.slug}`}
                  className="group block py-6 transition-colors duration-300 hover:bg-[#0C0C0A]"
                >
                  <h2
                    className="text-xl font-black uppercase text-[#F0EDE8] group-hover:text-[#F5A623]"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {g.title}
                  </h2>
                  <p
                    className="mt-2 text-sm leading-relaxed text-[#6B6865]"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {g.description}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  )
}
