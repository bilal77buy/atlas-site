import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, Phone, Calendar } from 'lucide-react';
import { quizQuestions, getQuizLevel } from '../../data/quizQuestions';

interface QuizResultFormProps {
  answers: (number | null)[];
  score: number;
}

export default function QuizResultForm({ answers, score }: QuizResultFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    company_size: '',
    phone: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [consent, setConsent] = useState(false);

  const level = getQuizLevel(score);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || sending) return;

    setSending(true);
    setError('');

    try {
      const answersData = quizQuestions.map((q, i) => {
        const answerIndex = answers[i];
        const option = answerIndex !== null ? q.options[answerIndex] : null;
        return {
          question: q.question,
          answer: option ? option.label : 'Non répondu',
          points: option ? option.points : 0,
        };
      });

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-quiz`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          company_size: formData.company_size,
          phone: formData.phone || null,
          score,
          level: level.key,
          answers: answersData,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l\'envoi');
      }

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#161B22] border border-[#E63946]/30 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-[#16A34A]/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#16A34A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">C'est envoyé !</h3>
        <p className="text-[#8B949E] mb-8">
          Vous recevrez votre rapport personnalisé sous 24h. Pensez à vérifier vos spams.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <a
            href="tel:+33756842138"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#E63946] text-white hover:bg-[#E63946]/90 transition-colors font-semibold"
          >
            <Phone className="w-5 h-5" />
            Appeler maintenant
          </a>
          <a
            href="https://calendly.com/contact-atlasredconsult/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg border border-white/[0.08] text-white hover:border-[#E63946] hover:bg-[#E63946]/10 transition-colors font-semibold"
          >
            <Calendar className="w-5 h-5" />
            Réserver un créneau
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-2xl font-bold text-white mb-2 text-center">
        Recevoir mon rapport personnalisé
      </h3>
      <p className="text-[#8B949E] text-center mb-8">
        Vos résultats détaillés + recommandations adaptées à votre situation
      </p>

      <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
        <input type="hidden" name="access_key" value="f0fad814-040f-4e6f-9bee-8813b494f04f" />
        <input type="hidden" name="subject" value="Nouveau lead quiz - AtlasRedConsult" />
        <input type="hidden" name="redirect" value="https://atlasredconsult.fr" />
        <input type="hidden" name="score" value={String(score)} />
        <input type="hidden" name="level" value={level.key} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-[#8B949E] mb-1.5">Prénom / Nom *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-white/[0.08] text-white placeholder-[#8B949E]/50 focus:border-[#E63946] focus:outline-none transition-colors"
              placeholder="Jean Dupont"
            />
          </div>
          <div>
            <label className="block text-sm text-[#8B949E] mb-1.5">Email professionnel *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-white/[0.08] text-white placeholder-[#8B949E]/50 focus:border-[#E63946] focus:outline-none transition-colors"
              placeholder="jean@entreprise.fr"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-[#8B949E] mb-1.5">Entreprise *</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-white/[0.08] text-white placeholder-[#8B949E]/50 focus:border-[#E63946] focus:outline-none transition-colors"
              placeholder="Mon Entreprise SAS"
            />
          </div>
          <div>
            <label className="block text-sm text-[#8B949E] mb-1.5">Taille entreprise *</label>
            <select
              name="company_size"
              value={formData.company_size}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-white/[0.08] text-white focus:border-[#E63946] focus:outline-none transition-colors appearance-none"
            >
              <option value="" disabled className="text-[#8B949E]">Sélectionnez</option>
              <option value="1-10">1 - 10 salariés</option>
              <option value="11-50">11 - 50 salariés</option>
              <option value="51-200">51 - 200 salariés</option>
              <option value="200+">200+ salariés</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-[#8B949E] mb-1.5">Téléphone (optionnel)</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-white/[0.08] text-white placeholder-[#8B949E]/50 focus:border-[#E63946] focus:outline-none transition-colors"
            placeholder="+33 6 12 34 56 78"
          />
        </div>

        <label className="flex items-start gap-3 cursor-pointer py-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-white/[0.08] bg-[#0D1117] text-[#E63946] focus:ring-[#E63946] focus:ring-offset-0"
          />
          <span className="text-sm text-[#8B949E]">
            J'accepte d'être contacté par Atlas Red Consult concernant mes résultats *
          </span>
        </label>

        {error && (
          <div className="bg-[#E63946]/10 border border-[#E63946]/30 rounded-lg p-4 text-sm text-[#E63946]">
            {error}
          </div>
        )}

        <div className="space-y-3">
          <button
            type="submit"
            disabled={!consent || sending}
            className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all ${
              !consent || sending
                ? 'bg-[#E63946]/30 text-white/50 cursor-not-allowed'
                : 'bg-[#E63946] text-white hover:bg-[#E63946]/90 shadow-lg shadow-[#E63946]/25 hover:shadow-[#E63946]/40'
            }`}
          >
            {sending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              <>
                Recevoir mon rapport
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="tel:+33756842138"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/[0.08] text-white hover:border-[#E63946] hover:bg-[#E63946]/10 transition-colors text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              07 56 84 21 38
            </a>
            <a
              href="https://calendly.com/contact-atlasredconsult/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/[0.08] text-white hover:border-[#E63946] hover:bg-[#E63946]/10 transition-colors text-sm font-semibold"
            >
              <Calendar className="w-4 h-4" />
              Prendre RDV
            </a>
          </div>
        </div>

        <p className="text-[#8B949E] text-sm text-center pt-2">
          Aucun démarchage · Confidentiel · Réponse sous 24h
        </p>
      </form>
    </motion.div>
  );
}
