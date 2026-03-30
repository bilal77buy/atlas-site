import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowLeft, ArrowRight, Phone, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { quizQuestions, MAX_SCORE, getQuizLevel } from '../../data/quizQuestions';
import QuizResultForm from './QuizResultForm';

interface QuizResultProps {
  answers: (number | null)[];
  score: number;
  onReset: () => void;
}

const WEAKNESS_LINKS: Record<number, { path: string; label: string }> = {
  1: { path: '/services/pentest-web', label: 'Pentest Web' },
  2: { path: '/services/pentest-web', label: 'Pentest Web' },
  3: { path: '/services', label: 'Diagnostic Maturité' },
  4: { path: '/services/phishing', label: 'Simulation Phishing' },
  5: { path: '/services', label: 'Diagnostic Maturité' },
  6: { path: '/services', label: 'Diagnostic Maturité' },
  7: { path: '/services', label: 'Diagnostic Maturité' },
  8: { path: '/services', label: 'Diagnostic Maturité' },
  9: { path: '/services/pentest-api', label: 'Pentest API' },
  10: { path: '/services/osint', label: 'OSINT' },
};

const WEAKNESS_RECOMMENDATIONS: Record<number, string> = {
  1: 'Vos applications exposées représentent une surface d\'attaque importante. Un audit permettrait d\'identifier les failles exploitables.',
  2: 'Sans test d\'intrusion récent, vous ne connaissez pas vos vulnérabilités actuelles.',
  3: 'L\'absence de MFA facilite les compromissions de comptes. C\'est une mesure prioritaire.',
  4: 'Le facteur humain est le premier vecteur d\'attaque. La sensibilisation est essentielle.',
  5: 'Les systèmes non mis a jour contiennent des vulnérabilités connues et exploitées.',
  6: 'La non-conformité expose a des sanctions et révèle des lacunes structurelles.',
  7: 'Sans PRA testé, une cyberattaque peut paralyser votre activité durablement.',
  8: 'Sans procédure d\'incident, le temps de réaction augmente et les dégâts s\'aggravent.',
  9: 'Un code non sécurisé est une porte d\'entrée directe pour les attaquants.',
  10: 'Vous ne savez pas ce qu\'un attaquant peut découvrir sur votre organisation.',
};

export default function QuizResult({ answers, score, onReset }: QuizResultProps) {
  const [displayScore, setDisplayScore] = useState(0);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const level = getQuizLevel(score);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = score / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const current = Math.min(score, Math.round(increment * step));
      setDisplayScore(current);
      if (step >= steps) {
        setDisplayScore(score);
        clearInterval(timer);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [score]);

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (displayScore / MAX_SCORE) * circumference;

  const weaknesses = quizQuestions
    .map((q, qIndex) => {
      const answerIndex = answers[qIndex];
      const selectedOption = answerIndex !== null ? q.options[answerIndex] : null;
      const pts = selectedOption ? selectedOption.points : 0;
      return { question: q, points: pts, qIndex };
    })
    .filter(({ points }) => points <= 1);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D1117] overflow-y-auto">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">

        {/* BLOC 1 — SCORE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-6">
            <svg className="w-52 h-52 transform -rotate-90">
              <circle
                cx="104"
                cy="104"
                r={radius}
                fill="none"
                stroke="#161B22"
                strokeWidth="10"
              />
              <motion.circle
                cx="104"
                cy="104"
                r={radius}
                fill="none"
                stroke={level.color}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 2, ease: 'easeOut' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-white">{displayScore}</span>
              <span className="text-[#8B949E] text-sm">/ {MAX_SCORE}</span>
            </div>
          </div>

          <div
            className="inline-block px-6 py-2 rounded-full font-semibold text-white mb-5"
            style={{ backgroundColor: level.color }}
          >
            {level.label}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{level.title}</h2>
          <p className="text-lg text-[#8B949E] max-w-xl mx-auto leading-relaxed">{level.description}</p>
        </motion.div>

        {/* BLOC 2 — RECAP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-white mb-6">Détail de vos réponses</h3>
          <div className="space-y-3">
            {quizQuestions.map((q, qIndex) => {
              const answerIndex = answers[qIndex];
              const selectedOption = answerIndex !== null ? q.options[answerIndex] : null;
              const maxPoints = Math.max(...q.options.map(o => o.points));
              const pts = selectedOption ? selectedOption.points : 0;
              const isMax = pts >= maxPoints;

              return (
                <div
                  key={q.id}
                  className={`bg-[#161B22] rounded-xl p-4 border-l-4 ${
                    isMax ? 'border-l-[#16A34A]' : 'border-l-[#E63946]'
                  } border border-white/[0.04]`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold mb-1">
                        Q{q.id} — {q.title}
                      </p>
                      <p className="text-[#8B949E] text-sm">
                        {selectedOption ? selectedOption.label : 'Non répondu'}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-sm font-mono text-[#8B949E]">
                        {pts} / {maxPoints} pts
                      </span>
                      {isMax ? (
                        <svg className="w-5 h-5 text-[#16A34A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-[#E63946]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* BLOC 3 — POINTS FAIBLES */}
        {weaknesses.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h3 className="text-xl font-bold text-white mb-6">Vos axes d'amélioration prioritaires</h3>
            <div className="space-y-3">
              {weaknesses.map(({ question }) => {
                const link = WEAKNESS_LINKS[question.id];
                const recommendation = WEAKNESS_RECOMMENDATIONS[question.id];
                return (
                  <div
                    key={question.id}
                    className="bg-[#161B22] border border-white/[0.04] rounded-xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold text-sm mb-1">
                          {question.title}
                        </p>
                        <p className="text-[#8B949E] text-sm mb-2 leading-relaxed">
                          {recommendation}
                        </p>
                        {link && (
                          <Link
                            to={link.path}
                            className="inline-flex items-center gap-1 text-[#E63946] text-sm font-medium hover:underline"
                          >
                            En savoir plus
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* BLOC 4 — CTA APPEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-[#161B22] border border-[#E63946]/30 rounded-2xl p-8 mb-12"
        >
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-2xl bg-[#E63946]/10 border border-[#E63946]/20 flex items-center justify-center">
              <Phone className="w-6 h-6 text-[#E63946]" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white text-center mb-3">
            Parlons de vos résultats
          </h3>
          <p className="text-[#8B949E] text-center max-w-lg mx-auto mb-8 leading-relaxed">
            Votre score révèle des points d'attention spécifiques a votre contexte.
            En 30 minutes, nos experts analysent vos réponses avec vous et vous
            proposent un plan d'action concret — sans engagement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2 text-sm text-[#8B949E]">
              <Check className="w-4 h-4 text-[#E63946]" />
              <span>Analyse personnalisée</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#8B949E]">
              <Check className="w-4 h-4 text-[#E63946]" />
              <span>Plan d'action offert</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#8B949E]">
              <Check className="w-4 h-4 text-[#E63946]" />
              <span>Aucun engagement</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-5">
            <a
              href="https://calendly.com/contact-atlasredconsult/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#E63946] text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-[#E63946]/90 transition-all shadow-lg shadow-[#E63946]/25 hover:shadow-[#E63946]/40 text-sm"
            >
              Réserver un appel de 30 min
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToForm}
              className="flex-1 inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition-all text-sm"
            >
              Recevoir mon rapport par email
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[#8B949E] text-xs text-center">
            Réponse sous 24h · Confidentiel · Sans démarchage
          </p>
        </motion.div>

        {/* BLOC 5 — FORMULAIRE */}
        <motion.div
          ref={formSectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-[#161B22] border border-white/[0.06] rounded-2xl p-8 mb-12"
        >
          <QuizResultForm answers={answers} score={score} />
        </motion.div>

        {/* BLOC 6 — RETOUR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-center pb-8"
        >
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 border border-white/10 text-[#8B949E] px-6 py-3 rounded-lg hover:text-white hover:border-white/20 transition-all text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Refaire le diagnostic
          </button>
        </motion.div>
      </div>
    </div>
  );
}
