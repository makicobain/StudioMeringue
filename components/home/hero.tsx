'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full gradient-bg opacity-10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full gradient-bg opacity-5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <p className="mb-8 text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Studio créatif — Entre Nice & Toulon
          </p>

          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className={`block transition-all duration-300 ${isHovered ? 'gradient-text' : 'text-foreground'}`}>
              Graphisme
            </span>
            <span className={`block transition-all duration-300 ${isHovered ? 'gradient-text' : 'text-foreground'}`}>
              &amp; UX/UI Design
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Studio Meringué est une micro-agence créative spécialisée en graphisme,
            identité visuelle et ux/ui design.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/projets"
              className="btn-primary group inline-flex items-center justify-center gap-2 px-8 py-4 font-medium rounded-full"
            >
              Découvrir nos projets
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="btn-outline inline-flex items-center justify-center px-8 py-4 font-medium rounded-full"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted-foreground rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
