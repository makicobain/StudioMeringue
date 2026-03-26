'use client'

import { useState, useEffect, useRef } from 'react'
import { projects, categories } from '@/lib/data/projects'
import { ProjectCard } from '@/components/project-card'
import { cn } from '@/lib/utils'

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('tous')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isAnimating, setIsAnimating] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsAnimating(true)
    
    const timeout = setTimeout(() => {
      if (activeFilter === 'tous') {
        setFilteredProjects(projects)
      } else {
        setFilteredProjects(projects.filter(p => p.category === activeFilter))
      }
      setIsAnimating(false)
    }, 300)

    return () => clearTimeout(timeout)
  }, [activeFilter])

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

    const cards = gridRef.current?.querySelectorAll('.project-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [filteredProjects])

  return (
    <section className="pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setActiveFilter(category.slug)}
              className={cn(
                'relative px-5 py-2.5 text-sm font-medium rounded-full border border-border/40 bg-background/30 backdrop-blur-xl backdrop-saturate-200 shadow-[0_18px_40px_rgba(0,0,0,0.15)] transition-all duration-300',
                activeFilter === category.slug
                  ? 'gradient-border gradient-text text-foreground bg-background/60 border-transparent shadow-[0_22px_55px_rgba(0,0,0,0.25)]'
                  : 'text-muted-foreground hover:text-foreground hover:border-foreground/50 hover:bg-background/50'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div
          ref={gridRef}
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-opacity duration-300',
            isAnimating ? 'opacity-0' : 'opacity-100'
          )}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.slug}
              className="project-card opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && !isAnimating && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          </div>
        )}
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
