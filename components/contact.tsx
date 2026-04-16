"use client";

import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-4">
            Entre em contato
          </p>

          <p className="text-3xl md:text-3xl font-semibold text-foreground mb-6">
            Precisa de orientação jurídica sólida e estratégica? Entre em
            contato conosco.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* INFO */}
          <div className="lg:col-span-2 space-y-6">
            {/* ITEM */}
            {[
              {
                icon: MapPin,
                title: "Localização",
                content: (
                  <a
                    href="https://www.google.com/maps?q=Rua+Nossa+Senhora+dos+Navegantes,+130,+Torres+RS"
                    target="_blank"
                    className="text-sm text-muted-foreground hover:text-accent transition"
                  >
                    Rua Nossa Senhora dos Navegantes, nº 130
                    <br />
                    Torres/RS
                  </a>
                ),
              },
              {
                icon: Phone,
                title: "Telefone",
                content: (
                  <>
                    <a
                      href="tel:+5551999204815"
                      className="block text-sm text-muted-foreground hover:text-accent"
                    >
                      (51) 99920-4815
                    </a>
                    <a
                      href="https://wa.me/5551999204815"
                      target="_blank"
                      className="text-sm text-green-600 hover:underline"
                    >
                      WhatsApp
                    </a>
                  </>
                ),
              },
              {
                icon: Mail,
                title: "Email",
                content: (
                  <a
                    href="mailto:maggiesilveira.adv@gmail.com"
                    className="text-sm text-muted-foreground hover:text-accent"
                  >
                    maggiesilveira.adv@gmail.com
                  </a>
                ),
              },
              {
                icon: Instagram,
                title: "Instagram",
                content: (
                  <a
                    href="https://instagram.com/maggisilveira.adv"
                    target="_blank"
                    className="text-sm text-muted-foreground hover:text-accent transition"
                  >
                    @maggisilveira.adv
                  </a>
                ),
              },
              {
                icon: Clock,
                title: "Horário",
                content: (
                  <p className="text-sm text-muted-foreground">
                    Segunda a sexta
                    <br />
                    9h00 – 12h00
                    <br />
                    13h30 – 18h00
                  </p>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex gap-4 p-4 rounded-lg hover:bg-card hover:shadow-md transition-all duration-300"
              >
                {/* LINHA DOURADA */}
                <div className="absolute left-0 top-0 h-full w-1 bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"></div>

                <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-md group-hover:scale-110 transition">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  {item.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* MAPA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="relative w-full h-[350px] rounded-xl overflow-hidden border border-border shadow-md">
              <iframe
                src="https://www.google.com/maps?q=Rua+Nossa+Senhora+dos+Navegantes,+130,+Torres+RS&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            <p className="text-center text-muted-foreground">
              Fale conosco diretamente pelo WhatsApp ou venha até nosso
              escritório.
            </p>

            {/* BOTÕES */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5551999204815"
                target="_blank"
                className="flex-1"
              >
                <Button className="w-full relative overflow-hidden bg-green-600 hover:bg-green-700 text-white shadow-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                  <span className="relative z-10">Falar pelo WhatsApp</span>

                  {/* brilho animado */}
                  <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"></span>
                </Button>
              </a>

              <a
                href="https://www.google.com/maps?q=Rua+Nossa+Senhora+dos+Navegantes,+130,+Torres+RS"
                target="_blank"
                className="flex-1"
              >
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                >
                  Ver localização
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
