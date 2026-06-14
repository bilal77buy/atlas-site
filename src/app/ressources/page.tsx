import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ressources Cybersécurité | Blog Pentest & Sécurité Offensive',
  description: 'Articles experts sur le pentest, la cybersécurité offensive, DORA, NIS2, PCI DSS. Guides pratiques pour comprendre les tests d\'intrusion et sécuriser votre SI.',
  alternates: { canonical: 'https://atlasredconsult.fr/ressources' },
}

const articles = [
  {
    slug: 'quest-ce-quun-pentest',
    title: 'Qu\'est-ce qu\'un pentest ?',
    description: 'Définition complète du test d\'intrusion : objectifs, méthodes, différences avec l\'audit de sécurité classique, et ce que vous obtenez à l\'issue d\'une mission.',
    category: 'Fondamentaux',
    readTime: '6 min',
    date: '2025-01-15',
  },
  {
    slug: 'pentest-black-box-grey-box-white-box',
    title: 'Pentest Black Box, Grey Box, White Box : quelles différences ?',
    description: 'Les trois approches de pentest expliquées clairement : quelle méthode choisir selon votre objectif, votre budget et votre niveau de maturité sécurité.',
    category: 'Méthodologie',
    readTime: '5 min',
    date: '2025-01-22',
  },
  {
    slug: 'nis2-pourquoi-le-pentest-devient-essentiel',
    title: 'NIS2 : pourquoi le pentest devient essentiel',
    description: 'La directive NIS2 impose de nouvelles obligations de sécurité. Découvrez comment le pentest s\'intègre dans votre stratégie de conformité NIS2.',
    category: 'Conformité',
    readTime: '7 min',
    date: '2025-02-05',
  },
  {
    slug: 'dora-preparer-resilience-operationnelle',
    title: 'DORA : comment préparer sa résilience opérationnelle numérique',
    description: 'Le règlement DORA est en vigueur. Guide pratique pour les acteurs financiers : TLPT, tests de résilience, et obligations concrètes.',
    category: 'Conformité',
    readTime: '8 min',
    date: '2025-02-12',
  },
  {
    slug: 'pci-dss-tests-intrusion-indispensables',
    title: 'PCI DSS : pourquoi les tests d\'intrusion sont indispensables',
    description: 'PCI DSS v4.0 renforce les obligations de test. Tout ce que vous devez savoir sur les exigences de pentest pour protéger les données de paiement.',
    category: 'Conformité',
    readTime: '6 min',
    date: '2025-02-19',
  },
  {
    slug: 'pentest-web-failles-frequentes-entreprise',
    title: 'Pentest web : les failles les plus fréquentes en entreprise',
    description: 'Analyse des vulnérabilités web les plus souvent découvertes lors de nos missions : OWASP Top 10 et au-delà. Sans tutoriel offensif.',
    category: 'Technique',
    readTime: '9 min',
    date: '2025-03-01',
  },
  {
    slug: 'red-team-vs-pentest-quelle-approche',
    title: 'Red Team vs pentest : quelle approche choisir ?',
    description: 'Pentest ou Red Team : deux approches complémentaires aux objectifs différents. Guide pour choisir selon votre maturité sécurité et vos enjeux.',
    category: 'Stratégie',
    readTime: '7 min',
    date: '2025-03-10',
  },
  {
    slug: 'comment-choisir-cabinet-pentest',
    title: 'Comment choisir un cabinet de pentest ?',
    description: 'Les critères essentiels pour évaluer un prestataire de pentest : expertise, méthodologie, livrables, références, et questions à poser avant de signer.',
    category: 'Guide',
    readTime: '8 min',
    date: '2025-03-18',
  },
]

const categoryColors: Record<string, string> = {
  Fondamentaux: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Méthodologie: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Conformité: 'bg-accent/10 text-accent border-accent/20',
  Technique: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Stratégie: 'bg-green-500/10 text-green-400 border-green-500/20',
  Guide: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
}

export default function RessourcesPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-muted/20 via-transparent to-transparent pointer-events-none" />
        <div className="section-container relative">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-6">
            Ressources cybersécurité
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Articles experts sur le pentest, la sécurité offensive et la conformité. Rédigés par nos consultants pour vous aider à comprendre et sécuriser votre SI.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link key={article.slug} href={`/ressources/${article.slug}`} className="card-hover flex flex-col group">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full border ${categoryColors[article.category]}`}>
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <Clock className="w-3 h-3" /> {article.readTime}
                  </span>
                </div>
                <h2 className="font-display font-semibold text-white text-base mb-3 group-hover:text-accent transition-colors flex-1">
                  {article.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-4">{article.description}</p>
                <span className="text-accent text-xs flex items-center gap-1 font-medium mt-auto">
                  Lire l&apos;article <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-card border-y border-border">
        <div className="section-container text-center">
          <h2 className="section-title mb-4">Besoin d&apos;un audit ?</h2>
          <p className="section-subtitle mx-auto mb-8">Nos articles vous ont aidé à comprendre les enjeux. Passez à l&apos;action avec un pentest professionnel.</p>
          <Link href="/contact" className="btn-primary">Demander un audit <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  )
}
