import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog Sécurité Offensive — Articles Pentest et Cybersécurité | Atlas RedConsult',
  description: "Articles techniques sur le pentest, les vulnérabilités web, la conformité réglementaire et la cybersécurité offensive par les experts d'Atlas RedConsult.",
  alternates: { canonical: 'https://atlasredconsult.fr/blog' },
}

const articles = [
  { slug: 'vulnerabilite-idor-expliquee', title: 'Vulnérabilité IDOR — Insecure Direct Object Reference Expliquée', date: '2024-01-15', excerpt: "Comprendre la vulnérabilité IDOR : comment elle fonctionne, comment la détecter en pentest et comment s'en protéger efficacement." },
  { slug: 'pentest-blackbox-vs-greybox-vs-whitebox', title: 'Pentest Black Box vs Grey Box vs White Box — Guide Complet', date: '2024-01-22', excerpt: "Comparaison des trois approches de test d'intrusion : avantages, inconvénients et cas d'usage pour chaque méthode." },
  { slug: 'bola-bfla-securite-api', title: 'BOLA et BFLA — Vulnérabilités Critiques des APIs', date: '2024-02-05', excerpt: 'Broken Object Level Authorization et Broken Function Level Authorization : les vulnérabilités les plus critiques des APIs modernes.' },
  { slug: 'ssrf-server-side-request-forgery', title: 'SSRF — Server Side Request Forgery : Comprendre et Prévenir', date: '2024-02-19', excerpt: "Comment les attaques SSRF permettent d'accéder aux ressources internes d'un serveur et comment s'en protéger dans un environnement cloud." },
  { slug: 'oauth-vulnerabilites-pentest', title: 'Vulnérabilités OAuth 2.0 — Guide Pentest et Sécurisation', date: '2024-03-04', excerpt: 'Les failles OAuth 2.0 les plus courantes : open redirect, token leakage, absence de PKCE — comment les tester et les corriger.' },
  { slug: 'methodologie-pentest-owasp', title: 'Méthodologie Pentest OWASP — Guide Complet OWASP Top 10', date: '2024-03-18', excerpt: "Comment les pentesteurs professionnels utilisent l'OWASP Top 10 comme framework pour conduire des tests d'intrusion rigoureux." },
  { slug: 'dora-tests-tlpt-fintechs', title: 'DORA et Tests TLPT — Guide pour les Fintechs en 2024', date: '2024-04-01', excerpt: "Le règlement DORA impose des tests TLPT aux entités financières. Guide complet sur les obligations et comment s'y préparer." },
  { slug: 'nis2-obligations-entreprises', title: 'NIS2 — Obligations Cybersécurité pour les Entreprises', date: '2024-04-15', excerpt: "La directive NIS2 étend les obligations de cybersécurité à des milliers d'entreprises européennes. Périmètre, obligations, sanctions." },
  { slug: 'pci-dss-v4-ecommerce', title: "PCI-DSS v4.0 — Ce qui Change pour l'E-commerce", date: '2024-05-06', excerpt: 'PCI-DSS v4.0 introduit des changements majeurs pour les e-commerçants. Nouvelles exigences, obligation de pentest (req 11.4), délais.' },
  { slug: 'rapport-pentest-comment-lire', title: 'Comment Lire un Rapport de Pentest — Guide Pratique', date: '2024-05-20', excerpt: 'Guide pour comprendre un rapport de pentest : scores CVSS, niveaux de risque, recommandations et priorisation des remédiations.' },
  { slug: 'hall-of-fame-google-microsoft-meta', title: 'Hall of Fame Google, Microsoft, Meta — Notre Parcours Bug Bounty', date: '2024-06-03', excerpt: 'Atlas RedConsult reconnu dans les programmes de bug bounty de Google, Microsoft, Meta et le DoD américain. Notre parcours en responsible disclosure.' },
  { slug: 'remediation-apres-pentest', title: 'Remédiation Après Pentest — Guide Complet de Correction', date: '2024-06-17', excerpt: "Comment corriger efficacement les vulnérabilités identifiées lors d'un pentest : priorisation, vérification des correctifs, contre-audit." },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog Atlas RedConsult',
  url: 'https://atlasredconsult.fr/blog',
  description: 'Articles techniques sur le pentest et la cybersécurité offensive',
  publisher: { '@type': 'Organization', name: 'Atlas RedConsult', url: 'https://atlasredconsult.fr' },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="mb-12">
          <Link href="/" className="text-red-600 hover:text-red-500 text-sm mb-4 inline-block">&larr; Accueil</Link>
          <h1 className="text-4xl font-bold text-white mb-4">Blog <span className="text-red-600">Sécurité Offensive</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl">Articles techniques sur le pentest, les vulnérabilités web, la conformité réglementaire et la cybersécurité offensive par les experts d&apos;Atlas RedConsult.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group block bg-[#111111] border border-gray-800 rounded-lg p-6 hover:border-red-600 transition-all duration-200">
              <time className="text-red-600 text-sm font-mono">{formatDate(article.date)}</time>
              <h2 className="text-white font-semibold text-lg mt-2 mb-3 group-hover:text-red-500 transition-colors leading-snug">{article.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{article.excerpt}</p>
              <span className="inline-block mt-4 text-red-600 text-sm font-medium group-hover:translate-x-1 transition-transform">Lire l&apos;article &rarr;</span>
            </Link>
          ))}
        </div>
        <div className="mt-16 bg-[#111111] border border-red-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Besoin d&apos;un pentest ?</h2>
          <p className="text-gray-400 mb-6">Nos experts certifiés OSCP analysent la sécurité de vos applications web, APIs et infrastructures.</p>
          <Link href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded transition-colors">Demandez votre devis gratuit</Link>
        </div>
      </div>
    </main>
  )
}
