import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import type { Guide } from "@/lib/guides"

const link =
  "text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"

export function GuideBody({ guide }: { guide: Guide }) {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <article className="relative pt-24">
        <div className="flex items-center justify-between border-b border-[#1A1A18] px-6 py-6 md:px-10">
          <a
            href="/guides"
            className="text-xs uppercase tracking-[0.4em] text-[#6B6865] hover:text-[#F0EDE8]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            ← Guides
          </a>
          <span
            className="text-[10px] uppercase tracking-[0.3em] text-[#6B6865]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Updated — {guide.updated}
          </span>
        </div>

        <div className="px-6 py-16 md:px-10 md:py-24">
          <h1
            className="mb-10 max-w-3xl text-3xl font-black uppercase leading-tight text-[#F0EDE8] md:text-5xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {guide.title}
          </h1>

          <div
            className="max-w-2xl space-y-6 text-sm leading-relaxed text-[#6B6865] md:text-base"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            <p className="text-[#F0EDE8]">{guide.intro}</p>

            {guide.sections.map((s) => (
              <section key={s.heading} className="space-y-6">
                <h2
                  className="pt-4 text-xl font-black uppercase text-[#F0EDE8]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {s.heading}
                </h2>
                {s.blocks.map((b, i) => {
                  if ("p" in b) return <p key={i}>{b.p}</p>
                  if ("ul" in b)
                    return (
                      <ul key={i} className="list-disc space-y-2 pl-5">
                        {b.ul.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )
                  return (
                    <pre
                      key={i}
                      className="overflow-x-auto border border-[#1A1A18] bg-[#0C0C0A] p-4 text-xs leading-relaxed text-[#F0EDE8]"
                    >
                      <code>{b.code.join("\n")}</code>
                    </pre>
                  )
                })}
              </section>
            ))}

            <p className="border-t border-[#1A1A18] pt-6 text-xs">
              This guide is for general information only and is not a promise
              of any result. See our{" "}
              <a href="/disclaimer" className={link}>
                disclaimer
              </a>
              . Questions or corrections?{" "}
              <a href="/contact" className={link}>
                Contact us
              </a>
              .
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
