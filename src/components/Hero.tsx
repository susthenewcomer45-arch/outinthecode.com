"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { MagneticButton } from "./MagneticButton"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const lineVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1.1, ease: EASE },
  },
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const line1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"])
  const line2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"])
  const line3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"])
  const subY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* Top meta bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex items-center justify-between border-b border-[#1A1A18] px-6 py-4 pt-20"
        style={{ fontFamily: "var(--font-jetbrains)" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#6B6865]">
          Digital Tools Studio
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#6B6865]">
          Issue 001 — 2026
        </span>
      </motion.div>

      {/* Main headline block */}
      <div className="relative flex flex-1 flex-col justify-center px-6 pb-6 pt-8 md:px-12">
        {/* Decorative amber vertical accent */}
        <div className="absolute left-6 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-[#F5A623] md:block" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative"
        >
          {/* Line 1 */}
          <motion.div style={{ y: line1Y }} className="overflow-hidden">
            <motion.div variants={lineVariants}>
              <h1
                className="font-display text-[10vw] font-black uppercase leading-[0.85] text-[#F0EDE8] md:text-[8vw]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Don&apos;t Get
              </h1>
            </motion.div>
          </motion.div>

          {/* Line 2 — offset right */}
          <motion.div
            style={{ y: line2Y }}
            className="overflow-hidden pl-[8vw] md:pl-[14vw]"
          >
            <motion.div variants={lineVariants}>
              <h1
                className="font-display text-[10vw] font-black uppercase leading-[0.85] text-[#F0EDE8] md:text-[8vw]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Left Out In
              </h1>
            </motion.div>
          </motion.div>

          {/* Line 3 — further offset + amber */}
          <motion.div
            style={{ y: line3Y }}
            className="overflow-hidden pl-[16vw] md:pl-[28vw]"
          >
            <motion.div variants={lineVariants}>
              <h1
                className="font-display text-[10vw] font-black uppercase leading-[0.85] text-[#F5A623] md:text-[8vw]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                The Code.
              </h1>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Sub block — right aligned */}
        <motion.div
          style={{ y: subY }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-col items-start gap-4 md:ml-auto md:max-w-lg md:items-end"
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-sm leading-relaxed text-[#6B6865] md:text-right"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            AI-built tools, skills, and systems for digital builders who move
            fast.
          </motion.p>

          <motion.div variants={fadeUpVariants}>
            <MagneticButton href="#products">Explore the Stack</MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="flex items-center justify-between border-t border-[#1A1A18] px-6 py-4"
        style={{ fontFamily: "var(--font-jetbrains)" }}
      >
        <span className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#6B6865]">
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            ↓
          </motion.span>
          Scroll
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#6B6865]">
          01 / 04
        </span>
      </motion.div>
    </section>
  )
}
