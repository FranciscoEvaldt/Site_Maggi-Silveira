import Link from "next/link";
import { Scale, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  "Áreas de Atuação": [
    { label: "Direito Civil", href: "#practice-areas" },
    { label: "Direito Imobiliário", href: "#practice-areas" },
    { label: "Direito Ambiental", href: "#practice-areas" },
    { label: "Direito do Trabalho", href: "#practice-areas" },
    { label: "Direito Previdenciário", href: "#practice-areas" },
  ],
  Escritório: [
    { label: "Sobre nós", href: "#about" },
    { label: "Nossa equipe", href: "#team" },
    { label: "Áreas de atuação", href: "#practice-areas" },
    { label: "Contato", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + descrição */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-8 w-8 text-accent" />
              <span className="text-lg font-semibold">Maggi & Silveira</span>
            </div>

            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Sociedade de advogados dedicada a oferecer soluções jurídicas
              estratégicas, com atendimento personalizado e compromisso com a
              excelência profissional.
            </p>

            <p className="text-xs text-primary-foreground/50 mt-4">
              Angélica Vitória Oliveira Silveira – OAB/RS 128.182
            </p>

            <p className="text-xs text-primary-foreground/50 mt-4">
              Cíntia Maggi Scheffer - OAB/RS 124.211
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold mb-4 tracking-wider uppercase">
                {title}
              </h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contato */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wider uppercase">
              Contato
            </h3>

            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                maggiesilveira.adv@gmail.com
              </li>

              <li className="flex items-center gap-3">
                <Phone size={16} />
                (51) 99920-4815
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={16} />
                Torres – RS
              </li>
            </ul>
          </div>
        </div>

        {/* aviso institucional OAB */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-xs text-primary-foreground/50 text-center max-w-2xl mx-auto">
            Este site possui caráter exclusivamente informativo e institucional,
            em conformidade com o Código de Ética da Ordem dos Advogados do
            Brasil (OAB). As informações aqui disponibilizadas não constituem
            aconselhamento jurídico.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Maggi & Silveira Sociedade de
            Advogados. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <Link
              href="/politica-de-privacidade"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Política de Privacidade
            </Link>

            <Link
              href="/termos-de-uso"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Termos de Uso
            </Link>

            <Link
              href="/isencao-de-responsabilidade"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Isenção de Responsabilidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
