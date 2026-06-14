import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Red Team Cybersécurité — Simulation Attaque Avancée | Atlas RedConsult',
  description:
    "Red Team cybersécurité : simulation d'attaque APT complète. Tests d'intrusion avancés, phishing, mouvement latéral. Experts Paris. Devis gratuit.",
  alternates: { canonical: 'https://atlasredconsult.fr/red-team-cybersecurite' },
}

export default function RedTeamCybersecurite() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Red Team Cybersécurité',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Atlas RedConsult',
      url: 'https://atlasredconsult.fr',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Paris',
        postalCode: '75008',
        addressCountry: 'FR',
      },
    },
    areaServed: 'FR',
    serviceType: 'Red Team Security Assessment',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://atlasredconsult.fr' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Red Team Cybersécurité',
        item: 'https://atlasredconsult.fr/red-team-cybersecurite',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quelle est la différence entre un pentest classique et une opération Red Team ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un pentest classique évalue de façon exhaustive la surface d\'attaque d\'un périmètre défini (application web, réseau, API) dans un temps limité, avec l\'objectif de trouver un maximum de vulnérabilités. Une opération Red Team simule une attaque ciblée avec un objectif précis (accès aux serveurs de production, exfiltration de données clients, compromission d\'un compte dirigeant), sur une durée plus longue, en combinant tous les vecteurs disponibles : technique, humain (phishing, vishing), et physique si nécessaire. Le Red Team teste votre capacité globale à détecter et répondre à une attaque réelle.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qui doit être au courant d\'une opération Red Team dans l\'entreprise ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dans une opération Red Team standard, seul un "Trusted Agent" — généralement le RSSI, le DSI ou un membre de la direction générale — est informé de la mission. Le reste des équipes (SOC, équipe sécurité, équipe IT) ne doit pas être prévenu afin de tester leur capacité de détection et de réponse dans des conditions réalistes. Cette approche "double aveugle" est fondamentale pour obtenir une évaluation fidèle de votre niveau de résilience réel.',
        },
      },
      {
        '@type': 'Question',
        name: 'Mon entreprise est-elle prête pour une opération Red Team ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Une opération Red Team s\'adresse aux organisations qui ont déjà un niveau de maturité sécurité suffisant : une équipe sécurité ou SOC opérationnel, des outils de détection en place (EDR, SIEM), et idéalement une expérience des pentests classiques. Si vous n\'avez pas encore réalisé de pentest de votre infrastructure, nous recommandons de commencer par un audit de sécurité ou un pentest classique avant d\'envisager un Red Team. Nous pouvons vous orienter lors d\'un premier échange.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qu\'est-ce que le framework MITRE ATT&CK et pourquoi est-il utilisé en Red Team ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MITRE ATT&CK est une base de connaissances mondiale des tactiques, techniques et procédures (TTPs) utilisées par les groupes d\'attaquants réels (APT, cybercriminels). Il structure plus de 200 techniques d\'attaque organisées en 14 tactiques (Initial Access, Execution, Persistence, Lateral Movement, Exfiltration...). Utiliser MITRE ATT&CK dans un Red Team garantit que la simulation reproduit fidèlement les comportements d\'adversaires réels, et permet de mesurer précisément quelle proportion des TTPs est détectée par vos équipes et outils de sécurité.',
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-[#0A0A0A] text-white min-h-screen">
        {/* Breadcrumb */}
        <nav className="max-w-6xl mx-auto px-4 pt-6 pb-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-red-600 transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Red Team Cybersécurité</span>
        </nav>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded mb-4 uppercase tracking-wider">
              Simulation d&apos;attaque avancée — MITRE ATT&amp;CK
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Red Team Cybersécurité —{' '}
              <span className="text-red-600">Simulation d&apos;Attaque Avancée</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Vos outils de sécurité détectent-ils réellement une attaque en cours, ou seulement
              les menaces dans leurs signatures ? Une opération Red Team simule une attaque APT complète
              contre votre organisation — technique, humaine, persistance, mouvement latéral —
              pour mesurer votre résilience réelle face à des adversaires déterminés.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold mb-4 text-red-600">Qu&apos;est-ce qu&apos;une opération Red Team ?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Une opération Red Team est une simulation d&apos;attaque ciblée, réaliste et complète contre
                  votre organisation. Contrairement à un pentest classique qui évalue exhaustivement un
                  périmètre défini, le Red Team reproduit le comportement d&apos;un adversaire réel — groupe
                  APT (Advanced Persistent Threat), cybercriminel organisé ou initié malveillant — avec
                  un objectif précis défini en amont avec vous.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  L&apos;objectif d&apos;un Red Team n&apos;est pas de trouver toutes les vulnérabilités, mais de mesurer
                  votre capacité à détecter, contenir et répondre à une attaque sophistiquée. La question
                  posée n&apos;est plus "quelles sont nos vulnérabilités ?" mais "un attaquant réel peut-il
                  atteindre notre objectif critique — accès à la base de données clients, exfiltration
                  de propriété intellectuelle, compromission du système de paiement — et combien de
                  temps nous faudrait-il pour le détecter ?"
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Une opération Red Team engage simultanément tous les vecteurs d&apos;attaque disponibles.
                  Le volet technique couvre la reconnaissance externe, l&apos;exploitation de vulnérabilités,
                  l&apos;établissement d&apos;un accès persistant et le mouvement latéral vers les systèmes critiques.
                  Le volet humain inclut des campagnes de phishing ciblé, de spear phishing, et potentiellement
                  des tentatives d&apos;ingénierie sociale par téléphone (vishing). Le volet physique — si inclus
                  dans le périmètre — peut couvrir des tentatives d&apos;intrusion dans vos locaux.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Seul un nombre limité de personnes dans votre organisation est informé de la mission —
                  généralement votre RSSI et un membre de la direction. Votre équipe sécurité et votre SOC
                  ne savent pas que le test est en cours, ce qui garantit l&apos;authenticité de leur réponse
                  et une mesure fidèle de votre niveau de détection réel.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-red-600">Red Team vs Pentest classique : les différences clés</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Les deux approches sont complémentaires et répondent à des questions différentes.
                  Comprendre leurs différences fondamentales vous permet de choisir la prestation
                  la plus adaptée à votre niveau de maturité et à vos objectifs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-[#1A1A1A] rounded-lg p-5 border border-gray-800">
                    <h3 className="font-semibold text-white mb-4">Pentest classique</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                      {[
                        { label: 'Objectif', val: 'Trouver un maximum de vulnérabilités sur un périmètre défini' },
                        { label: 'Périmètre', val: 'Défini précisément (application, réseau, API)' },
                        { label: 'Durée', val: '5 à 15 jours ouvrés' },
                        { label: 'Équipes informées', val: 'Généralement les équipes IT et sécurité' },
                        { label: 'Vecteurs testés', val: 'Principalement technique' },
                        { label: 'Résultat', val: 'Liste exhaustive de vulnérabilités et remédiations' },
                      ].map((row) => (
                        <li key={row.label}>
                          <span className="text-red-600 font-medium">{row.label} :</span>{' '}
                          <span>{row.val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#1A1A1A] rounded-lg p-5 border border-red-900">
                    <h3 className="font-semibold text-white mb-4">Opération Red Team</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                      {[
                        { label: 'Objectif', val: 'Atteindre un objectif critique, mesurer la détection et réponse' },
                        { label: 'Périmètre', val: 'Toute la surface d\'attaque de l\'organisation' },
                        { label: 'Durée', val: '4 à 12 semaines selon la complexité' },
                        { label: 'Équipes informées', val: 'RSSI et direction uniquement (double aveugle)' },
                        { label: 'Vecteurs testés', val: 'Technique + humain (phishing) + physique (optionnel)' },
                        { label: 'Résultat', val: 'Scénario d\'attaque complet, mesure du délai de détection' },
                      ].map((row) => (
                        <li key={row.label}>
                          <span className="text-red-600 font-medium">{row.label} :</span>{' '}
                          <span>{row.val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Si votre organisation n&apos;a pas encore réalisé de pentest classique de ses actifs critiques,
                  nous recommandons de commencer par là. Le Red Team est la prochaine étape pour les
                  organisations qui souhaitent éprouver leur capacité de détection et de réponse à incident.
                  Consultez notre offre de{' '}
                  <Link href="/pentest-web" className="text-red-600 hover:underline">pentest web</Link>{' '}
                  ou de{' '}
                  <Link href="/pentest-entreprise" className="text-red-600 hover:underline">pentest entreprise</Link>{' '}
                  si vous souhaitez débuter par un test plus ciblé.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-red-600">Phases d&apos;une opération Red Team Atlas RedConsult</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Chaque opération Red Team est structurée en phases successives qui reproduisent fidèlement
                  le cycle d&apos;une attaque réelle, depuis la reconnaissance initiale jusqu&apos;à l&apos;atteinte de
                  l&apos;objectif défini ou à la détection par vos équipes.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: '01',
                      title: 'Cadrage et définition des objectifs (Trusted Agent)',
                      desc: 'Réunion confidentielle avec le Trusted Agent pour définir : objectifs de la mission (crown jewels à atteindre), règles d\'engagement, périmètre hors-scope, procédures d\'urgence. Un NDA est signé. Seul le Trusted Agent connaît l\'existence de la mission.',
                    },
                    {
                      step: '02',
                      title: 'Reconnaissance externe (OSINT)',
                      desc: 'Collecte exhaustive d\'informations publiques : cartographie de l\'infrastructure, employés et organigramme (LinkedIn, OSINT), emails professionnels, technologies utilisées, données exposées dans des fuites. Cette phase est entièrement passive et ne génère aucun trafic vers vos systèmes.',
                    },
                    {
                      step: '03',
                      title: 'Accès initial (Initial Access)',
                      desc: 'Tentatives d\'obtention d\'un premier accès à votre système d\'information par les vecteurs les plus réalistes : phishing ciblé (spear phishing) à l\'encontre d\'employés identifiés, exploitation de vulnérabilités sur des systèmes exposés, attaque de la chaîne d\'approvisionnement, ou exploitation de credentials exposés dans des fuites.',
                    },
                    {
                      step: '04',
                      title: 'Établissement de la persistance',
                      desc: 'Une fois un accès initial obtenu, établissement d\'un accès persistant et discret pour survivre aux redémarrages, mises à jour et éventuelles détections partielles. Utilisation de techniques d\'évasion des EDR et antivirus, implants à faible empreinte réseau.',
                    },
                    {
                      step: '05',
                      title: 'Mouvement latéral et escalade de privilèges',
                      desc: 'Progression dans le réseau de l\'organisation depuis le point d\'accès initial vers les systèmes critiques : compromission d\'Active Directory, vol de credentials, Pass-the-Hash, Kerberoasting, exploitation de relations de confiance inter-systèmes.',
                    },
                    {
                      step: '06',
                      title: 'Atteinte de l\'objectif et documentation',
                      desc: 'Atteinte de l\'objectif défini (accès aux données sensibles, compromission d\'un système critique), documentation de l\'ensemble du chemin d\'attaque, puis débrief complet avec le Trusted Agent et les équipes de sécurité.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 bg-[#1A1A1A] rounded-lg p-4">
                      <span className="text-red-600 font-bold text-lg min-w-[2rem]">{item.step}</span>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-red-600">Tactiques TTPs selon le framework MITRE ATT&amp;CK</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Atlas RedConsult structure ses opérations Red Team autour du framework MITRE ATT&amp;CK,
                  la base de connaissances mondiale des tactiques, techniques et procédures utilisées
                  par les attaquants réels. Ce référentiel couvre plus de 200 techniques réparties
                  en 14 tactiques, couvrant l&apos;intégralité du cycle d&apos;une attaque avancée.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {[
                    { tactic: 'Initial Access', examples: 'Phishing, exploitation de services publics, supply chain compromise, valid accounts' },
                    { tactic: 'Execution', examples: 'PowerShell, WMI, scripts malveillants, exploitation d\'interpréteurs de commandes' },
                    { tactic: 'Persistence', examples: 'Scheduled tasks, registry run keys, DLL hijacking, services malveillants' },
                    { tactic: 'Privilege Escalation', examples: 'Exploitation de failles locales, bypass UAC, token impersonation, Kerberoasting' },
                    { tactic: 'Defense Evasion', examples: 'Obfuscation, désactivation des outils de sécurité, living-off-the-land (LOLBins)' },
                    { tactic: 'Credential Access', examples: 'Mimikatz, LSASS dump, Pass-the-Hash, ticket Kerberos forgé (Golden/Silver)' },
                    { tactic: 'Lateral Movement', examples: 'Pass-the-Hash, Overpass-the-Hash, RDP, SMB, WMI, exploitation de trusts AD' },
                    { tactic: 'Collection & Exfiltration', examples: 'Collecte de données sensibles, chiffrement, exfiltration via canaux légitimes (HTTPS, DNS)' },
                  ].map((item) => (
                    <div key={item.tactic} className="bg-[#1A1A1A] rounded-lg p-4 border border-gray-800">
                      <h3 className="font-semibold text-white text-sm mb-2">{item.tactic}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.examples}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  L&apos;utilisation de MITRE ATT&amp;CK permet également de mesurer, après l&apos;opération, quelle
                  proportion des techniques utilisées a été détectée par vos équipes et outils. Ce mapping
                  est un livrable précieux pour prioriser les améliorations de vos capacités de détection.
                  Pour approfondir votre posture offensive, consultez notre page{' '}
                  <Link href="/cybersecurite-offensive" className="text-red-600 hover:underline">cybersécurité offensive</Link>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-red-600">Livrables d&apos;une opération Red Team</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  À l&apos;issue de l&apos;opération, Atlas RedConsult remet un dossier complet documentant l&apos;intégralité
                  du scénario d&apos;attaque et fournissant des recommandations stratégiques et techniques
                  pour améliorer votre résilience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {[
                    { title: 'Rapport exécutif Red Team', desc: 'Synthèse destinée à la direction : objectif atteint ou non, chronologie de l\'attaque, temps avant détection, indicateurs clés de compromission, recommandations stratégiques.' },
                    { title: 'Rapport technique complet', desc: 'Documentation chronologique de toutes les actions menées : TTPs utilisées, outils déployés, preuves d\'exploitation, artefacts laissés dans le SI, mapping MITRE ATT&CK.' },
                    { title: 'Rapport Blue Team (détection)', desc: 'Analyse de ce que vos équipes ont détecté et de ce qui leur a échappé. Recommandations pour améliorer vos règles de détection SIEM, configuration EDR, processus de réponse à incident.' },
                    { title: 'Session de débrief technique', desc: 'Présentation à huis clos avec vos équipes sécurité (Blue Team) pour passer en revue le scénario d\'attaque étape par étape. Un moment pédagogique à fort impact pour vos équipes.' },
                  ].map((item) => (
                    <div key={item.title} className="bg-[#1A1A1A] rounded-lg p-4 border border-gray-800">
                      <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Nos rapports Red Team répondent aux exigences du règlement DORA (Digital Operational
                  Resilience Act) qui impose aux entités financières des tests de résilience avancés
                  (TLPT — Threat-Led Penetration Testing). Consultez notre page{' '}
                  <Link href="/conformite-dora" className="text-red-600 hover:underline">conformité DORA</Link>{' '}
                  pour en savoir plus.
                </p>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-red-600">FAQ Red Team</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: 'Quelle est la différence entre un pentest classique et une opération Red Team ?',
                      a: 'Un pentest classique évalue exhaustivement la surface d\'attaque d\'un périmètre défini pour trouver un maximum de vulnérabilités. Une opération Red Team simule une attaque ciblée avec un objectif précis, sur une durée plus longue, en combinant tous les vecteurs disponibles : technique, humain (phishing) et physique. Le Red Team teste votre capacité globale à détecter et répondre à une attaque réelle.',
                    },
                    {
                      q: 'Qui doit être au courant d\'une opération Red Team dans l\'entreprise ?',
                      a: 'Dans une opération Red Team standard, seul un "Trusted Agent" — généralement le RSSI ou un membre de la direction — est informé de la mission. Le reste des équipes (SOC, équipe sécurité, IT) ne doit pas être prévenu afin de tester leur capacité de détection dans des conditions réalistes.',
                    },
                    {
                      q: 'Mon entreprise est-elle prête pour une opération Red Team ?',
                      a: 'Le Red Team s\'adresse aux organisations ayant un niveau de maturité sécurité suffisant : équipe sécurité ou SOC opérationnel, outils de détection en place (EDR, SIEM). Si vous n\'avez pas encore réalisé de pentest classique, nous recommandons de commencer par là. Nous pouvons vous orienter lors d\'un premier échange.',
                    },
                    {
                      q: 'Qu\'est-ce que le framework MITRE ATT&CK et pourquoi est-il utilisé en Red Team ?',
                      a: 'MITRE ATT&CK est une base de connaissances des tactiques, techniques et procédures (TTPs) utilisées par les attaquants réels. Il structure plus de 200 techniques en 14 tactiques. L\'utiliser garantit que la simulation reproduit fidèlement des comportements d\'adversaires réels, et permet de mesurer précisément quelle proportion est détectée par vos équipes.',
                    },
                  ].map((item) => (
                    <details key={item.q} className="bg-[#1A1A1A] rounded-lg border border-gray-800">
                      <summary className="p-4 cursor-pointer font-semibold text-white hover:text-red-600 transition-colors">
                        {item.q}
                      </summary>
                      <p className="px-4 pb-4 text-gray-400 leading-relaxed">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800 sticky top-6">
                <h3 className="font-bold text-lg mb-4">Obtenez votre devis</h3>
                <p className="text-gray-400 text-sm mb-6">Réponse sous 48h. Devis gratuit et sans engagement.</p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Demander un devis gratuit
                </Link>
                <div className="mt-6 space-y-2 text-sm text-gray-400">
                  <div className="flex gap-2"><span className="text-red-600">✓</span> Devis sous 48h</div>
                  <div className="flex gap-2"><span className="text-red-600">✓</span> Sans engagement</div>
                  <div className="flex gap-2"><span className="text-red-600">✓</span> Rapport en français</div>
                  <div className="flex gap-2"><span className="text-red-600">✓</span> Cabinet Paris 75008</div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold mb-4">Services associés</h3>
                <nav className="space-y-2">
                  <Link href="/pentest-web" className="block text-gray-400 hover:text-red-600 transition-colors text-sm py-1">→ Pentest Web Application</Link>
                  <Link href="/pentest-entreprise" className="block text-gray-400 hover:text-red-600 transition-colors text-sm py-1">→ Pentest Entreprise</Link>
                  <Link href="/conformite-dora" className="block text-gray-400 hover:text-red-600 transition-colors text-sm py-1">→ Conformité DORA</Link>
                  <Link href="/cybersecurite-offensive" className="block text-gray-400 hover:text-red-600 transition-colors text-sm py-1">→ Cybersécurité Offensive</Link>
                  <Link href="/contact" className="block text-gray-400 hover:text-red-600 transition-colors text-sm py-1">→ Nous contacter</Link>
                </nav>
              </div>
            </div>
          </div>
        </section>

        {/* SPONDEI FORM PLACEHOLDER */}
        {/* <div id="spondei-form" data-form-id="REPLACE_ID">Chargement...</div> */}
        {/* <script src="https://app.spondei.com/embed.js" async></script> */}

        {/* CTA Bottom */}
        <section className="bg-[#1A1A1A] border-t border-gray-800 mt-16">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Êtes-vous prêts à faire face à une attaque APT ?</h2>
            <p className="text-gray-400 mb-8">
              Nos experts simulent des attaques avancées selon MITRE ATT&amp;CK pour mesurer votre résilience réelle.
              Rapport exécutif, technique et Blue Team livré en français.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
