import type { Metadata } from "next"
import { LegalPage, MailLink } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Terms of Service — outinthecode",
  description:
    "Terms of Service for outinthecode.com: how the site and our digital products may be used.",
  alternates: { canonical: "/terms" },
}

// TODO(Jesus): Owner confirmed buyers may resell (client work, what they
// build, and the product files themselves). Have these terms reviewed by a
// qualified attorney before relying on them. No governing-law / venue clause
// is included on purpose — add one only after confirming it with counsel.
export default function TermsPage() {
  return (
    <LegalPage
      label="Terms of Service"
      title="Terms of Service"
      updated="October 2026"
      intro={
        <>
          These Terms of Service (&quot;Terms&quot;) govern your use of
          outinthecode.com and any digital product you buy through it. By using
          the site or placing an order, you agree to these Terms. If you do not
          agree, please do not use the site or buy our products.
        </>
      }
      sections={[
        {
          heading: "What we sell",
          paragraphs: [
            <>
              outinthecode sells digital products: skill files, scripts and
              written documentation designed to be used with Claude Code. Each
              product&apos;s contents are described on the homepage. Products
              are delivered electronically by the checkout platform at the time
              of purchase. Nothing is shipped physically.
            </>,
          ],
        },
        {
          heading: "Ordering and payment",
          paragraphs: [
            <>
              Orders are placed and paid for through a third-party checkout
              platform. That platform processes your payment and its own terms
              and privacy policy apply to the transaction. We do not see or
              store your full payment card details. Prices shown on the site
              may change at any time; the price you see at checkout when you
              pay is the price you are charged.
            </>,
          ],
        },
        {
          heading: "License and permitted use",
          paragraphs: [
            <>
              When you buy a product you receive a non-exclusive license to
              use the files for your own projects and for projects you build
              for clients, and you may sell the websites, content, videos or
              services you create with them. You may also resell the product
              files themselves.
            </>,
            <>
              All site content and product files remain the intellectual
              property of outinthecode and its owner. Buying a product does not
              transfer ownership of that content to you.
            </>,
          ],
        },
        {
          heading: "Third-party tools and trademarks",
          paragraphs: [
            <>
              outinthecode is an independent business. We are not affiliated
              with, endorsed by or sponsored by Anthropic. &quot;Claude&quot;
              and &quot;Claude Code&quot; are products and trademarks of
              Anthropic. Our products work alongside third-party services
              (for example Claude Code, GitHub, Vercel or Google Sheets), which
              have their own terms, pricing and availability that we do not
              control. Changes to those services may affect how a product works.
            </>,
          ],
        },
        {
          heading: "No guarantee of results",
          paragraphs: [
            <>
              Our products are tools and instructions. We do not guarantee any
              particular result, including traffic, search rankings, advertising
              approval, revenue or income. See our{" "}
              <a
                href="/disclaimer"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                Disclaimer
              </a>
              .
            </>,
          ],
        },
        {
          heading: "Refunds",
          paragraphs: [
            <>
              Refund requests are handled under our{" "}
              <a
                href="/refund-policy"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                Refund Policy
              </a>
              .
            </>,
          ],
        },
        {
          heading: "Disclaimer of warranties and limitation of liability",
          paragraphs: [
            <>
              The site and all products are provided &quot;as is&quot; and
              &quot;as available,&quot; without warranties of any kind, to the
              fullest extent permitted by law. To the fullest extent permitted
              by law, outinthecode and its owner will not be liable for any
              indirect, incidental, special or consequential damages, or for
              any loss of profits, data or business, arising from your use of
              the site or the products. Our total liability for any claim
              relating to a product will not exceed the amount you paid for
              that product.
            </>,
          ],
        },
        {
          heading: "Changes to these Terms",
          paragraphs: [
            <>
              We may update these Terms from time to time. The &quot;Last
              updated&quot; date at the top of this page shows when they were
              last changed. Continued use of the site after a change means you
              accept the updated Terms.
            </>,
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            <>
              Questions about these Terms: <MailLink addr="hello@outinthecode.com" />{" "}
              or use our{" "}
              <a
                href="/contact"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                contact page
              </a>
              .
            </>,
          ],
        },
      ]}
    />
  )
}
