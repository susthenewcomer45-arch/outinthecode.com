import { NextRequest, NextResponse } from "next/server"

const KIT_API_KEY = process.env.KIT_API_KEY || ""
const KIT_FORM_ID = "9485311"

export async function POST(req: NextRequest) {
  const { email_address } = await req.json()

  if (!email_address) {
    return NextResponse.json({ error: "Email required" }, { status: 400 })
  }

  const headers = {
    "Content-Type": "application/json",
    "X-Kit-Api-Key": KIT_API_KEY,
  }

  // Step 1 — Create or find the subscriber.
  // The form endpoint returns 404 for emails that don't exist yet, so we
  // must ensure the subscriber exists before adding them to the form.
  const createRes = await fetch("https://api.kit.com/v4/subscribers", {
    method: "POST",
    headers,
    body: JSON.stringify({ email_address }),
  })

  if (!createRes.ok) {
    const error = await createRes.text()
    return NextResponse.json({ error }, { status: 500 })
  }

  // Step 2 — Add the (now-existing) subscriber to the form for attribution.
  const formRes = await fetch(
    `https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({ email_address }),
    }
  )

  if (formRes.ok) {
    return NextResponse.json({ success: true })
  } else {
    const error = await formRes.text()
    return NextResponse.json({ error }, { status: 500 })
  }
}
