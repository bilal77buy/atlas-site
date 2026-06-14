import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield } from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQSection from '@/components/ui/FAQSection'

export const metadata: Metadata = {
  title: "Méthodologie Pentest | Déroulement d'un Test d'Intrusion",
  description: "Notre méthodologie de pentest : cadrage, reconnaissance, exploitation contrôlée, rapport, remédiation. Basée sur PTES, OWASP, OSSTMM. Approche structurée et professionnelle.",
  keywords: ['méthodologie pentest', 'déroulement test intrusion', 'processus pentest', 'PTES OWASP pentest'],
  alternates: { canonical: 'https://atlasredconsult.fr/methodologie' },
}

const phases = [
  {
    step: '01',
    title: 'Cadrage de la mission',
    duration: '1-2 jours',
    description: "La phase de cadrage est fondamentale. Elle permet de définir précisément le périmètre, les objectifs et les règles d'engagement avant tout test.",
    items: [
      'Réunion de lancement avec vos équipes',
      'Définition précise du périmètre (IPs, domaines, applications)',
      "Choix de l'approche : Black Box, Grey Box ou White Box",
      "Définition des règles d'engagement et des limites",
      'Signature du contrat et du NDA',
      'Création du canal de communication dédié',
    ],
  },
  {
    step: '02',
    title: 'Reconnaissance',
    duration: '1-3 jours',
    description: "Collecte d'informations passive et active sur votre environnement pour cartographier la surface d'attaque.",
    items: [
      "Collecte d'informations publiques (OSINT)",
      "Cartographie des actifs et de la surface d'attaque",
      'Identification des technologies et versions',
      "Découverte des points d'entrée potentiels",
      "Analyse de l'architecture exposée",
    ],
  },
  {
    step: '03',
    title: 'Évaluation des vulnérabilités',
    duration: '2-5 jours',
    description: 'Analyse approfondie des systèmes et applications pour identifier les vulnérabilités potentielles.',
    items: [
      'Analyse des configurations de sécurité',
      'Identification des vulnérabilités applicatives',
      "Test des mécanismes d'authentification",
      'Analyse des droits et des accès',
      'Recherche de mauvaises configurations',
    ],
  },
  {
    step: '04',
    title: 'Exploitation contrôlée',
    duration: '2-5 jours',
    description: "Tentatives d'exploitation contrôlées pour valider l'impact réel des vulnérabilités identifiées, sans impact opérationnel.",
    items: [
      'Exploitation des vulnérabilités validées',
      'Documentation des preuves de concept (PoC)',
      "Évaluation de l'impact réel",
      "Post-exploitation limitée pour mesurer la profondeur d'accès",
      "Respect strict des règles d'engagement",
    ],
  },
  {
    step: '05',
    title: 'Rapport et restitution',
    duration: '3-5 jours',
    description: "Rédaction d'un rapport complet et structuré, suivi d'une session de restitution avec vos équipes.",
    items: [
      'Rapport exécutif : synthèse des risques pour la direction',
      'Rapport technique : documentation de chaque vulnérabilité',
      'Score CVSS et priorisation par criticité',
      'Plan de remédiation actionnable et priorisé',
      'Session de debriefing avec vos équipes',
      'Retests optionnels des corrections',
    ],
  },
]

const standards = [
  { name: 'PTES', desc: 'Penetration Testing Execution Standard - cadre méthodologique de référence' },
  { name: 'OWASP', desc: 'Open Web Application Security Project - référentiel failles applicatives' },
  { name: 'OSSTMM', desc: 'Open Source Security Testing Methodology Manual - sécurité des systèmes' },
  { name: 'CVSS', desc: 'Common Vulnerability Scoring System - scoring des vulnérabilités' },
  { name: 'MITRE ATT&CK', desc: "Framework des tactiques et techniques d'attaquants réels" },
]

const faqItems = [
  {
    question: 'Combien de temps dure un pentest en moyenne ?',
    answer: "La durée dépend du périmètre. Un pentest web ciblé dure 3 à 5 jours de test + 2 à 3 jours de rapport. Un pentest d'infrastructure complet prend 5 à 10 jours. Une Red Team peut s'étaler sur plusieurs semaines. Nous définissons la durée adaptée lors du cadrage.",
  },
  {
    question: 'Nos données seront-elles partagées ou conservées ?',
    answer: "Non. Toutes les données collectées pendant la mission sont strictement confidentielles, utilisées uniquement pour la mission, et effacées à la livraison du rapport. Nous signons un NDA avant tout début de mission.",
  },
]

export default function MethodologiePage() {
  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-muted/20 via-transparent to-transparent pointer-events-none" />
        <div className="section-container relative">
          <Breadcrumb items={[{ label: 'Méthodologie', href: '/methodologie' }]} />
          <span className="badge mb-6 inline-block"><Shield className="w-3 h-3" /> Méthodologie</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-6">
            Notre méthodologie de pentest : structurée, rigoureuse, actionnable
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed mb-8">
            Chaque mission Atlas Red Consult suit une méthodologie éprouvée en 5 phases, basée sur les standards PTES, OWASP et OSSTMM. Notre approche garantit des résultats fiables, reproductibles et directement actionnables.
          </p>
          <Link href="/contact" className="btn-primary">Démarrer une mission <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-8">
            {phases.map((phase, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:text-right">
                  <div className="font-mono text-accent font-bold text-3xl">{phase.step}</div>
                  <h2 className="font-display text-xl font-bold text-white mt-1">{phase.title}</h2>
                  <span className="text-xs text-muted">{phase.duration}</span>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-muted text-sm leading-relaxed mb-4">{phase.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {phase.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-accent flex-shrink-0 mt-1" />
                        <span className="text-white text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-card border-y border-border">
        <div className="section-container">
          <h2 className="section-title mb-8 text-center">Standards et référentiels</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {standards.map((s) => (
              <div key={s.name} className="card text-center">
                <div className="font-mono font-bold text-accent text-sm mb-2">{s.name}</div>
                <p className="text-muted text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Démarrez une mission avec notre équipe" />
      <FAQSection items={faqItems} />
    </>
  )
}
