import Link from "next/link"
import { Scale } from "lucide-react"

const footerLinks = {
  "Áreas de Prática": [
    { label: "Corporate Law", href: "#" },
    { label: "Litigation", href: "#" },
    { label: "Estate Planning", href: "#" },
    { label: "Real Estate", href: "#" },
    { label: "Family Law", href: "#" },
  ],
  Recursos: [
    { label: "Legal Blog", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Client Portal", href: "#" },
    { label: "News & Updates", href: "#" },
  ],
  Empresa: [
    { label: "Sobre nós", href: "#about" },
    { label: "Nossa equipe", href: "#" },
    { label: "Carreiras", href: "#" },
    { label: "Contato", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Scale className="h-8 w-8 text-accent" />
              <div className="flex flex-col">
                <span className="text-xl font-semibold tracking-tight">Maggi & Silveira</span>
                <span className="text-xs text-primary-foreground/70 tracking-widest uppercase">Sociedade de advogados</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-sm">
              Oferecendo assessoria jurídica de excelência, integridade e distinção há mais de 50 anos.
              Seu parceiro de confiança para lidar com questões jurídicas complexas.
            </p>
            <p className="text-sm text-primary-foreground/60">Licenciado em Torres</p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-primary-foreground">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Maggi & Silveira. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Termos de Serviço
            </Link>
            <Link
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Isenção de responsabilidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
