import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, Building2 } from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQSection from '@/components/ui/FAQSection'

export const metadata: Metadata = {
  title: 'Conformité NIS2 | Audit NIS2 & Pentest Cybersécurité',
  description: 'Audit NIS2 et conformité : qui est concerné, obligations de sécurité, rôle du pentest dans la mise en conformité NIS2. Cabinet expert en cybersécurité.',
  keywords: ['audit NIS2', 'conformité NIS2', 'NIS2 qui est concerné', 'norme NIS2', 'cybersécurité NIS2'],
  alternates: { canonical: 'https://atlasredconsult.fr/conformite/nis2' },
}

const secteurs = [
  'Énergie (électricité, gaz, pétrole)',
  'Transports (aérien, ferroviaire, maritime, routier)',
  'Secteur bancaire et infrastructures financières',
  'Santé (hôpitaux, laboratoires)',
  'Eau (distribution et traitement)',
  'Infrastructure numérique (DNS, datacenters, cloud)',
  'Administrations publiques',
  'Fournisseurs de services numériques (e-commerce, moteurs de recherche)',
]

const obligations = [
  { title: 'Gestion des risques', desc: 'Mettre en place des mesures de gestion des risques cyber proportionnées.' },
  { title: 'Signalement des incidents', desc: "Notifier les incidents significatifs à l'ANSSI dans des délais stricts (24h, 72h)." },
  { title: "Continuité d'activité", desc: "Disposer de plans de continuité et de reprise d'activité testés." },
  { title: "Sécurité de la chaîne d'approvisionnement", desc: 'Évaluer la sécurité de vos fournisseurs et prestataires.' },
  { title: 'Tests de sécurité', desc: "Réaliser des tests réguliers pour vérifier l'efficacité des mesures de sécurité." },
  { title: 'Formation et sensibilisation', desc: 'Former les collaborateurs aux bonnes pratiques et aux risques cyber.' },
]

const faqItems = [
  {
    question: 'Quand la directive NIS2 est-elle applicable en France ?',
    answer: 'La directive NIS2 devait être transposée en droit national au plus tard le 17 octobre 2024. La loi de transposition française est en cours. Les entités concernées ont intérêt à anticiper leur mise en conformité dès maintenant.',
  },
  {
    question: 'Quelles sanctions en cas de non-conformité NIS2 ?',
    answer: "Les amendes peuvent atteindre 10 millions d'euros ou 2% du chiffre d'affaires mondial pour les entités essentielles, et 7 millions d'euros ou 1,4% du CA pour les entités importantes. Les dirigeants peuvent également être tenus responsables personnellement.",
  },
  {
    question: 'Le pentest est-il obligatoire pour NIS2 ?',
    answer: "NIS2 impose des \"mesures appropriées de gestion des risques\" incluant des tests de sécurité réguliers. Si le pentest n'est pas explicitement nommé, il est la méthode reconnue pour valider concrètement l'efficacité de vos mesures de sécurité.",
  },
]

export default function NIS2Page() {
  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-muted/20 via-transparent to-transparent pointer-events-none" />
        <div className="section-container relative">
          <Breadcrumb items={[{ label: 'Conformité' }, { label: 'NIS2', href: '/conformite/nis2' }]} />
          <span className="badge mb-6 inline-block"><Shield className="w-3 h-3" /> Conformité NIS2</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-6">
            NIS2 : conformité cybersécurité et rôle du pentest
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed mb-8">
            La directive NIS2 impose des obligations renforcées en matière de cybersécurité à des milliers d&apos;entreprises européennes. Nos experts vous accompagnent dans votre mise en conformité par des tests d&apos;intrusion adaptés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">Évaluer ma conformité NIS2 <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/services/pentest-entreprise" className="btn-secondary">Voir nos services</Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-6">Qu&apos;est-ce que la directive NIS2 ?</h2>
              <div className="space-y-4 text-muted text-sm leading-relaxed">
                <p><strong className="text-white">NIS2 (Network and Information Security 2)</strong> est une directive européenne adoptée en 2022 qui remplace et étend la directive NIS1. Elle vise à renforcer le niveau commun de cybersécurité dans l&apos;Union européenne.</p>
                <p>NIS2 élargit considérablement le périmètre des organisations concernées (de quelques centaines à plusieurs milliers en France), renforce les obligations de sécurité et alourdit les sanctions.</p>
                <p>Le pentest est l&apos;un des outils clés pour démontrer que votre organisation prend les &quot;mesures techniques et organisationnelles appropriées&quot; exigées par la directive.</p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-white mb-6">Secteurs et entreprises concernés</h2>
              <div className="space-y-2">
                {secteurs.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Building2 className="w-3 h-3 text-accent flex-shrink-0" />
                    <span className="text-muted">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-card border-y border-border">
        <div className="section-container">
          <h2 className="section-title mb-10 text-center">Obligations NIS2 en matière de sécurité</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {obligations.map((o) => (
              <div key={o.title} className="card">
                <CheckCircle className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-semibold text-white mb-2 text-sm">{o.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <h2 className="section-title mb-6 text-center">Rôle du pentest dans la conformité NIS2</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-muted text-sm leading-relaxed">
            <p>NIS2 exige que les entités concernées mettent en œuvre des mesures de sécurité &quot;appropriées et proportionnées&quot;. Le pentest offensif vous permet de :</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
              {[
                "Valider concrètement l'efficacité de vos mesures",
                'Identifier les failles avant un incident déclarable',
                'Démontrer votre diligence aux autorités',
                'Prioriser vos investissements sécurité',
                "Tester vos plans de continuité d'activité",
                'Documenter votre démarche de gestion des risques',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 card py-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-white text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-muted text-sm mb-4">Services recommandés dans le cadre NIS2 :</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                ['Pentest infrastructure', '/services/pentest-infrastructure-reseau'],
                ['Pentest web', '/services/pentest-web'],
                ['Red Team', '/services/red-team'],
              ].map(([l, h]) => (
                <Link key={l} href={h} className="btn-secondary text-xs px-3 py-2">{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Êtes-vous prêt pour la conformité NIS2 ?" description="Nos experts vous accompagnent dans l'évaluation et la mise en conformité de votre organisation aux exigences NIS2." primaryCTA="Évaluer ma conformité NIS2" />
      <FAQSection items={faqItems} />
    </>
  )
}
