import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Target,
  RotateCcw,
  MessageSquare,
  TrendingDown,
  ArrowRight,
  Shield,
  Zap,
  Eye,
  Heart,
} from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const founders = [
  {
    name: 'Bilal',
    role: 'Cofondateur & Stratégie',
    description: 'Pilote la relation client et la stratégie commerciale. Assure que chaque mission répond aux enjeux business et réglementaires.',
  },
  {
    name: 'Merwan',
    role: 'Cofondateur & Commercial',
    description: 'Construit les partenariats et les relations commerciales. Premier point de contact pour les entreprises.',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Rigueur',
    description: 'Chaque test suit une méthodologie éprouvée. Aucun raccourci, aucun scan automatique déguisé.',
  },
  {
    icon: Eye,
    title: 'Transparence',
    description: 'Communication claire à chaque étape. Rapports détaillés avec preuves d\'exploitation reproductibles.',
  },
  {
    icon: Heart,
    title: 'Engagement',
    description: 'Nous accompagnons nos clients jusqu\'à la remédiation. Retest inclus dans chaque mission.',
  },
  {
    icon: Zap,
    title: 'Réactivité',
    description: 'Délai de rapport sous 48h. Alertes immédiates en cas de faille critique découverte en cours de mission.',
  },
];

const differentiators = [
  {
    icon: Target,
    title: 'Spécialisation sectorielle',
    description: 'DORA, PCI DSS, NIS2 — nous parlons le langage de vos régulateurs.',
  },
  {
    icon: RotateCcw,
    title: 'Remédiation incluse',
    description: 'Retest systématique après correction, inclus dans chaque mission.',
  },
  {
    icon: MessageSquare,
    title: 'Taille humaine',
    description: "Un interlocuteur dédié, des échanges directs, pas de sous-traitance opaque.",
  },
  {
    icon: TrendingDown,
    title: 'Tarifs compétitifs',
    description: "La qualité d'un grand cabinet sans la structure de coûts.",
  },
];

const milestones = [
  { year: '2026', event: 'Création d\'Atlas RedConsult à Paris' },
  { year: '2026', event: 'Premières missions pentest pour des fintechs' },
  { year: '2026', event: 'Développement de l\'offre conformité DORA/NIS2' },
];

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/90 via-background-dark/95 to-background-dark" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
            <span className="badge mb-6 inline-block">Qui sommes-nous</span>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Spécialistes du pentest offensif
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Atlas RedConsult est un cabinet de cybersécurité fondé en 2026 à Paris, spécialisé dans les tests d'intrusion pour les entreprises réglementées. Nous croyons que la meilleure défense commence par une attaque simulée rigoureuse.
            </p>
          </motion.div>

          <AnimatedSection className="mb-20">
            <div className="bg-white/5 rounded-2xl border border-white/10 p-8 md:p-12 backdrop-blur-sm">
              <h2 className="font-serif text-2xl text-white mb-6">Notre mission</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Nous aidons les fintechs, SaaS B2B et e-commerces à identifier et corriger leurs failles de sécurité avant qu'un attaquant ne les exploite. Chaque test est réalisé manuellement, chaque rapport est actionnable, chaque client est accompagné jusqu'à la remédiation.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mb-20">
            <h2 className="font-serif text-2xl text-white mb-4">Notre histoire</h2>
            <p className="text-white/60 mb-8 max-w-2xl">Né de la conviction que les PME et ETI méritent le même niveau de sécurité que les grands groupes.</p>
            <div className="relative pl-8 border-l-2 border-white/10 space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-[calc(2rem+5px)] w-2.5 h-2.5 rounded-full bg-accent-primary border-2 border-background-dark" />
                  <span className="text-accent-primary text-sm font-medium">{milestone.year}</span>
                  <p className="text-white/70 mt-1">{milestone.event}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mb-20">
            <h2 className="font-serif text-2xl text-white mb-8">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.03] rounded-2xl border border-white/10 p-6 hover:border-accent-primary/30 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-accent-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{value.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mb-20" id="team">
            <h2 className="font-serif text-2xl text-white mb-8">L'équipe fondatrice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {founders.map((founder, i) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="font-serif text-2xl text-accent-primary">{founder.name[0]}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{founder.name}</h3>
                      <p className="text-white/60 text-sm">{founder.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70">{founder.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mb-20">
            <div className="bg-accent-primary/10 border border-accent-primary/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="font-serif text-2xl text-white mb-6">Équipe technique</h2>
              <p className="text-white/70 text-lg">
                Notre équipe de pentesters intervient sur des missions de tests d'intrusion web, API et mobile. Méthodologie alignée sur les standards OWASP et PTES.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="font-serif text-2xl text-white mb-8">Ce qui nous rend différents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {differentiators.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
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
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Prêt à sécuriser votre application ?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">Discutons de vos besoins en cybersécurité.</p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Demander un devis <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
