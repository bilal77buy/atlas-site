import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Eye, Lock, ArrowRight, Trophy } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Cabinet Atlas RedConsult — Experts Pentest Paris | Atlas RedConsult',
  description:
    'Atlas RedConsult : cabinet de pentest offensif fondé par des experts sécurité. Hall of Fame Google, Microsoft, Meta, US DoD. Paris 75008. En savoir plus.',
  alternates: { canonical: 'https://atlasredconsult.fr/a-propos' },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'À propos — Atlas RedConsult',
    url: 'https://atlasredconsult.fr/a-propos',
    description:
      'Cabinet de pentest offensif B2B fondé par des experts en sécurité offensive. Hall of Fame Google, Microsoft, Meta et US DoD.',
    mainEntity: { '@id': 'https://atlasredconsult.fr/#organization' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://atlasredconsult.fr/#organization',
    name: 'Atlas RedConsult',
    url: 'https://atlasredconsult.fr',
    logo: 'https://atlasredconsult.fr/logo.png',
    email: 'contact.atlascyber@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '60 rue François 1er',
      addressLocality: 'Paris',
      postalCode: '75008',
      addressCountry: 'FR',
    },
    areaServed: 'FR',
    knowsAbout: ['Pentest web', 'Pentest API', 'Red Team', 'Bug bounty', 'Sécurité offensive'],
  },
]

const hallOfFame = [
  { name: 'Google', color: 'text-blue-400' },
  { name: 'Microsoft', color: 'text-sky-400' },
  { name: 'Meta', color: 'text-indigo-400' },
  { name: 'US Department of Defense', color: 'text-red-400' },
]

const values = [
  {
    icon: Eye,
    title: 'Transparence',
    desc: 'Chaque étape de la mission est documentée et expliquée. Vous savez exactement ce qui est testé, comment, et pourquoi.',
  },
  {
    icon: Shield,
    title: 'Rigueur',
    desc: "Nos méthodologies s'appuient sur les standards PTES, OWASP et NIST. Aucun périmètre n'est laissé au hasard.",
  },
  {
    icon: Lock,
    title: 'Confidentialité',
    desc: "NDA systématique avant toute discussion technique. Vos données et résultats ne quittent jamais notre environnement sécurisé.",
  },
]

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero avec photo de fond */}
      <section
        className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <Breadcrumb items={[{ label: 'À propos', href: '/a-propos' }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-6">
            Atlas RedConsult, <span className="text-red-500">Cabinet de Pentest Offensif à Paris</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Notre mission : sécuriser les fintechs et SaaS B2B contre les attaques réelles.
            Nous simulons les techniques des attaquants pour révéler vos vulnérabilités avant qu&apos;elles ne soient exploitées.
          </p>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Notre approche : offensif avant tout
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <p className="text-gray-300 text-base leading-relaxed">
              Contrairement aux audits de conformité purement documentaires, nous adoptons
              une posture d&apos;attaquant réel. Nos tests d&apos;intrusion reproduisent les
              tactiques, techniques et procédures (TTP) des groupes APT et des acteurs
              malveillants ciblant les entreprises B2B — en particulier les fintechs, éditeurs
              SaaS et prestataires de services critiques.
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
              Chaque mission se conclut par un rapport bilingue (FR/EN) avec scoring CVSS,
              preuves de concept reproductibles et recommandations de remédiation classées
              par priorité. Nous proposons systématiquement un retest post-correction inclus
              dans le périmètre initial.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/audit-securite-informatique"
              className="inline-flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors font-medium"
            >
              Découvrir nos prestations d&apos;audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Hall of Fame</h2>
          </div>
          <p className="text-gray-400 text-base mb-8">
            Nos chercheurs ont été reconnus par les programmes bug bounty de{' '}
            <strong className="text-white">Google</strong>,{' '}
            <strong className="text-white">Microsoft</strong>,{' '}
            <strong className="text-white">Meta</strong> et le{' '}
            <strong className="text-white">US DoD</strong>.{' '}
            <Link href="/blog/hall-of-fame-google-microsoft-meta" className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors">
              En savoir plus
            </Link>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hallOfFame.map((org) => (
              <div key={org.name} className="bg-[#1A1A1A] rounded-xl border border-white/5 p-4 text-center">
                <Trophy className={`w-5 h-5 mx-auto mb-2 ${org.color}`} />
                <p className="text-white font-semibold text-sm">{org.name}</p>
                <p className="text-gray-500 text-xs mt-1">Bug Bounty Hall of Fame</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos valeurs avec fond photo */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/85" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val) => (
              <div key={val.title} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                  <val.icon className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA avec fond photo */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        <div className="max-w-6xl mx-auto px-6 relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-gray-300 text-base max-w-lg mx-auto mb-8">
            Votre prochaine mission de pentest commence par une conversation. Obtenez un devis personnalisé sous 48h — sans engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-3 px-8 rounded-lg transition-colors"
            >
              Demander un devis gratuit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/audit-securite-informatique"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold text-sm py-3 px-8 rounded-lg transition-colors"
            >
              Nos prestations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
