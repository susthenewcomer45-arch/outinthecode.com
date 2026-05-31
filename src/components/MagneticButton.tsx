"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface MagneticButtonProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function MagneticButton({ href, children, className = "" }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 350, damping: 20 })
  const springY = useSpring(y, { stiffness: 350, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current!.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.35)
    y.set((e.clientY - cy) * 0.35)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      style={{
        x: springX,
        y: springY,
        fontFamily: "var(--font-jetbrains)",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group inline-flex cursor-pointer items-center gap-3 border border-[#F5A623] bg-[#F5A623] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#080808] transition-colors duration-300 hover:bg-transparent hover:text-[#F5A623] ${className}`}
    >
      {children}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </motion.a>
  )
}
