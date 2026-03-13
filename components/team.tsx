"use client";

import { useState } from "react";
import Image from "next/image";

const team = [
  {
    name: "Cíntia Maggi",
    role: "Sócio Fundador",
    image: "/team/2.jpeg",
    lattes: "http://lattes.cnpq.br/0868179588016270",
    description: `Cíntia Maggi Scheffer é advogada inscrita na OAB/RS sob o nº 124.211, com atuação jurídica consolidada há mais de 10 anos. 

Iniciou sua trajetória profissional como estagiária ainda no segundo semestre da graduação, adquirindo experiência prática contínua em escritório de advocacia.

É mestranda em Direito Ambiental pela Universidade de Caxias do Sul (UCS), especialista em Direito e Negócios Imobiliários e em Direito Processual Civil, e bacharel em Direito pela Universidade Luterana do Brasil (ULBRA) – Campus Torres.

Sua atuação é pautada na técnica, responsabilidade e comprometimento com soluções jurídicas seguras e eficazes.`,
  },
  {
    name: "Angélica Silveira",
    role: "Sócio Fundador",
    image: "/team/1.jpeg",
    lattes: "http://lattes.cnpq.br/6201073218835213",
    description: `Angélica Vitória Oliveira Silveira é advogada inscrita na OAB/RS sob o nº 128.182.

Possui mais de seis anos de atuação no ramo da advocacia e experiência consolidada em escritório jurídico.

É mestranda em Direito Ambiental pela Universidade de Caxias do Sul (UCS) e especialista em Direito Processual Civil.`,
  },
];

export function Team() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <section id="team" className="py-28 bg-primary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Título */}

        <div className="text-center mb-20">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Nossa Equipe
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-primary-foreground">
            Profissionais que fazem a diferença
          </h2>
        </div>

        {/* CARDS */}

        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* overlay desktop */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 hidden md:flex items-center justify-center">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="bg-[#C46A3C] text-white px-6 py-2 rounded-md font-medium hover:scale-105 transition"
                  >
                    Ver perfil →
                  </button>
                </div>
              </div>

              {/* TEXTO */}
              <div className="p-6 text-center bg-primary-foreground/5">
                <h3 className="text-2xl font-semibold text-primary-foreground">
                  {member.name}
                </h3>

                <p className="text-accent mb-4">{member.role}</p>

                {/* botão visível no celular */}
                <button
                  onClick={() => setSelectedMember(member)}
                  className="md:hidden bg-[#C46A3C] text-white px-5 py-2 rounded-md font-medium"
                >
                  Ver perfil →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}

      {selectedMember && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50">
          <div className="bg-white max-w-2xl w-full rounded-xl p-8 relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-3xl font-semibold mb-2">
              {selectedMember.name}
            </h3>

            <p className="text-[#C46A3C] mb-6">{selectedMember.role}</p>

            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {selectedMember.description}
            </p>

            <a
              href={selectedMember.lattes}
              target="_blank"
              className="block mt-6 text-[#C46A3C] hover:text-[#A5552F] font-medium"
            >
              Currículo Lattes →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
