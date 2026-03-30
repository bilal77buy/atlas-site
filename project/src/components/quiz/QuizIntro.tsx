import { motion } from 'framer-motion';
import { Lock, Zap, ShieldOff, ArrowRight } from 'lucide-react';

interface QuizIntroProps {
  onStart: () => void;
}

export default function QuizIntro({ onStart }: QuizIntroProps) {
  return (
    <div className="min-h-screen bg-[#0D1117] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        <div className="mb-8">
          <div className="w-16 h-16 rounded-2xl bg-[#E63946]/10 border border-[#E63946]/20 flex items-center justify-center mx-auto mb-6">
            <ShieldOff className="w-8 h-8 text-[#E63946]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Évaluez votre maturité cyber
          </h1>
          <p className="text-lg text-[#8B949E]">
            10 questions · 3 minutes · Résultat personnalisé immédiat
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-12 max-w-md mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-[#161B22] border border-white/[0.06] flex items-center justify-center">
              <Lock className="w-5 h-5 text-[#E63946]" />
            </div>
            <span className="text-sm text-[#8B949E]">Confidentiel</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-[#161B22] border border-white/[0.06] flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#E63946]" />
            </div>
            <span className="text-sm text-[#8B949E]">Résultat immédiat</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-[#161B22] border border-white/[0.06] flex items-center justify-center">
              <ShieldOff className="w-5 h-5 text-[#E63946]" />
            </div>
            <span className="text-sm text-[#8B949E]">Sans démarchage</span>
          </div>
        </div>

        <button
          onClick={onStart}
          className="inline-flex items-center gap-2 bg-[#E63946] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#E63946]/90 transition-all shadow-lg shadow-[#E63946]/25 hover:shadow-[#E63946]/40 hover:scale-105 text-lg"
        >
          Commencer le diagnostic
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
}
