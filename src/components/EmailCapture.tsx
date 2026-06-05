"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

export function EmailCapture() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === "loading") return

    setStatus("loading")

    try {
      const res = await fetch("https://api.kit.com/v4/forms/9485311/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email_address: email }),
      })

      if (res.ok) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="relative border-b border-[#1A1A18]">
      {/* Section header */}
      <div className="flex items-center justify-between border-b border-[#1A1A18] px-6 py-6 md:px-10">
        <span
          className="text-xs uppercase tracking-[0.4em] text-[#6B6865]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          Stay Ahead
        </span>
        <span
          className="text-[10px] uppercase tracking-[0.3em] text-[#6B6865]"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          03 / 04
        </span>
      </div>

      <div
        ref={ref}
        className="grid gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:px-10 md:py-24"
      >
        {/* Left: headline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="mb-4 text-[10px] uppercase tracking-[0.4em] text-[#F5A623]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            New tools first
          </p>
          <h2
            className="text-4xl font-black uppercase leading-none text-[#F0EDE8] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Stay ahead.
            <br />
            <span className="text-[#F5A623]">Get new</span>
            <br />
            tools first.
          </h2>
          <div className="mt-8 h-px w-16 bg-[#F5A623]" />
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {status === "success" ? (
            <div
              className="border border-[#F5A623] p-8 text-center"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#F5A623]">
                You&apos;re in.
              </p>
              <p className="mt-2 text-xs text-[#6B6865]">
                Watch your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full border border-[#1A1A18] bg-[#0C0C0A] px-5 py-4 text-sm text-[#F0EDE8] placeholder-[#3A3835] outline-none transition-colors duration-300 focus:border-[#F5A623]"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group flex w-full items-center justify-between border border-[#F5A623] bg-[#F5A623] px-5 py-4 text-xs uppercase tracking-[0.25em] text-[#080808] transition-all duration-300 hover:bg-transparent hover:text-[#F5A623] disabled:opacity-50"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                <span>
                  {status === "loading" ? "Sending..." : "Join the list"}
                </span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              {status === "error" && (
                <p
                  className="text-[11px] text-red-400"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Something went wrong. Try again.
                </p>
              )}

              <p
                className="text-[10px] text-[#3A3835]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                No spam. No fluff. Just new tools when they drop.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
