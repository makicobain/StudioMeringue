'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg opacity-5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight mb-6">
            Un projet en tête ?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Discutons de vos ambitions créatives. Nous serions ravis d&apos;échanger 
            sur votre projet et de voir comment nous pouvons vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 gradient-bg text-background font-medium rounded-full hover:opacity-90 transition-all duration-300"
            >
              Démarrer un projet
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:hello@studiomeringue.fr"
              className="inline-flex items-center justify-center px-8 py-4 border border-border font-medium rounded-full hover:bg-secondary transition-colors"
            >
              hello@studiomeringue.fr
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
