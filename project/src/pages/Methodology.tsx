import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Target,
  FileSearch,
  TestTube,
  FileText,
  RefreshCw,
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
  BookOpen,
  Lock,
  AlertTriangle,
  BarChart3,
} from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const phases = [
  {
    number: '01',
    icon: Target,
    title: 'Cadrage & Scoping',
    duration: 'Jour 1',
    description: 'Nous definissons ensemble le perimetre exact de la mission, les objectifs, les contraintes et les regles d\'engagement.',
    details: [
      'Identification des actifs critiques a tester',
      'Definition des scenarios d\'attaque prioritaires',
      'Accord sur les regles d\'engagement (horaires, limites)',
      'Mise en place des canaux de communication d\'urgence',
    ],
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Reconnaissance',
    duration: 'Jours 2-3',
    description: 'Cartographie complete de la surface d\'attaque. Nous collectons et analysons toutes les informations accessibles.',
    details: [
      'Enumeration des sous-domaines et services exposes',
      'Identification des technologies et versions',
      'Analyse des flux d\'authentification',
      'Cartographie des endpoints API',
    ],
  },
  {
    number: '03',
    icon: TestTube,
    title: 'Tests & Exploitation',
    duration: 'Jours 3-8',
    description: 'Phase offensive manuelle. Chaque fonctionnalite critique est testee selon les referentiels OWASP et PTES.',
    details: [
      'Tests manuels sur chaque fonctionnalite critique',
      'Tentatives d\'escalade de privileges',
      'Exploitation des failles de logique metier',
      'Chainages de vulnerabilites pour maximiser l\'impact',
    ],
  },
  {
    number: '04',
    icon: FileText,
    title: 'Rapport & Livrables',
    duration: 'Jours 8-10',
    description: 'Double livrable : rapport executif pour la direction et rapport technique avec preuves d\'exploitation (PoC) pour vos equipes.',
    details: [
      'Rapport executif avec scoring de risque global',
      'Rapport technique avec PoC reproductibles',
      'Recommandations de remediation priorisees',
      'Presentation orale des resultats',
    ],
  },
  {
    number: '05',
    icon: RefreshCw,
    title: 'Remediation & Retest',
    duration: 'Inclus',
    description: 'Nous accompagnons vos equipes dans la correction et validons que les failles sont bien corrigees par un retest.',
    details: [
      'Accompagnement technique a la correction',
      'Retest systematique apres remediation',
      'Mise a jour du rapport final',
      'Attestation de conformite post-correction',
    ],
  },
];

const standards = [
  {
    icon: Shield,
    name: 'OWASP',
    fullName: 'Open Web Application Security Project',
    description: 'Top 10 Web, API Security Top 10, Mobile Top 10 — referentiel mondial pour les tests de securite applicative.',
  },
  {
    icon: BookOpen,
    name: 'PTES',
    fullName: 'Penetration Testing Execution Standard',
    description: 'Methodologie structuree couvrant toutes les phases d\'un test d\'intrusion, du cadrage au rapport.',
  },
  {
    icon: Lock,
    name: 'OSSTMM',
    fullName: 'Open Source Security Testing Methodology Manual',
    description: 'Framework pour evaluer la securite operationnelle avec des metriques quantifiables.',
  },
  {
    icon: BarChart3,
    name: 'CVSS v4',
    fullName: 'Common Vulnerability Scoring System',
    description: 'Systeme de notation standardise pour evaluer la severite de chaque vulnerabilite decouverte.',
  },
];

const deliverables = [
  {
    title: 'Rapport Executif',
    audience: 'Direction / COMEX',
    icon: BarChart3,
    items: [
      'Score de risque global',
      'Synthese des failles critiques',
      'Impact business estime',
      'Roadmap de remediation priorisee',
    ],
  },
  {
    title: 'Rapport Technique',
    audience: 'Equipe dev / DevSecOps',
    icon: FileText,
    items: [
      'Detail de chaque vulnerabilite',
      'Preuves d\'exploitation (PoC)',
      'Steps de reproduction',
      'Recommandations techniques de correction',
    ],
  },
  {
    title: 'Retest & Attestation',
    audience: 'Conformite / Auditeurs',
    icon: CheckCircle,
    items: [
      'Verification des corrections',
      'Rapport de retest mis a jour',
      'Attestation de conformite',
      'Suivi des failles residuelles',
    ],
  },
];

export default function Methodology() {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/90 via-background-dark/95 to-background-dark" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-8">
            <span className="badge mb-6 inline-block">Processus eprouve</span>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Notre methodologie d'audit
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Chaque mission suit un processus rigoureux en 5 phases, aligne sur les standards internationaux OWASP et PTES. Pas de scan automatique deguise — uniquement des tests manuels par des experts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 text-sm text-white/50"
          >
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-accent-primary" />
              Duree moyenne : 8-10 jours
            </span>
            <span className="flex items-center gap-2">
              <Shield size={16} className="text-accent-primary" />
              100% manuel
            </span>
            <span className="flex items-center gap-2">
              <RefreshCw size={16} className="text-accent-primary" />
              Retest inclus
            </span>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="font-serif text-3xl text-white mb-4">Les 5 phases d'une mission</h2>
            <p className="text-white/60 max-w-2xl">De la definition du perimetre a la validation des corrections, chaque etape est documentee et transparente.</p>
          </AnimatedSection>

          <div className="space-y-0">
            {phases.map((phase, index) => (
              <AnimatedSection key={phase.number} delay={index * 0.1}>
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 border-b border-white/10 group">
                  <div className="lg:col-span-1 flex lg:justify-center">
                    <div className="relative">
                      <span className="font-display text-5xl font-bold text-white/[0.06] group-hover:text-accent-primary/20 transition-colors duration-500">
                        {phase.number}
                      </span>
                      {index < phases.length - 1 && (
                        <div className="hidden lg:block absolute top-full left-1/2 w-px h-12 bg-white/10" />
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-primary/30 group-hover:bg-accent-primary/10 transition-all duration-300">
                        <phase.icon className="w-6 h-6 text-accent-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                        <span className="text-xs text-accent-primary font-medium">{phase.duration}</span>
                      </div>
                    </div>
                    <p className="text-white/60 leading-relaxed mt-4">{phase.description}</p>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-6 group-hover:border-white/10 transition-colors duration-300">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {phase.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3 text-sm text-white/70">
                            <CheckCircle className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background-secondary/50 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="font-serif text-3xl text-white mb-4">Standards & referentiels</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Nos audits s'appuient sur les referentiels reconnus internationalement.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((standard, index) => (
              <AnimatedSection key={standard.name} delay={index * 0.1}>
                <div className="bg-background-dark/50 rounded-2xl border border-white/10 p-6 h-full hover:border-accent-primary/30 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center mb-4">
                    <standard.icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-1">{standard.name}</h3>
                  <p className="text-xs text-accent-primary mb-3">{standard.fullName}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{standard.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="font-serif text-3xl text-white mb-4">Ce que vous recevez</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Triple livrable adapte a chaque audience : direction, equipes techniques, et auditeurs de conformite.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <AnimatedSection key={deliverable.title} delay={index * 0.1}>
                <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-8 h-full hover:border-accent-primary/30 transition-colors duration-300 group">
                  <div className="flex items-center gap-3 mb-2">
                    <deliverable.icon className="w-6 h-6 text-accent-primary" />
                    <h3 className="text-lg font-semibold text-white">{deliverable.title}</h3>
                  </div>
                  <p className="text-xs text-accent-primary mb-6">{deliverable.audience}</p>
                  <ul className="space-y-3">
                    {deliverable.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                        <CheckCircle className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5 group-hover:text-accent-primary transition-colors duration-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background-secondary/50 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-accent-primary/5 border border-accent-primary/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-accent-primary flex-shrink-0" />
                <div>
                  <h2 className="font-serif text-2xl text-white mb-2">Engagement ethique</h2>
                  <p className="text-white/60 leading-relaxed">
                    Toutes nos missions sont realisees dans un cadre contractuel strict. Nous intervenons uniquement avec l'autorisation ecrite du proprietaire des systemes testes. Les donnees sensibles decouvertes pendant un audit sont traitees avec la plus stricte confidentialite et detruites apres livraison du rapport final.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  Autorisation ecrite obligatoire
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  NDA signe avant chaque mission
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 text-accent-primary flex-shrink-0" />
                  Donnees detruites post-mission
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/90 to-background-dark" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Pret a lancer un audit ?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">Discutons de votre perimetre et de vos objectifs de securite.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Demander un devis <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
