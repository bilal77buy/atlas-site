import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Calendar, ArrowRight, Phone, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    service: '',
    description: '',
    budget: '',
    deadline: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-contact`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l\'envoi');
      }

      setSent(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        sector: '',
        service: '',
        description: '',
        budget: '',
        deadline: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/90 via-background-dark to-background-dark" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">Parlons de votre projet</h1>
            <p className="text-lg text-white/70">Décrivez votre besoin, nous revenons vers vous sous 24h.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                  <p className="text-white/70 mb-6">
                    Nous avons bien reçu votre demande et vous recontacterons sous 24h.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form action="https://api.web3forms.com/submit" method="POST" className="bg-white/5 rounded-2xl border border-white/10 p-8">
                  <input type="hidden" name="access_key" value="f0fad814-040f-4e6f-9bee-8813b494f04f" />
                  <input type="hidden" name="subject" value="Nouveau contact - AtlasRedConsult" />
                  <input type="hidden" name="redirect" value="https://atlasredconsult.fr" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Nom complet *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Email professionnel *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Téléphone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Nom de l'entreprise</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Secteur d'activité</label>
                      <select name="sector" value={formData.sector} onChange={handleChange} className="input-field">
                        <option value="">Sélectionnez...</option>
                        <option value="fintech">Fintech</option>
                        <option value="saas">SaaS B2B</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="pme">PME industrielle</option>
                        <option value="health">Santé</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Service souhaité</label>
                      <select name="service" value={formData.service} onChange={handleChange} className="input-field">
                        <option value="">Sélectionnez...</option>
                        <option value="pentest-web">Pentest Web</option>
                        <option value="pentest-api">Pentest API</option>
                        <option value="pentest-mobile">Pentest Mobile</option>
                        <option value="phishing">Phishing</option>
                        <option value="osint">OSINT</option>
                        <option value="unknown">Je ne sais pas encore</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-white mb-2">Description du besoin</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      className="input-field resize-none"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Budget approximatif</label>
                      <select name="budget" value={formData.budget} onChange={handleChange} className="input-field">
                        <option value="">Sélectionnez...</option>
                        <option value="under5k">&lt; 5 000 EUR</option>
                        <option value="5k-10k">5 000 - 10 000 EUR</option>
                        <option value="10k-20k">10 000 - 20 000 EUR</option>
                        <option value="20k-50k">20 000 - 50 000 EUR</option>
                        <option value="over50k">&gt; 50 000 EUR</option>
                        <option value="unknown">Je ne sais pas</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Échéance souhaitée</label>
                      <select name="deadline" value={formData.deadline} onChange={handleChange} className="input-field">
                        <option value="">Sélectionnez...</option>
                        <option value="urgent">Urgent (&lt; 2 semaines)</option>
                        <option value="1month">1 mois</option>
                        <option value="2-3months">2-3 mois</option>
                        <option value="nodeadline">Pas de deadline</option>
                      </select>
                    </div>
                  </div>

                  {error && (
                    <div className="bg-accent-primary/10 border border-accent-primary/30 rounded-lg p-4 text-sm text-accent-primary mb-6">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className={`btn-primary w-full flex items-center justify-center gap-2 ${sending ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {sending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer ma demande <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-8">
              <div className="bg-white/5 rounded-2xl border border-white/10 p-8">
                <h3 className="font-semibold text-white mb-6">Contact direct</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent-primary flex-shrink-0" />
                    <a href="mailto:contact@atlasredconsult.fr" className="text-white/70 hover:text-white break-all">
                      contact@atlasredconsult.fr
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent-primary flex-shrink-0" />
                    <a href="tel:+33756842138" className="text-white/70 hover:text-white">
                      07 56 84 21 38
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent-primary flex-shrink-0" />
                    <span className="text-white/70">Paris, France</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-accent-primary flex-shrink-0" />
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                      Atlas RedConsult
                    </a>
                  </li>
                </ul>
              </div>

              <a
                href="tel:+33756842138"
                className="bg-accent-primary/10 border border-accent-primary/30 rounded-2xl p-6 flex items-center gap-4 hover:bg-accent-primary/20 transition-colors group block"
              >
                <div className="w-12 h-12 rounded-full bg-accent-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 group-hover:text-accent-primary transition-colors">
                    Appelez-nous maintenant
                  </h3>
                  <p className="text-white/70 text-sm">Réponse immédiate</p>
                </div>
              </a>

              <div className="bg-accent-primary/10 border border-accent-primary/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-accent-primary" />
                  <h3 className="font-semibold text-white">Échange direct ?</h3>
                </div>
                <p className="text-white/70 text-sm mb-6">Réservez 15 minutes pour discuter de votre projet.</p>
                <a
                  href="https://calendly.com/contact-atlasredconsult/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full flex items-center justify-center gap-2 text-sm py-3"
                >
                  Réserver un créneau <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
