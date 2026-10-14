"use client"

import { useState } from "react"

const TO = "hello@outinthecode.com"

// TODO(Jesus): This form composes an email in the visitor's own mail app
// (mailto:) because no server-side email service is configured. To receive
// submissions directly, add a service (e.g. Resend or Formspree) and put its
// key in a Vercel environment variable yourself — never in the repo.
export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [topic, setTopic] = useState("Product question")
  const [message, setMessage] = useState("")
  const [opened, setOpened] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `[outinthecode] ${topic}`
    const body = `Name: ${name}\nReply-to email: ${email}\n\n${message}`
    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  const field =
    "w-full border border-[#1A1A18] bg-[#0C0C0A] px-5 py-4 text-sm text-[#F0EDE8] placeholder-[#3A3835] outline-none transition-colors duration-300 focus:border-[#F5A623]"
  const label =
    "mb-2 block text-[10px] uppercase tracking-[0.3em] text-[#6B6865]"

  return (
    <form
      onSubmit={onSubmit}
      className="mt-12 flex max-w-2xl flex-col gap-5"
      style={{ fontFamily: "var(--font-jetbrains)" }}
    >
      <div>
        <label htmlFor="cf-name" className={label}>
          Your name
        </label>
        <input
          id="cf-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
        />
      </div>
      <div>
        <label htmlFor="cf-email" className={label}>
          Your email
        </label>
        <input
          id="cf-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="cf-topic" className={label}>
          Topic
        </label>
        <select
          id="cf-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className={field}
        >
          <option>Product question</option>
          <option>Product support</option>
          <option>Refund request</option>
          <option>Privacy request</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="cf-message" className={label}>
          Message
        </label>
        <textarea
          id="cf-message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={field}
        />
      </div>
      <button
        type="submit"
        className="group flex w-full items-center justify-between border border-[#F5A623] bg-[#F5A623] px-5 py-4 text-xs uppercase tracking-[0.25em] text-[#080808] transition-all duration-300 hover:bg-transparent hover:text-[#F5A623]"
      >
        <span>Write to us</span>
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
      <p className="text-[11px] text-[#6B6865]" role="status">
        {opened
          ? `Your email app should have opened with your message addressed to ${TO}. If nothing opened, email ${TO} directly.`
          : `This opens your email app with your message addressed to ${TO}. Nothing is sent until you press send in your email app.`}
      </p>
    </form>
  )
}
