import type { Metadata } from "next"
import { LegalPage, MailLink } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Refund Policy — outinthecode",
  description:
    "Refund Policy for outinthecode digital products: how to request a refund and how requests are handled.",
  alternates: { canonical: "/refund-policy" },
}

// TODO(Jesus): This page deliberately states NO refund window or guarantee,
// because none has been confirmed. Decide your actual policy (for example a
// specific number of days, or no refunds after download) and update the
// "Review of requests" section below. The checkout platform (Payhip)
// may also apply its own rules — confirm and mention them if so.
export default function RefundPolicyPage() {
  return (
    <LegalPage
      label="Refund Policy"
      title="Refund Policy"
      updated="October 2026"
      intro={
        <>
          outinthecode sells digital products that are delivered immediately
          after purchase. Because a digital file cannot be returned once it has
          been downloaded, refunds are handled case by case as described below.
        </>
      }
      sections={[
        {
          heading: "How to request a refund",
          paragraphs: [
            <>
              Email <MailLink addr="hello@outinthecode.com" /> with the email
              address used for the purchase, the name of the product, and a
              short explanation of the problem. This lets us find your order
              and understand what went wrong.
            </>,
          ],
        },
        {
          heading: "Review of requests",
          paragraphs: [
            <>
              We review each request individually. If a product file is
              missing, corrupted or does not match its description on the
              homepage, tell us and we will work with you to fix it or make it
              right. Approved refunds are returned to the original payment
              method through the checkout platform used for the purchase, and
              the time it takes to appear depends on that platform and your
              bank.
            </>,
          ],
        },
        {
          heading: "Support first",
          paragraphs: [
            <>
              If you are having trouble setting up or using a product, contact
              us before requesting a refund. Many issues are setup questions
              that can be solved quickly.
            </>,
          ],
        },
        {
          heading: "What this policy does not cover",
          paragraphs: [
            <>
              Refunds are not available for results you hoped to achieve, such
              as traffic, rankings, advertising approval or income, because we
              do not guarantee those outcomes. See our{" "}
              <a
                href="/disclaimer"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                Disclaimer
              </a>
              . Problems caused by changes to third-party services, such as
              Claude Code, GitHub or Vercel, are also outside our control.
            </>,
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            <>
              General questions: <MailLink addr="hello@outinthecode.com" />. See
              also our{" "}
              <a
                href="/terms"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                Terms of Service
              </a>
              .
            </>,
          ],
        },
      ]}
    />
  )
}
