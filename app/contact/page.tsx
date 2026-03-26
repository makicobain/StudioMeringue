import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { ContactForm } from '@/components/contact/contact-form'
import { Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Studio Meringué',
  description: 'Contactez Studio Meringué pour discuter de votre projet. Graphisme, identité visuelle, design éditorial à Paris.',
}

const socialLinks = [
  { href: 'https://instagram.com/studio.meringue', label: 'Instagram' },
  { href: 'linkedin.com/company/studio-meringué', label: 'LinkedIn' },


]

export default function ContactPage() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Contact
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight max-w-4xl mb-8">
              Parlons de votre <span className="gradient-text">projet</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Une idée, un projet, une question ? N&apos;hésitez pas à nous contacter. 
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        </section>

        {/* Contact content */}
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Contact info */}
              <div className="lg:col-span-1 space-y-10">
                <div>
                  <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                    Email
                  </h2>
                  <a
                    href="mailto:hello@studiomeringue.fr"
                    className="flex items-center gap-3 text-lg hover:text-accent transition-colors"
                  >
                    <Mail className="h-5 w-5 text-accent" />
                    hello@studiomeringue.fr
                  </a>
                </div>

               


                <div>
                  <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                    Suivez-nous
                  </h2>
                  <div className="flex flex-col gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nous répondons généralement sous 48h ouvrées. Pour les demandes urgentes, 
                    privilégiez l&apos;email direct.
                  </p>
                </div>
              </div>

              {/* Contact form */}
              <div className="lg:col-span-2">
                <div className="p-8 md:p-12 rounded-2xl bg-secondary/50 border border-border">
                  <h2 className="font-serif text-2xl font-medium mb-8">
                    Envoyez-nous un message
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ThemeToggle />
    </ThemeProvider>
  )
}
