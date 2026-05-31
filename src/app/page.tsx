import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { Ticker } from "@/components/Ticker"
import { Products } from "@/components/Products"
import { EmailCapture } from "@/components/EmailCapture"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Ticker />
      <Products />
      <EmailCapture />
      <Footer />
    </main>
  )
}
