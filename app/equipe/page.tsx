import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { TeamGrid } from '@/components/team/team-grid'

export const metadata: Metadata = {
  title: "L'équipe — Studio Meringué",
  description: "Découvrez l'équipe de Studio Meringué, une micro-agence créative spécialisée en graphisme, identité visuelle et UX/UI design.",
}

export default function TeamPage() {
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
              L'équipe
            </p>
           
<h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight max-w-4xl">
  Découvrez-nous !
</h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Des esprits créatifs qui conçoivent des expériences digitales pensées avec soin,
              pour les humains qui les utiliseront.
            </p>
          </div>
        </section>

        {/* Team grid */}
        <TeamGrid />
      </main>
      <Footer />
      <ThemeToggle />
    </ThemeProvider>
  )
}