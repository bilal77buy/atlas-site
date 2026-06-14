import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface ServiceHeroProps {
  badge: string
  title: string
  description: string
  primaryCTA?: string
  secondaryCTA?: string
}

export default function ServiceHero({
  badge,
  title,
  description,
  primaryCTA = 'Demander un audit',
  secondaryCTA = 'Voir la méthodologie',
}: ServiceHeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-muted/20 via-transparent to-transparent pointer-events-none" />
      <div className="section-container relative">
        <span className="badge mb-6 inline-block">{badge}</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-6">
          {title}
        </h1>
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="btn-primary">
            {primaryCTA} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/methodologie" className="btn-secondary">
            {secondaryCTA}
          </Link>
        </div>
      </div>
    </section>
  )
}
