import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield,
  Search,
  FileText,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Globe,
  Zap,
  Server,
  Network,
  Lock,
  AlertTriangle,
  Target,
  BarChart3,
} from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Audit Sécurité Informatique Paris — Cabinet Expert | Atlas RedConsult',
  description:
    'Audit de sécurité informatique par des experts certifiés à Paris. Analyse complète de vos systèmes, réseaux et applications. Devis gratuit 48h.',
  alternates: { canonical: 'https://atlasredconsult.fr/audit-securite-informatique' },
  openGraph: {
    title: 'Audit Sécurité Informatique Paris — Cabinet Expert | Atlas RedConsult',
    description:
      'Audit de sécurité informatique par des experts certifiés à Paris. Analyse complète de vos systèmes, réseaux et applications. Devis gratuit 48h.',
    url: 'https://atlasredconsult.fr/audit-securite-informatique',
  },
}

const phases = [
  {
    number: '01',
    title: 'Cadrage et collecte d\'information',
    description:
      'Définition précise du périmètre d\'audit avec vos équipes : systèmes concernés, actifs critiques, contraintes opérationnelles, objectifs de conformité. Signature du NDA et des règles d\'engagement. Collecte de la documentation existante : architecture réseau, politiques de sécurité, cartographie des actifs, procédures de gestion des accès.',
    duration: '1 à 2 jours',
    deliverable: 'Plan d\'audit validé, NDA signé',
  },
  {
    number: '02',
    title: 'Analyse et évaluation technique',
    description:
      'Phase centrale de l\'audit. Nos consultants procèdent à une analyse approfondie des composants dans le périmètre défini : revue de configuration des équipements réseau, évaluation des politiques d\'accès et de gestion des identités, analyse des journaux de sécurité, tests des mécanismes d\'authentification, vérification des mises à jour et correctifs de sécurité, évaluation de la segmentation réseau.',
    duration: '3 à 7 jours',
    deliverable: 'Notes d\'analyse intermédiaires',
  },
  {
    number: '03',
    title: 'Tests techniques et validation',
    description:
      'Validation par le test des vulnérabilités identifiées lors de la phase d\'analyse. Contrairement à un audit de conformité pur, nous allons plus loin en vérifiant l\'exploitabilité réelle de chaque faille dans votre contexte. Tests de pénétration ciblés sur les points de faiblesse identifiés, simulation de scénarios d\'attaque réalistes, vérification des mesures de détection et de réponse en place.',
    duration: '2 à 5 jours',
    deliverable: 'Preuves d\'exploitation, CVEs identifiés',
  },
  {
    number: '04',
    title: 'Rapport et plan de remédiation',
    description:
      'Rédaction du rapport d\'audit complet : synthèse exécutive pour la direction, rapport technique détaillé pour vos équipes, plan de remédiation priorisé par criticité et effort, feuille de route de mise en conformité. Présentation et debriefing avec vos équipes techniques et de direction. Suivi des corrections pendant 30 jours après livraison.',
    duration: '2 à 3 jours',
    deliverable: 'Rapport complet, plan de remédiation, debriefing',
  },
]

const perimetre = [
  {
    icon: Globe,
    title: 'Applications web et portails',
    items: [
      'Applications métier internes et externes',
      'Portails clients et espaces collaborateurs',
      'CMS et plateformes e-commerce',
      'APIs REST, GraphQL et SOAP',
    ],
  },
  {
    icon: Network,
    title: 'Infrastructure réseau',
    items: [
      'Firewalls, routeurs et switchs',
      'Segmentation et VLAN',
      'VPN et accès distants',
      'Équipements WiFi et sans-fil',
    ],
  },
  {
    icon: Server,
    title: 'Serveurs et systèmes',
    items: [
      'Serveurs Windows et Linux',
      'Active Directory et LDAP',
      'Bases de données (SQL, NoSQL)',
      'Environnements cloud (AWS, Azure, GCP)',
    ],
  },
  {
    icon: Lock,
    title: 'Gestion des accès et identités',
    items: [
      'Politiques de mots de passe',
      'Authentification multifacteur (MFA)',
      'Gestion des droits et privilèges',
      'Comptes de service et secrets',
    ],
  },
  {
    icon: FileText,
    title: 'Politiques et gouvernance',
    items: [
      'Politique de sécurité du système d\'information (PSSI)',
      'Procédures de gestion des incidents',
      'Plan de continuité d\'activité (PCA/PRA)',
      'Sensibilisation et formation des équipes',
    ],
  },
  {
    icon: BarChart3,
    title: 'Conformité réglementaire',
    items: [
      'DORA pour les entités financières',
      'NIS2 pour les entités essentielles',
      'PCI-DSS pour les environnements de paiement',
      'ISO 27001 et référentiel ANSSI',
    ],
  },
]

const livrables = [
  {
    title: 'Synthèse exécutive',
    description:
      'Document de 2 à 5 pages destiné à la direction générale. Présente le niveau de risque global, les vulnérabilités critiques identifiées et les 3 priorités de remédiation immédiates. Aucun jargon technique — conçu pour une prise de décision rapide.',
  },
  {
    title: 'Rapport technique détaillé',
    description:
      'Document exhaustif pour vos équipes techniques. Chaque vulnérabilité est documentée avec : description, preuve d\'exploitation ou preuve de présence, score de risque CVSS, références CVE et CWE, recommandation de correction détaillée et ressources associées.',
  },
  {
    title: 'Plan de remédiation priorisé',
    description:
      'Feuille de route structurée en trois horizons : corrections immédiates (critique), actions à court terme (élevé), améliorations à moyen terme (modéré/faible). Chaque action inclut une estimation d\'effort et les équipes responsables.',
  },
  {
    title: 'Cartographie des risques',
    description:
      'Matrice de risques visuelle croisant la probabilité d\'exploitation et l\'impact potentiel pour chaque vulnérabilité identifiée. Permet une communication claire avec les parties prenantes non techniques.',
  },
  {
    title: 'Debriefing et présentation',
    description:
      'Session de restitution avec vos équipes techniques (2h) et session séparée avec la direction si souhaité (1h). Questions-réponses, clarification des recommandations, discussion du plan d\'action.',
  },
]

const faqItems = [
  {
    question: 'Quelle est la différence entre un audit de sécurité informatique et un pentest ?',
    answer:
      'L\'audit de sécurité informatique est une évaluation globale de votre posture de sécurité : il examine vos configurations, vos politiques, vos processus et votre gouvernance par rapport à un référentiel (ISO 27001, ANSSI, NIS2...). Il identifie les écarts et les risques sans nécessairement les exploiter. Le pentest (test d\'intrusion), lui, va plus loin : il simule une attaque réelle pour valider concrètement si vos vulnérabilités sont exploitables. En pratique, un audit de sécurité complet chez Atlas RedConsult inclut toujours une composante de tests techniques pour valider les findings — car identifier une faille théorique sans vérifier son exploitabilité réelle n\'a que peu de valeur.',
  },
  {
    question: 'Combien de temps dure un audit de sécurité informatique ?',
    answer:
      'La durée dépend du périmètre. Un audit de sécurité ciblé sur une application web et ses APIs dure généralement 5 à 7 jours. Un audit complet d\'infrastructure (réseau, serveurs, AD, applications) nécessite 10 à 20 jours selon la taille de l\'environnement. Nous établissons un cadrage précis avant démarrage pour dimensionner correctement la mission et vous fournir un devis détaillé.',
  },
  {
    question: 'L\'audit de sécurité est-il obligatoire pour les entreprises françaises ?',
    answer:
      'Cela dépend de votre secteur et de votre taille. Les entités financières soumises à DORA (banques, assurances, prestataires IT financiers) doivent réaliser des tests de résilience opérationnelle réguliers incluant des tests de pénétration avancés (TLPT). Les entités essentielles et importantes couvertes par NIS2 doivent mettre en place des mesures de gestion des risques incluant des audits de sécurité. Les entreprises traitant des données de paiement doivent respecter PCI-DSS v4.0 qui impose des pentests annuels. Même sans obligation légale, un audit annuel est considéré comme une bonne pratique par l\'ANSSI.',
  },
  {
    question: 'Quels systèmes peuvent être inclus dans le périmètre d\'audit ?',
    answer:
      'Nous pouvons auditer l\'ensemble de votre système d\'information : applications web et mobiles, APIs, serveurs (on-premise ou cloud), infrastructure réseau, Active Directory, bases de données, environnements conteneurisés (Docker/Kubernetes), configurations cloud (AWS, Azure, GCP). Le périmètre est défini conjointement lors du cadrage pour correspondre exactement à vos priorités et contraintes opérationnelles.',
  },
  {
    question: 'Comment se déroule l\'audit sans perturber nos opérations ?',
    answer:
      'Nos audits sont conçus pour être non disruptifs. Les analyses et tests sont planifiés en accord avec vos équipes, en dehors des heures de pointe si nécessaire. Nous travaillons systématiquement sur des environnements de staging/recette pour les tests les plus intrusifs. En cas de découverte d\'une vulnérabilité critique susceptible d\'impacter la production, nous vous contactons immédiatement. Nos consultants expérimentés savent distinguer ce qui peut être testé sans risque de ce qui nécessite des précautions particulières.',
  },
]

export default function AuditSecuriteInformatiqueePage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://atlasredconsult.fr/audit-securite-informatique/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: 'https://atlasredconsult.fr',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Audit de sécurité informatique',
            item: 'https://atlasredconsult.fr/audit-securite-informatique',
          },
        ],
      },
      {
        '@type': ['Service', 'ProfessionalService'],
        '@id': 'https://atlasredconsult.fr/audit-securite-informatique/#service',
        name: 'Audit de sécurité informatique',
        description:
          'Audit de sécurité informatique complet par des experts certifiés à Paris. Analyse de vos systèmes, réseaux, applications et gouvernance.',
        provider: {
          '@type': 'ProfessionalService',
          name: 'Atlas RedConsult',
          url: 'https://atlasredconsult.fr',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '60 rue François 1er',
            addressLocality: 'Paris',
            postalCode: '75008',
            addressCountry: 'FR',
          },
        },
        areaServed: [
          { '@type': 'City', name: 'Paris' },
          { '@type': 'Country', name: 'France' },
        ],
        serviceType: 'Audit de sécurité informatique',
        url: 'https://atlasredconsult.fr/audit-securite-informatique',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://atlasredconsult.fr/audit-securite-informatique/#faq',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Fil d'Ariane" className="pt-24 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3 h-3" />
          </li>
          <li className="text-gray-300">Audit de sécurité informatique</li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pb-20 pt-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-600 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-3 h-3" />
              Audit cybersécurité — Paris 75008
            </div>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Audit de Sécurité Informatique —{' '}
              <span className="text-red-600">Diagnostic Complet</span> de vos Systèmes et Réseaux
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Atlas RedConsult réalise des audits de sécurité informatique complets pour les entreprises parisiennes et françaises. Nos experts analysent vos systèmes, réseaux, applications et processus pour identifier vos vulnérabilités avant qu&apos;elles ne soient exploitées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
              >
                Demander un devis gratuit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pentest-web"
                className="inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-red-600/50 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
              >
                Voir le pentest web
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-600" /> Devis gratuit sous 48h
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-600" /> Experts certifiés OSCP/CEH
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-600" /> Rapport livré à J+15
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-600" /> Conformité DORA, NIS2, PCI-DSS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1 : QU'EST-CE QU'UN AUDIT ── */}
      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Qu&apos;est-ce qu&apos;un audit de sécurité informatique ?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Un audit de sécurité informatique est une évaluation systématique et indépendante de votre système d&apos;information. Il vise à mesurer votre niveau de sécurité réel par rapport aux menaces actuelles et aux exigences réglementaires applicables à votre secteur.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Contrairement aux idées reçues, un audit de sécurité ne se limite pas à vérifier que des cases de conformité sont cochées. Un audit réalisé par Atlas RedConsult combine analyse de configuration, revue de gouvernance, tests techniques et simulation de scénarios d&apos;attaque. Chaque vulnérabilité identifiée est validée dans votre contexte spécifique.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                À l&apos;issue de l&apos;audit, vous disposez d&apos;une vision claire et exhaustive de votre posture de sécurité, d&apos;un plan de remédiation priorisé et de tous les éléments nécessaires pour justifier vos investissements sécurité auprès de votre direction ou de vos régulateurs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: 'Objectivité et indépendance',
                  body: 'Un audit interne manque souvent d\'objectivité. Nos auditeurs externes apportent un regard neuf, sans biais organisationnel, et comparent vos pratiques avec ce qu\'ils observent sur des dizaines d\'entreprises similaires chaque année.',
                },
                {
                  title: 'Couverture exhaustive',
                  body: 'Vos équipes internes sont focalisées sur la continuité opérationnelle. Nous, nous cherchons activement les failles : configurations par défaut non modifiées, ports ouverts non documentés, comptes orphelins, exceptions de firewall oubliées.',
                },
                {
                  title: 'Preuves pour vos régulateurs',
                  body: 'DORA, NIS2 et PCI-DSS exigent des preuves documentées de vos efforts en matière de sécurité. Nos rapports sont structurés pour répondre à ces exigences et faciliter vos échanges avec l\'ACPR, l\'AMF ou les QSA PCI-DSS.',
                },
                {
                  title: 'Référentiel ANSSI',
                  body: 'Nos audits s\'appuient sur les guides et recommandations de l\'ANSSI (Agence nationale de la sécurité des systèmes d\'information), la référence française en matière de cybersécurité.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#1A1A1A] border border-white/5 rounded-xl p-5 hover:border-red-600/20 transition-colors"
                >
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 : LES 4 PHASES ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Les 4 phases de notre audit de sécurité
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Notre méthodologie d&apos;audit est structurée, transparente et adaptée à votre contexte. Chaque phase a des objectifs clairs et des livrables définis.
            </p>
          </div>
          <div className="space-y-6">
            {phases.map((phase, i) => (
              <div
                key={i}
                className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8 hover:border-red-600/20 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-600/10 rounded-xl flex items-center justify-center">
                      <span className="text-red-600 font-bold text-xl font-mono">{phase.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                      <h3 className="text-white font-bold text-xl">{phase.title}</h3>
                      <span className="text-xs text-gray-500 bg-white/5 rounded-full px-3 py-1 border border-white/5 md:ml-2">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-4">{phase.description}</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">
                        <strong className="text-white">Livrable :</strong> {phase.deliverable}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Demander un devis gratuit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 : AUDIT VS PENTEST ── */}
      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Audit de sécurité vs Pentest : quelles différences ?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Ces deux approches sont complémentaires. Comprendre leurs différences vous permet de choisir la bonne intervention selon vos objectifs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-white font-bold text-xl">Audit de sécurité informatique</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Évaluation globale de la posture de sécurité',
                  'Revue des configurations, politiques et processus',
                  'Comparaison avec des référentiels (ANSSI, ISO 27001, NIS2)',
                  'Identification des écarts et des risques',
                  'Vision exhaustive et structurée',
                  'Recommandations de gouvernance et organisationnelles',
                  'Idéal pour les audits réglementaires et annuels',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/audit-pentest" className="text-red-600 text-sm hover:underline flex items-center gap-1">
                Voir l&apos;audit pentest <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-white font-bold text-xl">Pentest (test d&apos;intrusion)</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Simulation d\'une attaque réelle sur un périmètre ciblé',
                  'Exploitation contrôlée des vulnérabilités',
                  'Validation concrète de l\'exploitabilité des failles',
                  'Chaînes d\'attaque et mouvements latéraux',
                  'Vision de l\'attaquant (black/grey/white box)',
                  'Preuves d\'exploitation concrètes',
                  'Idéal pour valider la robustesse d\'un système spécifique',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/pentest-web" className="text-red-600 text-sm hover:underline flex items-center gap-1">
                Voir le pentest web <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
          <div className="bg-[#1A1A1A] border border-red-600/20 rounded-xl p-8">
            <h3 className="text-white font-semibold text-xl mb-4">
              Notre recommandation : combiner les deux approches
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              L&apos;audit de sécurité vous donne la vision d&apos;ensemble et identifie les zones de risque. Le pentest valide que ces risques sont réellement exploitables dans votre contexte. En combinant les deux, vous bénéficiez d&apos;une couverture maximale : ni les failles de gouvernance ni les vulnérabilités techniques n&apos;échappent à notre analyse. C&apos;est l&apos;approche que nous recommandons pour les entreprises soumises à DORA ou NIS2.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pentest-api"
                className="inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-red-600/50 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Pentest API <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 : PÉRIMÈTRES ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Périmètres couverts par notre audit sécurité
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Un audit de sécurité informatique complet doit couvrir l&apos;ensemble de votre surface d&apos;attaque. Voici les domaines que nous évaluons systématiquement, adaptés à la taille et au secteur de votre entreprise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {perimetre.map((domain) => (
              <div
                key={domain.title}
                className="bg-[#1A1A1A] border border-white/5 rounded-xl p-6 hover:border-red-600/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                    <domain.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-white font-semibold">{domain.title}</h3>
                </div>
                <ul className="space-y-2">
                  {domain.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight className="w-3 h-3 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Votre périmètre ne correspond pas exactement à l&apos;un de ces domaines ?{' '}
              <Link href="/contact" className="text-red-600 hover:underline">
                Contactez-nous
              </Link>{' '}
              — nous adaptons chaque mission à votre contexte.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 : LIVRABLES ── */}
      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Livrables de l&apos;audit de sécurité informatique
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              À l&apos;issue de chaque audit, vous recevez un ensemble de documents structurés pour répondre aux besoins de toutes les parties prenantes de votre organisation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {livrables.map((livrable, i) => (
              <div
                key={i}
                className="bg-[#1A1A1A] border border-white/5 rounded-xl p-6 hover:border-red-600/20 transition-colors"
              >
                <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{livrable.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{livrable.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">J+15</div>
                <div className="text-white font-semibold mb-1">Délai de livraison maximum</div>
                <div className="text-gray-400 text-sm">Rapport complet garanti sous 15 jours ouvrés après la fin des tests</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">30j</div>
                <div className="text-white font-semibold mb-1">Suivi post-mission inclus</div>
                <div className="text-gray-400 text-sm">Questions sur les corrections et relecture de patches pendant 30 jours</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">NDA</div>
                <div className="text-white font-semibold mb-1">Confidentialité garantie</div>
                <div className="text-gray-400 text-sm">Accord de confidentialité renforcé signable avant toute discussion</div>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              FAQ audit de sécurité
            </h2>
            <p className="text-gray-400 text-lg">
              Les questions les plus fréquentes posées par nos clients avant de démarrer un audit.
            </p>
          </div>
          <div className="space-y-4 mb-12">
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
      <section className="py-20 bg-[#111111] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="w-10 h-10 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à connaître votre niveau de sécurité réel ?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            La plupart des entreprises surestiment leur niveau de sécurité. Nos audits révèlent systématiquement des vulnérabilités non identifiées par les équipes internes. Obtenez un devis gratuit et personnalisé sous 48h — sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Demander un devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pentest-web"
              className="inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-red-600/50 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Pentest web <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-gray-500 text-sm">
            60 rue François 1er, 75008 Paris •{' '}
            <Link href="/contact" className="text-red-600 hover:underline">
              contact@atlasredconsult.fr
            </Link>{' '}
            •{' '}
            <Link href="/conformite-dora" className="text-gray-400 hover:text-white transition-colors">
              Conformité DORA
            </Link>
          </p>
        </div>
      </section>

      {/* SPONDEI FORM PLACEHOLDER - Replace with actual Spondei embed code */}
      {/* <div id="spondei-form">...</div> */}
    </>
  )
}
