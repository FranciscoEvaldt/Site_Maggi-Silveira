import {
  Briefcase,
  Building2,
  Users,
  FileText,
  Shield,
  Gavel,
} from "lucide-react";

const practiceAreas = [
  {
    icon: Building2,
    title: "Direito Imobiliário",
    description: "",
  },
  {
    icon: Gavel,
    title: "Direito Ambiental",
    description: "",
  },
  {
    icon: FileText,
    title: "Contratos",
    description: "",
  },
  {
    icon: Briefcase,
    title: "Direito Obrigacional",
    description:
      "",
  },
  {
    icon: Users,
    title: "Direito de Família e Sucessões",
    description:
      "",
  },
  {
    icon: Shield,
    title: "Direito Civil",
    description:
      "",
  },
  {
    icon: Shield,
    title: "Direito do Trabalho",
    description:
      "",
  },
  {
    icon: Shield,
    title: "Direito Previdenciário",
    description:
      "",
  },
  {
    icon: Shield,
    title: "Direito de Transporte",
    description:
      "",
  },
  {
    icon: Shield,
    title: "Direito de Trânsito",
    description:
      "",
  },
  {
    icon: Shield,
    title: "Assessoria Extrajudicial",
    description:
      "",
  },
];

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-4">
            O que fazemos
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Nossas Áreas de Atuação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Prestamos serviços jurídicos abrangentes em múltiplas áreas do
            Direito, desenvolvendo soluções estratégicas e personalizadas,
            estruturadas de acordo com as necessidades e particularidades de
            cada cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="group bg-card p-8 border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <area.icon className="h-10 w-10 text-accent flex-shrink-0" />

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
