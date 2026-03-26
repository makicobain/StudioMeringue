import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { Hero } from '@/components/home/hero'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { ServicesPreview } from '@/components/home/services-preview'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Navigation />
      <main>
        <Hero />
        <FeaturedProjects />
        <ServicesPreview />
        <CTASection />
      </main>
      <Footer />
      <ThemeToggle />
    </ThemeProvider>
  )
}
