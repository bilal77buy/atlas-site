import type { Metadata } from 'next'
import ArticleLayout from '@/components/ui/ArticleLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DORA : Préparer sa Résilience Opérationnelle Numérique',
  description: 'Guide pratique DORA pour acteurs financiers : TLPT, tests de résilience obligatoires, obligations concrètes et comment préparer sa conformité.',
  keywords: ['DORA résilience opérationnelle', 'DORA conformité', 'TLPT DORA', 'DORA fintech banque'],
  alternates: { canonical: 'https://atlasredconsult.fr/ressources/dora-preparer-resilience-operationnelle' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'DORA : comment préparer sa résilience opérationnelle numérique',
  author: { '@type': 'Organization', name: 'Atlas Red Consult', url: 'https://atlasredconsult.fr' },
  datePublished: '2025-02-12',
}

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleLayout
        title="DORA : comment préparer sa résilience opérationnelle numérique"
        description="Le règlement DORA est en vigueur. Guide pratique pour les acteurs financiers : TLPT, tests de résilience, et obligations concrètes."
        category="Conformité"
        readTime="8 min"
        date="12 février 2025"
      >
        <h2>DORA : contexte et enjeux</h2>
        <p>Le règlement <strong>DORA (Digital Operational Resilience Act)</strong> est entré en application le 17 janvier 2025. Il représente une transformation majeure pour le secteur financier européen, en imposant un cadre harmonisé de résilience opérationnelle numérique.</p>
        <p>DORA part d&apos;un constat simple : les établissements financiers sont de plus en plus dépendants des systèmes numériques et des prestataires IT tiers. Une cyberattaque ou une panne peut avoir des effets systémiques sur l&apos;ensemble du secteur financier. DORA vise à s&apos;assurer que chaque acteur peut résister, s&apos;adapter et se rétablir face aux disruptions numériques.</p>

        <h2>Les cinq piliers de DORA</h2>
        <ul>
          <li><strong>Gestion des risques TIC</strong> : cadre formel de gouvernance et gestion des risques liés aux technologies de l&apos;information</li>
          <li><strong>Gestion des incidents</strong> : détection, classification et notification des incidents TIC aux régulateurs</li>
          <li><strong>Tests de résilience numérique</strong> : tests réguliers incluant des tests d&apos;intrusion (le cœur de notre expertise)</li>
          <li><strong>Risque tiers</strong> : gestion et surveillance des prestataires IT critiques</li>
          <li><strong>Partage d&apos;informations</strong> : échange de renseignements sur les cybermenaces entre acteurs</li>
        </ul>

        <h2>Les tests de résilience DORA : ce qui est exigé</h2>
        <p>Le pilier &ldquo;tests de résilience&rdquo; de DORA est particulièrement structurant. Il impose deux niveaux de tests :</p>
        <p><strong>Tests de base (toutes les entités)</strong> : scans de vulnérabilités, tests sur les applications et services TIC, analyses de sécurité des sources ouvertes, évaluations des réseaux. Ces tests doivent être réalisés annuellement.</p>
        <p><strong>TLPT - Threat-Led Penetration Testing (entités significatives)</strong> : les établissements identifiés comme significatifs par les autorités compétentes (BCE, ACPR) doivent réaliser des TLPT au moins tous les 3 ans. Ces tests simulent une attaque ciblée basée sur la menace réelle pesant sur l&apos;entité, selon la méthodologie TIBER-EU.</p>

        <h2>Qu&apos;est-ce qu&apos;un TLPT ?</h2>
        <p>Le TLPT (Threat-Led Penetration Test) est une forme avancée de test d&apos;intrusion basé sur le renseignement sur les menaces. Contrairement à un pentest traditionnel qui teste méthodiquement les vulnérabilités connues, le TLPT simule les techniques, tactiques et procédures (TTP) d&apos;acteurs de menace réels ciblant votre secteur.</p>
        <p>La méthodologie TIBER-EU encadre ces tests avec des phases spécifiques : collecte de renseignements sur les menaces (Threat Intelligence), définition des scénarios d&apos;attaque, et tests offensifs coordonnés avec le régulateur.</p>

        <h2>Comment préparer votre conformité DORA ?</h2>
        <p>Une feuille de route en 5 étapes :</p>
        <ol>
          <li><strong>Inventorier vos actifs TIC critiques</strong> : identifier les systèmes dont la défaillance aurait un impact significatif sur vos opérations</li>
          <li><strong>Cartographier votre chaîne de dépendances</strong> : prestataires IT, fournisseurs de cloud, partenaires techniques</li>
          <li><strong>Évaluer votre niveau de maturité actuel</strong> : un pentest de référence permet de mesurer l&apos;écart entre votre niveau actuel et les exigences DORA</li>
          <li><strong>Mettre en place un programme de tests réguliers</strong> : planifier des tests annuels sur vos systèmes critiques</li>
          <li><strong>Documenter et tracer</strong> : DORA exige une documentation rigoureuse de votre démarche de gestion des risques</li>
        </ol>

        <h2>DORA et les fintechs : êtes-vous concerné ?</h2>
        <p>Toute entité financière régulée dans l&apos;UE est concernée par DORA. Pour les fintechs, cela inclut les établissements de paiement, les prestataires de services d&apos;investissement, les émetteurs de monnaie électronique, et les prestataires de services sur crypto-actifs (PSCA) sous MiCA.</p>
        <p>Même si votre fintech n&apos;est pas directement régulée, si vous fournissez des services IT critiques à des entités financières, vous pourriez être identifié comme &ldquo;prestataire tiers critique&rdquo; et soumis à la supervision directe des régulateurs européens.</p>
        <p>Consultez notre page dédiée à la <Link href="/conformite/dora" className="text-accent hover:underline">conformité DORA</Link> pour en savoir plus sur notre accompagnement.</p>
      </ArticleLayout>
    </>
  )
}
