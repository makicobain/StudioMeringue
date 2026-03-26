import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { CaseStudyContent } from '@/components/case-study/case-study-content'
import { projects, getProjectBySlug } from '@/lib/data/projects'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return {
      title: 'Projet non trouvé — Studio Meringué',
    }
  }

  return {
    title: `${project.title} — Studio Meringué`,
    description: project.excerpt,
    openGraph: {
      title: `${project.title} — Studio Meringué`,
      description: project.excerpt,
      images: [project.coverImage],
    },
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Navigation />
      <main className="pt-20">
        <CaseStudyContent project={project} />
      </main>
      <Footer />
      <ThemeToggle />
    </ThemeProvider>
  )
}
