import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "DORA et Tests TLPT — Guide pour les Fintechs en 2025 | Atlas RedConsult",
  description: "DORA impose des tests TLPT aux entités financières. Comprendre les obligations, le cadre TIBER-EU et comment préparer votre fintech. Guide complet 2025.",
  alternates: { canonical: 'https://atlasredconsult.fr/blog/dora-tests-tlpt-fintechs' },
  openGraph: { title: "DORA et Tests TLPT — Guide Fintechs 2025 | Atlas RedConsult", url: 'https://atlasredconsult.fr/blog/dora-tests-tlpt-fintechs' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'DORA et Tests TLPT : Ce que les Fintechs Doivent Savoir en 2025',
      datePublished: '2024-04-01',
      dateModified: '2024-04-01',
      author: { '@type': 'Organization', name: 'Atlas RedConsult' },
      publisher: { '@type': 'Organization', name: 'Atlas RedConsult', url: 'https://atlasredconsult.fr' },
      url: 'https://atlasredconsult.fr/blog/dora-tests-tlpt-fintechs',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://atlasredconsult.fr' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://atlasredconsult.fr/blog' },
        { '@type': 'ListItem', position: 3, name: 'DORA et Tests TLPT', item: 'https://atlasredconsult.fr/blog/dora-tests-tlpt-fintechs' },
      ],
    },
  ],
}

export default function DoraTlptArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="bg-[#0A0A0A] text-white min-h-screen">
        <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-red-500">Accueil</Link><span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-red-500">Blog</Link><span className="mx-2">/</span>
            <span className="text-white">DORA et Tests TLPT</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">Réglementation</span>
              <time className="text-gray-400 text-sm">1 avril 2024</time>
              <span className="text-gray-400 text-sm">· 10 min de lecture</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              DORA et Tests TLPT : Ce que les Fintechs Doivent Savoir en 2025
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Le règlement DORA est entré en application le 17 janvier 2025. Les entités financières significatives de l&apos;UE doivent désormais réaliser des TLPT (Threat-Led Penetration Tests) selon un cadre précis. Voici ce que cela signifie concrètement pour votre fintech.
            </p>
          </header>

          <div className="prose-invert space-y-8 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Qu&apos;est-ce que le règlement DORA ?</h2>
              <p className="mb-4">Le règlement DORA (<strong>Digital Operational Resilience Act</strong>), entré en vigueur le 17 janvier 2025, est le cadre réglementaire européen de résilience opérationnelle numérique pour le secteur financier. Son objectif : s&apos;assurer que les entités financières de l&apos;UE peuvent résister, répondre et se remettre de toutes les perturbations opérationnelles liées aux TIC (Technologies de l&apos;Information et de la Communication).</p>
              <p className="mb-4">DORA s&apos;applique à un large spectre d&apos;entités : banques, compagnies d&apos;assurance, gestionnaires de fonds, prestataires de services de paiement, plateformes de négociation, mais aussi — et c&apos;est nouveau — les prestataires de services TIC tiers (fournisseurs cloud, éditeurs de logiciels) considérés comme critiques.</p>
              <p>Le règlement couvre cinq piliers fondamentaux : la gouvernance du risque TIC, la gestion et le signalement des incidents, les tests de résilience opérationnelle numérique, la gestion du risque tiers, et le partage d&apos;information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Les entités concernées par DORA</h2>
              <p className="mb-4">Toutes les entités financières réglementées par l&apos;UE sont concernées par DORA à différents degrés. Le règlement distingue les obligations selon la taille et la nature de l&apos;entité :</p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                {[
                  { cat: 'Entités financières majeures', items: ['Établissements de crédit (banques)', 'Entreprises d\'investissement', 'Contreparties centrales (CCP)', 'Dépositaires centraux de titres'] },
                  { cat: 'Autres entités concernées', items: ['Prestataires de services de paiement (PSP)', 'Gestionnaires de fonds alternatifs (FIA)', 'Sociétés de gestion OPCVM', 'Plateformes de crowdfunding'] },
                  { cat: 'Nouvelles catégories DORA', items: ['Émetteurs de crypto-actifs (MiCA)', 'Prestataires de services sur actifs numériques', 'Entreprises d\'assurance et de réassurance', 'Agences de notation de crédit'] },
                  { cat: 'Fournisseurs TIC critiques', items: ['Prestataires cloud (AWS, Azure, GCP)', 'Éditeurs de logiciels critiques', 'Fournisseurs de services de centre de données', 'Prestataires de services de sécurité'] },
                ].map(item => (
                  <div key={item.cat} className="bg-[#1A1A1A] rounded-xl p-4">
                    <h3 className="text-red-500 font-semibold mb-2 text-sm">{item.cat}</h3>
                    <ul className="space-y-1">{item.items.map(i => <li key={i} className="text-gray-400 text-xs">• {i}</li>)}</ul>
                  </div>
                ))}
              </div>
              <p>Les microentreprises (moins de 10 employés et CA inférieur à 2M€) bénéficient d&apos;exemptions partielles, notamment sur les exigences de tests avancés.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">TLPT : Threat-Led Penetration Testing, de quoi s&apos;agit-il ?</h2>
              <p className="mb-4">Les TLPT (<strong>Threat-Led Penetration Tests</strong>) sont la forme la plus avancée de test de sécurité exigée par DORA. Ils se distinguent fondamentalement d&apos;un pentest classique par plusieurs aspects :</p>
              <ul className="space-y-3 mb-4">
                <li className="flex gap-3"><span className="text-red-600 shrink-0 mt-1">→</span><div><strong>Basés sur la threat intelligence réelle</strong> : les scénarios d&apos;attaque sont construits à partir d&apos;informations de renseignement sur les menaces effectivement ciblant le secteur financier (groupes APT, TTPs documentées).</div></li>
                <li className="flex gap-3"><span className="text-red-600 shrink-0 mt-1">→</span><div><strong>Périmètre défini avec l&apos;autorité de supervision</strong> : contrairement à un pentest commandé librement, le périmètre TLPT est défini en coordination avec le superviseur (BCE, ACPR en France) pour les entités significatives.</div></li>
                <li className="flex gap-3"><span className="text-red-600 shrink-0 mt-1">→</span><div><strong>Approche Red Team complète</strong> : les TLPT sont des exercices de Red Team de plusieurs mois, couvrant l&apos;ensemble des vecteurs d&apos;attaque (physique, logique, ingénierie sociale).</div></li>
                <li className="flex gap-3"><span className="text-red-600 shrink-0 mt-1">→</span><div><strong>Prestataire indépendant certifié</strong> : DORA exige que les TLPT soient réalisés par des prestataires tiers indépendants disposant d&apos;une expertise démontrée.</div></li>
              </ul>
              <p>Le cadre TLPT s&apos;inspire du framework TIBER-EU (Threat Intelligence-Based Ethical Red Teaming), développé par la BCE et mis en œuvre dans plusieurs pays européens depuis 2018.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Fréquence et calendrier des tests DORA</h2>
              <p className="mb-4">DORA impose une fréquence minimale pour les différents types de tests de résilience :</p>
              <div className="bg-[#1A1A1A] rounded-xl p-6 my-4">
                <table className="w-full text-sm">
                  <thead><tr className="text-red-500 border-b border-gray-700"><th className="text-left py-2">Type de test</th><th className="text-left py-2">Fréquence</th><th className="text-left py-2">Entités</th></tr></thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800"><td className="py-2">Tests basés sur les menaces (basics)</td><td className="py-2">Annuel</td><td className="py-2">Toutes les entités</td></tr>
                    <tr className="border-b border-gray-800"><td className="py-2">Tests de pénétration avancés</td><td className="py-2">Tous les 3 ans</td><td className="py-2">Entités significatives</td></tr>
                    <tr className="border-b border-gray-800"><td className="py-2">TLPT (Threat-Led Penetration Tests)</td><td className="py-2">Tous les 3 ans</td><td className="py-2">Entités désignées par autorités</td></tr>
                    <tr><td className="py-2">Tests de continuité d&apos;activité</td><td className="py-2">Annuel</td><td className="py-2">Toutes les entités</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Les entités nouvellement soumises à DORA (qui n&apos;avaient pas de programme de tests préexistant) ont eu jusqu&apos;au 17 juillet 2025 pour mettre en place leurs premiers tests basiques.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Comment préparer votre fintech aux exigences DORA ?</h2>
              <p className="mb-4">La préparation à DORA en matière de tests de sécurité se déroule en plusieurs étapes :</p>
              <ol className="space-y-4">
                {[
                  { n: '1', t: 'Évaluer votre catégorie d\'entité', d: 'Déterminer si vous êtes une entité significative (soumise aux TLPT) ou standard. Cela dépend de votre taille, de votre activité et de votre importance systémique.' },
                  { n: '2', t: 'Cartographier vos systèmes TIC critiques', d: 'Identifier les fonctions critiques et les systèmes qui les supportent. Ce sont ces systèmes qui devront être couverts par les tests DORA.' },
                  { n: '3', t: 'Sélectionner un prestataire de tests qualifié', d: 'Choisir un cabinet de pentest/red team avec expertise sectorielle financière, capable de produire des rapports compatibles avec les exigences DORA.' },
                  { n: '4', t: 'Établir un programme de tests annuel', d: 'Définir le calendrier des tests basiques annuels et des TLPT triennaux. Intégrer les retours dans votre plan de remédiation.' },
                  { n: '5', t: 'Documenter et reporter', d: 'Conserver toute la documentation des tests (rapports, plans de remédiation, preuves de correction). Elle sera vérifiée par les superviseurs.' },
                ].map(item => (
                  <li key={item.n} className="flex gap-4 bg-[#1A1A1A] rounded-lg p-4">
                    <span className="text-red-600 font-bold text-lg w-8 shrink-0">{item.n}.</span>
                    <div><strong className="text-white">{item.t}</strong><p className="text-gray-400 text-sm mt-1">{item.d}</p></div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Sanctions DORA : ce que risquent les contrevenants</h2>
              <p className="mb-4">Le non-respect des obligations DORA expose les entités financières à des sanctions significatives. Les autorités nationales compétentes (ACPR en France, BaFin en Allemagne...) peuvent imposer :</p>
              <ul className="space-y-2">
                <li className="flex gap-3"><span className="text-red-600 shrink-0">→</span><span>Des amendes administratives pouvant atteindre <strong>1% du chiffre d&apos;affaires mondial annuel</strong> pour les infractions récurrentes</span></li>
                <li className="flex gap-3"><span className="text-red-600 shrink-0">→</span><span>Des astreintes journalières jusqu&apos;à <strong>1% du chiffre d&apos;affaires quotidien moyen</strong> pour les infractions en cours</span></li>
                <li className="flex gap-3"><span className="text-red-600 shrink-0">→</span><span>Des mesures de surveillance renforcée et des injonctions de mise en conformité</span></li>
                <li className="flex gap-3"><span className="text-red-600 shrink-0">→</span><span>Des publications des décisions (name and shame) sur les sites des autorités</span></li>
              </ul>
              <p className="mt-4">Pour les prestataires TIC critiques, la BCE peut imposer des astreintes pouvant atteindre 5 millions d&apos;euros.</p>
            </section>

            <div className="bg-[#1A1A1A] border border-red-600/30 rounded-xl p-6 my-8">
              <h3 className="text-red-500 font-bold text-xl mb-3">Atlas RedConsult vous accompagne dans votre conformité DORA</h3>
              <p className="text-gray-300 mb-4">Notre équipe connaît les spécificités du secteur financier et peut réaliser vos tests de sécurité dans un format compatible avec les exigences DORA et le cadre TIBER-EU. Tests basiques annuels, tests avancés ou TLPT : nous adaptons notre approche à votre statut réglementaire.</p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">Demander un devis DORA</Link>
                <Link href="/conformite-dora" className="border border-gray-600 hover:border-red-600 text-white px-6 py-3 rounded-lg transition-colors">Guide conformité DORA</Link>
              </div>
            </div>

            <p className="text-gray-400 text-sm">Articles liés : <Link href="/pentest-fintech" className="text-red-500 hover:underline">Pentest fintech</Link> · <Link href="/red-team-cybersecurite" className="text-red-500 hover:underline">Red Team cybersécurité</Link> · <Link href="/blog/nis2-obligations-entreprises" className="text-red-500 hover:underline">NIS2 : obligations entreprises</Link></p>
          </div>
        </article>
      </main>
    </>
  )
}
