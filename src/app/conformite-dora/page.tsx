import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Conformité DORA — Tests Intrusion Réglementaires TLPT | Atlas RedConsult',
  description:
    'Conformité DORA pour entités financières : TLPT (Threat-Led Penetration Testing), tests d\'intrusion réglementaires. Cabinet certifié Paris. Devis 48h.',
  alternates: {
    canonical: 'https://atlasredconsult.fr/conformite-dora',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://atlasredconsult.fr/conformite-dora#service',
      name: 'Conformité DORA — Tests d\'Intrusion TLPT',
      description:
        'Accompagnement des entités financières dans leur conformité au règlement DORA : TLPT, tests d\'intrusion réglementaires, rapports auditables.',
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
      serviceType: 'Pentest réglementaire DORA TLPT',
      areaServed: { '@type': 'Country', name: 'France' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://atlasredconsult.fr' },
        { '@type': 'ListItem', position: 2, name: 'Conformité DORA', item: 'https://atlasredconsult.fr/conformite-dora' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qui est soumis au règlement DORA ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le règlement DORA s\'applique à plus de 20 types d\'entités financières : banques, assureurs, sociétés d\'investissement, PSP, gestionnaires d\'actifs, et leurs prestataires ICT critiques. Les microentreprises bénéficient d\'un régime allégé.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la différence entre un pentest classique et un TLPT DORA ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le TLPT (Threat-Led Penetration Testing) est une simulation d\'attaque avancée basée sur du renseignement sur les menaces réelles ciblant le secteur financier. Il va au-delà d\'un pentest standard en reproduisant fidèlement les TTPs d\'acteurs malveillants réels.',
          },
        },
        {
          '@type': 'Question',
          name: 'À quelle fréquence faut-il réaliser des TLPT dans le cadre DORA ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le règlement DORA impose des TLPT au minimum tous les trois ans pour les entités financières significatives. La fréquence peut être augmentée à la demande des autorités compétentes ou suite à un incident majeur.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte un accompagnement conformité DORA ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le coût dépend du périmètre (systèmes critiques, nombre d\'applications, infrastructure), du type de test requis et du niveau de maturité de l\'organisation. Atlas RedConsult établit un devis personnalisé sous 48h.',
          },
        },
      ],
    },
  ],
}

export default function ConformiteDoraPage() {
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
            <span className="text-gray-300">Conformité DORA</span>
          </nav>
          <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Règlement DORA — Entités Financières
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Conformité DORA — Tests d'Intrusion TLPT pour Entités Financières
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Le règlement DORA entre pleinement en vigueur. Votre organisation financière est-elle prête à démontrer sa résilience opérationnelle numérique aux régulateurs ? Atlas RedConsult vous accompagne dans la mise en conformité avec des tests d'intrusion réglementaires et des exercices TLPT rigoureux.
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
              Qu'est-ce que le règlement DORA ?
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Le règlement DORA (Digital Operational Resilience Act), entré en application le 17 janvier 2025, constitue le cadre réglementaire européen de référence pour la résilience opérationnelle numérique du secteur financier. Adopté par le Parlement européen et publié au Journal officiel de l'Union européenne le 27 décembre 2022, ce texte fondamental s'impose à l'ensemble des acteurs du secteur financier établis dans l'Union européenne.
              </p>
              <p>
                DORA répond à un constat alarmant : la transformation numérique accélérée du secteur financier a créé des dépendances critiques vis-à-vis des systèmes d'information et des prestataires tiers. Une cyberattaque sur une infrastructure financière majeure peut provoquer des effets systémiques en cascade. Le règlement impose donc une approche globale et harmonisée de la gestion des risques informatiques.
              </p>
              <p>
                Le règlement s'articule autour de cinq piliers fondamentaux : la gestion des risques ICT (Technologies de l'Information et de la Communication), la gestion et la notification des incidents, les tests de résilience opérationnelle numérique — dont les TLPT —, la gestion des risques liés aux tiers prestataires ICT, et le partage d'informations sur les cybermenaces. Chacun de ces piliers impose des obligations concrètes, mesurables et sanctionnables.
              </p>
              <p>
                Pour les équipes sécurité des établissements financiers, DORA représente à la fois une contrainte réglementaire et une opportunité de structurer leur programme de cybersécurité selon les meilleures pratiques internationales. Les autorités compétentes — BCE, ACPR, AMF selon les entités — disposent de pouvoirs de contrôle renforcés et peuvent exiger des démonstrations concrètes de conformité.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              Obligations DORA en matière de tests de sécurité
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Le chapitre IV du règlement DORA est entièrement consacré aux tests de résilience opérationnelle numérique. Il distingue deux niveaux d'exigences selon la taille et la criticité des entités financières concernées.
              </p>
              <p>
                Le premier niveau concerne toutes les entités financières soumises à DORA, à l'exception des microentreprises. Ces dernières doivent mettre en place un programme complet de tests intégrant des évaluations de vulnérabilité, des analyses de l'exposition au risque, des tests sur les composants réseau, des revues de code source, des tests fondés sur des scénarios, des tests de compatibilité, des tests de performance, et des tests de bout en bout. Ces tests doivent être réalisés au minimum une fois par an.
              </p>
              <p>
                Le second niveau — le plus exigeant — concerne les entités financières significatives désignées par les autorités compétentes. Ces entités sont tenues de réaliser des TLPT (Threat-Led Penetration Testing) au moins tous les trois ans. Les résultats de ces tests, y compris les vulnérabilités identifiées et les plans de remédiation, doivent être communiqués aux autorités compétentes. La désignation des entités soumises aux TLPT est fondée sur des critères de taille, de profil de risque systémique et d'interconnexion avec d'autres acteurs du marché.
              </p>
              <p>
                Un aspect crucial souvent négligé : DORA impose également de tester les prestataires ICT tiers critiques. Les entités financières doivent s'assurer que leurs fournisseurs de services cloud, leurs hébergeurs et leurs éditeurs de logiciels critiques sont eux-mêmes soumis à des tests de sécurité adéquats. Cette extension du périmètre de test représente un défi organisationnel et contractuel majeur.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              TLPT (Threat-Led Penetration Testing) : guide complet
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Le TLPT est une forme avancée de test d'intrusion qui se distingue fondamentalement des pentests conventionnels par son ancrage dans le renseignement sur les menaces réelles. Là où un pentest traditionnel cherche à identifier des vulnérabilités techniques, le TLPT simule des attaques sophistiquées menées par des acteurs malveillants réels — groupes APT, cybercriminels organisés — qui ciblent spécifiquement le secteur financier européen.
              </p>
              <p>
                La méthodologie TLPT s'inspire du cadre TIBER-EU (Threat Intelligence-Based Ethical Red Teaming), développé par la Banque centrale européenne. Elle se déroule en trois phases distinctes : une phase de préparation qui définit le périmètre et les règles d'engagement, une phase de renseignement sur les menaces (Threat Intelligence) qui identifie les TTPs pertinents, et une phase d'exécution de Red Team qui reproduit ces TTPs contre les systèmes de production réels.
              </p>
              <p>
                Contrairement aux exercices de pentest standards, les TLPT DORA ciblent les fonctions critiques de l'entité financière en production. Les systèmes de paiement, les plateformes de trading, les infrastructures de tenue de compte et les systèmes d'authentification sont dans le périmètre. Cette approche réaliste permet d'évaluer non seulement la robustesse technique des défenses, mais aussi la capacité de détection et de réponse aux incidents (SOC, CERT) de l'organisation.
              </p>
              <p>
                Les équipes Red Team mandatées pour réaliser des TLPT doivent démontrer leur indépendance vis-à-vis de l'entité testée et leur expertise dans la simulation d'attaques avancées contre le secteur financier. Atlas RedConsult dispose d'une expérience confirmée dans ce type d'exercices, avec des consultants formés aux méthodologies TIBER-EU et aux spécificités des infrastructures financières critiques.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              Comment Atlas RedConsult vous accompagne pour DORA
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Notre accompagnement DORA est structuré pour répondre aux exigences réglementaires tout en apportant une valeur opérationnelle concrète à votre organisation. Nous intervenons à chaque étape du cycle de conformité.
              </p>
              <p>
                La première étape est un audit de maturité DORA qui évalue votre niveau de conformité actuel face aux cinq piliers du règlement. Cet audit de cadrage nous permet d'identifier les lacunes prioritaires, d'estimer les efforts de mise en conformité et de définir une feuille de route réaliste adaptée à votre calendrier réglementaire.
              </p>
              <p>
                Nous réalisons ensuite les tests de sécurité obligatoires du chapitre IV : tests de vulnérabilité, évaluations de l'exposition, tests de performance et de bout en bout. Nos rapports sont structurés pour être directement communicables aux autorités compétentes, avec une cartographie des risques, des indicateurs de conformité et des plans de remédiation priorisés.
              </p>
              <p>
                Pour les entités désignées TLPT, nous planifions et exécutons l'exercice Red Team complet selon la méthodologie TIBER-EU : élaboration du Threat Intelligence Report spécifique à votre organisation, définition du périmètre de test avec votre équipe Purple Team, exécution de l'exercice en environnement de production, et rédaction du rapport de synthèse à destination des autorités de supervision.
              </p>
              <p>
                Nous vous accompagnons également dans la gestion des tests tiers : rédaction des clauses contractuelles DORA pour vos prestataires ICT, évaluation de leur maturité sécurité, et coordination des exercices de test impliquant plusieurs entités du groupe.
              </p>
            </div>
            <div className="mt-6 p-6 bg-[#1A1A1A] rounded-lg border border-gray-800">
              <p className="text-gray-400 text-sm font-mono">
                {/* SPONDEI FORM PLACEHOLDER */}
                {/* <div id="spondei-form" data-form-id="REPLACE_ID">Chargement...</div> */}
                {/* <script src="https://app.spondei.com/embed.js" async></script> */}
              </p>
              <p className="text-gray-500 text-sm text-center">Formulaire de contact — disponible prochainement</p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              Calendrier et fréquence des tests DORA
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Le règlement DORA est entré en application le 17 janvier 2025. Toutes les entités financières dans le champ d'application devaient être en conformité à cette date. Les autorités compétentes ont commencé leurs contrôles et peuvent exiger des démonstrations de conformité à tout moment.
              </p>
              <p>
                Pour les tests de résilience du niveau 1 (toutes entités hors microentreprises), la fréquence minimale est annuelle. Il est recommandé d'intégrer ces tests dans le cycle de gestion des risques ICT et de les planifier en début d'exercice fiscal pour faciliter la gouvernance et le reporting.
              </p>
              <p>
                Pour les TLPT du niveau 2, le cycle triennal impose une planification rigoureuse. La durée totale d'un exercice TLPT complet — de la phase de cadrage à la remise du rapport final — s'étend généralement sur trois à six mois. Il est donc impératif d'engager le processus suffisamment en amont de la date limite réglementaire pour éviter tout dépassement.
              </p>
              <p>
                Les autorités compétentes peuvent également exiger des tests supplémentaires en dehors du cycle normal, notamment suite à un incident de sécurité majeur, à une modification significative de l'infrastructure ICT, à une fusion-acquisition, ou à l'émergence de nouvelles menaces ciblant spécifiquement le secteur financier.
              </p>
            </div>
          </section>

          {/* Internal links */}
          <section className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Services associés</h3>
            <ul className="space-y-2">
              <li><Link href="/pentest-fintech" className="text-red-600 hover:text-red-400 transition-colors">→ Pentest Fintech — Tests d'intrusion pour startups et scale-ups financières</Link></li>
              <li><Link href="/audit-nis2" className="text-red-600 hover:text-red-400 transition-colors">→ Audit NIS2 — Tests de sécurité pour la directive cybersécurité</Link></li>
              <li><Link href="/blog/dora-tests-tlpt-fintechs" className="text-red-600 hover:text-red-400 transition-colors">→ Blog : DORA et les tests TLPT pour les fintechs</Link></li>
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              FAQ conformité DORA
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Qui est soumis au règlement DORA ?',
                  a: 'Le règlement DORA s\'applique à plus de 20 types d\'entités financières : banques, assureurs, sociétés d\'investissement, PSP, gestionnaires d\'actifs, et leurs prestataires ICT critiques. Les microentreprises bénéficient d\'un régime allégé sur certaines obligations, mais restent dans le champ d\'application général.',
                },
                {
                  q: 'Quelle est la différence entre un pentest classique et un TLPT DORA ?',
                  a: 'Le TLPT est une simulation d\'attaque avancée basée sur du renseignement sur les menaces réelles ciblant le secteur financier. Il reproduit fidèlement les TTPs d\'acteurs malveillants réels et cible les systèmes en production. Un pentest classique est généralement moins étendu, réalisé hors production, et ne s\'appuie pas nécessairement sur du Threat Intelligence spécifique.',
                },
                {
                  q: 'À quelle fréquence faut-il réaliser des TLPT dans le cadre DORA ?',
                  a: 'Le règlement DORA impose des TLPT au minimum tous les trois ans pour les entités financières significatives désignées par les autorités compétentes. La fréquence peut être augmentée à la demande des autorités ou suite à un incident majeur.',
                },
                {
                  q: 'Combien coûte un accompagnement conformité DORA ?',
                  a: 'Le coût dépend du périmètre (systèmes critiques, nombre d\'applications, infrastructure), du type de test requis et du niveau de maturité de l\'organisation. Atlas RedConsult établit un devis personnalisé sous 48h sur la base d\'un appel de cadrage sans engagement.',
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
            <h2 className="text-2xl font-bold text-white mb-4">Votre conformité DORA commence maintenant</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Ne laissez pas les délais réglementaires vous dépasser. Nos experts vous répondent sous 48h avec un devis personnalisé et une feuille de route claire.
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
