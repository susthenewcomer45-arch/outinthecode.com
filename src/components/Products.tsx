"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MagneticButton } from "./MagneticButton"

const products = [
  {
    index: "01",
    name: "Claude Niche Site OS",
    price: "$197",
    description:
      "7 battle-tested Claude skill files that build, blog, rank and monetize your niche site automatically.",
    features: [
      "AI blog post generator",
      "Auto-publisher pipeline",
      "SEO schema utilities",
      "AdSense integration",
      "Dynamic sitemap & robots",
      "Prompt cheat sheet",
      "+ full documentation",
    ],
    href: "https://gumroad.com/l/niche-site-os",
    label: "The Foundation",
  },
  {
    index: "02",
    name: "Claude Video OS",
    price: "$297",
    description:
      "Render cinematic AI videos inside Claude Code. No After Effects. No experience needed.",
    features: [
      "Remotion component library",
      "Documentary builder system",
      "Scene composition tools",
      "Export-ready presets",
    ],
    href: "https://gumroad.com/l/video-os",
    label: "The Cinematic Stack",
  },
  {
    index: "03",
    name: "Complete Builder Bundle",
    price: "$397",
    description:
      "Everything. All 7 skills, both systems, every bonus file. One payment, permanent access.",
    features: [
      "All of Niche Site OS",
      "All of Video OS",
      "Every bonus file",
      "All future updates",
    ],
    href: "https://gumroad.com/l/complete-bundle",
    label: "Best Value",
    featured: true,
  },
]

function ProductRow({
  product,
  i,
}: {
  product: (typeof products)[0]
  i: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
      className="group pearl-border-left relative border-b border-[#1A1A18] transition-colors duration-500 hover:bg-[#0C0C0A]"
    >
      {/* Top strip */}
      <div className="flex items-baseline justify-between border-b border-[#1A1A18] px-6 py-5 md:px-10">
        <div className="flex items-baseline gap-6">
          <span
            className="pearl-text text-[10px] uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {product.index}
          </span>
          {product.featured && (
            <span
              className="pearl-text border border-[#E8E0D5]/40 px-2 py-0.5 text-[9px] uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              {product.label}
            </span>
          )}
          {!product.featured && (
            <span
              className="pearl-text text-[10px] uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              {product.label}
            </span>
          )}
        </div>
        <span
          className="text-xl font-light text-[#F5A623] md:text-2xl"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {product.price}
        </span>
      </div>

      {/* Body */}
      <div className="grid gap-8 px-6 py-8 md:grid-cols-[1fr_auto] md:px-10 md:py-10">
        {/* Left: name + description + features */}
        <div>
          <h2
            className="mb-4 text-3xl font-black uppercase leading-none text-[#F0EDE8] md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {product.name}
          </h2>
          <p
            className="mb-8 max-w-xl text-sm leading-relaxed text-[#6B6865]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {product.description}
          </p>

          {/* Feature list */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {product.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#6B6865]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                <span className="pearl-dash h-px w-4 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: CTA */}
        <div className="flex items-end">
          <MagneticButton href={product.href}>Get Access</MagneticButton>
        </div>
      </div>
    </motion.div>
  )
}

export function Products() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="products" className="relative">
      {/* Section header */}
      <div
        ref={ref}
        className="flex items-center justify-between border-b border-[#1A1A18] px-6 py-6 md:px-10"
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-[0.4em] text-[#6B6865]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          The Stack
        </motion.h2>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[10px] uppercase tracking-[0.3em] text-[#6B6865]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          02 / 04
        </motion.span>
      </div>

      {/* Products */}
      {products.map((p, i) => (
        <ProductRow key={p.index} product={p} i={i} />
      ))}
    </section>
  )
}
