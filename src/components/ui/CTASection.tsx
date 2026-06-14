import Link from 'next/link'
import { ArrowRight, Shield } from 'lucide-react'

interface CTASectionProps {
  title?: string
  description?: string
  primaryCTA?: string
  primaryHref?: string
  secondaryCTA?: string
  secondaryHref?: string
}

export default function CTASection({
  title = 'Prêt à tester la résistance de votre SI ?',
  description = 'Nos experts en pentest offensif évaluent vos défenses, identifient les failles critiques et vous fournissent un plan de remédiation actionnable.',
  primaryCTA = 'Demander un audit gratuit',
  primaryHref = '/contact',
  secondaryCTA = 'Voir nos services',
  secondaryHref = '/services/pentest-entreprise',
}: CTASectionProps) {
  return (
    <section className="section-padding bg-dark-card border-y border-border">
      <div className="section-container text-center">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-2xl flex items-center justify-center">
            <Shield className="w-7 h-7 text-accent" />
          </div>
        </div>
        <h2 className="section-title mb-4 max-w-2xl mx-auto">{title}</h2>
        <p className="section-subtitle mx-auto mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryHref} className="btn-primary">
            {primaryCTA} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href={secondaryHref} className="btn-secondary">
            {secondaryCTA}
          </Link>
        </div>
        <p className="mt-6 text-xs text-muted">Réponse sous 24h · NDA disponible · Totale confidentialité</p>
      </div>
    </section>
  )
}
