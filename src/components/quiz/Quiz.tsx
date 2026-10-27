'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  Loader2,
  Lock,
  Phone,
  ShieldOff,
  X,
  Zap,
} from 'lucide-react'
import { quizQuestions, MAX_SCORE, getQuizLevel } from '@/data/quizQuestions'

const CALENDLY = 'https://calendly.com/contact-atlasredconsult/30min'
const PHONE_HREF = 'tel:+33787230293'
const PHONE_LABEL = '+33 7 87 23 02 93'

type Phase = 'intro' | 'questions' | 'result'

const WEAKNESS_LINKS: Record<number, { path: string; label: string }> = {
  1: { path: '/pentest-web', label: 'Pentest Web' },
  2: { path: '/audit-pentest', label: 'Audit & Pentest' },
  3: { path: '/audit-securite-informatique', label: 'Audit Sécurité' },
  4: { path: '/red-team-cybersecurite', label: 'Red Team' },
  5: { path: '/pentest-interne', label: 'Pentest Interne' },
  6: { path: '/conformite-nis2', label: 'Conformité NIS2' },
  7: { path: '/audit-securite-informatique', label: 'Audit Sécurité' },
  8: { path: '/audit-securite-informatique', label: 'Audit Sécurité' },
  9: { path: '/pentest-api', label: 'Pentest API' },
  10: { path: '/pentest-externe', label: 'Pentest Externe' },
}

const WEAKNESS_RECOMMENDATIONS: Record<number, string> = {
  1: "Vos applications exposées représentent une surface d'attaque importante. Un audit permettrait d'identifier les failles exploitables.",
  2: "Sans test d'intrusion récent, vous ne connaissez pas vos vulnérabilités actuelles.",
  3: "L'absence de MFA facilite les compromissions de comptes. C'est une mesure prioritaire.",
  4: "Le facteur humain est le premier vecteur d'attaque. La sensibilisation est essentielle.",
  5: 'Les systèmes non mis à jour contiennent des vulnérabilités connues et exploitées.',
  6: 'La non-conformité expose à des sanctions et révèle des lacunes structurelles.',
  7: 'Sans PRA testé, une cyberattaque peut paralyser votre activité durablement.',
  8: "Sans procédure d'incident, le temps de réaction augmente et les dégâts s'aggravent.",
  9: 'Un code non sécurisé est une porte d’entrée directe pour les attaquants.',
  10: "Vous ne savez pas ce qu'un attaquant peut découvrir sur votre organisation.",
}

export default function Quiz() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(quizQuestions.length).fill(null)
  )
  const topRef = useRef<HTMLDivElement>(null)
  const mounted = useRef(false)

  // Remonte en haut du quiz à chaque changement d'étape (pas au chargement de la page)
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [phase, currentIndex])

  const score = answers.reduce<number>((total, answerIndex, qIndex) => {
    if (answerIndex === null) return total
    return total + quizQuestions[qIndex].options[answerIndex].points
  }, 0)

  const handleSelect = (optionIndex: number) => {
    const next = [...answers]
    next[currentIndex] = optionIndex
    setAnswers(next)
  }

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) setCurrentIndex(currentIndex + 1)
    else setPhase('result')
  }

  const handleReset = () => {
    setPhase('intro')
    setCurrentIndex(0)
    setAnswers(Array(quizQuestions.length).fill(null))
  }

  return (
    <div ref={topRef} className="scroll-mt-24">
      {phase === 'intro' && <Intro onStart={() => setPhase('questions')} />}
      {phase === 'questions' && (
        <QuestionView
          index={currentIndex}
          selected={answers[currentIndex]}
          onSelect={handleSelect}
          onNext={handleNext}
          onPrev={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
        />
      )}
      {phase === 'result' && <Result answers={answers} score={score} onReset={handleReset} />}
    </div>
  )
}

/* ---------- Intro ---------- */

function Intro({ onStart }: { onStart: () => void }) {
  const perks = [
    { icon: Lock, label: 'Confidentiel' },
    { icon: Zap, label: 'Résultat immédiat' },
    { icon: ShieldOff, label: 'Sans démarchage' },
  ]
  return (
    <div className="max-w-2xl mx-auto text-center py-8">
      <div className="w-16 h-16 rounded-2xl bg-red-600/10 border border-red-600/20 flex items-center justify-center mx-auto mb-6">
        <ShieldOff className="w-8 h-8 text-red-600" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Évaluez votre maturité cyber
      </h1>
      <p className="text-lg text-gray-400 mb-10">
        10 questions · 3 minutes · Résultat personnalisé immédiat
      </p>

      <div className="grid grid-cols-3 gap-4 mb-12 max-w-md mx-auto">
        {perks.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center">
              <Icon className="w-5 h-5 text-red-600" />
            </div>
            <span className="text-sm text-gray-400">{label}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onStart}
        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
      >
        Commencer le diagnostic
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}

/* ---------- Questions ---------- */

function QuestionView({
  index,
  selected,
  onSelect,
  onNext,
  onPrev,
}: {
  index: number
  selected: number | null
  onSelect: (i: number) => void
  onNext: () => void
  onPrev: () => void
}) {
  const question = quizQuestions[index]
  const total = quizQuestions.length
  const progress = ((index + 1) / total) * 100
  const isLast = index === total - 1

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
          <span>
            Question {index + 1} / {total}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
          <div
            className="h-full bg-red-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div key={question.id}>
        <p className="text-red-600 text-sm font-medium mb-3 text-center uppercase tracking-wider">
          {question.title}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center leading-snug">
          {question.question}
        </h2>

        <div className="grid gap-3">
          {question.options.map((option, i) => {
            const isSelected = selected === i
            return (
              <button
                key={i}
                onClick={() => onSelect(i)}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                  isSelected
                    ? 'border-red-600 bg-red-600/10'
                    : 'border-white/5 bg-[#1A1A1A] hover:border-red-600/40'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'border-red-600 bg-red-600' : 'border-gray-600'
                    }`}
                  >
                    {isSelected && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                  </div>
                  <span className={`font-medium ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                    {option.label}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
        <button
          onClick={onPrev}
          disabled={index === 0}
          className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
            index === 0 ? 'text-gray-700 cursor-not-allowed' : 'text-gray-400 hover:text-white'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Précédent</span>
        </button>
        <button
          onClick={onNext}
          disabled={selected === null}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
            selected === null
              ? 'bg-red-600/30 text-white/50 cursor-not-allowed'
              : 'bg-red-600 hover:bg-red-700 text-white'
          }`}
        >
          {isLast ? 'Voir mon résultat' : 'Suivant'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

/* ---------- Résultat ---------- */

function Result({
  answers,
  score,
  onReset,
}: {
  answers: (number | null)[]
  score: number
  onReset: () => void
}) {
  const [displayScore, setDisplayScore] = useState(0)
  const formRef = useRef<HTMLDivElement>(null)
  const level = getQuizLevel(score)

  useEffect(() => {
    const steps = 60
    let step = 0
    const timer = setInterval(() => {
      step++
      setDisplayScore(Math.min(score, Math.round((score / steps) * step)))
      if (step >= steps) clearInterval(timer)
    }, 2000 / steps)
    return () => clearInterval(timer)
  }, [score])

  const radius = 90
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (displayScore / MAX_SCORE) * circumference

  const weaknesses = quizQuestions.filter((q, i) => {
    const a = answers[i]
    return (a !== null ? q.options[a].points : 0) <= 1
  })

  return (
    <div className="max-w-3xl mx-auto">
      {/* Score */}
      <div className="text-center mb-16">
        <div className="relative inline-block mb-6">
          <svg className="w-52 h-52 -rotate-90" viewBox="0 0 208 208">
            <circle cx="104" cy="104" r={radius} fill="none" stroke="#1A1A1A" strokeWidth="10" />
            <circle
              cx="104"
              cy="104"
              r={radius}
              fill="none"
              stroke={level.color}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold text-white">{displayScore}</span>
            <span className="text-gray-400 text-sm">/ {MAX_SCORE}</span>
          </div>
        </div>
        <div
          className="inline-block px-6 py-2 rounded-full font-semibold text-white mb-5"
          style={{ backgroundColor: level.color }}
        >
          {level.label}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{level.title}</h2>
        <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">{level.description}</p>
      </div>

      {/* Détail */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-white mb-6">Détail de vos réponses</h3>
        <div className="space-y-3">
          {quizQuestions.map((q, i) => {
            const a = answers[i]
            const opt = a !== null ? q.options[a] : null
            const max = Math.max(...q.options.map((o) => o.points))
            const pts = opt ? opt.points : 0
            const ok = pts >= max
            return (
              <div
                key={q.id}
                className={`bg-[#1A1A1A] rounded-xl p-4 border border-white/5 border-l-4 ${
                  ok ? 'border-l-green-600' : 'border-l-red-600'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold mb-1">
                      Q{q.id} — {q.title}
                    </p>
                    <p className="text-gray-400 text-sm">{opt ? opt.label : 'Non répondu'}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-sm font-mono text-gray-400">
                      {pts} / {max} pts
                    </span>
                    {ok ? (
                      <Check className="w-5 h-5 text-green-600" />
                    ) : (
                      <X className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Points faibles */}
      {weaknesses.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6">Vos axes d&apos;amélioration prioritaires</h3>
          <div className="space-y-3">
            {weaknesses.map((q) => {
              const link = WEAKNESS_LINKS[q.id]
              return (
                <div key={q.id} className="bg-[#1A1A1A] border border-white/5 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm mb-1">{q.title}</p>
                      <p className="text-gray-400 text-sm mb-2 leading-relaxed">
                        {WEAKNESS_RECOMMENDATIONS[q.id]}
                      </p>
                      {link && (
                        <Link
                          href={link.path}
                          className="inline-flex items-center gap-1 text-red-600 text-sm font-medium hover:underline"
                        >
                          {link.label}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-[#1A1A1A] border border-red-600/30 rounded-2xl p-8 mb-12">
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 rounded-2xl bg-red-600/10 border border-red-600/20 flex items-center justify-center">
            <Phone className="w-6 h-6 text-red-600" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white text-center mb-3">Parlons de vos résultats</h3>
        <p className="text-gray-400 text-center max-w-lg mx-auto mb-8 leading-relaxed">
          En 30 minutes, nos experts analysent vos réponses avec vous et vous proposent un plan
          d&apos;action concret — sans engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-5">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-lg font-semibold transition-colors text-sm"
          >
            Réserver un appel de 30 min
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-1 inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition-colors text-sm"
          >
            Recevoir mon rapport par email
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <p className="text-gray-500 text-xs text-center">Confidentiel · Sans démarchage</p>
      </div>

      {/* Formulaire */}
      <div ref={formRef} className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-8 mb-12 scroll-mt-24">
        <ResultForm answers={answers} score={score} />
      </div>

      <div className="text-center pb-8">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 border border-white/10 text-gray-400 px-6 py-3 rounded-lg hover:text-white hover:border-white/20 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Refaire le diagnostic
        </button>
      </div>
    </div>
  )
}

/* ---------- Formulaire de résultat ---------- */

const inputClass =
  'w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-white/10 text-white placeholder-gray-600 focus:border-red-600 focus:outline-none transition-colors'

function ResultForm({ answers, score }: { answers: (number | null)[]; score: number }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', company_size: '', phone: '' })
  const [consent, setConsent] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const level = getQuizLevel(score)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent || sending) return
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          score,
          level: level.key,
          answers: quizQuestions.map((q, i) => {
            const a = answers[i]
            const opt = a !== null ? q.options[a] : null
            return {
              question: q.question,
              answer: opt ? opt.label : 'Non répondu',
              points: opt ? opt.points : 0,
            }
          }),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || "Erreur lors de l'envoi")
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'envoi. Veuillez réessayer.")
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">C&apos;est envoyé !</h3>
        <p className="text-gray-400 mb-8">
          Vous recevrez votre rapport personnalisé rapidement. Pensez à vérifier vos spams.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
          >
            <Phone className="w-5 h-5" /> Appeler maintenant
          </a>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg border border-white/10 text-white hover:border-red-600 hover:bg-red-600/10 font-semibold transition-colors"
          >
            <Calendar className="w-5 h-5" /> Réserver un créneau
          </a>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-2 text-center">Recevoir mon rapport personnalisé</h3>
      <p className="text-gray-400 text-center mb-8">
        Vos résultats détaillés + recommandations adaptées à votre situation
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Prénom / Nom *</label>
            <input name="name" value={form.name} onChange={onChange} required className={inputClass} placeholder="Jean Dupont" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Email professionnel *</label>
            <input type="email" name="email" value={form.email} onChange={onChange} required className={inputClass} placeholder="jean@entreprise.fr" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Entreprise *</label>
            <input name="company" value={form.company} onChange={onChange} required className={inputClass} placeholder="Mon Entreprise SAS" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Taille entreprise *</label>
            <select name="company_size" value={form.company_size} onChange={onChange} required className={`${inputClass} appearance-none`}>
              <option value="" disabled>Sélectionnez</option>
              <option value="1-10">1 - 10 salariés</option>
              <option value="11-50">11 - 50 salariés</option>
              <option value="51-200">51 - 200 salariés</option>
              <option value="200+">200+ salariés</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Téléphone (optionnel)</label>
          <input type="tel" name="phone" value={form.phone} onChange={onChange} className={inputClass} placeholder="+33 6 12 34 56 78" />
        </div>
        <label className="flex items-start gap-3 cursor-pointer py-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 w-4 h-4 accent-red-600"
          />
          <span className="text-sm text-gray-400">
            J&apos;accepte d&apos;être contacté par Atlas RedConsult concernant mes résultats *
          </span>
        </label>

        {error && (
          <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-4 text-sm text-red-500">{error}</div>
        )}

        <button
          type="submit"
          disabled={!consent || sending}
          className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-colors ${
            !consent || sending
              ? 'bg-red-600/30 text-white/50 cursor-not-allowed'
              : 'bg-red-600 hover:bg-red-700 text-white'
          }`}
        >
          {sending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours...
            </>
          ) : (
            <>
              Recevoir mon rapport <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-white hover:border-red-600 hover:bg-red-600/10 transition-colors text-sm font-semibold"
          >
            <Phone className="w-4 h-4" /> {PHONE_LABEL}
          </a>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-white hover:border-red-600 hover:bg-red-600/10 transition-colors text-sm font-semibold"
          >
            <Calendar className="w-4 h-4" /> Prendre RDV
          </a>
        </div>
        <p className="text-gray-500 text-sm text-center pt-2">Aucun démarchage · Confidentiel</p>
      </form>
    </div>
  )
}
