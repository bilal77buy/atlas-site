import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { QuizQuestion as QuizQuestionType } from '../../data/quizQuestions';

interface QuizQuestionProps {
  question: QuizQuestionType;
  currentIndex: number;
  total: number;
  selectedAnswer: number | null;
  onSelect: (optionIndex: number) => void;
  onNext: () => void;
  onPrev: () => void;
  isLast: boolean;
}

export default function QuizQuestionView({
  question,
  currentIndex,
  total,
  selectedAnswer,
  onSelect,
  onNext,
  onPrev,
  isLast,
}: QuizQuestionProps) {
  const progress = ((currentIndex + 1) / total) * 100;

  return (
    <div className="min-h-screen bg-[#0D1117] flex flex-col">
      <div className="px-4 pt-6 pb-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between text-sm mb-3">
            <span className="text-[#8B949E]">Question {currentIndex + 1} / {total}</span>
            <span className="text-[#8B949E]">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-[#161B22] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#E63946] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 pb-28">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={question.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-[#E63946] text-sm font-medium mb-3 text-center uppercase tracking-wider">
                {question.title}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center leading-snug">
                {question.question}
              </h2>

              <div className="grid gap-3">
                {question.options.map((option, index) => {
                  const selected = selectedAnswer === index;
                  return (
                    <button
                      key={index}
                      onClick={() => onSelect(index)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                        selected
                          ? 'border-[#E63946] bg-[#E63946]/10'
                          : 'border-white/[0.06] bg-[#161B22] hover:border-[#E63946]/40'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                            selected
                              ? 'border-[#E63946] bg-[#E63946]'
                              : 'border-[#8B949E]/40'
                          }`}
                        >
                          {selected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2.5 h-2.5 bg-white rounded-full"
                            />
                          )}
                        </div>
                        <span className={`font-medium ${selected ? 'text-white' : 'text-[#8B949E]'}`}>
                          {option.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0D1117]/95 backdrop-blur-sm border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
              currentIndex === 0
                ? 'text-[#8B949E]/30 cursor-not-allowed'
                : 'text-[#8B949E] hover:text-white'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Précédent</span>
          </button>

          <button
            onClick={onNext}
            disabled={selectedAnswer === null}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedAnswer === null
                ? 'bg-[#E63946]/30 text-white/50 cursor-not-allowed'
                : 'bg-[#E63946] text-white hover:bg-[#E63946]/90 shadow-lg shadow-[#E63946]/25'
            }`}
          >
            {isLast ? 'Voir mon résultat' : 'Suivant'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
