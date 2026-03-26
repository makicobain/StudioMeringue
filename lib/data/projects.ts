export type ProjectCategory = 'identite-visuelle' | 'editorial' | 'digital' | 'packaging'

export interface Project {
  slug: string
  title: string
  client: string
  category: ProjectCategory
  categoryLabel: string
  year: string
  excerpt: string
  description: string
  challenge: string
  solution: string
  result: string
  coverImage: string
  images: string[]
  services: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'maison-lumiere',
    title: 'Maison Lumière',
    client: 'Maison Lumière',
    category: 'identite-visuelle',
    categoryLabel: 'Identité Visuelle',
    year: '2024',
    excerpt: 'Refonte complète de l\'identité d\'une maison de parfumerie artisanale parisienne.',
    description: 'Maison Lumière est une parfumerie artisanale parisienne qui souhaitait affirmer son positionnement haut de gamme tout en conservant l\'authenticité de son savoir-faire centenaire.',
    challenge: 'Créer une identité qui conjugue tradition et modernité, capable de séduire une clientèle internationale tout en préservant l\'âme de la maison.',
    solution: 'Nous avons développé un système visuel épuré jouant sur les contrastes : une typographie serif élégante associée à des éléments graphiques minimalistes, le tout rehaussé par une palette de dorés subtils.',
    result: 'La nouvelle identité a été déployée sur l\'ensemble des supports et a contribué à une augmentation de 45% des ventes en boutique.',
    coverImage: '/images/projects/maison-lumiere-cover.jpg',
    images: [
      '/images/projects/maison-lumiere-1.jpg',
      '/images/projects/maison-lumiere-2.jpg',
      '/images/projects/maison-lumiere-3.jpg',
    ],
    services: ['Direction artistique', 'Logo', 'Charte graphique', 'Packaging'],
    featured: true,
  },
  {
    slug: 'revue-oblique',
    title: 'Revue Oblique',
    client: 'Éditions Oblique',
    category: 'editorial',
    categoryLabel: 'Éditorial',
    year: '2024',
    excerpt: 'Direction artistique et mise en page d\'une revue culturelle trimestrielle.',
    description: 'Revue Oblique est une publication culturelle qui explore les marges de l\'art contemporain. Le projet consistait à créer une identité éditoriale audacieuse.',
    challenge: 'Concevoir un système de mise en page flexible capable de s\'adapter à des contenus très variés tout en maintenant une cohérence forte.',
    solution: 'Nous avons créé une grille modulaire permettant des compositions dynamiques, associée à une typographie expressive et un usage audacieux de la couleur.',
    result: 'La revue a été saluée par la presse spécialisée et a vu son nombre d\'abonnés doubler en un an.',
    coverImage: '/images/projects/revue-oblique-cover.jpg',
    images: [
      '/images/projects/revue-oblique-1.jpg',
      '/images/projects/revue-oblique-2.jpg',
      '/images/projects/revue-oblique-3.jpg',
    ],
    services: ['Direction artistique', 'Design éditorial', 'Typographie'],
    featured: true,
  },
  {
    slug: 'atelier-verde',
    title: 'Atelier Verde',
    client: 'Atelier Verde',
    category: 'identite-visuelle',
    categoryLabel: 'Identité Visuelle',
    year: '2023',
    excerpt: 'Création de l\'univers visuel d\'un studio de design végétal.',
    description: 'Atelier Verde est un studio de design végétal qui crée des installations botaniques pour les espaces professionnels et résidentiels.',
    challenge: 'Traduire visuellement la philosophie du studio : l\'alliance entre nature et architecture, organique et géométrique.',
    solution: 'Nous avons développé une identité où les formes végétales rencontrent les lignes architecturales, avec une palette de verts profonds et de tons neutres.',
    result: 'L\'identité a permis au studio de se positionner sur le segment haut de gamme et d\'attirer une clientèle corporate prestigieuse.',
    coverImage: '/images/projects/atelier-verde-cover.jpg',
    images: [
      '/images/projects/atelier-verde-1.jpg',
      '/images/projects/atelier-verde-2.jpg',
      '/images/projects/atelier-verde-3.jpg',
    ],
    services: ['Identité visuelle', 'Logo', 'Papeterie', 'Site web'],
    featured: true,
  },
  {
    slug: 'cafe-noctambule',
    title: 'Café Noctambule',
    client: 'Café Noctambule',
    category: 'packaging',
    categoryLabel: 'Packaging',
    year: '2023',
    excerpt: 'Packaging et identité pour une torréfaction artisanale nocturne.',
    description: 'Café Noctambule est une torréfaction artisanale qui ne travaille que la nuit, créant des assemblages uniques inspirés par l\'atmosphère nocturne de Paris.',
    challenge: 'Capturer l\'essence de cette approche singulière et créer un packaging distinctif sur un marché très concurrentiel.',
    solution: 'Nous avons créé un univers visuel nocturne avec des illustrations originales évoquant Paris la nuit, imprimées sur des sachets kraft haut de gamme.',
    result: 'Le packaging a remporté un prix de design et a contribué à tripler les ventes en ligne.',
    coverImage: '/images/projects/cafe-noctambule-cover.jpg',
    images: [
      '/images/projects/cafe-noctambule-1.jpg',
      '/images/projects/cafe-noctambule-2.jpg',
      '/images/projects/cafe-noctambule-3.jpg',
    ],
    services: ['Identité visuelle', 'Packaging', 'Illustration'],
    featured: true,
  },
  {
    slug: 'studio-horizon',
    title: 'Studio Horizon',
    client: 'Studio Horizon',
    category: 'digital',
    categoryLabel: 'Digital',
    year: '2023',
    excerpt: 'Site web et présence digitale pour un studio d\'architecture.',
    description: 'Studio Horizon est un jeune studio d\'architecture spécialisé dans les projets résidentiels durables.',
    challenge: 'Créer une présence digitale qui mette en valeur les projets architecturaux tout en reflétant l\'approche moderne et durable du studio.',
    solution: 'Nous avons conçu un site web épuré avec une navigation immersive, privilégiant les grandes images et les transitions fluides.',
    result: 'Le site a généré une augmentation de 200% des demandes de projets via le formulaire de contact.',
    coverImage: '/images/projects/studio-horizon-cover.jpg',
    images: [
      '/images/projects/studio-horizon-1.jpg',
      '/images/projects/studio-horizon-2.jpg',
      '/images/projects/studio-horizon-3.jpg',
    ],
    services: ['Direction artistique', 'Web design', 'Développement'],
    featured: false,
  },
  {
    slug: 'les-editions-du-soir',
    title: 'Les Éditions du Soir',
    client: 'Les Éditions du Soir',
    category: 'editorial',
    categoryLabel: 'Éditorial',
    year: '2022',
    excerpt: 'Collection de livres d\'art et direction éditoriale.',
    description: 'Les Éditions du Soir publient des ouvrages d\'art et de photographie en éditions limitées.',
    challenge: 'Créer une collection cohérente tout en permettant à chaque ouvrage de conserver sa singularité.',
    solution: 'Nous avons développé un système de collection flexible avec des constantes (format, papier, reliure) et des variables (mise en page, typographie complémentaire).',
    result: 'La collection est devenue une référence dans le milieu de l\'édition d\'art indépendante.',
    coverImage: '/images/projects/editions-soir-cover.jpg',
    images: [
      '/images/projects/editions-soir-1.jpg',
      '/images/projects/editions-soir-2.jpg',
      '/images/projects/editions-soir-3.jpg',
    ],
    services: ['Direction éditoriale', 'Mise en page', 'Production'],
    featured: false,
  },
]

export const categories = [
  { slug: 'tous', label: 'Tous les projets' },
  { slug: 'identite-visuelle', label: 'Identité Visuelle' },

  { slug: 'uxui', label: 'UX/UI Design' },
  { slug: 'affiches', label: 'Affiches' },

]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'tous') return projects
  return projects.filter(p => p.category === category)
}
