import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, CreditCard } from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQSection from '@/components/ui/FAQSection'

export const metadata: Metadata = {
  title: 'Conformité PCI DSS | Audit PCI DSS et Pentest',
  description: "Audit PCI DSS et conformité : exigences de test d'intrusion PCI DSS v4.0, qui est concerné, rôle du pentest. Cabinet expert cybersécurité paiement.",
  keywords: ['audit PCI DSS', 'conformité PCI DSS', 'norme PCI DSS', 'pentest PCI DSS', 'sécurité paiement'],
  alternates: { canonical: 'https://atlasredconsult.fr/conformite/pci-dss' },
}

const faqItems = [
  {
    question: 'À quelle fréquence faut-il réaliser un pentest PCI DSS ?',
    answer: "PCI DSS v4.0 exige un test d'intrusion externe au moins annuellement et après tout changement significatif de l'infrastructure ou des applications. Un test interne est également requis annuellement.",
  },
  {
    question: 'Qui doit réaliser le pentest PCI DSS ?',
    answer: "Le pentest PCI DSS doit être réalisé par un testeur qualifié et indépendant. Il n'est pas obligatoire de faire appel à un QSA (Qualified Security Assessor), mais le testeur doit avoir l'expertise suffisante et ne pas tester ses propres systèmes.",
  },
]

export default function PCIDSSPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-muted/20 via-transparent to-transparent pointer-events-none" />
        <div className="section-container relative">
          <Breadcrumb items={[{ label: 'Conformité' }, { label: 'PCI DSS', href: '/conformite/pci-dss' }]} />
          <span className="badge mb-6 inline-block"><CreditCard className="w-3 h-3" /> Conformité PCI DSS</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-6">
            PCI DSS : tests d&apos;intrusion obligatoires pour la sécurité des paiements
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed mb-8">
            PCI DSS v4.0 impose des tests d&apos;intrusion annuels à toutes les organisations traitant des données de paiement. Nos experts vous accompagnent dans cette exigence avec des rapports conformes aux attentes des QSA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">Demander un audit PCI DSS <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/services/pentest-web" className="btn-secondary">Pentest web</Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-6">Qu&apos;est-ce que PCI DSS ?</h2>
              <div className="space-y-4 text-muted text-sm leading-relaxed">
                <p><strong className="text-white">PCI DSS (Payment Card Industry Data Security Standard)</strong> est le standard de sécurité mondial pour la protection des données de paiement. Il est imposé par les réseaux Visa, Mastercard, American Express et autres.</p>
                <p>PCI DSS v4.0, entré en vigueur en mars 2024, renforce les exigences en matière de tests de sécurité. L&apos;<strong className="text-white">exigence 11.4</strong> impose explicitement des tests d&apos;intrusion internes et externes au moins annuels.</p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-white mb-6">Entreprises concernées</h2>
              <div className="space-y-2">
                {[
                  'E-commerces acceptant les paiements CB en ligne',
                  'PSP (Payment Service Providers)',
                  'Fintechs traitant des transactions',
                  'Marketplace avec paiement intégré',
                  'Hôtellerie avec réservation en ligne',
                  'Toute organisation stockant des données de cartes',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 card py-3">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-white text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-card border-y border-border">
        <div className="section-container">
          <h2 className="section-title mb-8 text-center">Exigences PCI DSS v4.0 et pentest</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Test d'intrusion externe annuel minimum",
              "Test d'intrusion interne annuel minimum",
              "Test après tout changement significatif d'architecture",
              'Couverture du périmètre CDE (Cardholder Data Environment)',
              'Rapport documentant la méthodologie et les résultats',
              'Remédiation des vulnérabilités critiques et hautes',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 card py-3">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Satisfaites vos obligations PCI DSS v4.0" description="Nos rapports de pentest sont structurés pour répondre aux attentes des QSA et de vos auditeurs PCI DSS." primaryCTA="Demander un audit PCI DSS" secondaryHref="/services/pentest-web" />
      <FAQSection items={faqItems} />
    </>
  )
}
