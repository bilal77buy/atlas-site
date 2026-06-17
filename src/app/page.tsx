import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield,
  Target,
  Globe,
  Zap,
  Smartphone,
  Server,
  RefreshCw,
  FileSearch,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Star,
  AlertTriangle,
} from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Cabinet Pentest Paris — Tests d\'Intrusion Experts | Atlas RedConsult',
  description:
    'Cabinet de pentest offensif à Paris. Tests d\'intrusion manuels pour fintechs et SaaS B2B. Devis gratuit sous 48h. Experts certifiés OSCP/CEH.',
  alternates: { canonical: 'https://atlasredconsult.com' },
  openGraph: {
    title: 'Cabinet Pentest Paris — Tests d\'Intrusion Experts | Atlas RedConsult',
    description:
      'Cabinet de pentest offensif à Paris. Tests d\'intrusion manuels pour fintechs et SaaS B2B. Devis gratuit sous 48h.',
    url: 'https://atlasredconsult.com',
  },
}

const services = [
  {
    icon: Globe,
    title: 'Pentest Web',
    description:
      'Identification exhaustive des failles OWASP Top 10 sur vos applications web : injections SQL, XSS, SSRF, IDOR, authentification défaillante et logique métier.',
    href: '/pentest-web',
  },
  {
    icon: Zap,
    title: 'Pentest API',
    description:
      'Audit complet de vos APIs REST et GraphQL : OAuth 2.0, JWT, rate limiting, endpoints non documentés, fuites de données sensibles et contournement d\'autorisation.',
    href: '/pentest-api',
  },
  {
    icon: Smartphone,
    title: 'Pentest Mobile Android',
    description:
      'Analyse statique et dynamique de vos applications Android : reverse engineering, stockage insécurisé, communications réseau, composants exportés et API backend.',
    href: '/pentest-mobile-android',
  },
  {
    icon: Target,
    title: 'Red Team',
    description:
      'Simulation d\'attaque APT multi-vecteurs sur plusieurs semaines : phishing ciblé, intrusion physique, pivoting interne, persistance et exfiltration de données.',
    href: '/red-team-cybersecurite',
  },
  {
    icon: RefreshCw,
    title: 'Pentest as a Service',
    description:
      'Couverture continue de votre surface d\'attaque avec des tests récurrents, une veille vulnérabilités dédiée et un accès prioritaire à nos équipes tout au long de l\'année.',
    href: '/pentest-as-a-service',
  },
  {
    icon: FileSearch,
    title: 'Audit Pentest',
    description:
      'Audit global combinant revue de configuration, analyse de code, tests d\'intrusion et évaluation de la gouvernance pour une vision à 360° de votre posture de sécurité.',
    href: '/audit-pentest',
  },
]

const hofEntries = [
  {
    company: 'Google',
    detail: 'Vulnérabilité critique identifiée dans les services Google, signalée via le programme VRP.',
    badge: 'Google VRP',
  },
  {
    company: 'Microsoft',
    detail: 'Faille de sécurité découverte dans l\'écosystème Microsoft Azure, récompensée par le MSRC.',
    badge: 'Microsoft MSRC',
  },
  {
    company: 'Meta',
    detail: 'Rapport accepté par le programme Bug Bounty Meta pour une vulnérabilité sur leurs plateformes.',
    badge: 'Meta Bug Bounty',
  },
  {
    company: 'US DoD',
    detail: 'Participation au programme HackerOne du Département de la Défense américaine avec résultat reconnu.',
    badge: 'US DoD HackerOne',
  },
]

const norms = [
  {
    label: 'DORA',
    description: 'Résilience opérationnelle numérique pour les acteurs financiers européens',
    href: '/conformite-dora',
  },
  {
    label: 'NIS2',
    description: 'Directive cybersécurité pour les entités essentielles et importantes',
    href: '/conformite-nis2',
  },
  {
    label: 'PCI-DSS',
    description: 'Standard de sécurité pour les environnements de données de paiement',
    href: '/conformite-pci-dss',
  },
  {
    label: 'ISO 27001',
    description: 'Système de management de la sécurité de l\'information',
    href: '/conformite-iso-27001',
  },
]

const faqItems = [
  {
    question: 'Qu\'est-ce qu\'un pentest offensif et pourquoi est-il indispensable ?',
    answer:
      'Un pentest offensif (test d\'intrusion) est une simulation contrôlée d\'attaque réelle menée par des experts en cybersécurité. Contrairement à un simple scan automatisé ou à un audit de conformité, le pentest offensif reproduit les techniques, tactiques et procédures (TTPs) d\'un véritable attaquant. Il permet de valider concrètement si vos défenses résistent à une attaque, d\'identifier les vulnérabilités exploitables avant qu\'elles ne le soient, et d\'obtenir un rapport actionnable priorisé pour vos équipes de développement et d\'infrastructure.',
  },
  {
    question: 'Combien coûte un pentest chez Atlas RedConsult ?',
    answer:
      'Contactez-nous pour un devis personnalisé gratuit sous 48h.',
  },
  {
    question: 'Quelle est la durée d\'une mission de test d\'intrusion ?',
    answer:
      'La durée varie selon le périmètre convenu. Un pentest web ciblé nécessite généralement 3 à 5 jours ouvrés. Un pentest API REST complet requiert 2 à 4 jours. Un audit d\'infrastructure interne avec Active Directory s\'étend sur 5 à 10 jours. Une mission Red Team complète peut durer de 2 à 6 semaines. Nous établissons systématiquement un cadrage précis avant démarrage pour que la durée corresponde exactement à vos objectifs.',
  },
  {
    question: 'Vos tests peuvent-ils impacter nos systèmes de production ?',
    answer:
      'Non. Tous nos tests sont réalisés de manière contrôlée selon des règles d\'engagement définies conjointement en amont. Nous privilégions les approches non destructives et nous adaptons notre intensité de test en fonction de la sensibilité de vos environnements. En cas de découverte d\'une vulnérabilité critique susceptible de provoquer une indisponibilité, nous vous contactons immédiatement avant toute exploitation. Un NDA est systématiquement disponible avant toute discussion technique.',
  },
  {
    question: 'Atlas RedConsult est-il habilité pour les entreprises régulées (banques, assurances) ?',
    answer:
      'Oui. Notre cabinet accompagne régulièrement des fintechs, des banques en ligne et des assurtech dans le cadre de leurs obligations DORA, PCI-DSS et NIS2. Nos rapports sont structurés pour répondre aux exigences documentaires des régulateurs (ACPR, AMF). Nous signons systématiquement des accords de confidentialité renforcés et nos processus sont alignés avec les recommandations de l\'ANSSI.',
  },
]

export default function HomePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': 'https://atlasredconsult.com/#business',
        name: 'Atlas RedConsult',
        description:
          'Cabinet de pentest offensif à Paris spécialisé en tests d\'intrusion pour fintechs et SaaS B2B.',
        url: 'https://atlasredconsult.com',
        telephone: '',
        email: 'contact@atlasredconsult.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '60 rue François 1er',
          addressLocality: 'Paris',
          postalCode: '75008',
          addressCountry: 'FR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 48.8698,
          longitude: 2.3078,
        },
        areaServed: [
          { '@type': 'City', name: 'Paris' },
          { '@type': 'Country', name: 'France' },
        ],
        priceRange: '€€€',
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Virement bancaire, facture',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        serviceType: [
          'Pentest Web',
          'Pentest API',
          'Pentest Mobile',
          'Red Team',
          'Audit de sécurité',
        ],
        knowsAbout: [
          'OWASP Top 10',
          'DORA',
          'NIS2',
          'PCI-DSS',
          'ISO 27001',
          'OSCP',
          'CEH',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://atlasredconsult.com/#faq',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── HERO ── */}
      <section
        className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/85 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-600 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-3 h-3" />
              Cabinet de pentest offensif B2B — Paris 75008
            </div>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Cabinet de Pentest Offensif —{' '}
              <span className="text-red-600">Tests d&apos;Intrusion Experts</span>{' '}
              pour Fintechs et SaaS B2B
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Atlas RedConsult est un cabinet parisien spécialisé en cybersécurité offensive. Nous simulons des attaques réelles sur vos applications web, vos APIs et vos infrastructures pour identifier les vulnérabilités critiques avant qu&apos;un attaquant ne le fasse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
              >
                Demander un devis gratuit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/audit-securite-informatique"
                className="inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-red-600/50 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
              >
                Audit sécurité informatique
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-600" /> Devis gratuit sous 48h
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-600" /> NDA disponible immédiatement
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-600" /> Rapport livré à J+15
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-600" /> Hall of Fame Google, Microsoft, Meta, US DoD
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1 : POURQUOI ATLAS REDCONSULT ── */}
      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi choisir Atlas RedConsult pour votre pentest ?
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Dans un environnement réglementaire de plus en plus exigeant — DORA, NIS2, PCI-DSS — et face à une menace cyber en constante évolution, les entreprises françaises ne peuvent plus se contenter d&apos;une sécurité déclarative. Elles ont besoin de preuves concrètes que leurs défenses résistent à une attaque réelle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Expertise offensive reconnue',
                body: 'Nos consultants ont découvert des vulnérabilités dans les systèmes de Google, Microsoft, Meta et le Département de la Défense américain. Cette expérience de terrain — acquise sur les programmes de bug bounty les plus exigeants au monde — est directement au service de votre sécurité.',
              },
              {
                title: 'Tests manuels, pas de faux positifs',
                body: 'Nous n\'utilisons pas les scanners automatisés comme unique outil. Chaque mission est menée manuellement par des experts certifiés. Résultat : zéro faux positif dans nos rapports et une couverture des vulnérabilités logiques qu\'aucun outil automatisé ne peut détecter.',
              },
              {
                title: 'Rapports actionnables',
                body: 'Notre rapport de pentest distingue systématiquement le rapport exécutif (pour la direction) du rapport technique (pour les développeurs et les équipes infrastructure). Chaque vulnérabilité est accompagnée d\'une preuve d\'exploitation, d\'un score CVSS et d\'une recommandation de correction priorisée.',
              },
              {
                title: 'Confidentialité maximale',
                body: 'Un accord de confidentialité (NDA) est disponible avant toute discussion technique. Nous ne partageons jamais vos données, vos architectures ni les résultats de nos missions avec des tiers. Nos consultants signent individuellement des engagements de confidentialité.',
              },
              {
                title: 'Cabinet parisien, disponibilité nationale',
                body: 'Basés au 60 rue François 1er à Paris (75008), nous intervenons en île-de-France et sur l\'ensemble du territoire français. Les missions peuvent être réalisées en remote ou sur site selon vos contraintes opérationnelles.',
              },
              {
                title: 'Tarification transparente',
                body: 'Pas de surprise en fin de mission. Votre devis détaille le nombre de jours, les livrables et les conditions d\'intervention. Pas de coût caché, pas de surcoût non justifié.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#1A1A1A] border border-white/5 rounded-xl p-6 hover:border-red-600/30 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-red-600 mb-4" />
                <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Demander un devis gratuit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 : NOS SERVICES ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos services de tests d&apos;intrusion
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Chaque mission est réalisée par des consultants seniors selon les méthodologies PTES, OWASP Testing Guide et OSSTMM. Nous couvrons l&apos;ensemble de votre surface d&apos;attaque digitale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-[#1A1A1A] border border-white/5 rounded-xl p-6 flex flex-col hover:border-red-600/40 transition-all hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                  <service.icon className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm flex-1 leading-relaxed">{service.description}</p>
                <span className="mt-4 text-red-600 text-sm flex items-center gap-1 font-medium">
                  En savoir plus <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/audit-pentest"
              className="inline-flex items-center gap-2 border border-gray-700 hover:border-red-600/50 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Voir tous nos audits <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 : HALL OF FAME ── */}
      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-600 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-4">
              <Star className="w-3 h-3" />
              Preuve d&apos;expertise terrain
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hall of Fame — Failles découvertes chez Google, Microsoft, Meta et US DoD
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Nos consultants ont participé aux programmes de bug bounty des plus grandes organisations mondiales. Ces reconnaissances officielles attestent d&apos;une expertise offensive de premier niveau, directement applicable à la protection de votre entreprise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {hofEntries.map((entry) => (
              <div
                key={entry.company}
                className="bg-[#1A1A1A] border border-white/5 rounded-xl p-6 flex items-start gap-4 hover:border-red-600/30 transition-colors"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-bold text-xl">{entry.company}</h3>
                    <span className="text-xs font-semibold text-red-600 bg-red-600/10 border border-red-600/20 rounded-full px-3 py-0.5">
                      {entry.badge}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{entry.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8 text-center">
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              Ces distinctions ne sont pas de simples badges. Elles représentent des découvertes réelles, validées par les équipes de sécurité internes de ces organisations, sur des périmètres parmi les mieux défendus au monde. Cette expérience nous permet d&apos;anticiper les techniques d&apos;attaque avancées et de tester vos systèmes avec un niveau d&apos;expertise que peu de cabinets en France peuvent offrir.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Demander un devis gratuit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 : CONFORMITÉ RÉGLEMENTAIRE ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Conformité réglementaire : DORA, NIS2, PCI-DSS, ISO 27001
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                La réglementation européenne impose désormais aux entreprises du secteur financier, aux opérateurs de services essentiels et aux acteurs traitant des données de paiement de démontrer la robustesse de leurs systèmes par des tests techniques réguliers.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Le règlement DORA (Digital Operational Resilience Act), entré en vigueur en janvier 2025, exige des entités financières qu&apos;elles réalisent des tests de pénétration avancés (TLPT) sur leurs systèmes critiques. La directive NIS2 étend ces obligations à un périmètre beaucoup plus large d&apos;entreprises européennes. Le standard PCI-DSS v4.0 renforce quant à lui les exigences de tests d&apos;intrusion sur les environnements de traitement des données de paiement.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Nos rapports de pentest sont structurés pour répondre aux exigences documentaires des régulateurs. Nous accompagnons vos équipes de conformité et vos auditeurs tout au long du processus de certification.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {norms.map((norm) => (
                <Link
                  key={norm.label}
                  href={norm.href}
                  className="flex items-center gap-4 bg-[#1A1A1A] border border-white/5 rounded-xl p-5 hover:border-red-600/30 transition-colors group"
                >
                  <div className="w-14 h-14 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors">
                    <span className="text-red-600 font-bold text-sm">{norm.label}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{norm.label}</h3>
                    <p className="text-gray-400 text-sm">{norm.description}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-red-600 ml-auto flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 : TARIFS ── */}
      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos tarifs pentest transparents
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Chez Atlas RedConsult, la transparence tarifaire est un engagement. Votre devis détaille précisément le nombre de jours, les livrables attendus et les conditions d&apos;intervention — sans surprise.
            </p>
          </div>
          <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8 text-center mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">
              Chaque mission est unique. Contactez-nous pour recevoir un devis personnalisé gratuit sous 48h, adapté à votre périmètre et vos contraintes.
            </p>
          </div>
          <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
            <h3 className="text-white font-semibold text-xl mb-4">Ce qui est toujours inclus dans votre mission</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Rapport exécutif + rapport technique détaillé',
                'Preuves d\'exploitation pour chaque vulnérabilité',
                'Score CVSS et priorisation des corrections',
                'Debriefing avec vos équipes techniques',
                'NDA signable avant toute discussion',
                'Suivi post-mission des corrections (30 jours)',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Demander un devis gratuit sous 48h <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 : FAQ ── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">FAQ pentest</h2>
            <p className="text-gray-400 text-lg">
              Les questions les plus fréquentes que nous posent nos clients avant de démarrer une mission.
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="bg-[#1A1A1A] border border-white/5 rounded-xl p-6 hover:border-red-600/20 transition-colors"
              >
                <h3 className="text-white font-semibold text-lg mb-3">{item.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/85" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="w-10 h-10 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vos systèmes sont-ils réellement sécurisés ?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            La plupart de nos clients découvrent leurs vulnérabilités critiques dans les premières 48h de mission. Ne laissez pas un attaquant être le premier à les trouver. Demandez votre devis gratuit aujourd&apos;hui — notre équipe vous répond sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Demander un devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/audit-securite-informatique"
              className="inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-red-600/50 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Découvrir l&apos;audit sécurité
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            60 rue François 1er, 75008 Paris •{' '}
            <Link href="/contact" className="text-red-600 hover:underline">
              contact@atlasredconsult.com
            </Link>{' '}
            •{' '}
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
              Blog cybersécurité
            </Link>
          </p>
        </div>
      </section>

      {/* SPONDEI FORM PLACEHOLDER - Replace with actual Spondei embed code */}
      {/* <div id="spondei-form">...</div> */}
    </>
  )
}
