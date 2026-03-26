'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={cn(
        'fixed bottom-6 right-6 z-50 p-3 rounded-full bg-secondary border border-border shadow-lg',
        className
      )}>
        <div className="h-5 w-5" />
      </div>
    )
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'fixed bottom-6 right-6 z-50 p-3 rounded-full bg-secondary border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110',
        className
      )}
      aria-label={resolvedTheme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-5 w-5 text-foreground" />
      ) : (
        <Moon className="h-5 w-5 text-foreground" />
      )}
    </button>
  )
}
