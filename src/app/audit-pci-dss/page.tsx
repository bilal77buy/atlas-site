import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Audit PCI-DSS — Pentest Paiement Carte Bancaire | Atlas RedConsult',
  description:
    'Audit PCI-DSS v4.0 : tests d\'intrusion obligatoires pour commerçants et PSP. Exigence 11.4. Cabinet Paris certifié. Devis pentest PCI-DSS 48h.',
  alternates: {
    canonical: 'https://atlasredconsult.fr/audit-pci-dss',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://atlasredconsult.fr/audit-pci-dss#service',
      name: 'Audit PCI-DSS — Tests d\'Intrusion Obligatoires Conformité Paiement',
      description:
        'Audit PCI-DSS v4.0 avec tests d\'intrusion obligatoires (exigence 11.4) pour commerçants, PSP et prestataires de services de paiement.',
      provider: {
        '@type': 'Organization',
        name: 'Atlas RedConsult',
        url: 'https://atlasredconsult.fr',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Paris',
          postalCode: '75008',
          addressCountry: 'FR',
        },
      },
      serviceType: 'Pentest PCI-DSS',
      areaServed: { '@type': 'Country', name: 'France' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://atlasredconsult.fr' },
        { '@type': 'ListItem', position: 2, name: 'Audit PCI-DSS', item: 'https://atlasredconsult.fr/audit-pci-dss' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qui est soumis à la norme PCI-DSS ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Toute organisation qui stocke, traite ou transmet des données de cartes bancaires est soumise à PCI-DSS. Cela inclut les commerçants e-commerce, les prestataires de services de paiement (PSP), les passerelles de paiement, les acquéreurs, et les sous-traitants qui accèdent à l\'environnement de données du titulaire de carte.',
          },
        },
        {
          '@type': 'Question',
          name: 'Que contient l\'exigence 11.4 de PCI-DSS v4.0 ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'L\'exigence 11.4 de PCI-DSS v4.0 impose des tests d\'intrusion internes et externes sur tous les composants du CDE (Card Data Environment) au moins une fois par an et après tout changement significatif. Les tests doivent couvrir la couche réseau et la couche applicative.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la fréquence des audits PCI-DSS ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Les tests d\'intrusion PCI-DSS sont obligatoires au minimum une fois par an. Ils doivent également être réalisés après tout changement significatif de l\'environnement (migration infrastructure, déploiement d\'une nouvelle application, modification du périmètre CDE).',
          },
        },
      ],
    },
  ],
}

export default function AuditPciDssPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-[#0A0A0A] pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-red-600 transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Audit PCI-DSS</span>
          </nav>
          <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-4">
            PCI-DSS v4.0 — Exigence 11.4
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Audit PCI-DSS — Tests d'Intrusion Obligatoires pour la Conformité Paiement
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Votre activité touche aux données de cartes bancaires. PCI-DSS v4.0 impose des tests d'intrusion annuels sur l'ensemble de votre environnement de données de titulaires de carte. Une non-conformité expose votre organisation à des amendes, à la résiliation des contrats d'acceptation carte, et à une responsabilité accrue en cas de violation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded transition-colors text-lg"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="bg-[#0A0A0A] px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              Qu'est-ce que la norme PCI-DSS v4.0 ?
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                PCI-DSS (Payment Card Industry Data Security Standard) est le référentiel de sécurité créé et maintenu par le PCI Security Standards Council, consortium fondé par les principaux réseaux de cartes bancaires (Visa, Mastercard, American Express, Discover, JCB). Il définit les exigences de sécurité minimales pour toute organisation qui stocke, traite ou transmet des données de titulaires de carte.
              </p>
              <p>
                La version 4.0, publiée en mars 2022, est devenue le standard obligatoire depuis avril 2024. Elle introduit plusieurs nouveautés importantes par rapport à la version 3.2.1 : une approche personnalisée permettant aux organisations de démontrer qu'elles atteignent l'objectif de sécurité par des méthodes adaptées à leur contexte, des exigences renforcées sur l'authentification (MFA étendue, politique de mots de passe), une attention accrue à la sécurité des scripts côté client (skimming e-commerce), et des exigences explicites sur la gestion des identités et des accès.
              </p>
              <p>
                PCI-DSS v4.0 est structuré en 12 exigences regroupées en 6 objectifs : construire et maintenir des réseaux et systèmes sécurisés, protéger les données du titulaire de carte, maintenir un programme de gestion des vulnérabilités, mettre en œuvre de solides mesures de contrôle d'accès, surveiller et tester régulièrement les réseaux, et maintenir une politique de sécurité des informations. Les tests d'intrusion s'inscrivent principalement dans l'objectif de surveillance et de test régulier.
              </p>
              <p>
                La conformité PCI-DSS est vérifiée soit par un Qualified Security Assessor (QSA) pour les niveaux 1 (plus de 6 millions de transactions par an), soit par un Self-Assessment Questionnaire (SAQ) pour les niveaux 2 à 4. Dans tous les cas, les tests d'intrusion de l'exigence 11.4 sont obligatoires et doivent être réalisés par un testeur qualifié indépendant.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              Exigence 11.4 : pentest obligatoire PCI-DSS
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                L'exigence 11.4 de PCI-DSS v4.0 est l'une des plus prescriptives du standard en matière de tests de sécurité. Elle impose des tests d'intrusion complets sur l'environnement de données du titulaire de carte (CDE — Cardholder Data Environment) et les systèmes qui interagissent avec lui.
              </p>
              <p>
                L'exigence 11.4.1 définit la méthodologie que doit respecter le programme de tests d'intrusion : une approche acceptable dans le secteur (PTES, OWASP, NIST SP 800-115 ou équivalent), une couverture du périmètre complet du CDE et des systèmes connexes, des tests depuis l'extérieur du réseau et depuis l'intérieur des différents segments, des tests de la segmentation réseau, et une vérification annuelle des contrôles de segmentation.
              </p>
              <p>
                L'exigence 11.4.2 impose des tests d'intrusion externes au moins une fois par an et après tout changement significatif de l'infrastructure ou des applications. Les tests externes simulent une attaque depuis Internet contre les composants du CDE exposés.
              </p>
              <p>
                L'exigence 11.4.3 impose des tests d'intrusion internes avec la même fréquence. Ces tests simulent une attaque depuis l'intérieur du réseau de l'organisation, ce qui est pertinent pour tester la segmentation entre le CDE et le reste du réseau.
              </p>
              <p>
                Un point souvent mal compris : les tests doivent être réalisés par une ressource interne ou externe qualifiée. Si c'est une ressource interne, elle doit être organisationnellement indépendante des systèmes testés. Dans la pratique, le recours à un prestataire externe comme Atlas RedConsult est la solution la plus simple pour satisfaire cette exigence d'indépendance tout en garantissant la qualité des tests.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              Périmètre de l'audit PCI-DSS
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                La première étape de tout audit PCI-DSS est la définition précise du périmètre (scope). Le périmètre PCI-DSS comprend tous les composants du système d'information qui stockent, traitent ou transmettent des données de titulaires de carte, ainsi que tous les composants du réseau qui se trouvent dans le même segment réseau que les composants du CDE, ou qui peuvent communiquer avec eux.
              </p>
              <p>
                En pratique, le périmètre inclut typiquement : les serveurs de paiement et de traitement des transactions, les bases de données stockant des données de carte (numéros PAN, données de validation, données sensibles d'authentification), les applications web et API exposant des formulaires de paiement ou traitant des données de carte, les systèmes de gestion des clés de chiffrement, les équipements réseau (pare-feu, routeurs, switches) délimitant le CDE, les terminaux de point de vente (TPE) et les systèmes qui les gèrent, et les prestataires tiers ayant accès au CDE.
              </p>
              <p>
                La réduction du périmètre est une stratégie clé pour simplifier la conformité PCI-DSS. La tokenisation et l'externalisation du traitement des paiements à des PSP certifiés PCI-DSS permettent de réduire drastiquement le nombre de composants dans le périmètre. Nous vous aidons à analyser les opportunités de réduction de périmètre avant de définir le plan d'audit.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              Méthodologie de notre audit PCI-DSS
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Notre méthodologie d'audit PCI-DSS est alignée sur les exigences de l'exigence 11.4 tout en intégrant les meilleures pratiques du marché (OWASP Testing Guide, PTES, méthodes CREST). Nous adaptons l'intensité et la profondeur des tests au niveau PCI-DSS et au profil de risque de votre organisation.
              </p>
              <p>
                La phase de cadrage définit précisément le périmètre CDE, les systèmes connexes, les règles d'engagement (plages horaires, systèmes exclus, contacts d'urgence), et le planning des tests. Nous travaillons en étroite coordination avec votre QSA si vous êtes soumis à une évaluation de niveau 1 pour garantir que nos tests répondent à ses attentes.
              </p>
              <p>
                Les tests externes couvrent : la reconnaissance des composants exposés sur Internet, les tests d'injection (SQL, LDAP, OS command), les tests d'authentification et de gestion des sessions, les tests de contrôle d'accès, les tests de cryptographie (protocoles, chiffrement des données de carte en transit), la recherche de vulnérabilités connues sur les composants identifiés, et les tests spécifiques au skimming e-commerce (code malveillant côté client, intégrité des scripts de paiement).
              </p>
              <p>
                Les tests internes ajoutent : la vérification de la segmentation réseau entre le CDE et les autres zones, les tests de mouvement latéral depuis une position compromise dans le réseau interne, les tests d'escalade de privilèges sur les systèmes CDE, et la vérification des contrôles d'accès entre le CDE et les systèmes tiers.
              </p>
            </div>
            <div className="mt-6 p-6 bg-[#1A1A1A] rounded-lg border border-gray-800">
              {/* SPONDEI FORM PLACEHOLDER */}
              {/* <div id="spondei-form" data-form-id="REPLACE_ID">Chargement...</div> */}
              {/* <script src="https://app.spondei.com/embed.js" async></script> */}
              <p className="text-gray-500 text-sm text-center">Formulaire de contact — disponible prochainement</p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              Fréquence des audits PCI-DSS
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                PCI-DSS v4.0 impose des tests d'intrusion au moins une fois par an. Cette fréquence minimale ne doit pas être confondue avec la fréquence optimale pour votre programme de sécurité. De nombreuses organisations optent pour des tests semestriels ou trimestriels sur les composants les plus critiques, notamment les applications de paiement exposées sur Internet.
              </p>
              <p>
                Des tests supplémentaires sont obligatoires après tout changement significatif de l'environnement CDE. Les changements déclenchant un nouveau test incluent : la mise en production d'une nouvelle application de paiement ou d'une nouvelle version majeure, la migration de l'infrastructure vers un nouveau datacenter ou vers le cloud, la modification de l'architecture réseau du CDE (ajout d'un pare-feu, modification de la segmentation), l'intégration d'un nouveau prestataire de services ayant accès au CDE, ou toute autre modification substantielle affectant la surface d'attaque.
              </p>
              <p>
                Nous vous recommandons d'intégrer les tests PCI-DSS dans votre cycle de release et de gestion des changements. En définissant des seuils de criticité des changements déclenchant un test, vous évitez les mauvaises surprises lors des évaluations PCI-DSS annuelles et vous maintenez un niveau de sécurité constant tout au long de l'année.
              </p>
              <p>
                Atlas RedConsult propose des contrats de tests récurrents qui facilitent cette intégration : tarifs préférentiels sur volume, délais d'exécution réduits grâce à la connaissance préalable de votre environnement, et reporting consolidé facilitant le suivi de conformité PCI-DSS dans le temps.
              </p>
            </div>
          </section>

          {/* Internal links */}
          <section className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Services et ressources associés</h3>
            <ul className="space-y-2">
              <li><Link href="/pentest-ecommerce" className="text-red-600 hover:text-red-400 transition-colors">→ Pentest E-commerce — Tests d'intrusion boutiques en ligne</Link></li>
              <li><Link href="/blog/pci-dss-v4-ecommerce" className="text-red-600 hover:text-red-400 transition-colors">→ Blog : PCI-DSS v4.0 — ce qui change pour l'e-commerce</Link></li>
              <li><Link href="/pentest-fintech" className="text-red-600 hover:text-red-400 transition-colors">→ Pentest Fintech — Tests pour startups financières</Link></li>
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              FAQ audit PCI-DSS
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Qui est soumis à la norme PCI-DSS ?',
                  a: 'Toute organisation qui stocke, traite ou transmet des données de cartes bancaires : commerçants e-commerce, PSP, passerelles de paiement, acquéreurs, et sous-traitants accédant à l\'environnement CDE. Le niveau de conformité (1 à 4) dépend du volume de transactions annuelles.',
                },
                {
                  q: 'Que contient l\'exigence 11.4 de PCI-DSS v4.0 ?',
                  a: 'L\'exigence 11.4 impose des tests d\'intrusion internes et externes annuels sur tous les composants du CDE (Card Data Environment), avec une méthodologie documentée, une couverture réseau et applicative, et une vérification de la segmentation réseau. Des tests supplémentaires sont requis après tout changement significatif.',
                },
                {
                  q: 'Quelle est la fréquence des audits PCI-DSS ?',
                  a: 'Au minimum une fois par an, et après tout changement significatif de l\'environnement (nouvelle application, migration infrastructure, modification de l\'architecture réseau du CDE). Une fréquence plus élevée est recommandée pour les organisations à fort volume de transactions.',
                },
                {
                  q: 'Le testeur PCI-DSS doit-il être certifié QSA ?',
                  a: 'Non. Le testeur doit être qualifié et organisationnellement indépendant, mais n\'a pas besoin d\'être QSA pour réaliser les tests d\'intrusion de l\'exigence 11.4. En revanche, pour une évaluation de niveau 1, l\'audit global doit être conduit ou supervisé par un QSA agréé PCI SSC.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
                  <h3 className="text-white font-semibold text-lg mb-3">{item.q}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#1A1A1A] border border-red-600/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Planifiez votre pentest PCI-DSS</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Tests d'intrusion conformes à l'exigence 11.4, rapport audit-ready, délais respectés. Devis sous 48h.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded transition-colors text-lg"
            >
              Demander un devis gratuit
            </Link>
          </section>

        </div>
      </main>
    </>
  )
}
