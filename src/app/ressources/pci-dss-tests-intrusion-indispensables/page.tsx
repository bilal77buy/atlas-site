import type { Metadata } from 'next'
import ArticleLayout from '@/components/ui/ArticleLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'PCI DSS : Pourquoi les Tests d\'Intrusion sont Indispensables',
  description: 'PCI DSS v4.0 renforce les obligations de pentest. Exigences 11.3 et 11.4, fréquence, périmètre CDE et comment satisfaire les auditeurs QSA.',
  keywords: ['PCI DSS pentest', 'PCI DSS test intrusion', 'exigence 11 PCI DSS', 'conformité PCI DSS v4'],
  alternates: { canonical: 'https://atlasredconsult.fr/ressources/pci-dss-tests-intrusion-indispensables' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'PCI DSS : pourquoi les tests d\'intrusion sont indispensables',
  author: { '@type': 'Organization', name: 'Atlas Red Consult', url: 'https://atlasredconsult.fr' },
  datePublished: '2025-02-19',
}

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleLayout
        title="PCI DSS : pourquoi les tests d'intrusion sont indispensables"
        description="PCI DSS v4.0 renforce les obligations de test. Tout ce que vous devez savoir sur les exigences de pentest pour protéger les données de paiement."
        category="Conformité"
        readTime="6 min"
        date="19 février 2025"
      >
        <h2>PCI DSS : le standard incontournable du paiement sécurisé</h2>
        <p><strong>PCI DSS (Payment Card Industry Data Security Standard)</strong> est le standard de sécurité mondial imposé par les réseaux de paiement (Visa, Mastercard, American Express, Discover, JCB) à toutes les organisations qui stockent, traitent ou transmettent des données de titulaires de carte.</p>
        <p>PCI DSS v4.0 est entré pleinement en vigueur le 31 mars 2024. Cette nouvelle version renforce significativement les exigences en matière de tests de sécurité et d&apos;authentification.</p>

        <h2>Qui est concerné par PCI DSS ?</h2>
        <p>Toute organisation qui accepte, traite, stocke ou transmet des données de paiement par carte est soumise à PCI DSS. Cela inclut :</p>
        <ul>
          <li>E-commerces avec paiement en ligne par carte</li>
          <li>PSP (Payment Service Providers) et acquéreurs</li>
          <li>Fintechs traitant des transactions par carte</li>
          <li>Hôtels, restaurants et commerces physiques avec TPE</li>
          <li>Toute organisation stockant des données de cartes (même chiffrées)</li>
        </ul>
        <p>Les niveaux PCI DSS (1 à 4) dépendent du volume de transactions annuelles et déterminent les exigences de validation.</p>

        <h2>Les exigences PCI DSS v4.0 sur les tests d&apos;intrusion</h2>
        <p>L&apos;<strong>exigence 11</strong> de PCI DSS est entièrement dédiée aux tests de sécurité. Voici les points clés :</p>
        <ul>
          <li><strong>11.3.1 - Scans de vulnérabilités internes</strong> : scans trimestriels par un testeur qualifié</li>
          <li><strong>11.3.2 - Scans de vulnérabilités externes</strong> : scans trimestriels par un ASV (Approved Scanning Vendor)</li>
          <li><strong>11.4.1 - Test d&apos;intrusion externe</strong> : au moins annuel, couvrant le périmètre CDE exposé</li>
          <li><strong>11.4.2 - Test d&apos;intrusion interne</strong> : au moins annuel, depuis l&apos;intérieur du réseau</li>
          <li><strong>11.4.3 - Couverture des exploits</strong> : les tests doivent inclure les tentatives d&apos;exploitation des vulnérabilités identifiées</li>
          <li><strong>11.4.4 - Remédiation obligatoire</strong> : les vulnérabilités critiques et hautes doivent être corrigées</li>
        </ul>

        <h2>Le périmètre CDE : qu&apos;est-ce qui doit être testé ?</h2>
        <p>Le <strong>CDE (Cardholder Data Environment)</strong> est l&apos;ensemble des composants système, processus et personnes qui stockent, traitent ou transmettent des données de titulaires de carte. C&apos;est le périmètre minimum à couvrir dans vos tests d&apos;intrusion PCI DSS.</p>
        <p>Une erreur fréquente est de ne tester que les applications de paiement en omettant les systèmes &ldquo;adjacents&rdquo; qui peuvent fournir un chemin d&apos;attaque vers le CDE. PCI DSS v4.0 insiste sur la nécessité de tester les vecteurs d&apos;accès au CDE, pas seulement le CDE lui-même.</p>

        <h2>Comment structurer son pentest PCI DSS ?</h2>
        <p>Un pentest conforme aux exigences PCI DSS doit :</p>
        <ul>
          <li>Être réalisé par un testeur qualifié et indépendant (pas vos propres équipes)</li>
          <li>Couvrir les composants internes et externes du CDE</li>
          <li>Tester les contrôles de segmentation (pour valider que le périmètre CDE est bien isolé)</li>
          <li>Produire un rapport documentant la méthodologie, les résultats et les actions correctives</li>
          <li>Inclure un retest après correction des vulnérabilités critiques et hautes</li>
        </ul>
        <p>Notre approche PCI DSS inclut un rapport structuré pour faciliter votre évaluation par un QSA. Consultez notre page <Link href="/conformite/pci-dss" className="text-accent hover:underline">conformité PCI DSS</Link>.</p>
      </ArticleLayout>
    </>
  )
}
