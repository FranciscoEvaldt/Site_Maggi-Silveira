import { Briefcase, Building2, Users, FileText, Shield, Gavel } from "lucide-react"

const practiceAreas = [
  {
    icon: Building2,
    title: "Corporate Law",
    description:
      "Strategic counsel for businesses of all sizes, from formation to complex transactions and regulatory compliance.",
  },
  {
    icon: Gavel,
    title: "Litigation",
    description: "Aggressive representation in civil disputes, commercial litigation, and complex multi-party cases.",
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description: "Comprehensive estate planning, trusts, and probate services to protect your legacy and loved ones.",
  },
  {
    icon: Briefcase,
    title: "Real Estate",
    description: "Expert guidance in commercial and residential transactions, zoning, and property disputes.",
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Compassionate representation in divorce, custody, and family matters with discretion and care.",
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    description: "Vigorous defense of your rights in criminal matters, from investigations to trial and appeal.",
  },
]

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-4">O que fazemos</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">Nossas Áreas de Atuação</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Oferecemos serviços jurídicos abrangentes em diversas áreas de atuação, fornecendo soluções sofisticadas
            específicas para atender às suas necessidades específicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="group bg-card p-8 border border-border hover:border-accent/50 transition-all duration-300"
            >
              <area.icon className="h-10 w-10 text-accent mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
