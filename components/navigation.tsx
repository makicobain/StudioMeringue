'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/projets', label: 'Projets' },
  { href: '/equipe', label: "L'équipe" },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl backdrop-saturate-150 shadow-[0_18px_45px_rgba(0,0,0,0.55)]'
          : 'border-b border-transparent bg-background/40 backdrop-blur-lg backdrop-saturate-150'
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            {/* Light mode logo */}
            <Image
              src="/WhiteHorizontalLogo.png"
              alt="Studio Meringué"
              width={120}
              height={32}
              className="hidden dark:inline-block h-8 w-auto"
              priority
            />
            {/* Dark mode logo */}
            <Image
              src="/HorizontalLogo.png"
              alt="Studio Meringué"
              width={120}
              height={32}
              className="inline-block dark:hidden h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors relative',
                  pathname === link.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                  pathname === link.href &&
                    'after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:gradient-bg'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-foreground"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background border-b border-border',
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 border-b-0'
        )}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'block py-3 text-lg font-medium transition-colors',
                pathname === link.href
                  ? 'gradient-text'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
