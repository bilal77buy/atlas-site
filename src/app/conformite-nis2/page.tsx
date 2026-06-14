import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Conformité NIS2 — Guide Complet Directive Cybersécurité | Atlas RedConsult',
  description:
    'Conformité NIS2 : guide complet des obligations cybersécurité. Mise en conformité avec tests d\'intrusion. Cabinet Atlas RedConsult Paris. Devis 48h.',
  alternates: {
    canonical: 'https://atlasredconsult.fr/conformite-nis2',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://atlasredconsult.fr/conformite-nis2#service',
      name: 'Conformité NIS2 — Mise en Conformité Directive Cybersécurité',
      description:
        'Accompagnement complet pour la mise en conformité avec la directive NIS2 : analyse de risque, tests d\'intrusion, documentation, et suivi post-audit.',
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
      serviceType: 'Conformité NIS2',
      areaServed: { '@type': 'Country', name: 'France' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://atlasredconsult.fr' },
        { '@type': 'ListItem', position: 2, name: 'Conformité NIS2', item: 'https://atlasredconsult.fr/conformite-nis2' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quels sont les délais pour se mettre en conformité NIS2 ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La directive NIS2 devait être transposée par les États membres avant octobre 2024. En France, la transposition est en cours et les organisations doivent se préparer dès maintenant. L\'ANSSI recommande de débuter immédiatement la démarche de mise en conformité sans attendre les textes de transposition définitifs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la différence entre NIS2 et DORA ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NIS2 est une directive de portée générale s\'appliquant à de nombreux secteurs. DORA est un règlement sectoriel spécifique au secteur financier qui va plus loin sur les exigences de tests (TLPT) et de gestion des risques tiers ICT. Les entités financières sont soumises aux deux textes simultanément.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment prouver sa conformité NIS2 aux autorités ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La conformité NIS2 se démontre par la documentation des mesures mises en place, les résultats des tests de sécurité (dont les plans de remédiation), les politiques de sécurité approuvées par la direction, et les procédures de notification des incidents. Les rapports d\'audit de prestataires qualifiés constituent des preuves solides.',
          },
        },
      ],
    },
  ],
}

export default function ConformiteNis2Page() {
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
            <span className="text-gray-300">Conformité NIS2</span>
          </nav>
          <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Directive NIS2 — Guide Complet
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Conformité NIS2 — Mise en Conformité avec la Directive Cybersécurité Européenne
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            La directive NIS2 impose des obligations de sécurité concrètes à des milliers d'organisations françaises. Entre la complexité du texte et la pression des délais, la mise en conformité représente un défi majeur. Atlas RedConsult vous accompagne avec une approche structurée et des tests d'intrusion qui font la différence.
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
              Périmètre de la directive NIS2
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                La directive NIS2 (UE 2022/2555) étend massivement le périmètre de son prédécesseur NIS1. Là où NIS1 concernait quelques centaines d'opérateurs de services essentiels en France, NIS2 impacte potentiellement plusieurs milliers d'organisations françaises.
              </p>
              <p>
                Les <strong className="text-white">secteurs hautement critiques</strong> (Annexe I) sont : l'énergie (électricité, district heating and cooling, pétrole, gaz, hydrogène), les transports (aérien, ferroviaire, fluvial, routier), le secteur bancaire, les infrastructures des marchés financiers, la santé, l'eau potable, les eaux usées, les infrastructures numériques (points d'échange Internet, fournisseurs DNS, registres de noms de domaine TLD, fournisseurs de services cloud, datacenters, réseaux de diffusion de contenu, prestataires de services de confiance, fournisseurs de réseaux et services de communications électroniques publics), la gestion des services ICT (B2B), l'espace, et les administrations publiques.
              </p>
              <p>
                Les <strong className="text-white">secteurs critiques</strong> (Annexe II) couvrent : les services postaux et de messagerie, la gestion des déchets, la fabrication de produits chimiques, la fabrication de denrées alimentaires, la fabrication (dispositifs médicaux, ordinateurs, électronique, optique, équipements électriques, machines, véhicules, autres transports), les fournisseurs numériques (places de marché en ligne, moteurs de recherche, réseaux sociaux), et la recherche.
              </p>
              <p>
                Un critère de taille s'applique généralement : sont concernées les moyennes entreprises (50 salariés ou plus, 10M€ de CA ou bilan) et grandes entreprises. Toutefois, certaines entités sont soumises indépendamment de leur taille : les fournisseurs de réseaux publics de communications électroniques, les prestataires de services de confiance qualifiés, les registres de noms de domaine TLD, et les administrations publiques. Les PME opérant dans les infrastructures numériques critiques peuvent également être incluses.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              Mesures techniques obligatoires NIS2
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                L'article 21 de NIS2 établit la liste des mesures de sécurité minimales que les entités concernées doivent mettre en œuvre. Ces mesures sont formulées de manière à être proportionnées au risque et à la taille de l'organisation, mais elles sont contraignantes et doivent être documentées.
              </p>
              <p>
                Sur le plan technique, NIS2 exige notamment : la mise en place de politiques de sécurité des systèmes d'information formalisées et approuvées par la direction, une gestion des accès rigoureuse incluant l'authentification multifacteur (MFA) ou l'authentification continue basée sur le risque, la sécurisation des communications (chiffrement en transit et au repos pour les données sensibles), une politique de mise à jour et de gestion des vulnérabilités, et des procédures de sauvegarde et de continuité d'activité testées régulièrement.
              </p>
              <p>
                La sécurité de la chaîne d'approvisionnement fait l'objet d'une attention particulière dans NIS2 : les entités doivent évaluer et gérer les risques de sécurité liés à leurs fournisseurs et prestataires de services. Cela implique des clauses contractuelles de sécurité, des évaluations de la maturité sécurité des fournisseurs critiques, et des tests d'intrusion couvrant les interfaces avec les tiers.
              </p>
              <p>
                La détection des incidents est également au cœur des exigences : les organisations doivent disposer de capacités de surveillance, de détection et de réponse aux incidents adaptées à leur profil de risque. Un SOC interne ou externalisé, des outils SIEM correctement configurés, et des procédures de réponse aux incidents documentées et testées sont les composantes clés de cette exigence.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              Délais de mise en conformité NIS2
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                La directive NIS2 devait être transposée par les États membres de l'Union européenne avant le 17 octobre 2024. En France, le processus de transposition est conduit par l'ANSSI qui publie régulièrement des guides et recommandations pour accompagner les organisations.
              </p>
              <p>
                L'ANSSI recommande fortement de ne pas attendre la publication des textes de transposition définitifs pour démarrer la démarche de conformité. Les exigences fondamentales de NIS2 sont claires et les organisations qui s'y préparent dès maintenant prennent une avance décisive. À l'inverse, celles qui attendent risquent de se retrouver dans l'urgence avec des ressources sécurité disponibles limitées sur le marché.
              </p>
              <p>
                Pour une organisation qui démarre sa démarche NIS2 de zéro, un calendrier réaliste comprend : 1 à 2 mois pour l'analyse de risque et le bilan de conformité initial, 3 à 6 mois pour la mise en place des mesures techniques prioritaires, 2 à 3 mois pour les tests de sécurité (incluant pentest et audit), et une démarche continue de suivi et d'amélioration. Au total, un programme de mise en conformité NIS2 solide s'étend sur 6 à 12 mois selon la maturité de départ.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              Tests d'intrusion dans le cadre NIS2
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Les tests d'intrusion s'inscrivent directement dans les exigences NIS2, notamment à travers l'obligation d'évaluer l'efficacité des mesures de gestion des risques. Un test d'intrusion est le moyen le plus concret et le plus probant de démontrer que les mesures de sécurité déployées résistent effectivement aux tentatives d'attaque.
              </p>
              <p>
                Dans le cadre NIS2, le pentest doit couvrir les systèmes d'information contribuant aux services essentiels ou importants de l'organisation. Le périmètre typique inclut les applications web et API (portails clients, interfaces de gestion, applications métier critiques), l'infrastructure réseau et les accès distants, les environnements cloud, et les systèmes d'authentification centralisés.
              </p>
              <p>
                Au-delà du pentest technique, NIS2 valorise les exercices de simulation d'incident qui testent la capacité de l'organisation à détecter, contenir et notifier une attaque dans les délais imposés (24h pour l'alerte précoce, 72h pour la notification initiale). Ces exercices de type Purple Team ou simulation de crise complètent le pentest en évaluant les dimensions organisationnelles et humaines de la résilience.
              </p>
              <p>
                Atlas RedConsult produit des rapports spécifiquement formatés pour le contexte NIS2 : cartographie des vulnérabilités avec scoring de risque CVSS, mapping avec les mesures de l'article 21, plan de remédiation priorisé, et attestation de réalisation utilisable pour votre dossier de conformité.
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
              Comment Atlas RedConsult vous accompagne
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Notre accompagnement NIS2 est conçu pour vous apporter à la fois la conformité réglementaire et une amélioration tangible de votre niveau de sécurité. Nous n'aimons pas les audits de conformité qui produisent d'épais rapports sans valeur opérationnelle.
              </p>
              <p>
                Notre première intervention est un diagnostic NIS2 de 2 jours : évaluation de votre périmètre, identification des gaps prioritaires, et production d'une feuille de route de mise en conformité. Ce diagnostic vous donne une vision claire de votre situation et des efforts à engager avant même de démarrer des travaux.
              </p>
              <p>
                Sur la base de ce diagnostic, nous proposons un programme de tests adapté : pentest des systèmes critiques, revue de configuration des environnements cloud, test des mécanismes d'authentification, et exercice de simulation d'incident. Chaque test est planifié en coordination avec vos équipes pour minimiser l'impact opérationnel.
              </p>
              <p>
                Nous vous accompagnons également dans la mise en place des mesures de remédiation suite aux tests, et nous proposons un suivi trimestriel pour vérifier l'avancement du plan d'action. Cet accompagnement continu est particulièrement apprécié par les organisations qui n'ont pas d'équipe sécurité interne dimensionnée pour gérer seules leur conformité NIS2.
              </p>
            </div>
          </section>

          {/* Internal links */}
          <section className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Services et ressources associés</h3>
            <ul className="space-y-2">
              <li><Link href="/audit-nis2" className="text-red-600 hover:text-red-400 transition-colors">→ Audit NIS2 — Tests d'intrusion pour la directive NIS2</Link></li>
              <li><Link href="/conformite-dora" className="text-red-600 hover:text-red-400 transition-colors">→ Conformité DORA — Réglementation pour le secteur financier</Link></li>
              <li><Link href="/pentest-entreprise" className="text-red-600 hover:text-red-400 transition-colors">→ Pentest Entreprise — Tests d'intrusion tous secteurs</Link></li>
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              FAQ conformité NIS2
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Quels sont les délais pour se mettre en conformité NIS2 ?',
                  a: 'La directive NIS2 devait être transposée avant octobre 2024. L\'ANSSI recommande de démarrer immédiatement la démarche de conformité sans attendre les textes définitifs. Un programme complet de mise en conformité s\'étend généralement sur 6 à 12 mois selon la maturité de départ.',
                },
                {
                  q: 'Quelle est la différence entre NIS2 et DORA ?',
                  a: 'NIS2 est une directive générale couvrant de nombreux secteurs. DORA est un règlement sectoriel spécifique au secteur financier, plus exigeant sur les tests (TLPT) et la gestion des risques tiers. Les entités financières sont soumises aux deux textes simultanément.',
                },
                {
                  q: 'Comment prouver sa conformité NIS2 aux autorités ?',
                  a: 'Par la documentation des mesures déployées, les résultats des tests de sécurité avec plans de remédiation, les politiques approuvées par la direction, et les procédures de notification des incidents. Les rapports d\'audit de prestataires qualifiés constituent des preuves solides.',
                },
                {
                  q: 'Faut-il s\'enregistrer auprès de l\'ANSSI pour NIS2 ?',
                  a: 'Oui, les entités NIS2 devront s\'enregistrer auprès de l\'ANSSI dans les modalités définies par la transposition française. L\'ANSSI mettra en place un portail d\'enregistrement. Il est recommandé de surveiller les publications de l\'ANSSI pour connaître les échéances exactes.',
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
            <h2 className="text-2xl font-bold text-white mb-4">Engagez votre conformité NIS2 maintenant</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Diagnostic initial, tests d'intrusion, documentation : nous structurons votre démarche NIS2 de A à Z.
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
