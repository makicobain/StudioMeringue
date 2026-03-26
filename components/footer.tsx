import Link from 'next/link'

const footerLinks = {
  navigation: [
    { href: '/', label: 'Accueil' },
    { href: '/projets', label: 'Projets' },
    { href: '/equipe', label: "L'équipe" },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/mentions-legales', label: 'Mentions légales' },
  ],
  social: [
    { href: 'https://instagram.com/studio.meringue', label: 'Instagram' },
    { href: 'linkedin.com/company/studio-meringué', label: 'LinkedIn' },

  

  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-serif text-2xl font-semibold tracking-tight"
            >
              Studio Meringué
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm leading-relaxed">
              Micro-agence créative spécialisée en graphisme, identité visuelle
              et ux/ui design. 
            </p>
            <div className="mt-6">
              <a
                href="mailto:hello@studiomeringue.fr"
                className="gradient-text font-medium hover:opacity-80 transition-opacity"
              >
                hello@studiomeringue.fr
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Suivez-nous
            </h3>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Studio Meringué. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
