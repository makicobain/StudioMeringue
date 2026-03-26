import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Mentions légales — Studio Meringué',
  description: 'Mentions légales, conditions générales d\'utilisation et politique de confidentialité de Studio Meringué.',
}

export default function LegalPage() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Navigation />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-12">
              Mentions légales
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-medium mb-4">
                  Éditeur du site
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Studio Meringué<br />
                  SIRET : 92438428200019<br />
                  83000 Toulon, France<br />
                  
                  Email : hello@studiomeringue.fr
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl font-medium mb-4">
                  Directeur de la publication
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Emmanuelle Guérin<br />
                  En qualité de gérant de Studio Meringué
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl font-medium mb-4">
                  Hébergement
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vercel Inc.<br />
                  340 S Lemon Ave #4133<br />
                  Walnut, CA 91789, États-Unis
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl font-medium mb-4">
                  Propriété intellectuelle
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  L&apos;ensemble du contenu de ce site (textes, images, vidéos, graphismes, 
                  logo, icônes, etc.) est la propriété exclusive de Studio Meringué, 
                  à l&apos;exception des marques, logos ou contenus appartenant à d&apos;autres 
                  sociétés partenaires ou auteurs.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Toute reproduction, distribution, modification, adaptation, retransmission 
                  ou publication, même partielle, de ces différents éléments est strictement 
                  interdite sans l&apos;accord exprès par écrit de Studio Meringué.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl font-medium mb-4">
                  Protection des données personnelles (RGPD)
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) 
                  et à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée, 
                  vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et 
                  d&apos;opposition aux données personnelles vous concernant.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Les données collectées via le formulaire de contact sont uniquement 
                  utilisées pour répondre à vos demandes et ne sont jamais transmises 
                  à des tiers sans votre consentement explicite.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Pour exercer vos droits ou pour toute question relative à la protection 
                  de vos données, vous pouvez nous contacter à : hello@studiomeringue.fr
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl font-medium mb-4">
                  Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ce site n&apos;utilise pas de cookies à des fins publicitaires ou de tracking. 
                  Seuls des cookies techniques essentiels au bon fonctionnement du site 
                  peuvent être utilisés.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-medium mb-4">
                  Crédits
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Conception et développement : Studio Meringué<br />
                  Photographies : Studio Meringué sauf mention contraire
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ThemeToggle />
    </ThemeProvider>
  )
}
