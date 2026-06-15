import type { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
  title: "PCI-DSS v4.0 — Ce qui Change pour l'E-commerce | Atlas RedConsult",
  description: "PCI-DSS v4.0 : nouvelles exigences pour les e-commerces. Exigence 11.4 (pentest obligatoire), délais de mise en conformité, ce qui change vs v3.2.1.",
  alternates: { canonical: 'https://atlasredconsult.fr/blog/pci-dss-v4-ecommerce' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Article', headline: 'PCI DSS v4 : Les Nouvelles Exigences pour les E-commerces', datePublished: '2024-05-06', author: { '@type': 'Organization', name: 'Atlas RedConsult' }, publisher: { '@type': 'Organization', name: 'Atlas RedConsult', url: 'https://atlasredconsult.fr' }, url: 'https://atlasredconsult.fr/blog/pci-dss-v4-ecommerce' },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://atlasredconsult.fr' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://atlasredconsult.fr/blog' }, { '@type': 'ListItem', position: 3, name: 'PCI-DSS v4', item: 'https://atlasredconsult.fr/blog/pci-dss-v4-ecommerce' }] },
  ],
}

export default function PCIDSSv4Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="bg-[#0A0A0A] text-white min-h-screen">
        <article className="max-w-4xl mx-auto px-6 pt-24 pb-16">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-red-500">Accueil</Link><span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-red-500">Blog</Link><span className="mx-2">/</span>
            <span className="text-white">PCI-DSS v4.0</span>
          </nav>
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded uppercase">Réglementation</span>
              <time className="text-gray-400 text-sm">6 mai 2024</time>
              <span className="text-gray-400 text-sm">· 9 min</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">PCI DSS v4 : Les Nouvelles Exigences pour les E-commerces</h1>
            <p className="text-xl text-gray-300">PCI DSS v4.0 est entré en vigueur en mars 2024, remplaçant définitivement la v3.2.1. Pour les e-commerçants traitant des paiements par carte, voici ce qui change et ce qui est désormais obligatoire.</p>
          </header>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Rappel : qu&apos;est-ce que PCI-DSS ?</h2>
              <p className="mb-4">PCI DSS (Payment Card Industry Data Security Standard) est le standard de sécurité imposé par les réseaux de cartes bancaires (Visa, Mastercard, American Express...) à toutes les organisations qui stockent, traitent ou transmettent des données de cartes de paiement. La conformité PCI-DSS est contractuellement obligatoire pour accepter les paiements par carte.</p>
              <p>PCI DSS v4.0 a été publié en mars 2022, avec une période de transition de 2 ans. Depuis le 31 mars 2024, la version v3.2.1 est officiellement retirée et v4.0 est la seule version valide pour les audits de conformité.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Qui est concerné par PCI-DSS ?</h2>
              <p className="mb-4">Toute organisation qui traite des données de cartes bancaires, quel que soit son volume. PCI-DSS distingue 4 niveaux de marchands :</p>
              <div className="bg-[#1A1A1A] rounded-xl p-6 my-4">
                <table className="w-full text-sm">
                  <thead><tr className="text-red-500 border-b border-gray-700"><th className="text-left py-2">Niveau</th><th className="text-left py-2">Volume transactions/an</th><th className="text-left py-2">Validation</th></tr></thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800"><td className="py-2 font-semibold">Level 1</td><td className="py-2">&gt; 6 millions</td><td className="py-2">Audit annuel par QSA + scan trimestriel</td></tr>
                    <tr className="border-b border-gray-800"><td className="py-2 font-semibold">Level 2</td><td className="py-2">1 à 6 millions</td><td className="py-2">SAQ annuel ou QSA + scan trimestriel</td></tr>
                    <tr className="border-b border-gray-800"><td className="py-2 font-semibold">Level 3</td><td className="py-2">20 000 à 1 million</td><td className="py-2">SAQ annuel + scan trimestriel</td></tr>
                    <tr><td className="py-2 font-semibold">Level 4</td><td className="py-2">&lt; 20 000</td><td className="py-2">SAQ annuel + scan trimestriel recommandé</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Exigence 11.4 : le pentest obligatoire</h2>
              <p className="mb-4">L&apos;exigence 11.4 de PCI-DSS v4.0 impose des tests d&apos;intrusion réguliers pour tous les marchands de niveau 1 et 2, et recommandés pour les niveaux 3 et 4 :</p>
              <div className="space-y-3">
                {[
                  { req: '11.4.1', desc: 'Définir et mettre en œuvre une méthodologie de test de pénétration documentée, basée sur des pratiques reconnues (OWASP, PTES, NIST).' },
                  { req: '11.4.2', desc: 'Réaliser des tests d\'intrusion sur le périmètre réseau et les systèmes critiques au moins une fois par an et après tout changement significatif.' },
                  { req: '11.4.3', desc: 'Réaliser des tests d\'intrusion applicatifs couvrant les vulnérabilités OWASP et les risques spécifiques à l\'environnement de paiement.' },
                  { req: '11.4.4', desc: 'Corriger les vulnérabilités exploitables découvertes lors des tests. Répéter les tests pour confirmer la correction.' },
                  { req: '11.4.5', desc: 'Tester la segmentation des réseaux si utilisée pour réduire le périmètre PCI-DSS. Vérifier que le périmètre est correctement isolé.' },
                ].map(item => (
                  <div key={item.req} className="flex gap-4 bg-[#1A1A1A] rounded-lg p-4">
                    <span className="text-red-600 font-bold text-sm shrink-0">{item.req}</span>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Ce qui change dans PCI-DSS v4.0 vs v3.2.1</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Nouvelles exigences v4.0', items: ['MFA obligatoire pour tous les accès à l\'environnement CDE', 'Protection anti-phishing et formation ciblée', 'Inventaire automatisé des scripts de paiement (req. 6.4.3)', 'Détection des menaces applicatives en temps réel', 'Exigences renforcées pour la cryptographie'] },
                  { title: 'Principaux changements', items: ['Flexibilité d\'implémentation : approche customisée possible', 'Alignement sur les menaces modernes (skimming, e-skimming)', 'Exigences clarifiées pour le cloud et les tiers', 'Tests de pénétration plus précis dans leur portée', 'Nouvelles exigences pour les prestataires de services'] },
                ].map(item => (
                  <div key={item.title} className="bg-[#1A1A1A] rounded-xl p-5">
                    <h3 className="text-red-500 font-semibold mb-3 text-sm">{item.title}</h3>
                    <ul className="space-y-1">{item.items.map(i => <li key={i} className="text-gray-400 text-xs">• {i}</li>)}</ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">E-skimming : la menace principale v4.0 adresse</h2>
              <p className="mb-4">L&apos;e-skimming (ou Magecart) est l&apos;injection de code JavaScript malveillant dans les pages de paiement pour voler les données de carte en temps réel. PCI-DSS v4.0 introduit des exigences spécifiques pour y répondre :</p>
              <ul className="space-y-2">
                {['Inventaire de tous les scripts tiers sur les pages de paiement (req. 6.4.3)', 'Justification de chaque script tiers (besoin métier + autorisation)', 'Mécanisme d\'intégrité pour chaque script (SRI - Subresource Integrity)', 'Détection des modifications non autorisées de scripts', 'Politique CSP (Content Security Policy) stricte sur les pages de paiement'].map(item => (
                  <li key={item} className="flex items-start gap-3"><span className="text-red-600 shrink-0 mt-1">→</span><span>{item}</span></li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Comment préparer votre e-commerce à PCI-DSS v4.0 ?</h2>
              <ol className="space-y-3">
                {['Cartographier votre CDE (Cardholder Data Environment) : tous les systèmes qui touchent aux données de carte', 'Évaluer votre niveau de conformité actuel (gap analysis v3.2.1 vs v4.0)', 'Prioriser les nouvelles exigences v4.0 selon votre niveau de risque', 'Mettre en place la MFA sur tous les accès CDE', 'Inventorier et sécuriser tous les scripts de paiement (req. 6.4.3)', 'Planifier un test d\'intrusion annuel (exigence 11.4)', 'Sélectionner un QSA (Qualified Security Assessor) certifié pour votre audit'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300 text-sm bg-[#1A1A1A] rounded-lg p-3">
                    <span className="text-red-600 font-semibold shrink-0">{i + 1}.</span>{item}
                  </li>
                ))}
              </ol>
            </section>

            <div className="bg-[#1A1A1A] border border-red-600/30 rounded-xl p-6 my-8">
              <h3 className="text-red-500 font-bold text-xl mb-3">Votre pentest PCI-DSS annuel avec Atlas RedConsult</h3>
              <p className="text-gray-300 mb-4">Nous réalisons des tests d&apos;intrusion conformes à l&apos;exigence 11.4 de PCI-DSS v4.0, avec rapport documenté utilisable pour votre audit QSA. TJM 160€/h. Devis sous 48h.</p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">Demander un devis PCI-DSS</Link>
                <Link href="/audit-pci-dss" className="border border-gray-600 hover:border-red-600 text-white px-6 py-3 rounded-lg transition-colors">Voir l&apos;audit PCI-DSS</Link>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Articles liés : <Link href="/pentest-ecommerce" className="text-red-500 hover:underline">Pentest e-commerce</Link> · <Link href="/blog/methodologie-pentest-owasp" className="text-red-500 hover:underline">Méthodologie OWASP</Link></p>
          </div>
        </article>
      </main>
    </>
  )
}
