import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, TrendingUp } from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQSection from '@/components/ui/FAQSection'

export const metadata: Metadata = {
  title: 'Conformité DORA | Audit DORA Cybersécurité Fintech',
  description: 'Conformité DORA pour acteurs financiers : tests de résilience opérationnelle numérique, TLPT, rôle du pentest. Accompagnement fintechs, banques, assurances.',
  keywords: ['audit DORA', 'conformité DORA', 'DORA cybersécurité', 'DORA fintech', 'résilience opérationnelle numérique', 'TLPT'],
  alternates: { canonical: 'https://atlasredconsult.fr/conformite/dora' },
}

const acteurs = [
  'Établissements de crédit',
  "Entreprises d'investissement",
  'Établissements de paiement',
  "Compagnies d'assurance",
  "Sociétés de gestion d'actifs",
  'Fournisseurs de services de crypto-actifs',
  'Prestataires de services IT critiques pour la finance',
]

const faqItems = [
  {
    question: 'DORA est-il applicable aux fintechs ?',
    answer: "Oui. DORA s'applique à l'ensemble des entités financières régulées dans l'UE, y compris les fintechs disposant d'un agrément (établissement de paiement, prestataire de services d'investissement, etc.). Même sans agrément direct, les fintechs fournissant des services à des entités régulées peuvent être concernées.",
  },
  {
    question: "Qu'est-ce qu'un TLPT dans le cadre DORA ?",
    answer: "Le TLPT (Threat-Led Penetration Testing) est un test d'intrusion basé sur la menace réelle ciblant votre organisation. Il simule des attaques d'acteurs sophistiqués et est obligatoire pour les entités financières significatives sous DORA. Il nécessite une méthodologie standardisée (TIBER-EU).",
  },
]

export default function DORAPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-muted/20 via-transparent to-transparent pointer-events-none" />
        <div className="section-container relative">
          <Breadcrumb items={[{ label: 'Conformité' }, { label: 'DORA', href: '/conformite/dora' }]} />
          <span className="badge mb-6 inline-block"><TrendingUp className="w-3 h-3" /> Conformité DORA</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-6">
            DORA : testez la résilience numérique de votre organisation financière
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed mb-8">
            Le règlement DORA impose aux acteurs financiers européens de démontrer leur résilience opérationnelle numérique. Les tests d&apos;intrusion et TLPT sont au cœur de cette obligation. Nous vous aidons à y répondre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">Préparer ma conformité DORA <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/services/red-team" className="btn-secondary">Voir nos Red Team</Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-6">Qu&apos;est-ce que DORA ?</h2>
              <div className="space-y-4 text-muted text-sm leading-relaxed">
                <p><strong className="text-white">DORA (Digital Operational Resilience Act)</strong> est un règlement européen entré en application le 17 janvier 2025. Il vise à harmoniser et renforcer la résilience opérationnelle numérique du secteur financier dans l&apos;UE.</p>
                <p>DORA impose cinq piliers : gestion des risques TIC, gestion des incidents, tests de résilience, gestion du risque tiers, et partage d&apos;informations. Les tests de résilience incluent explicitement les tests d&apos;intrusion (pentest) et les TLPT.</p>
                <p>Les entités significatives doivent réaliser des <strong className="text-white">TLPT (Threat-Led Penetration Tests)</strong> au moins tous les 3 ans, selon une méthodologie standardisée TIBER-EU.</p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-white mb-6">Entités concernées par DORA</h2>
              <div className="space-y-2">
                {acteurs.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 card py-3">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-white text-sm">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-card border-y border-border">
        <div className="section-container">
          <h2 className="section-title mb-8 text-center">Tests de résilience DORA : notre rôle</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Tests de base', desc: "Scans de vulnérabilités, évaluations de sécurité et tests d'intrusion ciblés pour les entités non significatives." },
              { title: 'Pentest avancés', desc: "Tests d'intrusion approfondis multi-périmètre pour valider la résilience technique de votre SI." },
              { title: 'TLPT (Entités significatives)', desc: 'Tests basés sur la menace réelle selon la méthodologie TIBER-EU, coordonnés avec le régulateur.' },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <Shield className="w-6 h-6 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted text-sm mb-4">Services associés :</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                ['Pentest entreprise', '/services/pentest-entreprise'],
                ['Red Team', '/services/red-team'],
                ['Pentest infrastructure', '/services/pentest-infrastructure-reseau'],
              ].map(([l, h]) => (
                <Link key={l} href={h} className="btn-secondary text-xs px-3 py-2">{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Préparez votre conformité DORA dès maintenant" description="DORA est en vigueur depuis janvier 2025. Anticipez vos obligations de tests de résilience avec nos experts." primaryCTA="Préparer ma conformité DORA" />
      <FAQSection items={faqItems} />
    </>
  )
}
