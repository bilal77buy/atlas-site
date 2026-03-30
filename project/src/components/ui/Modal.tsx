import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, content }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#0D1117]/85 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-[800px] bg-[#161B22] border border-[#E63946]/30 rounded-xl p-12 shadow-2xl"
              >
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 text-[#8B949E] hover:text-[#E63946] transition-colors"
                  aria-label="Fermer"
                >
                  <X size={24} />
                </button>

                <div className="mb-8">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-[#E63946]/10 border border-[#E63946]/30 mb-6">
                    <span className="text-[#E63946] text-sm font-medium">Atlas Red Consult</span>
                  </div>

                  <h2 className="text-white font-bold text-3xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {title}
                  </h2>

                  <div className="w-10 h-0.5 bg-[#E63946]"></div>
                </div>

                <div className="prose prose-invert max-w-none">
                  {content}
                </div>

                <div className="mt-12 pt-8 border-t border-white/[0.06]">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      onClick={onClose}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E63946] text-white font-semibold rounded-lg hover:bg-[#E63946]/90 transition-colors"
                    >
                      Demander un devis <ArrowRight size={18} />
                    </Link>

                    <Link
                      to="/contact"
                      onClick={onClose}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#E63946] text-[#E63946] font-semibold rounded-lg hover:bg-[#E63946]/10 transition-colors"
                    >
                      <Phone size={18} /> Appel de cadrage gratuit
                    </Link>
                  </div>

                  <p className="text-center text-[#8B949E] text-[13px] mt-4">
                    Réponse sous 24h · Sans engagement · Confidentiel
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
