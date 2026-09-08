import type { Metadata } from "next"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Privacy Policy — outinthecode",
  description:
    "Privacy Policy for outinthecode.com, including Google AdSense cookies, advertising disclosures, and how to contact us.",
}

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="relative pt-24">
        <div className="flex items-center justify-between border-b border-[#1A1A18] px-6 py-6 md:px-10">
          <span
            className="text-xs uppercase tracking-[0.4em] text-[#6B6865]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Privacy Policy
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.3em] text-[#6B6865]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Last updated — September 2026
          </span>
        </div>

        <div className="px-6 py-16 md:px-10 md:py-24">
          <p
            className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#F5A623]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Legal
          </p>

          <h1
            className="mb-10 max-w-3xl text-4xl font-black uppercase leading-none text-[#F0EDE8] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Privacy Policy
          </h1>

          <div
            className="max-w-2xl space-y-6 text-sm leading-relaxed text-[#6B6865] md:text-base"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            <p>
              Out In The Code (&quot;outinthecode,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
              outinthecode.com. This Privacy Policy explains what information we
              collect, how we use it, and the choices you have.
            </p>

            <h2
              className="pt-4 text-xl font-black uppercase text-[#F0EDE8]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Information we collect
            </h2>
            <p>
              Like most websites, our servers automatically receive standard
              technical data when you visit, including your IP address, browser
              type, referring URL, and pages viewed. This data is used in
              aggregate for site analytics and is not sold or linked to your
              identity by us. If you join our email list or contact us, we
              collect the information you voluntarily provide (such as your
              email address and message content) so we can respond and send
              updates you requested.
            </p>

            <h2
              className="pt-4 text-xl font-black uppercase text-[#F0EDE8]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Google AdSense and cookies
            </h2>
            <p>
              Third party vendors, including Google, use cookies to serve ads
              based on a user&apos;s prior visits to your website or other
              websites.
            </p>
            <p>
              Google&apos;s use of advertising cookies enables it and its
              partners to serve ads to your users based on their visit to your
              sites and/or other sites on the Internet.
            </p>
            <p>
              Users may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Ads Settings
              </a>
              . Alternatively, you can opt out of a third-party vendor&apos;s
              use of cookies for personalized advertising by visiting{" "}
              <a
                href="https://www.aboutads.info"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.aboutads.info
              </a>
              .
            </p>
            <p>
              For more information on how Google uses data when you use our
              partners&apos; sites or apps, see{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
                target="_blank"
                rel="noopener noreferrer"
              >
                How Google uses data when you use our partners&apos; sites or
                apps
              </a>
              .
            </p>
            <p>
              We may also use Google Analytics or similar tools that set cookies
              to help us understand traffic patterns in aggregate. You can
              control or disable cookies through your browser settings.
              Disabling cookies may affect some site functionality.
            </p>

            <h2
              className="pt-4 text-xl font-black uppercase text-[#F0EDE8]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              GDPR, CCPA, and similar rights
            </h2>
            <p>
              Depending on your state or country of residence, you may have
              rights regarding your personal information under laws such as the
              California Consumer Privacy Act (CCPA) or other applicable state
              privacy laws.
            </p>
            <p>
              For visitors in the EEA, UK, and Switzerland: we disclose use of
              cookies or other local storage and Google/third-party ad
              personalization as required under Google&apos;s EU User Consent
              Policy and applicable GDPR/ePrivacy rules. Where required, we
              obtain consent (including via a Google-certified CMP / IAB TCF
              where used) and you may withdraw consent as described in any
              consent notice presented on the site.
            </p>
            <p>
              To exercise privacy rights or ask questions about this policy,
              email{" "}
              <a
                href="mailto:privacy@outinthecode.com"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                privacy@outinthecode.com
              </a>
              .
            </p>

            <h2
              className="pt-4 text-xl font-black uppercase text-[#F0EDE8]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Contact
            </h2>
            <p>
              Questions about this Privacy Policy or how your information is
              handled:{" "}
              <a
                href="mailto:privacy@outinthecode.com"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                privacy@outinthecode.com
              </a>
              . General inquiries:{" "}
              <a
                href="mailto:hello@outinthecode.com"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                hello@outinthecode.com
              </a>
              . Or use our{" "}
              <a
                href="/contact"
                className="text-[#F5A623] underline underline-offset-2 hover:text-[#F0EDE8]"
              >
                Contact
              </a>{" "}
              page.
            </p>

            <p className="pt-4 text-xs uppercase tracking-[0.2em] text-[#3A3835]">
              We may update this policy from time to time. The &quot;Last
              updated&quot; date above reflects the latest revision.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
