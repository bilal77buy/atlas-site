import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Globe,
  Smartphone,
  Mail,
  Search,
  BarChart3,
  Shield,
  FileText,
  Users,
  ArrowRight,
  Code,
  Star,
  Clock,
  CheckCircle,
  Target,
  FileSearch,
  TestTube,
  RefreshCw,
  Phone,
} from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import PentestTerminal from '../components/ui/PentestTerminal';

const services = [
  {
    icon: Globe,
    title: 'Pentest Web',
    description: "Attaque simulée de votre application - OWASP Top 10, authentification, logique métier.",
    highlighted: true,
    link: '/services/pentest-web',
  },
  {
    icon: Code,
    title: 'Pentest API',
    description: "Tests REST, GraphQL, WebSocket - détection des failles d'autorisation et d'injection.",
    link: '/services/pentest-api',
  },
  {
    icon: Smartphone,
    title: 'Pentest Mobile',
    description: "Reverse engineering APK/IPA, interception réseau, analyse du stockage local.",
    link: '/services/pentest-mobile',
  },
  {
    icon: Mail,
    title: 'Simulation Phishing',
    description: "Campagnes réalistes, mesure du taux de clic, rapport comportemental.",
    link: '/services',
  },
  {
    icon: Search,
    title: 'OSINT',
    description: "Cartographie de votre surface d'attaque externe et des données exposées.",
    link: '/services',
  },
  {
    icon: BarChart3,
    title: 'Diagnostic Maturité',
    description: "Score sur 100, failles prioritaires, feuille de route actionnable.",
    link: '/services',
  },
];

const differentiators = [
  {
    icon: Shield,
    title: 'Pentest 100% manuel',
    description: "Aucun scan automatique déguisé. Chaque fonctionnalité critique testée à la main.",
  },
  {
    icon: FileText,
    title: 'Double livrable',
    description: "Rapport exécutif pour la direction + rapport technique avec PoC exploitables pour vos devs.",
  },
  {
    icon: Users,
    title: 'Accompagnement remédiation',
    description: "Correction guidée. Vous n'êtes pas seuls avec un PDF.",
  },
];

const stats = [
  { value: 50, suffix: '+', label: 'tests réalisés' },
  { value: 0, suffix: '', label: 'faux positif non documenté' },
  { value: 48, suffix: 'h', label: 'délai de rapport' },
];

const methodology = [
  { icon: Target, title: 'Cadrage & scope', description: 'Définition du périmètre et des objectifs' },
  { icon: FileSearch, title: 'Reconnaissance', description: "Cartographie et collecte d'informations" },
  { icon: TestTube, title: 'Exploitation', description: "Tests manuels et tentatives d'intrusion" },
  { icon: FileText, title: 'Rapport & PoC', description: 'Documentation détaillée avec preuves' },
  { icon: RefreshCw, title: 'Retest', description: 'Validation des corrections appliquées' },
];

const testimonials = [
  {
    name: 'Sophie M.',
    role: 'CTO, Fintech',
    content: "Audit rigoureux qui a révélé des failles critiques. Rapport clair, remédiation guidée. Recommandé.",
    rating: 5,
  },
  {
    name: 'Thomas B.',
    role: 'RSSI, SaaS RH',
    content: "Équipe réactive et méthodique. Le double livrable exec/tech est un vrai plus pour communiquer en interne.",
    rating: 5,
  },
  {
    name: 'Marie L.',
    role: 'DG, E-commerce',
    content: "Préparation PCI DSS réussie grâce à leur accompagnement. Professionnalisme exemplaire.",
    rating: 5,
  },
];

function AnimatedWord({ children, delay }: { children: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="inline-block"
    >
      {children}&nbsp;
    </motion.span>
  );
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="font-display text-4xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {isInView && (
            <CountUp end={value} duration={2} />
          )}
          {suffix}
        </motion.span>
      </motion.div>
      <p className="text-text-secondary text-sm">{label}</p>
    </div>
  );
}

function CountUp({ end, duration }: { end: number; duration: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 1 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {end}
      </motion.span>
    </motion.span>
  );
}

export default function Home() {
  const heroTitle = "Testez vos défenses avant que les attaquants le fassent.";
  const words = heroTitle.split(' ');

  return (
    <>
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `linear-gradient(
              135deg,
              rgba(13, 17, 23, 0.92) 0%,
              rgba(13, 17, 23, 0.88) 40%,
              rgba(13, 17, 23, 0.94) 100%
            )`,
          }}
        />
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(230, 57, 70, 0.06) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="badge mb-8 inline-block"
            >
              Cabinet spécialisé pentest offensif
            </motion.span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 tracking-tight">
              {words.map((word, index) => (
                <AnimatedWord key={index} delay={0.3 + index * 0.1}>
                  {word}
                </AnimatedWord>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed"
            >
              Tests d'intrusion manuels pour fintechs, SaaS B2B et e-commerces soumis à DORA, PCI DSS et NIS2.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link to="/quiz" className="btn-primary">
                Évaluer ma maturité cyber <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Découvrir nos services
              </Link>
              <a
                href="tel:+33756842138"
                className="btn-secondary inline-flex items-center justify-center gap-2 border-accent-primary/30 hover:border-accent-primary hover:bg-accent-primary/10"
              >
                <Phone size={16} />
                07 56 84 21 38
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="flex flex-wrap gap-3"
            >
              {['DORA', 'PCI DSS', 'NIS2', 'RGPD', 'ISO 27001'].map((badge) => (
                <span key={badge} className="text-xs font-mono bg-background-secondary text-text-secondary px-3 py-1.5 rounded border border-border">
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-xl"
          >
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-24 bg-background-secondary/50 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">Pourquoi les équipes sécurité nous choisissent</h2>
          <p className="section-subtitle text-center mx-auto mb-16">
            77% des attaques ciblent les PME-ETI (ANSSI 2024)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">Des tests ciblés pour chaque surface d'attaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`card card-hover group cursor-pointer h-full ${
                  service.highlighted ? 'border-accent-primary/50' : ''
                }`}
              >
                <Link to={service.link} className="block h-full">
                  <div className="w-10 h-10 rounded bg-accent-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="text-accent-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-background-secondary/50 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">Notre approche, étape par étape</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-border" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {methodology.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="text-center relative"
                >
                  <div className="w-20 h-20 rounded-full bg-background-dark border-2 border-border flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent-primary text-white text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <step.icon className="w-8 h-8 text-accent-primary" />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-xs">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0D1117' }}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117] via-transparent to-[#0D1117]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="badge mb-6 inline-block"
              >
                Pentest offensif
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-3xl md:text-4xl font-semibold text-white leading-tight mb-6 tracking-tight"
              >
                Ce que voit un attaquant sur votre infrastructure
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-text-secondary text-base leading-relaxed mb-8"
              >
                Nos experts reproduisent exactement les techniques utilisées par les groupes
                d'attaquants réels — pas des scans automatiques déguisés.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-3 mb-8"
              >
                {[
                  'Reconnaissance OSINT complète',
                  'Exploitation manuelle des failles',
                  "Preuve d'exploitation documentée",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle size={16} className="text-accent-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/services" className="btn-primary">
                  Voir nos services <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <PentestTerminal />
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">Ils nous ont fait confiance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-primary text-accent-primary" />
                  ))}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-primary/20 flex items-center justify-center">
                    <span className="text-accent-primary font-medium text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{testimonial.name}</p>
                    <p className="text-text-light text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="card text-center">
              <p className="font-display text-3xl font-bold text-white mb-2">47%</p>
              <p className="text-text-secondary text-sm">des entreprises attaquées en 2024</p>
              <p className="text-text-light text-xs mt-1">(CESIN)</p>
            </div>
            <div className="card text-center">
              <p className="font-display text-3xl font-bold text-white mb-2">3 semaines</p>
              <p className="text-text-secondary text-sm">délai moyen de détection sans pentest</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </>
  );
}
