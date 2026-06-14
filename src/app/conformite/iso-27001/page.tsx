import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Lock } from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQSection from '@/components/ui/FAQSection'

export const metadata: Metadata = {
  title: 'Pentest ISO 27001 | Audit Sécurité Cybersécurité ISO 27001',
  description: "Pentest et audit ISO 27001 : lien entre tests d'intrusion et certification SMSI. Amélioration continue, gestion des risques, conformité ISO 27001.",
  keywords: ['pentest ISO 27001', 'audit sécurité ISO 27001', 'cybersécurité ISO 27001', 'certification ISO 27001'],
  alternates: { canonical: 'https://atlasredconsult.fr/conformite/iso-27001' },
}

const faqItems = [
  {
    question: 'Le pentest est-il obligatoire pour la certification ISO 27001 ?',
    answer: "L'annexe A de la norme ISO 27001:2022 inclut le contrôle A.8.8 (gestion des vulnérabilités techniques) et A.8.29 (tests de sécurité en développement). Si le pentest n'est pas explicitement obligatoire, il est généralement attendu par les auditeurs de certification pour démontrer une véritable gestion des risques techniques.",
  },
  {
    question: 'À quelle fréquence réaliser un pentest dans le cadre ISO 27001 ?',
    answer: "ISO 27001 repose sur le cycle PDCA (Plan-Do-Check-Act) et l'amélioration continue. Un pentest annuel est la pratique standard, avec des tests supplémentaires après des changements significatifs. L'objectif est de valider régulièrement que vos contrôles restent efficaces.",
  },
]

export default function ISO27001Page() {
  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-muted/20 via-transparent to-transparent pointer-events-none" />
        <div className="section-container relative">
          <Breadcrumb items={[{ label: 'Conformité' }, { label: 'ISO 27001', href: '/conformite/iso-27001' }]} />
          <span className="badge mb-6 inline-block"><Lock className="w-3 h-3" /> ISO 27001</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-6">
            ISO 27001 et pentest : l&apos;amélioration continue de votre SMSI
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed mb-8">
            La norme ISO 27001 impose une démarche d&apos;amélioration continue de la sécurité. Le pentest est l&apos;outil concret pour mesurer l&apos;efficacité réelle de votre SMSI et démontrer votre niveau de maturité aux auditeurs de certification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">Préparer mon audit ISO 27001 <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/services/pentest-entreprise" className="btn-secondary">Voir nos services</Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-6">ISO 27001 et la gestion des risques techniques</h2>
              <div className="space-y-4 text-muted text-sm leading-relaxed">
                <p><strong className="text-white">ISO 27001</strong> est la norme internationale de référence pour les Systèmes de Management de la Sécurité de l&apos;Information (SMSI). Elle impose une approche structurée de gestion des risques de sécurité.</p>
                <p>L&apos;édition 2022 de la norme intègre des contrôles spécifiques sur la <strong className="text-white">gestion des vulnérabilités techniques</strong> (A.8.8) et les <strong className="text-white">tests de sécurité</strong> (A.8.29). Le pentest est l&apos;outil le plus complet pour satisfaire ces exigences.</p>
                <p>Au-delà de la conformité, le pentest s&apos;intègre naturellement dans le cycle PDCA d&apos;amélioration continue d&apos;ISO 27001 : il mesure l&apos;efficacité des contrôles (Check) et identifie les axes d&apos;amélioration (Act).</p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-white mb-6">Liens entre pentest et ISO 27001</h2>
              <div className="space-y-2">
                {[
                  "Évaluation concrète de l'efficacité des contrôles de sécurité",
                  'Documentation de la gestion des risques techniques',
                  "Preuve d'amélioration continue pour les auditeurs",
                  'Identification des écarts entre politique et réalité terrain',
                  'Mesure de la maturité de sécurité dans le temps',
                  'Support à la décision pour les investissements sécurité',
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

      <CTASection title="Renforcez votre SMSI avec un pentest" description="Un pentest annuel démontre votre engagement envers l'amélioration continue et rassure vos auditeurs ISO 27001." primaryCTA="Préparer mon audit ISO 27001" secondaryHref="/services/pentest-entreprise" />
      <FAQSection items={faqItems} />
    </>
  )
}
