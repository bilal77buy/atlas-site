import type { Metadata } from 'next'
import Quiz from '@/components/quiz/Quiz'

export const metadata: Metadata = {
  title: 'Diagnostic de maturité cyber gratuit | 10 questions',
  description:
    'Évaluez la maturité cybersécurité de votre entreprise en 3 minutes : 10 questions, score immédiat et recommandations personnalisées par Atlas RedConsult.',
  alternates: { canonical: 'https://atlasredconsult.com/quiz' },
}

export default function QuizPage() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 min-h-screen bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent pointer-events-none" />
      <div className="section-container relative">
        <Quiz />
      </div>
    </section>
  )
}
