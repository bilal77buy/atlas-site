'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

type FormData = {
  nom: string
  email: string
  entreprise: string
  typeService: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    nom: '',
    email: '',
    entreprise: '',
    typeService: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ nom: '', email: '', entreprise: '', typeService: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[#1A1A1A] rounded-xl border border-white/5 text-center py-16 px-8">
        <CheckCircle className="w-14 h-14 text-red-600 mx-auto mb-4" />
        <h2 className="font-display text-xl font-bold text-white mb-2">
          Message envoyé !
        </h2>
        <p className="text-gray-400 text-sm max-w-xs mx-auto">
          Nous vous répondrons dans les 48h. Vérifiez également vos spams.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="block text-xs font-medium text-gray-400 mb-1">
            Nom complet <span className="text-red-600">*</span>
          </label>
          <input
            id="nom"
            type="text"
            required
            className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition-colors"
            placeholder="Jean Dupont"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1">
            Email professionnel <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition-colors"
            placeholder="jean@entreprise.fr"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="entreprise" className="block text-xs font-medium text-gray-400 mb-1">
          Entreprise <span className="text-red-600">*</span>
        </label>
        <input
          id="entreprise"
          type="text"
          required
          className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition-colors"
          placeholder="Votre entreprise"
          value={form.entreprise}
          onChange={(e) => setForm({ ...form, entreprise: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="typeService" className="block text-xs font-medium text-gray-400 mb-1">
          Type de service <span className="text-red-600">*</span>
        </label>
        <select
          id="typeService"
          required
          className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-600/60 transition-colors"
          value={form.typeService}
          onChange={(e) => setForm({ ...form, typeService: e.target.value })}
        >
          <option value="">Sélectionnez un service</option>
          <option value="pentest-web">Pentest web</option>
          <option value="pentest-api">Pentest API</option>
          <option value="pentest-infrastructure">Pentest infrastructure réseau</option>
          <option value="pentest-ad">Pentest Active Directory</option>
          <option value="pentest-entreprise">Pentest entreprise (global)</option>
          <option value="red-team">Mission Red Team</option>
          <option value="conformite">Accompagnement conformité (DORA, NIS2, PCI DSS)</option>
          <option value="autre">Autre / Je ne sais pas encore</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-1">
          Votre message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition-colors resize-none"
          placeholder="Décrivez brièvement votre environnement, vos contraintes, et ce que vous souhaitez évaluer..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-xs">
          Une erreur est survenue. Réessayez ou contactez-nous directement à{' '}
          <a href="mailto:contact.atlascyber@gmail.com" className="underline">
            contact.atlascyber@gmail.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm py-3 px-6 rounded-lg transition-colors"
      >
        {status === 'loading' ? (
          'Envoi en cours...'
        ) : (
          <>
            <Send className="w-4 h-4" />
            Envoyer ma demande de devis
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        En envoyant ce formulaire, vous acceptez d&apos;être contacté par Atlas RedConsult.
        Vos données ne seront jamais partagées avec des tiers.
      </p>
    </form>
  )
}
