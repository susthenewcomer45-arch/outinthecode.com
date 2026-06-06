import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { email_address } = await req.json()

  if (!email_address) {
    return NextResponse.json({ error: "Email required" }, { status: 400 })
  }

  const res = await fetch("https://api.kit.com/v4/forms/9485311/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": process.env.KIT_API_KEY || "",
    },
    body: JSON.stringify({ email_address }),
  })

  if (res.ok) {
    return NextResponse.json({ success: true })
  } else {
    const error = await res.text()
    return NextResponse.json({ error }, { status: 500 })
  }
}
