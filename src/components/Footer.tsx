export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[#1A1A18]">
      {/* Section label */}
      <div className="flex items-center justify-between border-b border-[#1A1A18] px-6 py-6 md:px-10">
        <span
          className="text-xs uppercase tracking-[0.4em] text-[#6B6865]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          outinthecode
        </span>
        <span
          className="text-[10px] uppercase tracking-[0.3em] text-[#6B6865]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          04 / 04
        </span>
      </div>

      <div className="grid gap-12 px-6 py-16 md:grid-cols-[1fr_auto] md:items-end md:px-10 md:py-20">
        {/* Left: tagline */}
        <div>
          <p
            className="text-[10px] uppercase tracking-[0.4em] text-[#F5A623]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            outinthecode.com
          </p>
          <h2
            className="mt-4 text-3xl font-black uppercase leading-none text-[#F0EDE8] md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Don&apos;t get left out
            <br />
            <span className="text-[#F5A623]">in the code.</span>
          </h2>
        </div>

        {/* Right: links + copyright */}
        <div
          className="flex flex-col gap-4"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <nav className="flex flex-col gap-3">
            {["Products", "Skills", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="amber-underline text-[11px] uppercase tracking-[0.25em] text-[#6B6865] transition-colors duration-300 hover:text-[#F0EDE8]"
              >
                {link}
              </a>
            ))}
          </nav>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#3A3835]">
            © {year} outinthecode
          </p>
        </div>
      </div>

      {/* Bottom marquee line */}
      <div className="overflow-hidden border-t border-[#1A1A18] py-4">
        <p
          className="text-center text-[10px] uppercase tracking-[0.5em] text-[#1A1A18]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {Array.from({ length: 12 })
            .map(() => "Don't get left out in the code")
            .join(" ◆ ")}
        </p>
      </div>
    </footer>
  )
}
