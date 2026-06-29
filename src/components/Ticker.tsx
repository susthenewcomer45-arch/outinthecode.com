"use client"

import { motion } from "framer-motion"

const items = [
  "Claude Niche Site OS",
  "Claude Video OS",
  "Complete Builder Bundle",
  "Claude Auto-Publisher OS",
  "Claude AI Lens Skill",
  "5 + 2 + 1 + 4 skills",
  "AI-native workflows",
  "Built for speed",
  "No fluff. Just systems.",
]

export function Ticker() {
  const repeated = [...items, ...items]

  return (
    <div className="overflow-hidden border-b border-t border-[#1A1A18] bg-[#F5A623] py-3">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-[10px] uppercase tracking-[0.35em] text-[#080808]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {item}
            <span className="mx-8 opacity-40">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
