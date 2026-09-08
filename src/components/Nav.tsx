"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const links = [
  { href: "/about", label: "About" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[#1A1A18] bg-[#080808]/95 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <a href="/">
        <img
          src="/logo.png"
          alt="outinthecode"
          style={{ height: "40px", width: "auto" }}
        />
      </a>

      <div className="flex items-center gap-4 md:gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden text-[11px] uppercase tracking-[0.2em] text-[#6B6865] transition-colors duration-300 hover:text-[#F0EDE8] sm:inline"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/#products"
          className="group relative overflow-hidden border border-[#F5A623] px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#F5A623] transition-colors duration-300 hover:bg-[#F5A623] hover:text-[#080808]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          Get Access
          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </motion.nav>
  )
}
