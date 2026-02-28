"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Cíntia Maggi",
    role: "Sócio Fundador",
    image: "/team/2.jpeg",
    description: `Cíntia Maggi Scheffer é advogada inscrita na OAB/RS sob o nº 124.211, com atuação jurídica consolidada há mais de 10 anos. Iniciou sua trajetória profissional como estagiária ainda no segundo semestre da graduação, adquirindo experiência prática contínua em escritório de advocacia, o que lhe proporcionou sólida formação técnica e estratégica. Está regularmente inscrita na Ordem dos Advogados do Brasil desde 2022.

      É mestranda em Direito Ambiental pela Universidade de Caxias do Sul (UCS), especialista em Direito e Negócios Imobiliários e em Direito Processual Civil, e bacharel em Direito pela Universidade Luterana do Brasil (ULBRA) – Campus Torres.

      Sua atuação é pautada na técnica, responsabilidade e comprometimento com soluções jurídicas seguras e eficazes.`,
      lattes: "http://lattes.cnpq.br/0868179588016270",
  },
  {
    name: "Angélica Silveira",
    role: "Sócio Fundador",
    image: "/team/1.jpeg",
    description: `Angélica Vitória Oliveira Silveira é advogada inscrita na OAB/RS sob o nº 128.182, com inscrição ativa desde 2022. Iniciou sua trajetória na área jurídica ainda durante a graduação em Direito pela Universidade Luterana do Brasil (ULBRA) – Campus Torres, atuando como estagiária e adquirindo experiência prática desde os primeiros anos de formação. Possui mais de seis anos de atuação no ramo da advocacia, com vivência consolidada em escritório jurídico.

      É mestranda em Direito Ambiental pela Universidade de Caxias do Sul (UCS) e especialista em Direito Processual Civil, desenvolvendo sua atuação com dedicação, técnica e comprometimento na busca por soluções jurídicas eficazes.`,
      lattes: "http://lattes.cnpq.br/6201073218835213",
  },
];

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % team.length);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);

  const member = team[currentIndex];

  return (
    <section id="team" className="py-28 bg-primary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Nossa Equipe
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-primary-foreground">
            Profissionais que fazem a diferença
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* FOTO */}
          <div className="relative w-full max-w-md mx-auto aspect-[3/4]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-contain rounded-lg shadow-2xl"
              priority
            />
          </div>

          {/* TEXTO */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-3">
              {member.name}
            </h3>

            <p className="text-accent text-lg mb-6">{member.role}</p>

            <p className="text-primary-foreground/80 leading-relaxed whitespace-pre-line">
              {member.description}
            </p>

            <a
              href={member.lattes}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C46A3C] hover:text-[#A5552F] font-medium"
            >
              Currículo Lattes →
            </a>

            {/* CONTROLES */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Button
                size="icon"
                onClick={prev}
                className="bg-[#C46A3C] hover:bg-[#A5552F] text-white border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {team.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-accent w-6"
                        : "bg-primary-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                size="icon"
                onClick={next}
                className="bg-[#C46A3C] hover:bg-[#A5552F] text-white border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
