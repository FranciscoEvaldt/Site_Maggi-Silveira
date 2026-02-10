import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PracticeAreas } from "@/components/practice-areas"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PracticeAreas />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
""