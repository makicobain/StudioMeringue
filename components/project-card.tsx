'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { type Project } from '@/lib/data/projects'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  index?: number
  variant?: 'default' | 'large'
}

export function ProjectCard({ project, index = 0, variant = 'default' }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      ref={cardRef}
      href={`/projets/${project.slug}`}
      className={cn(
        'group relative block overflow-hidden rounded-lg bg-secondary',
        variant === 'large' ? 'aspect-[4/3]' : 'aspect-[3/4]'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Image */}
      <div className="absolute inset-0 bg-muted">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className={cn(
            'object-cover transition-transform duration-700',
            isHovered ? 'scale-105' : 'scale-100'
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent transition-opacity duration-500',
            isHovered ? 'opacity-100' : 'opacity-60'
          )}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {/* Category badge */}
        <span
          className={cn(
            'self-start px-3 py-1 text-xs font-medium rounded-full bg-background/90 text-foreground backdrop-blur-sm mb-4 transition-transform duration-500',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          )}
        >
          {project.categoryLabel}
        </span>

        {/* Title & year */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3
              className={cn(
                'font-serif text-2xl md:text-3xl font-medium text-background transition-transform duration-500',
                isHovered ? 'translate-y-0' : 'translate-y-2'
              )}
            >
              {project.title}
            </h3>
            <p
              className={cn(
                'mt-1 text-sm text-background/70 transition-all duration-500 delay-75',
                isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              )}
            >
              {project.year} — {project.client}
            </p>
          </div>

          {/* Arrow */}
          <div
            className={cn(
              'flex-shrink-0 p-3 rounded-full bg-background text-foreground transition-all duration-500',
              isHovered ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-4 opacity-0 rotate-45'
            )}
          >
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </Link>
  )
}
