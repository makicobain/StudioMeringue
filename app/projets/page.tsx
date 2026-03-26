import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { PortfolioGrid } from '@/components/portfolio/portfolio-grid'

export const metadata: Metadata = {
  title: 'Projets — Studio Meringué',
  description: 'Découvrez nos réalisations en graphisme, identité visuelle, design éditorial et digital. Portfolio de Studio Meringué.',
}

export default function ProjectsPage() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Navigation />
      <main className="pt-20">
        {/* Page header */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Portfolio
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight max-w-4xl">
              Nos <span className="gradient-text">réalisations</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Chaque projet est une histoire unique. Découvrez comment nous avons 
              accompagné nos clients dans la création de leur univers visuel.
            </p>
          </div>
        </section>

        {/* Portfolio grid with filters */}
        <PortfolioGrid />
      </main>
      <Footer />
      <ThemeToggle />
    </ThemeProvider>
  )
}