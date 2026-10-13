import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"

export type LegalSection = { heading: string; paragraphs: React.ReactNode[] }

export function LegalPage({
  label,
  title,
  updated,
  intro,
  sections,
}: {
  label: string
  title: string
  updated: string
  intro: React.ReactNode
  sections: LegalSection[]
}) {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="relative pt-24">
        <div className="flex items-center justify-between border-b border-[#1A1A18] px-6 py-6 md:px-10">
          <span
            className="text-xs uppercase tracking-[0.4em] text-[#6B6865]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {label}
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.3em] text-[#6B6865]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Last updated — {updated}
          </span>
        </div>

        <div className="px-6 py-16 md:px-10 md:py-24">
          <p
            className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#F5A623]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Legal
          </p>

          <h1
            className="mb-10 max-w-3xl text-4xl font-black uppercase leading-none text-[#F0EDE8] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {title}
          </h1>

          <div
            className="max-w-2xl space-y-6 text-sm leading-relaxed text-[#6B6865] md:text-base"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            <p>{intro}</p>

            {sections.map((s) => (
              <div key={s.heading} className="space-y-6">
                <h2
                  className="pt-4 text-xl font-black uppercase text-[#F0EDE8]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {s.heading}
                </h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export function MailLink({ addr }: { addr: string }) {
  return (
    <a
      href={`mailto:${addr}`}
      className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
    >
      {addr}
    </a>
  )
}
