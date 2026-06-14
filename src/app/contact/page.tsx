import type { Metadata } from 'next'
import { MapPin, Mail, Clock, CheckCircle, Euro } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ContactForm from '@/components/ui/ContactForm'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Devis Pentest Gratuit — Réponse 48h | Atlas RedConsult',
  description:
    'Demandez votre devis pentest gratuit. Réponse sous 48h. Cabinet Atlas RedConsult Paris 75008, 60 rue François 1er. Tests d\'intrusion experts certifiés.',
  alternates: { canonical: 'https://atlasredconsult.fr/contact' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Demander un devis pentest',
  url: 'https://atlasredconsult.fr/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Atlas RedConsult',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '60 rue François 1er',
      addressLocality: 'Paris',
      postalCode: '75008',
      addressCountry: 'FR',
    },
    email: 'contact.atlascyber@gmail.com',
  },
}

const reasons = [
  {
    icon: Clock,
    title: 'Réponse sous 48h',
    desc: 'Nous vous répondons dans les 48 heures suivant votre demande, jours ouvrés.',
  },
  {
    icon: CheckCircle,
    title: 'Devis personnalisé',
    desc: 'Chaque proposition est adaptée à votre contexte, vos contraintes et votre périmètre.',
  },
  {
    icon: CheckCircle,
    title: 'Sans engagement',
    desc: 'Le devis est gratuit et sans aucun engagement de votre part.',
  },
]

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-28 pb-8 md:pt-36 md:pb-12 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent pointer-events-none" />
        <div className="section-container relative">
          <Breadcrumb items={[{ label: 'Contact', href: '/contact' }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-4">
            Demander un Devis Pentest —{' '}
            <span className="text-red-600">Réponse sous 48h</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Parlons de votre projet de sécurité. Décrivez votre besoin et nos experts
            vous proposeront une approche sur-mesure, sans engagement.
          </p>
        </div>
      </section>

      {/* Contact info banner */}
      <section className="bg-[#1A1A1A] border-y border-white/5">
        <div className="section-container py-4 flex flex-wrap gap-6 items-center">
          <a
            href="https://maps.google.com/?q=60+rue+François+1er+75008+Paris"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
            60 rue François 1er, 75008 Paris
          </a>
          <a
            href="mailto:contact.atlascyber@gmail.com"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-red-600 flex-shrink-0" />
            contact.atlascyber@gmail.com
          </a>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form column */}
            <div className="lg:col-span-2">
              {/* ============================================ */}
              {/* SPONDEI CONTACT FORM — Replace with embed   */}
              {/* ============================================ */}
              {/*
                <div id="spondei-contact-form" data-form-id="REPLACE_WITH_YOUR_SPONDEI_FORM_ID">
                  Chargement du formulaire de contact...
                </div>
                <script src="https://app.spondei.com/embed.js" defer></script>
              */}

              {/* Fallback HTML form — active until Spondei embed is configured */}
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pourquoi nous contacter */}
              <div>
                <h2 className="font-display text-lg font-bold text-white mb-4">
                  Pourquoi nous contacter ?
                </h2>
                <div className="space-y-3">
                  {reasons.map((item) => (
                    <div
                      key={item.title}
                      className="bg-[#1A1A1A] rounded-xl p-4 flex items-start gap-3 border border-white/5"
                    >
                      <div className="w-8 h-8 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tarifs */}
              <div className="bg-[#1A1A1A] rounded-xl p-5 border border-red-600/20">
                <div className="flex items-center gap-2 mb-3">
                  <Euro className="w-4 h-4 text-red-600" />
                  <h2 className="font-display text-sm font-bold text-white">Nos tarifs</h2>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between text-gray-300">
                    <span className="text-gray-400">TJM horaire</span>
                    <span className="font-semibold text-white">160 €/h</span>
                  </li>
                  <li className="flex justify-between text-gray-300">
                    <span className="text-gray-400">TJM journalier</span>
                    <span className="font-semibold text-white">1 280 €/jour</span>
                  </li>
                  <li className="pt-2 border-t border-white/5 flex justify-between text-gray-300">
                    <span className="text-gray-400">Panier moyen</span>
                    <span className="font-semibold text-red-500">4 000 € – 20 000 €</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">
                  Devis gratuit, personnalisé selon votre périmètre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
