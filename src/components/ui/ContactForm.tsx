'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

type FormData = {
  nom: string
  entreprise: string
  email: string
  telephone: string
  besoin: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ nom: '', entreprise: '', email: '', telephone: '', besoin: '', message: '' })
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
        setForm({ nom: '', entreprise: '', email: '', telephone: '', besoin: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card text-center py-12">
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
        <h2 className="font-display text-xl font-bold text-white mb-2">Message envoyé !</h2>
        <p className="text-muted text-sm">Nous vous répondrons dans les 24h ouvrées. Vérifiez également vos spams.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-muted mb-1">Nom complet *</label>
          <input
            type="text"
            required
            className="input-field"
            placeholder="Jean Dupont"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted mb-1">Entreprise *</label>
          <input
            type="text"
            required
            className="input-field"
            placeholder="Votre entreprise"
            value={form.entreprise}
            onChange={(e) => setForm({ ...form, entreprise: e.target.value })}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-muted mb-1">Email professionnel *</label>
          <input
            type="email"
            required
            className="input-field"
            placeholder="jean@entreprise.fr"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted mb-1">Téléphone</label>
          <input
            type="tel"
            className="input-field"
            placeholder="+33 6 00 00 00 00"
            value={form.telephone}
            onChange={(e) => setForm({ ...form, telephone: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-muted mb-1">Type de besoin *</label>
        <select
          required
          className="input-field"
          value={form.besoin}
          onChange={(e) => setForm({ ...form, besoin: e.target.value })}
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
        <label className="block text-xs font-medium text-muted mb-1">Décrivez votre contexte et vos besoins *</label>
        <textarea
          required
          rows={5}
          className="input-field resize-none"
          placeholder="Décrivez brièvement votre environnement, vos contraintes, et ce que vous souhaitez évaluer..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      {status === 'error' && (
        <p className="text-accent text-xs">Une erreur est survenue. Réessayez ou contactez-nous directement par email.</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Envoi en cours...' : (<><Send className="w-4 h-4" /> Envoyer ma demande</>)}
      </button>
      <p className="text-xs text-muted text-center">
        En envoyant ce formulaire, vous acceptez d&apos;être contacté par Atlas Red Consult. Vos données ne seront jamais partagées.
      </p>
    </form>
  )
}
