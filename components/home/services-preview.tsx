'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Palette, BookOpen, Monitor, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Identité Visuelle',
    description: 'Logo, charte graphique, système de marque complet pour affirmer votre singularité.',
    href: '/services#identite-visuelle',
  },
  {
    icon: BookOpen,
    title: 'Design Éditorial',
    description: 'Mise en page, direction artistique de publications, livres et magazines.',
    href: '/services#editorial',
  },
  {
    icon: Monitor,
    title: 'Digital',
    description: 'Web design, interfaces utilisateur, présence digitale cohérente.',
    href: '/services#digital',
  },
  {
    icon: Sparkles,
    title: 'Direction Artistique',
    description: 'Accompagnement créatif global, de la conception à la réalisation.',
    href: '/services#direction-artistique',
  },
]

export function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null)

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

    const items = sectionRef.current?.querySelectorAll('.service-item')
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Expertises
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
            Ce que nous<br />
            <span className="gradient-text">faisons le mieux</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="service-item group relative p-8 rounded-lg bg-background border border-border hover:border-accent/50 transition-all duration-500 opacity-0 translate-y-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="inline-flex p-3 rounded-lg bg-secondary mb-6 group-hover:gradient-bg transition-all duration-500">
                    <service.icon className="h-6 w-6 text-foreground group-hover:text-background transition-colors duration-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="flex-shrink-0 p-2 rounded-full border border-border group-hover:border-accent group-hover:text-accent transition-all duration-300">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 gradient-bg text-background font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Découvrir nos services
          </Link>
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
