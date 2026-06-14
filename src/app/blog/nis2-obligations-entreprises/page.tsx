import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "NIS2 — Obligations Cybersécurité pour les Entreprises | Atlas RedConsult",
  description: "Directive NIS2 : qui est concerné, quelles obligations, quelles sanctions ? Guide complet pour les entreprises françaises. Tests d'intrusion conformité NIS2.",
  alternates: { canonical: 'https://atlasredconsult.fr/blog/nis2-obligations-entreprises' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: 'NIS2 : Quelles Obligations pour les Entreprises en France ?', datePublished: '2024-04-15', author: { '@type': 'Organization', name: 'Atlas RedConsult' }, publisher: { '@type': 'Organization', name: 'Atlas RedConsult', url: 'https://atlasredconsult.fr' }, url: 'https://atlasredconsult.fr/blog/nis2-obligations-entreprises' },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://atlasredconsult.fr' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://atlasredconsult.fr/blog' }, { '@type': 'ListItem', position: 3, name: 'NIS2 Obligations', item: 'https://atlasredconsult.fr/blog/nis2-obligations-entreprises' }] },
  ],
}

export default function Nis2ObligationsArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="bg-[#0A0A0A] text-white min-h-screen">
        <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-red-500">Accueil</Link><span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-red-500">Blog</Link><span className="mx-2">/</span>
            <span className="text-white">NIS2 Obligations</span>
          </nav>
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded uppercase">Réglementation</span>
              <time className="text-gray-400 text-sm">15 avril 2024</time>
              <span className="text-gray-400 text-sm">· 9 min</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">NIS2 : Quelles Obligations pour les Entreprises en France ?</h1>
            <p className="text-xl text-gray-300">La directive NIS2 étend massivement le champ des organisations soumises aux obligations de cybersécurité en Europe. Voici ce que vous devez savoir si votre entreprise est concernée.</p>
          </header>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Qu&apos;est-ce que la directive NIS2 ?</h2>
              <p className="mb-4">La directive NIS2 (Network and Information Security 2) est la révision majeure de la directive NIS de 2016. Adoptée par le Parlement européen en novembre 2022, elle devait être transposée dans le droit national de chaque État membre avant le 17 octobre 2023. En France, la transposition est en cours via l&apos;ANSSI.</p>
              <p>NIS2 vise à atteindre un niveau commun élevé de cybersécurité dans l&apos;UE, en imposant des mesures de gestion des risques et des obligations de signalement des incidents à un périmètre beaucoup plus large d&apos;organisations que sa prédécesseure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Qui est concerné par NIS2 ?</h2>
              <p className="mb-4">NIS2 distingue deux catégories d&apos;entités selon leur importance :</p>
              <div className="grid md:grid-cols-2 gap-6 my-4">
                <div className="bg-[#1A1A1A] rounded-xl p-6">
                  <h3 className="text-red-500 font-bold mb-3">Entités Essentielles (EE)</h3>
                  <p className="text-gray-400 text-sm mb-3">Grandes organisations dans des secteurs critiques :</p>
                  <ul className="space-y-1 text-gray-400 text-xs">
                    {['Énergie (électricité, gaz, pétrole)', 'Transports (air, rail, eau, route)', 'Secteur bancaire et marchés financiers', 'Santé et infrastructures numériques', 'Eau potable et eaux usées', 'Infrastructure numérique (DNS, IXP, cloud)', 'Administration publique centrale'].map(i => <li key={i}>• {i}</li>)}
                  </ul>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl p-6">
                  <h3 className="text-red-500 font-bold mb-3">Entités Importantes (EI)</h3>
                  <p className="text-gray-400 text-sm mb-3">Organisations moyennes dans des secteurs élargis :</p>
                  <ul className="space-y-1 text-gray-400 text-xs">
                    {['Services postaux et de messagerie', 'Gestion des déchets', 'Fabrication de produits chimiques', 'Fabrication d\'aliments', 'Fabrication industrielle (médical, électronique)', 'Fournisseurs numériques (places de marché, moteurs de recherche)', 'Recherche scientifique'].map(i => <li key={i}>• {i}</li>)}
                  </ul>
                </div>
              </div>
              <div className="bg-[#1A1A1A] rounded-xl p-4 my-4">
                <p className="text-gray-300 text-sm"><strong className="text-red-500">Critères de taille :</strong> sont concernées les entreprises de <strong>plus de 50 salariés</strong> et/ou dont le <strong>chiffre d&apos;affaires dépasse 10 millions d&apos;euros</strong> dans les secteurs listés. Les grandes entreprises (+250 salariés, +50M€ CA) sont automatiquement classées en Entités Essentielles.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Les obligations de sécurité NIS2</h2>
              <p className="mb-4">NIS2 impose aux entités concernées de mettre en place des <strong>mesures de gestion des risques cybersécurité</strong> proportionnées. Ces mesures incluent obligatoirement :</p>
              <ul className="space-y-3">
                {[
                  ['Politiques d\'analyse des risques et de sécurité des SI', 'Gouvernance et responsabilité de la cybersécurité au niveau dirigeant'],
                  ['Gestion des incidents : détection, réponse, notification dans les 72h', 'Plan de continuité d\'activité et de reprise après sinistre'],
                  ['Sécurité de la chaîne d\'approvisionnement et des fournisseurs', 'Sécurité dans l\'acquisition, le développement et la maintenance des SI'],
                  ['Tests de sécurité réguliers (dont tests d\'intrusion)', 'Utilisation de la cryptographie et chiffrement'],
                  ['Contrôle d\'accès et authentification multi-facteur', 'Sécurisation des communications (VoIP, vidéo, messagerie)'],
                ].map(([a, b], i) => (
                  <li key={i} className="bg-[#1A1A1A] rounded-lg p-3">
                    <p className="text-gray-300 text-sm">• {a}</p>
                    <p className="text-gray-400 text-sm">• {b}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Tests d&apos;intrusion et NIS2 : ce que la directive exige</h2>
              <p className="mb-4">NIS2 ne spécifie pas précisément la fréquence ou la méthodologie des tests de sécurité, mais exige que les mesures de sécurité soient <em>&quot;appropriées et proportionnées&quot;</em>. En pratique, les autorités de supervision et les standards de l&apos;industrie considèrent qu&apos;un programme de tests d&apos;intrusion constitue une mesure indispensable pour démontrer la conformité.</p>
              <p className="mb-4">L&apos;<strong>ANSSI recommande</strong> pour les entités NIS2 :</p>
              <ul className="space-y-2">
                {['Un audit de sécurité annuel de l\'infrastructure et des applications critiques', 'Des tests d\'intrusion au minimum tous les 2 ans sur les systèmes exposés', 'Des tests après chaque évolution majeure de l\'infrastructure', 'La documentation et le suivi de la remédiation des vulnérabilités identifiées'].map(item => (
                  <li key={item} className="flex items-start gap-3"><span className="text-red-600 shrink-0 mt-1">→</span><span>{item}</span></li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Sanctions NIS2 : jusqu&apos;à 10 millions d&apos;euros</h2>
              <p className="mb-4">NIS2 prévoit des sanctions administratives significatives en cas de non-conformité :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#1A1A1A] rounded-xl p-4">
                  <h3 className="text-red-500 font-semibold mb-2 text-sm">Entités Essentielles</h3>
                  <p className="text-2xl font-bold text-white mb-1">10 M€</p>
                  <p className="text-gray-400 text-xs">ou 2% du CA mondial annuel (le plus élevé des deux)</p>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl p-4">
                  <h3 className="text-red-500 font-semibold mb-2 text-sm">Entités Importantes</h3>
                  <p className="text-2xl font-bold text-white mb-1">7 M€</p>
                  <p className="text-gray-400 text-xs">ou 1,4% du CA mondial annuel (le plus élevé des deux)</p>
                </div>
              </div>
              <p className="mt-4">Les dirigeants peuvent également être personnellement sanctionnés en cas de manquements graves, avec interdiction temporaire d&apos;exercer des fonctions de direction.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Comment se préparer à NIS2 ?</h2>
              <ol className="space-y-3">
                {['Vérifier si votre organisation est dans le périmètre NIS2 (secteur + taille)', 'Réaliser un audit de maturité cybersécurité pour identifier les écarts', 'Mettre en place une gouvernance cybersécurité (RSSI, politique de sécurité)', 'Cartographier vos actifs critiques et les risques associés', 'Implémenter les mesures techniques obligatoires (MFA, chiffrement, SIEM)', 'Planifier et réaliser des tests de sécurité réguliers', 'Établir des procédures de notification d\'incident (délai 72h pour signalement initial)', 'Documenter toutes les mesures pour pouvoir en justifier auprès de l\'ANSSI'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300 text-sm bg-[#1A1A1A] rounded-lg p-3">
                    <span className="text-red-600 font-semibold shrink-0">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </section>

            <div className="bg-[#1A1A1A] border border-red-600/30 rounded-xl p-6 my-8">
              <h3 className="text-red-500 font-bold text-xl mb-3">Besoin d&apos;un audit NIS2 ?</h3>
              <p className="text-gray-300 mb-4">Atlas RedConsult réalise des audits de sécurité et des tests d&apos;intrusion dans un format compatible avec les exigences NIS2. Rapport documenté, suivi de remédiation, attestation pour vos superviseurs.</p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">Demander un devis</Link>
                <Link href="/audit-nis2" className="border border-gray-600 hover:border-red-600 text-white px-6 py-3 rounded-lg transition-colors">Voir l&apos;audit NIS2</Link>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Articles liés : <Link href="/conformite-nis2" className="text-red-500 hover:underline">Guide conformité NIS2</Link> · <Link href="/blog/dora-tests-tlpt-fintechs" className="text-red-500 hover:underline">DORA et TLPT</Link> · <Link href="/audit-securite-informatique" className="text-red-500 hover:underline">Audit sécurité informatique</Link></p>
          </div>
        </article>
      </main>
    </>
  )
}
