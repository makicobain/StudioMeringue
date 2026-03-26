'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ProjectCard } from '@/components/project-card'
import { getFeaturedProjects } from '@/lib/data/projects'
import { ArrowRight } from 'lucide-react'

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null)
  const projects = getFeaturedProjects().slice(0, 4)

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

    const cards = sectionRef.current?.querySelectorAll('.project-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
              Projets<br />
              <span className="gradient-text">sélectionnés</span>
            </h2>
          </div>
          <Link
            href="/projets"
            className="group inline-flex items-center gap-2 text-foreground font-medium hover:opacity-70 transition-opacity"
          >
            Voir tous les projets
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="project-card opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard
                project={project}
                index={index}
                variant={index === 0 || index === 3 ? 'large' : 'default'}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
