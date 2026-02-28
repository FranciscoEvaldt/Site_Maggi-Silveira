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
    description:
      "Assessoria em negociações, regularizações, incorporações, condomínios e estruturação jurídica de negócios imobiliários.",
  },
  {
    icon: Gavel,
    title: "Direito Ambiental",
    description:
      "Consultoria e atuação em questões ambientais, licenciamento, responsabilidade ambiental e adequação normativa.",
  },
  {
    icon: FileText,
    title: "Contratos",
    description:
      "Elaboração, análise e revisão contratual com foco na segurança jurídica e prevenção de litígios.",
  },
  {
    icon: Briefcase,
    title: "Direito Obrigacional",
    description:
      "Atuação em relações obrigacionais, responsabilidade civil e cumprimento de obrigações contratuais e legais.",
  },
  {
    icon: Users,
    title: "Direito de Família e Sucessões",
    description:
      "Atuação em divórcios, guarda, alimentos, inventários e planejamento sucessório.",
  },
  {
    icon: Shield,
    title: "Direito Civil",
    description:
      "Atuação em demandas cíveis diversas, com condução estratégica de processos judiciais e administrativos.",
  },
  {
    icon: Shield,
    title: "Direito do Trabalho",
    description:
      "Defesa e acompanhamento em reclamações trabalhistas, consultoria preventiva e gestão de passivos.",
  },
  {
    icon: Shield,
    title: "Direito Previdenciário",
    description:
      "Atuação na concessão, revisão e restabelecimento de benefícios previdenciários, incluindo aposentadorias, pensões, auxílios e benefícios por incapacidade, tanto na esfera administrativa quanto judicial.",
  },
  {
    icon: Shield,
    title: "Direito de Transporte",
    description:
      "Assessoria e atuação em demandas envolvendo transporte público e privado, responsabilidade civil de transportadoras, contratos de transporte, questões regulatórias e litígios relacionados ao setor.",
  },
  {
    icon: Shield,
    title: "Direito de Trânsito",
    description:
      "Atuação em processos administrativos e judiciais relacionados a infrações e penalidades de trânsito.",
  },
  {
    icon: Shield,
    title: "Assessoria Extrajudicial",
    description:
      "Soluções estratégicas fora do âmbito judicial, com foco na prevenção de conflitos e na resolução célere de demandas.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="group bg-card p-8 border border-border hover:border-accent/50 transition-all duration-300"
            >
              <area.icon className="h-10 w-10 text-accent mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
