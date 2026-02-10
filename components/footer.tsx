import Link from "next/link"
import { Scale } from "lucide-react"

const footerLinks = {
  "Practice Areas": [
    { label: "Corporate Law", href: "#" },
    { label: "Litigation", href: "#" },
    { label: "Estate Planning", href: "#" },
    { label: "Real Estate", href: "#" },
    { label: "Family Law", href: "#" },
  ],
  Resources: [
    { label: "Legal Blog", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Client Portal", href: "#" },
    { label: "News & Updates", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
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
                <span className="text-xl font-semibold tracking-tight">Morrison & Associates</span>
                <span className="text-xs text-primary-foreground/70 tracking-widest uppercase">Attorneys at Law</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-sm">
              Providing distinguished legal counsel with integrity and excellence for over 50 years. Your trusted
              partner in navigating complex legal matters.
            </p>
            <p className="text-sm text-primary-foreground/60">Licensed in New York, New Jersey, and Connecticut</p>
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
            © {new Date().getFullYear()} Morrison & Associates. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
