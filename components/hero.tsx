import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/elegant-law-firm-office-interior-with-dark-wood-pa.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <p className="text-accent text-sm tracking-widest uppercase mb-6">Distinguished Legal Counsel</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-8 text-balance">
            Protecting Your Interests with Precision and Integrity
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl">
            For over 50 years, Morrison & Associates has provided exceptional legal representation to individuals and
            businesses. We combine deep expertise with personalized attention to achieve the best possible outcomes for
            our clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8" asChild>
              <Link href="#contact">
                Agende uma Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 bg-transparent"
              asChild
            >
              <Link href="#practice-areas">Nossas Áreas de Atuação</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-primary-foreground/20">
          {[
            { number: "50+", label: "Anos de experiência" },
            { number: "2,500+", label: "Casos vencidos" },
            { number: "98%", label: "Taxa de sucesso" },
            { number: "24/7", label: "Suporte ao cliente" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-semibold text-accent mb-2">{stat.number}</p>
              <p className="text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
