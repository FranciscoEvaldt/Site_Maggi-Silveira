import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PracticeAreas } from "@/components/practice-areas"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PracticeAreas />
      <About />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
""