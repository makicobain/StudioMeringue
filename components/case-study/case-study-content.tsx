'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { type Project, projects } from '@/lib/data/projects'
import { ProjectCard } from '@/components/project-card'
import { ArrowLeft } from 'lucide-react'

interface CaseStudyContentProps {
  project: Project
}

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = contentRef.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.slug !== project.slug)
    .slice(0, 2)

  return (
    <div ref={contentRef}>
      {/* Hero */}
      <section className="relative">
        {/* Back link */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux projets
          </Link>
        </div>

        {/* Hero content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            <div>
              <span className="inline-block px-4 py-2 text-sm font-medium rounded-full gradient-bg text-background mb-6">
                {project.categoryLabel}
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.excerpt}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  Client
                </p>
                <p className="text-lg">{project.client}</p>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  Année
                </p>
                <p className="text-lg">{project.year}</p>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  Services
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 text-sm border border-border rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cover image */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-muted">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Context */}
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <h2 className="font-serif text-3xl font-medium mb-6">Contexte</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge */}
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 mb-16" style={{ transitionDelay: '100ms' }}>
            <h2 className="font-serif text-3xl font-medium mb-6">Le défi</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 mb-16" style={{ transitionDelay: '200ms' }}>
            <h2 className="font-serif text-3xl font-medium mb-6">Notre approche</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Result */}
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '300ms' }}>
            <h2 className="font-serif text-3xl font-medium mb-6">Résultat</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div
                key={image}
                className="fade-in opacity-0 translate-y-8 transition-all duration-700 relative aspect-[4/3] rounded-lg overflow-hidden bg-muted"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="py-24 md:py-32 bg-secondary/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12">
              Projets similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard
                  key={relatedProject.slug}
                  project={relatedProject}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Discutons de vos ambitions créatives.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 gradient-bg text-background font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Démarrer un projet
          </Link>
        </div>
      </section>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  )
}
