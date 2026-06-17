import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Audit NIS2 — Tests Intrusion Directive Cybersécurité | Atlas RedConsult',
  description:
    'Audit NIS2 : tests d\'intrusion pour conformité directive NIS2. Entités essentielles et importantes. Cabinet Paris certifié. Devis gratuit sous 48h.',
  alternates: {
    canonical: 'https://atlasredconsult.com/audit-nis2',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://atlasredconsult.com/audit-nis2#service',
      name: 'Audit NIS2 — Tests de Sécurité pour la Conformité Directive NIS2',
      description:
        'Audit et tests d\'intrusion pour la mise en conformité des entités essentielles et importantes avec la directive NIS2 transposée en droit français.',
      provider: {
        '@type': 'Organization',
        name: 'Atlas RedConsult',
        url: 'https://atlasredconsult.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Paris',
          postalCode: '75008',
          addressCountry: 'FR',
        },
      },
      serviceType: 'Audit sécurité NIS2',
      areaServed: { '@type': 'Country', name: 'France' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://atlasredconsult.com' },
        { '@type': 'ListItem', position: 2, name: 'Audit NIS2', item: 'https://atlasredconsult.com/audit-nis2' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Mon entreprise est-elle concernée par NIS2 ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vous êtes concerné si vous opérez dans un secteur critique (énergie, transport, santé, eau, infrastructures numériques, etc.) et dépassez certains seuils de taille. Les entités essentielles sont les plus grandes organisations dans les secteurs critiques ; les entités importantes regroupent les organisations de taille intermédiaire dans ces mêmes secteurs ou dans des secteurs adjacents.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelles sanctions en cas de non-conformité NIS2 ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Les sanctions sont significatives : jusqu\'à 10 millions d\'euros ou 2 % du chiffre d\'affaires mondial pour les entités essentielles, et 7 millions d\'euros ou 1,4 % pour les entités importantes. Les dirigeants peuvent être tenus personnellement responsables.',
          },
        },
        {
          '@type': 'Question',
          name: 'NIS2 impose-t-elle des tests d\'intrusion obligatoires ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NIS2 impose des mesures de sécurité techniques appropriées au risque. Les tests d\'intrusion constituent le moyen le plus efficace de démontrer la mise en œuvre et l\'efficacité de ces mesures. L\'ANSSI recommande explicitement les audits de sécurité et tests d\'intrusion dans ses guides de mise en conformité NIS2.',
          },
        },
      ],
    },
  ],
}

export default function AuditNis2Page() {
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
            <span className="text-gray-300">Audit NIS2</span>
          </nav>
          <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Directive NIS2 — Entités Essentielles & Importantes
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Audit NIS2 — Tests de Sécurité pour la Conformité à la Directive NIS2
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            La directive NIS2 est transposée en droit français. Les entités essentielles et importantes ont des obligations de sécurité contraignantes et sanctionnables. Votre organisation peut-elle prouver qu'elle applique des mesures de sécurité techniques à la hauteur du risque ?
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
              Qui est concerné par la directive NIS2 ?
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                La directive NIS2 (Network and Information Security 2), adoptée par l'Union européenne en décembre 2022, remplace et étend considérablement le champ d'application de la directive NIS1. En France, sa transposition a été initiée par l'ANSSI et concerne un nombre bien plus important d'organisations que son prédécesseur.
              </p>
              <p>
                NIS2 distingue deux catégories d'entités. Les <strong className="text-white">entités essentielles</strong> regroupent les organisations opérant dans les secteurs les plus critiques : énergie (électricité, pétrole, gaz, hydrogène), transports (aérien, ferroviaire, fluvial, routier), secteur bancaire, infrastructures des marchés financiers, santé, eau potable, eaux usées, infrastructures numériques (IXP, DNS, TLD, datacenters, cloud, réseaux de communications électroniques), gestion des services ICT, espace, et administrations publiques. Ces entités sont soumises aux obligations les plus strictes.
              </p>
              <p>
                Les <strong className="text-white">entités importantes</strong> couvrent un spectre plus large : services postaux et messagerie, gestion des déchets, fabrication (dispositifs médicaux, informatique, électronique, véhicules), fournisseurs numériques (places de marché, moteurs de recherche, réseaux sociaux), et recherche. Leurs obligations, bien que légèrement allégées, restent substantielles et assorties de sanctions significatives.
              </p>
              <p>
                Les seuils de taille jouent également un rôle : sont en principe concernées les entreprises de taille moyenne (50 salariés et plus, 10M€ de CA ou total de bilan), voire plus petites pour certaines entités critiques quelle que soit leur taille. L'ANSSI dispose d'un outil d'autoévaluation permettant aux organisations de déterminer leur statut, mais une analyse juridique approfondie reste recommandée compte tenu des enjeux de qualification.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              Obligations sécurité NIS2 : ce que dit la loi
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                L'article 21 de la directive NIS2 impose aux entités concernées l'adoption de mesures techniques, opérationnelles et organisationnelles appropriées et proportionnées pour gérer les risques qui menacent la sécurité des réseaux et des systèmes d'information utilisés pour leurs activités.
              </p>
              <p>
                Ces mesures obligatoires couvrent : les politiques relatives à l'analyse des risques et à la sécurité des systèmes d'information, la gestion des incidents, la continuité des activités et la gestion des crises, la sécurité de la chaîne d'approvisionnement, la sécurité de l'acquisition, du développement et de la maintenance des réseaux et des systèmes, les politiques et procédures relatives à l'évaluation de l'efficacité des mesures de gestion des risques (c'est ici que les tests d'intrusion s'inscrivent directement), les pratiques de base en matière de cyberhygiène et la formation à la cybersécurité, les politiques et procédures relatives à l'utilisation de la cryptographie, la sécurité des ressources humaines, et l'utilisation de l'authentification multifacteur.
              </p>
              <p>
                NIS2 introduit également une obligation de notification des incidents significatifs sous 24 heures pour une alerte précoce, 72 heures pour une notification initiale, et un mois pour un rapport final. Ces délais contraignants exigent une capacité de détection et de réponse aux incidents mature, que seule une évaluation rigoureuse — dont les tests d'intrusion — permet de valider.
              </p>
              <p>
                Une nouveauté majeure de NIS2 : la responsabilité personnelle des dirigeants. Les organes de direction des entités essentielles et importantes doivent approuver les mesures de gestion des risques, superviser leur mise en œuvre, et peuvent être tenus responsables en cas de violation des obligations. Cette disposition place la cybersécurité au niveau du conseil d'administration.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              Audit NIS2 : que faut-il tester ?
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Un audit NIS2 complet doit couvrir l'ensemble des systèmes d'information critiques contribuant aux services essentiels ou importants de l'organisation. Le périmètre est déterminé par une analyse de risque préalable qui identifie les actifs les plus critiques et les scénarios d'attaque les plus pertinents.
              </p>
              <p>
                Les tests portent généralement sur : les applications web et API exposées sur Internet (portails clients, interfaces B2B, applications métier), l'infrastructure réseau (segmentation, pare-feu, VPN, accès distants), les systèmes d'authentification et d'annuaire (Active Directory, IAM), les postes de travail et terminaux mobiles via des tests de phishing et d'ingénierie sociale, les environnements cloud (AWS, Azure, GCP) et les configurations de sécurité associées, et la chaîne d'approvisionnement logicielle.
              </p>
              <p>
                Un aspect souvent sous-estimé : les tests de la capacité de détection et de réponse. NIS2 impose des délais de notification très courts. Il est donc indispensable de vérifier que les équipes SOC détectent effectivement les attaques simulées dans les délais permettant de respecter les obligations de notification. Ces exercices Purple Team combinant attaque et défense sont particulièrement adaptés au contexte NIS2.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              Notre méthodologie d'audit NIS2
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Atlas RedConsult a développé une méthodologie d'audit NIS2 spécifiquement adaptée aux exigences de la directive et aux attendus de l'ANSSI. Notre approche combine les standards internationaux (PTES, OWASP, NIST) avec les recommandations françaises et européennes pour produire des rapports directement exploitables dans le cadre de votre démarche de conformité NIS2.
              </p>
              <p>
                Nous débutons par un atelier de cadrage avec vos équipes sécurité et vos responsables métier pour définir le périmètre, les règles d'engagement et les objectifs de l'audit. Cette phase est essentielle pour garantir que les tests couvrent bien les fonctions critiques identifiées dans votre analyse de risque NIS2.
              </p>
              <p>
                L'exécution des tests suit une progression structurée : reconnaissance passive (OSINT), reconnaissance active (scanning), identification des vulnérabilités, exploitation contrôlée, escalade de privilèges, et mouvements latéraux. Chaque vulnérabilité exploitée est documentée avec son impact potentiel en termes de disponibilité, intégrité et confidentialité des données et services.
              </p>
              <p>
                Notre rapport final comporte une section spécifique sur la conformité NIS2 : pour chaque mesure de l'article 21, nous indiquons si les tests révèlent des lacunes, et nous proposons des recommandations de remédiation priorisées. Ce format facilite le reporting vers votre direction générale et, le cas échéant, vers l'ANSSI.
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
              Sanctions NIS2 en cas de non-conformité
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                NIS2 introduit un régime de sanctions nettement plus sévère que NIS1. Pour les entités essentielles, les amendes administratives peuvent atteindre 10 millions d'euros ou 2 % du chiffre d'affaires annuel mondial total de l'exercice précédent, le montant le plus élevé étant retenu. Pour les entités importantes, le plafond est fixé à 7 millions d'euros ou 1,4 % du chiffre d'affaires mondial.
              </p>
              <p>
                Ces sanctions peuvent s'appliquer pour tout manquement aux obligations de l'article 21 (mesures de gestion des risques), de l'article 23 (notification des incidents) ou des obligations d'enregistrement. L'autorité compétente — l'ANSSI pour la France — dispose également de pouvoirs d'injonction, de mise en demeure, et peut ordonner la suspension temporaire de certaines activités dans les cas les plus graves.
              </p>
              <p>
                La nouveauté la plus impactante pour les dirigeants : NIS2 permet aux États membres de prévoir la responsabilité personnelle des personnes physiques exerçant des fonctions de direction au sein d'une entité essentielle ou importante. En cas de violation grave et répétée des obligations, les dirigeants peuvent être tenus personnellement responsables et interdits temporairement d'exercer des fonctions de direction dans le secteur.
              </p>
              <p>
                Face à ces risques, investir dans un audit NIS2 préventif est bien plus rentable que de subir une procédure de mise en demeure ou une sanction. Les organisations proactives qui démontrent une démarche de conformité sérieuse bénéficient également d'un traitement plus favorable de la part des autorités compétentes en cas d'incident.
              </p>
            </div>
          </section>

          {/* Internal links */}
          <section className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Services et ressources associés</h3>
            <ul className="space-y-2">
              <li><Link href="/conformite-nis2" className="text-red-600 hover:text-red-400 transition-colors">→ Conformité NIS2 — Guide complet de mise en conformité</Link></li>
              <li><Link href="/conformite-dora" className="text-red-600 hover:text-red-400 transition-colors">→ Conformité DORA — Tests d'intrusion pour entités financières</Link></li>
              <li><Link href="/blog/nis2-obligations-entreprises" className="text-red-600 hover:text-red-400 transition-colors">→ Blog : NIS2 — obligations concrètes pour les entreprises</Link></li>
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              FAQ audit NIS2
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Mon entreprise est-elle concernée par NIS2 ?',
                  a: 'Vous êtes concerné si vous opérez dans un secteur critique (énergie, transport, santé, eau, numérique, etc.) et dépassez certains seuils de taille. Les entités essentielles sont les plus grandes dans les secteurs critiques ; les entités importantes regroupent les organisations de taille intermédiaire. L\'outil d\'autoévaluation de l\'ANSSI permet une première orientation.',
                },
                {
                  q: 'NIS2 impose-t-elle des tests d\'intrusion obligatoires ?',
                  a: 'NIS2 impose des mesures de sécurité techniques appropriées au risque, incluant l\'évaluation de leur efficacité. Les tests d\'intrusion constituent le moyen le plus probant de démontrer cette efficacité. L\'ANSSI recommande explicitement les audits et tests d\'intrusion dans ses guides de mise en conformité.',
                },
                {
                  q: 'Quelles sanctions en cas de non-conformité NIS2 ?',
                  a: 'Jusqu\'à 10 millions d\'euros ou 2 % du chiffre d\'affaires mondial pour les entités essentielles, 7 millions ou 1,4 % pour les entités importantes. Les dirigeants peuvent être tenus personnellement responsables en cas de violation grave et répétée.',
                },
                {
                  q: 'Combien de temps dure un audit NIS2 ?',
                  a: 'La durée varie selon le périmètre. Un audit NIS2 complet pour une organisation de taille intermédiaire dure généralement de deux à quatre semaines. Nous établissons un planning détaillé lors de la phase de cadrage, en tenant compte de vos contraintes opérationnelles.',
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
            <h2 className="text-2xl font-bold text-white mb-4">Prêt à démontrer votre conformité NIS2 ?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Notre équipe analyse votre périmètre et vous propose un devis d'audit NIS2 personnalisé sous 48h.
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
