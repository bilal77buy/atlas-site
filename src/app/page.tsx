import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield,
  Target,
  FileText,
  CheckCircle,
  ArrowRight,
  Globe,
  Server,
  Network,
  Users,
  Lock,
  TrendingUp,
  AlertTriangle,
  Building2,
  CreditCard,
  Zap,
  ChevronRight,
} from 'lucide-react'
import FAQSection from '@/components/ui/FAQSection'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Cabinet de Pentest Offensif B2B | Atlas Red Consult',
  description:
    'Atlas Red Consult, cabinet de pentest offensif B2B. Tests d\'intrusion, audit cybersécurité, red team pour fintechs, SaaS, e-commerces. DORA, NIS2, PCI DSS, ISO 27001. Devis sous 24h.',
  alternates: { canonical: 'https://atlasredconsult.fr' },
  openGraph: {
    title: 'Atlas Red Consult | Cabinet de Pentest Offensif B2B',
    description: 'Tests d\'intrusion professionnels. Nous testons vos défenses avant que les attaquants ne le fassent.',
    url: 'https://atlasredconsult.fr',
  },
}

const services = [
  {
    icon: Globe,
    title: 'Pentest Web',
    description: 'Identification des failles OWASP Top 10 sur vos applications web : XSS, injection SQL, authentification défaillante, SSRF, IDOR.',
    href: '/services/pentest-web',
  },
  {
    icon: Zap,
    title: 'Pentest API',
    description: 'Audit complet de vos APIs REST et GraphQL : OAuth, JWT, rate limiting, endpoints exposés, IDOR, fuites de données.',
    href: '/services/pentest-api',
  },
  {
    icon: Network,
    title: 'Pentest Infrastructure',
    description: 'Évaluation de la sécurité de votre réseau interne et externe, segmentation, services exposés, protocoles obsolètes.',
    href: '/services/pentest-infrastructure-reseau',
  },
  {
    icon: Server,
    title: 'Pentest Active Directory',
    description: 'Détection des risques internes : élévation de privilèges, mouvements latéraux, Kerberoasting, Pass-the-Hash.',
    href: '/services/pentest-active-directory',
  },
  {
    icon: Target,
    title: 'Red Team',
    description: 'Simulation d\'attaque réaliste multi-vecteurs pour tester vos défenses humaines, techniques et organisationnelles.',
    href: '/services/red-team',
  },
  {
    icon: Shield,
    title: 'Pentest Entreprise',
    description: 'Approche globale et personnalisée pour évaluer la posture de sécurité complète de votre organisation.',
    href: '/services/pentest-entreprise',
  },
]

const norms = [
  { label: 'DORA', description: 'Résilience opérationnelle numérique pour les acteurs financiers', href: '/conformite/dora' },
  { label: 'NIS2', description: 'Directive européenne sur la cybersécurité des entités essentielles', href: '/conformite/nis2' },
  { label: 'PCI DSS', description: 'Standard de sécurité pour les données de paiement', href: '/conformite/pci-dss' },
  { label: 'ISO 27001', description: 'Système de management de la sécurité de l\'information', href: '/conformite/iso-27001' },
]

const methodology = [
  { step: '01', title: 'Cadrage', description: 'Définition du périmètre, des règles d\'engagement et des objectifs de la mission avec votre équipe.' },
  { step: '02', title: 'Reconnaissance', description: 'Collecte d\'informations sur votre environnement, cartographie des actifs et identification des vecteurs d\'attaque.' },
  { step: '03', title: 'Exploitation contrôlée', description: 'Tests d\'intrusion maîtrisés pour valider les vulnérabilités sans impact sur vos systèmes de production.' },
  { step: '04', title: 'Rapport', description: 'Livraison d\'un rapport exécutif et technique détaillé avec priorisation des vulnérabilités.' },
  { step: '05', title: 'Remédiation', description: 'Debriefing avec vos équipes, plan de remédiation priorisé et suivi des corrections.' },
]

const sectors = [
  { icon: TrendingUp, label: 'Fintechs & Banques' },
  { icon: Globe, label: 'SaaS B2B' },
  { icon: CreditCard, label: 'E-commerces' },
  { icon: Building2, label: 'Entreprises régulées' },
  { icon: Lock, label: 'Assurances' },
  { icon: Users, label: 'Cabinets RH & Data' },
]

const engagements = [
  'Rapport exécutif et technique livré à J+15 maximum',
  'NDA signable avant toute discussion technique',
  'Debriefing post-mission avec vos équipes',
  'Aucun partage de vos données avec des tiers',
  'Consultants seniors avec expériences terrain',
  'Réponse à votre demande sous 24h ouvrées',
]

const faqItems = [
  {
    question: 'Qu\'est-ce qu\'un pentest offensif ?',
    answer: 'Un pentest offensif est une simulation contrôlée d\'attaque réelle réalisée par des experts en cybersécurité. L\'objectif est d\'identifier les vulnérabilités de vos systèmes avant qu\'un attaquant malveillant ne les exploite. Contrairement à un audit de conformité passif, le pentest offensif teste réellement la robustesse de vos défenses.',
  },
  {
    question: 'Combien coûte un pentest ?',
    answer: 'Le coût d\'un pentest varie selon le périmètre, la durée et la complexité de la mission. Nos missions commencent généralement à partir de 3 000 € pour un pentest web ciblé. Contactez-nous pour obtenir un devis personnalisé adapté à votre contexte.',
  },
  {
    question: 'Quelle est la durée d\'une mission de pentest ?',
    answer: 'La durée varie selon le périmètre défini. Un pentest web ciblé peut prendre de 3 à 5 jours. Un pentest d\'infrastructure complet nécessite généralement 5 à 10 jours. Une mission Red Team peut s\'étendre sur plusieurs semaines.',
  },
  {
    question: 'Nos systèmes seront-ils indisponibles pendant le pentest ?',
    answer: 'Non. Nos tests sont réalisés de manière contrôlée pour éviter tout impact sur vos systèmes de production. Nous définissons ensemble les règles d\'engagement en amont et nous adaptons notre approche pour minimiser les risques opérationnels.',
  },
  {
    question: 'Quelle est la différence entre un pentest et un audit de sécurité ?',
    answer: 'L\'audit de sécurité évalue la conformité à des référentiels (ISO 27001, NIS2...) et examine la documentation, les processus et les configurations. Le pentest simule une attaque réelle pour valider concrètement si vos défenses tiennent. Les deux approches sont complémentaires.',
  },
]

export default function HomePage() {
  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pentest offensif B2B',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Atlas Red Consult',
      url: 'https://atlasredconsult.fr',
    },
    description: 'Tests d\'intrusion professionnels pour entreprises. Pentest web, API, infrastructure, Active Directory et Red Team.',
    areaServed: 'FR',
    serviceType: 'Cybersécurité offensive',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-muted/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="section-container relative py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="badge mb-6 inline-block">
              <Shield className="w-3 h-3" />
              Cabinet de pentest offensif B2B
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Testez vos défenses{' '}
              <span className="gradient-text">avant que les attaquants</span>
              {' '}ne le fassent
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Atlas Red Consult est un cabinet de pentest offensif spécialisé B2B. Nous simulons des attaques réelles pour identifier vos vulnérabilités critiques et vous fournir un plan de remédiation actionnable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Demander un audit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services/pentest-entreprise" className="btn-secondary text-base px-8 py-4">
                Voir nos services
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Réponse sous 24h</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> NDA disponible</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Rapport actionnable</span>
            </div>
          </div>
        </div>
      </section>

      {/* NORMES */}
      <section className="py-10 border-y border-border bg-dark-card">
        <div className="section-container">
          <p className="text-center text-xs font-semibold text-muted uppercase tracking-widest mb-6">
            Conformité aux normes sectorielles
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {norms.map((norm) => (
              <Link
                key={norm.label}
                href={norm.href}
                className="flex flex-col items-center text-center p-4 rounded-xl border border-border hover:border-accent/40 hover:bg-dark-hover transition-all group"
              >
                <span className="font-display font-bold text-white text-xl mb-1 group-hover:text-accent transition-colors">
                  {norm.label}
                </span>
                <span className="text-xs text-muted">{norm.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="badge mb-4 inline-block">Nos services</span>
            <h2 className="section-title mb-4">Tests d\'intrusion professionnels</h2>
            <p className="section-subtitle mx-auto">
              Chaque mission est réalisée par des experts certifiés selon des méthodologies éprouvées (PTES, OWASP, OSSTMM).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="card-hover group flex flex-col">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-muted text-sm flex-1 leading-relaxed">{service.description}</p>
                <span className="mt-4 text-accent text-sm flex items-center gap-1 font-medium">
                  En savoir plus <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGIE */}
      <section className="section-padding bg-dark-card border-y border-border">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="badge mb-4 inline-block">Notre approche</span>
            <h2 className="section-title mb-4">Méthodologie de pentest</h2>
            <p className="section-subtitle mx-auto">
              Une approche structurée en 5 phases pour des résultats fiables et actionnables.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {methodology.map((phase, i) => (
              <div key={i} className="relative">
                <div className="card h-full">
                  <div className="font-mono text-accent font-bold text-sm mb-2">{phase.step}</div>
                  <h3 className="font-display font-semibold text-white mb-2 text-sm">{phase.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{phase.description}</p>
                </div>
                {i < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-accent/40 z-10" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/methodologie" className="btn-secondary">
              Voir la méthodologie complète <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TYPES DE TESTS */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Types d\'approche</h2>
            <p className="section-subtitle mx-auto">Nous adaptons notre approche à vos contraintes et objectifs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: 'Black Box',
                icon: '⬛',
                description: 'L\'auditeur n\'a aucune information préalable sur la cible. Simule un attaquant externe sans accès privilégié. Idéal pour évaluer la surface d\'attaque visible depuis Internet.',
              },
              {
                label: 'Grey Box',
                icon: '▪️',
                description: 'L\'auditeur dispose d\'un accès utilisateur standard et de quelques informations de contexte. Simule un attaquant ayant obtenu un accès initial. Le meilleur rapport qualité/coût pour la plupart des missions.',
              },
              {
                label: 'White Box',
                icon: '⬜',
                description: 'L\'auditeur a accès complet à la documentation, au code source et à l\'architecture. Permet une analyse approfondie et exhaustive. Recommandé pour les audits de développement sécurisé.',
              },
            ].map((type) => (
              <div key={type.label} className="card">
                <div className="text-2xl mb-3">{type.icon}</div>
                <h3 className="font-display font-semibold text-white text-lg mb-3">{type.label}</h3>
                <p className="text-muted text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="section-padding bg-dark-card border-y border-border">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Secteurs accompagnés</h2>
            <p className="section-subtitle mx-auto">
              Nous intervenons auprès d\'organisations dont la sécurité est critique : données sensibles, obligations réglementaires, enjeux de réputation.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sectors.map((sector) => (
              <div key={sector.label} className="card text-center p-4">
                <sector.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <span className="text-white text-sm font-medium">{sector.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4 inline-block">Pourquoi Atlas Red Consult ?</span>
              <h2 className="section-title mb-6">Des engagements concrets, pas des promesses</h2>
              <p className="text-muted mb-8 leading-relaxed">
                Nous ne vendons pas de conformité sur le papier. Nous testons réellement vos systèmes avec les mêmes techniques qu\'un attaquant, et nous vous donnons les clés pour corriger les problèmes identifiés.
              </p>
              <Link href="/contact" className="btn-primary">
                Démarrer une mission <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {engagements.map((item, i) => (
                <div key={i} className="flex items-center gap-3 card py-4">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* FAQ */}
      <FAQSection items={faqItems} title="Questions fréquentes sur le pentest" />

      {/* CONTACT RAPIDE */}
      <section className="section-padding">
        <div className="section-container">
          <div className="card max-w-2xl mx-auto text-center">
            <AlertTriangle className="w-8 h-8 text-accent mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Vous avez détecté un incident de sécurité ?
            </h2>
            <p className="text-muted mb-6 text-sm">
              En cas d\'incident actif ou de suspicion de compromission, contactez-nous immédiatement pour une réponse rapide.
            </p>
            <Link href="/contact" className="btn-primary">
              Nous contacter en urgence <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
