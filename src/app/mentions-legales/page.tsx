import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Mentions Légales | Atlas RedConsult",
  description: "Mentions légales d'Atlas RedConsult — cabinet de pentest et tests d'intrusion, 60 rue François 1er, 75008 Paris.",
  alternates: { canonical: 'https://atlasredconsult.com/mentions-legales' },
  robots: { index: false },
}

export default function MentionsLegalesPage() {
  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-red-500">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Mentions légales</span>
        </nav>

        <h1 className="text-4xl font-bold mb-12">Mentions Légales</h1>

        <div className="space-y-10 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4">1. Éditeur du site</h2>
            <div className="bg-[#1A1A1A] rounded-xl p-6 space-y-2">
              <p><strong className="text-white">Raison sociale :</strong> Atlas RedConsult</p>
              <p><strong className="text-white">Forme juridique :</strong> Société par Actions Simplifiée (SAS)</p>
              <p><strong className="text-white">Siège social :</strong> 60 rue François 1er, 75008 Paris, France</p>
              <p><strong className="text-white">Email :</strong> contact.atlascyber@gmail.com</p>
              <p><strong className="text-white">Directeur de la publication :</strong> Atlas RedConsult</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4">2. Hébergement</h2>
            <div className="bg-[#1A1A1A] rounded-xl p-6 space-y-2">
              <p><strong className="text-white">Hébergeur :</strong> Vercel Inc.</p>
              <p><strong className="text-white">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              <p><strong className="text-white">Site :</strong> vercel.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4">3. Propriété intellectuelle</h2>
            <p className="mb-4">L&apos;ensemble du contenu de ce site (textes, articles, structure, présentation) est la propriété exclusive d&apos;Atlas RedConsult et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.</p>
            <p>Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sauf autorisation écrite préalable d&apos;Atlas RedConsult.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4">4. Responsabilité</h2>
            <p className="mb-4">Atlas RedConsult s&apos;efforce de maintenir les informations publiées sur ce site aussi précises et à jour que possible. Cependant, Atlas RedConsult ne peut garantir l&apos;exactitude, l&apos;exhaustivité et l&apos;actualité des informations diffusées.</p>
            <p>Atlas RedConsult décline toute responsabilité pour les dommages directs ou indirects pouvant résulter de l&apos;accès au site ou de l&apos;utilisation des informations qu&apos;il contient. Les liens hypertextes vers des sites tiers n&apos;engagent pas la responsabilité d&apos;Atlas RedConsult.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4">5. Cookies</h2>
            <p className="mb-4">Ce site peut utiliser des cookies à des fins analytiques (Google Analytics) pour améliorer l&apos;expérience utilisateur. Conformément au RGPD, votre consentement peut être requis pour certains cookies non essentiels.</p>
            <p>Pour plus d&apos;informations sur la gestion de vos données personnelles, consultez notre <Link href="/politique-confidentialite" className="text-red-500 hover:underline">politique de confidentialité</Link>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4">6. Droit applicable</h2>
            <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
          </section>

          <p className="text-gray-500 text-sm">Dernière mise à jour : juin 2024</p>
        </div>
      </div>
    </main>
  )
}
