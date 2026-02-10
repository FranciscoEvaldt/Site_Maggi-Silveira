import { Award, BookOpen, Scale } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/professional-lawyers-in-elegant-office-conference-.jpg"
              alt="Our team of experienced attorneys"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 hidden md:block">
              <p className="text-4xl font-semibold text-accent mb-2">50+</p>
              <p className="text-primary-foreground text-sm">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent text-sm tracking-widest uppercase mb-4">
              Sobre nossa empresa
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
              Um legado de excelência jurídica
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fundada em 2025, a Maggi & Silveira construiu uma reputação de
              excelência na prestação de serviços jurídicos, com um compromisso
              inabalável com nossos clientes. Nossa equipe de advogados
              renomados reúne décadas de experiência em diversas áreas de
              atuação.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Acreditamos na construção de relacionamentos duradouros com nossos
              clientes, compreendendo seus desafios únicos e fornecendo
              consultoria estratégica que gera resultados. Nossa abordagem
              combina valores tradicionais com estratégias jurídicas inovadoras.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {[
                {
                  icon: Scale,
                  title: "Integridade",
                  description:
                    "Mantemos os mais altos padrões éticos em todos os casos que analisamos.",
                },
                {
                  icon: Award,
                  title: "Excelência",
                  description:
                    "Nosso histórico demonstra nosso compromisso com resultados superiores.",
                },
                {
                  icon: BookOpen,
                  title: "Experiência",
                  description:
                    "O profundo conhecimento em diversas áreas de atuação garante uma assessoria completa.",
                },
              ].map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
