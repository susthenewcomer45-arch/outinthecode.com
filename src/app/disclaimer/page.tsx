import type { Metadata } from "next"
import { LegalPage, MailLink } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Disclaimer — outinthecode",
  description:
    "Disclaimer for outinthecode.com: no guarantee of results, AI output must be reviewed, and no affiliation with Anthropic.",
  alternates: { canonical: "/disclaimer" },
}

// TODO(Jesus): Have this reviewed by a qualified attorney if you want it to
// be relied on as legal protection.
export default function DisclaimerPage() {
  return (
    <LegalPage
      label="Disclaimer"
      title="Disclaimer"
      updated="October 2026"
      intro={
        <>
          The information and products on outinthecode.com are provided for
          general informational and educational purposes. Please read this
          disclaimer before relying on anything on the site or buying a product.
        </>
      }
      sections={[
        {
          heading: "No guarantee of results",
          paragraphs: [
            <>
              We do not promise or guarantee any specific outcome, including
              website traffic, search engine rankings, approval for any
              advertising program, sales or income. Results depend on many
              factors outside our control, including your niche, your effort,
              the quality of your content and changes made by search engines
              and platforms.
            </>,
          ],
        },
        {
          heading: "AI-generated output must be reviewed",
          paragraphs: [
            <>
              Our products help you use AI tools to generate code, text and
              media. AI output can be inaccurate, incomplete or unsuitable for
              your purpose. You are responsible for reviewing, testing and
              editing anything the tools produce before you publish or rely on
              it, and for making sure that it complies with the rules of the
              platforms and services you use.
            </>,
          ],
        },
        {
          heading: "Independent business, no affiliation",
          paragraphs: [
            <>
              outinthecode is independent and is not affiliated with,
              endorsed by or sponsored by Anthropic, Google, Vercel, GitHub or
              any other third party named on this site. Product and company
              names are trademarks of their respective owners and are used
              only to describe compatibility.
            </>,
          ],
        },
        {
          heading: "Not professional advice",
          paragraphs: [
            <>
              Nothing on this site is legal, financial, tax or other
              professional advice. Speak with a qualified professional before
              making decisions in those areas.
            </>,
          ],
        },
        {
          heading: "Advertising and external links",
          paragraphs: [
            <>
              This site may display advertising from third parties such as
              Google AdSense, and may link to outside websites. We do not
              control and are not responsible for the content or practices of
              those sites. See our{" "}
              <a
                href="/privacy-policy"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                Privacy Policy
              </a>{" "}
              for how advertising cookies are used.
            </>,
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            <>
              Questions about this disclaimer:{" "}
              <MailLink addr="hello@outinthecode.com" />.
            </>,
          ],
        },
      ]}
    />
  )
}
