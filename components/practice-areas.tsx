"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Leaf,
  FileSignature,
  Users,
  ShieldCheck,
  Briefcase,
  Landmark,
  Truck,
  Car,
  FileSearch,
  X,
  MessageCircle,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

type PracticeArea = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const practiceAreas: PracticeArea[] = [
  {
    icon: Building2,
    title: "Direito Imobiliário",
    description:
      "Atuação em compra e venda de imóveis, regularização imobiliária, usucapião, análise de contratos e resolução de conflitos relacionados à propriedade.",
  },
  {
    icon: Leaf,
    title: "Direito Ambiental",
    description:
      "Assessoria jurídica em licenciamento ambiental, responsabilidade ambiental e adequação à legislação vigente.",
  },
  {
    icon: FileSignature,
    title: "Contratos",
    description:
      "Elaboração, revisão e análise de contratos civis e empresariais, garantindo segurança jurídica nas relações negociais.\n\nAtuação em demandas relacionadas ao cumprimento de obrigações, responsabilidade civil e disputas contratuais.",
  },
  {
    icon: Users,
    title: "Direito de Família e Sucessões",
    description:
      "Assessoria em divórcios, pensão alimentícia, guarda de filhos, inventários e planejamento sucessório.",
  },
  {
    icon: ShieldCheck,
    title: "Direito Civil",
    description:
      "Atuação em responsabilidade civil, indenizações e defesa de direitos em relações privadas.",
  },
  {
    icon: Briefcase,
    title: "Direito do Trabalho",
    description:
      "Defesa dos direitos trabalhistas, reclamações trabalhistas e consultoria preventiva.",
  },
  {
    icon: Landmark,
    title: "Direito Previdenciário",
    description:
      "Assessoria em aposentadorias, benefícios previdenciários e revisões junto ao INSS.",
  },
  {
    icon: Truck,
    title: "Direito de Transporte e Trânsito",
    description:
      "Consultoria jurídica em transporte de cargas e passageiros e responsabilidades legais.\n\nDefesa administrativa em multas, recursos de suspensão de CNH e processos de trânsito.",
  },
  {
    icon: FileSearch,
    title: "Assessoria Extrajudicial",
    description:
      "Consultoria jurídica preventiva e acompanhamento de negociações fora do judiciário.",
  },
];

export function PracticeAreas() {
  const [selectedArea, setSelectedArea] =
    useState<PracticeArea | null>(null);

  // 🔥 FECHAR COM ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedArea(null);
      }
    };

    if (selectedArea) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedArea]);

  return (
    <section id="practice-areas" className="py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-20">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            O que fazemos
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Áreas de Atuação
          </h2>

          <div className="w-20 h-[2px] bg-accent mx-auto mb-6"></div>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Prestamos serviços jurídicos abrangentes em diversas áreas do
            Direito, oferecendo soluções estratégicas e personalizadas para cada
            cliente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedArea(area)}
              className="group relative cursor-pointer bg-card border border-border p-8 rounded-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-accent transition duration-500"></div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-accent/10 via-transparent to-transparent"></div>

              <div className="relative flex items-start gap-5">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-500">
                  <area.icon className="h-7 w-7 text-accent transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition">
                    {area.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Clique para saber mais
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedArea && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedArea(null)}
        >
          <motion.div
            className="bg-white max-w-xl w-full rounded-2xl p-10 shadow-2xl relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-5 right-5 text-gray-500 hover:text-black"
            >
              <X size={22} />
            </button>

            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10">
                <selectedArea.icon className="h-8 w-8 text-accent" />
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-center">
              {selectedArea.title}
            </h3>

            <div className="w-14 h-[2px] bg-accent mx-auto mb-6"></div>

            <p
              style={{ whiteSpace: "pre-line", lineHeight: "1.7" }}
              className="text-muted-foreground text-lg mb-8 text-center"
            >
              {selectedArea.description}
            </p>

            <div className="text-center">
              <a
                href="https://wa.me/555199204815"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}