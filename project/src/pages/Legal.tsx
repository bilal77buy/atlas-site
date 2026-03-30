import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function AccordionItem({ title, isOpen, onToggle, children }: { title: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div className="border-b border-white/10">
      <button onClick={onToggle} className="w-full py-6 flex items-center justify-between text-left">
        <span className="font-serif text-xl text-white">{title}</span>
        <ChevronDown className={`w-5 h-5 text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="pb-8 text-white/70 leading-relaxed">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Legal() {
  const [openSection, setOpenSection] = useState<string | null>('mentions');
  const toggleSection = (section: string) => setOpenSection(openSection === section ? null : section);

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">Informations légales</h1>
          </motion.div>

          <div className="bg-white/5 rounded-2xl border border-white/10 px-8">
            <AccordionItem title="Mentions légales" isOpen={openSection === 'mentions'} onToggle={() => toggleSection('mentions')}>
              <div className="space-y-4">
                <p><strong className="text-white">Raison sociale :</strong> Atlas RedConsult SAS</p>
                <p><strong className="text-white">Capital social :</strong> 500 EUR</p>
                <p><strong className="text-white">SIREN :</strong> En cours d'immatriculation</p>
                <p><strong className="text-white">Siège social :</strong> Paris, France</p>
                <p><strong className="text-white">Directeur de la publication :</strong> Bilal</p>
                <p><strong className="text-white">Hébergeur :</strong> Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                <p><strong className="text-white">Contact :</strong> <a href="mailto:contact@atlasredconsult.fr" className="text-accent-primary hover:underline">contact@atlasredconsult.fr</a></p>
              </div>
            </AccordionItem>

            <AccordionItem title="Politique de confidentialité" isOpen={openSection === 'privacy'} onToggle={() => toggleSection('privacy')}>
              <div className="space-y-6">
                <div><h3 className="font-semibold text-white mb-2">Données collectées</h3><p>Nom, email, telephone, entreprise — collectées via les formulaires de contact.</p></div>
                <div><h3 className="font-semibold text-white mb-2">Finalité</h3><p>Réponse aux demandes de devis, prospection commerciale legitime.</p></div>
                <div><h3 className="font-semibold text-white mb-2">Base légale</h3><p>Interet legitime (formulaire de contact).</p></div>
                <div><h3 className="font-semibold text-white mb-2">Duree de conservation</h3><p>3 ans après le dernier contact.</p></div>
                <div><h3 className="font-semibold text-white mb-2">Sous-traitants</h3><ul className="list-disc list-inside space-y-1"><li>Formspree (formulaires, USA)</li><li>Brevo (emails, France)</li><li>Plausible Analytics (analytics, UE)</li></ul></div>
                <div><h3 className="font-semibold text-white mb-2">Vos droits</h3><p>Acces, rectification, suppression, portabilite — <a href="mailto:contact@atlasredconsult.fr" className="text-accent-primary hover:underline">contact@atlasredconsult.fr</a></p></div>
              </div>
            </AccordionItem>

            <AccordionItem title="Conditions générales de vente" isOpen={openSection === 'cgv'} onToggle={() => toggleSection('cgv')}>
              <p>Les CGV d'Atlas RedConsult sont en cours de rédaction et seront disponibles prochainement. Pour toute question, contactez-nous a <a href="mailto:contact@atlasredconsult.fr" className="text-accent-primary hover:underline">contact@atlasredconsult.fr</a>.</p>
            </AccordionItem>
          </div>
        </div>
      </section>
    </div>
  );
}
