import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Target, AlertTriangle } from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQSection from '@/components/ui/FAQSection'

export const metadata: Metadata = {
  title: 'Red Team Cybersécurité | Simulation d\'Attaque Réaliste',
  description: 'Red Team cybersécurité : simulation d\'attaque multi-vecteurs réaliste pour tester vos défenses humaines et techniques. Différence avec le pentest. Devis sous 24h.',
  keywords: ['red team cybersécurité', 'pentest red team', 'cybersécurité offensive', 'simulation attaque', 'red teaming'],
  alternates: { canonical: 'https://atlasredconsult.fr/services/red-team' },
}

const differences = [
  { aspect: 'Objectif', pentest: 'Trouver le maximum de vulnérabilités dans un périmètre défini', redteam: 'Atteindre un objectif spécifique (ex : accès aux données clients) sans périmètre fixe' },
  { aspect: 'Durée', pentest: '3 à 10 jours typiquement', redteam: 'Plusieurs semaines à plusieurs mois' },
  { aspect: 'Périmètre', pentest: 'Défini et limité (une application, un réseau)', redteam: 'Ouvert : techniques, humain, physique, social engineering' },
  { aspect: 'Équipes au courant', pentest: 'IT et sécurité informés', redteam: 'Seulement la direction, les équipes testent leur propre détection' },
  { aspect: 'Valeur principale', pentest: 'Exhaustivité de la couverture des failles', redteam: 'Réalisme de la simulation et test de la réponse aux incidents' },
]

const faqItems = [
  {
    question: 'Pour quelle maturité de sécurité recommandez-vous une Red Team ?',
    answer: 'Une Red Team est recommandée pour les organisations ayant déjà réalisé des pentests réguliers et disposant d\'un SOC ou d\'une équipe de réponse aux incidents. L\'objectif est de tester votre capacité de détection et de réponse, pas seulement vos défenses techniques.',
  },
  {
    question: 'Quelle est la différence entre Red Team et test de phishing ?',
    answer: 'Le test de phishing est un composant possible d\'une Red Team, mais la Red Team va beaucoup plus loin. Elle peut inclure du social engineering, des tentatives d\'intrusion physique, des attaques techniques multi-vecteurs et des scénarios persistants.',
  },
]

export default function RedTeamPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Red Team Cybersécurité',
    provider: { '@type': 'ProfessionalService', name: 'Atlas Red Consult', url: 'https://atlasredconsult.fr' },
    description: 'Red Team cybersécurité : simulation d\'attaque multi-vecteurs réaliste pour tester vos défenses humaines et techniques.',
    url: 'https://atlasredconsult.fr/services/red-team',
    areaServed: 'FR',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-muted/20 via-transparent to-transparent pointer-events-none" />
        <div className="section-container relative">
          <Breadcrumb items={[{ label: 'Services' }, { label: 'Red Team', href: '/services/red-team' }]} />
          <span className="badge mb-6 inline-block"><Target className="w-3 h-3" /> Red Team</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-6">
            Red Team : simulez une attaque ciblée réaliste
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed mb-8">
            La Red Team simule une campagne d\'attaque réaliste et persistante pour tester vos défenses techniques, humaines et organisationnelles. Contrairement au pentest, elle reproduit le comportement d\'un groupe APT ciblant spécifiquement votre organisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">Demander une mission Red Team <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/services/pentest-entreprise" className="btn-secondary">Voir le pentest entreprise</Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <h2 className="section-title mb-10 text-center">Pentest vs Red Team : les différences clés</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted font-medium w-1/4">Aspect</th>
                  <th className="text-left py-3 px-4 text-white font-semibold w-3/8">Pentest</th>
                  <th className="text-left py-3 px-4 text-accent font-semibold w-3/8">Red Team</th>
                </tr>
              </thead>
              <tbody>
                {differences.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-dark-hover transition-colors">
                    <td className="py-3 px-4 text-muted font-medium">{row.aspect}</td>
                    <td className="py-3 px-4 text-white">{row.pentest}</td>
                    <td className="py-3 px-4 text-accent">{row.redteam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-card border-y border-border">
        <div className="section-container">
          <h2 className="section-title mb-8 text-center">Scénarios d\'attaque</h2>
          <p className="text-center text-muted mb-8 max-w-2xl mx-auto">Nos missions Red Team simulent des scénarios réalistes adaptés à votre secteur et à vos enjeux business.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Compromission initiale', desc: 'Simulation d\'accès initial par phishing ciblé (spear phishing), exploitation web, ou accès physique.' },
              { title: 'Persistance & latéralisation', desc: 'Maintien de l\'accès et déplacement discret vers des cibles à valeur ajoutée.' },
              { title: 'Objectif final', desc: 'Atteinte de l\'objectif défini : accès aux données sensibles, compromission d\'un système critique.' },
            ].map((item) => (
              <div key={item.title} className="card">
                <AlertTriangle className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <h2 className="section-title mb-8 text-center">Livrables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {['Rapport narratif de la campagne d\'attaque', 'Chronologie des actions effectuées', 'Évaluation des capacités de détection', 'Lacunes identifiées dans la réponse aux incidents', 'Recommandations stratégiques et techniques', 'Debriefing direction et équipes sécurité'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 card py-3">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Testez vos défenses comme un vrai attaquant" primaryCTA="Demander une mission Red Team" secondaryHref="/services/pentest-entreprise" secondaryCTA="Voir le pentest entreprise" />
      <FAQSection items={faqItems} />
    </>
  )
}
