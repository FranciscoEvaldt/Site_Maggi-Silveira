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
      </div>
    </footer>
  )
}
