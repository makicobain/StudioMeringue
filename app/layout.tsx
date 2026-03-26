import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
})

const grifter = localFont({
  src: [
    {
      path: '../public/fonts/grifter-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-grifter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Studio Meringué — Graphisme & Identité Visuelle',
  description: 'Micro-agence créative spécialisée en graphisme, identité visuelle et design éditorial. Nous créons des univers visuels distinctifs pour les marques qui osent.',
  generator: 'v0.app',
  keywords: ['graphisme', 'identité visuelle', 'design éditorial', 'branding', 'logo', 'direction artistique', 'studio créatif'],
  authors: [{ name: 'Studio Meringué' }],
  openGraph: {
    title: 'Studio Meringué — Graphisme & Identité Visuelle',
    description: 'Micro-agence créative spécialisée en graphisme, identité visuelle et design éditorial.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Meringué — Graphisme & Identité Visuelle',
    description: 'Micro-agence créative spécialisée en graphisme, identité visuelle et design éditorial.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${grifter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
