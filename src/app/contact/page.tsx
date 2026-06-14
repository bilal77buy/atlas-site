import type { Metadata } from 'next'
import { Shield, Clock, Lock, FileText } from 'lucide-react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Demander un Audit Cybersécurité',
  description: 'Contactez Atlas Red Consult pour un audit cybersécurité ou un pentest. Réponse sous 24h ouvrées. NDA disponible. Formulaire de contact sécurisé.',
  alternates: { canonical: 'https://atlasredconsult.fr/contact' },
}

const reassurances = [
  { icon: Clock, title: 'Réponse sous 24h', desc: 'Nous vous répondons dans les 24 heures ouvrées suivant votre demande.' },
  { icon: Lock, title: 'Confidentialité totale', desc: 'Vos informations sont strictement confidentielles. NDA disponible avant toute discussion technique.' },
  { icon: Shield, title: 'Experts seniors', desc: 'Votre demande est traitée directement par nos consultants, sans intermédiaire.' },
  { icon: FileText, title: 'Devis détaillé', desc: 'Vous recevrez une proposition personnalisée et détaillée adaptée à votre contexte.' },
]

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-28 pb-8 md:pt-36 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-muted/20 via-transparent to-transparent pointer-events-none" />
        <div className="section-container relative">
          <Breadcrumb items={[{ label: 'Contact', href: '/contact' }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-4">
            Démarrons votre mission de pentest
          </h1>
          <p className="text-muted text-lg max-w-xl">
            Décrivez votre besoin et nous vous proposerons une approche adaptée à votre contexte et vos contraintes.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="space-y-4">
              <h2 className="font-display text-lg font-bold text-white mb-6">Pourquoi nous contacter ?</h2>
              {reassurances.map((item) => (
                <div key={item.title} className="card flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                    <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
