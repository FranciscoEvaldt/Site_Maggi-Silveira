import { Award, BookOpen, Scale } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/team/3.jpeg"
              alt="Our team of experienced attorneys"
              className="w-full h-[500px] object-cover"
            />
            
          </div>

          {/* Content */}
          <div>
            <p className="text-3xl md:text-4xl text-accent text-sm tracking-widest uppercase mb-4">
              Sobre nossa empresa
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              O Maggi & Silveira Advogados Associados, com sede em Torres/RS, é
              um escritório de advocacia comprometido com a resolução
              qualificada de demandas jurídicas de média e alta complexidade,
              atuando de forma consultiva, contenciosa e extrajudicial, sempre
              com abordagem técnica e estratégica.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Nossa atuação vai além da solução do conflito já instaurado.
              Trabalhamos com planejamento jurídico e estratégia preventiva,
              oferecendo ao cliente uma análise criteriosa de riscos e cenários,
              possibilitando decisões seguras e bem fundamentadas. Também
              desenvolvemos soluções na esfera extrajudicial, priorizando,
              sempre que possível, medidas céleres e eficazes para a prevenção e
              resolução de conflitos.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Prezamos por um atendimento humanizado e próximo, compreendendo
              que cada cliente possui necessidades específicas e merece
              acompanhamento individualizado, com clareza, transparência e
              responsabilidade. Realizamos atendimentos presenciais em noso
              escritório, em Torres, e também de forma online, garantindo
              acessibilidade e praticidade.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Técnica, ética, estratégia e excelência são os pilares que
              sustentam nossa atuação. Nossa equipe mantém constante atualização
              acadêmica e profissional, assegurando uma prestação de serviços
              jurídicos moderna, segura e alinhada às melhores práticas.{" "}
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}
