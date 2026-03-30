import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Link as LinkIcon, Smartphone, Mail, Search, ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const services = [
  {
    id: 'pentest-web',
    icon: Globe, title: 'Pentest Web', badge: 'OWASP Top 10',
    description: "Nous simulons une attaque réelle sur votre site ou application web. Notre expert identifie les failles que les scanners automatiques ne voient pas.",
    targets: ['SaaS B2B', 'E-commerces', 'Applications métier', 'Plateformes avec données sensibles', 'Startups en phase de lancement', 'Entreprises soumises a conformite'],
    tests: ['OWASP Top 10', 'Logique métier', 'Gestion des sessions', 'Upload de fichiers', 'Controle d\'acces'],
    deliverables: 'Rapport exécutif + Rapport technique + Retest',
    regulations: ['NIS2', 'DORA', 'PCI DSS', 'RGPD'],
  },
  {
    id: 'pentest-api',
    icon: LinkIcon, title: 'Pentest API', badge: 'REST / GraphQL',
    description: "Vos APIs sont la colonne vertébrale de votre application. Nous testons chaque endpoint — authentification, autorisation, injection.",
    targets: ['Plateformes SaaS', 'Fintechs', 'Marketplaces', 'Applications mobiles connectées a une API', 'Entreprises avec architecture microservices', 'Produits exposant des APIs publiques'],
    tests: ['BOLA/IDOR', 'BFLA', 'Mass Assignment', 'Injection', 'Rate limiting'],
    deliverables: 'Rapport exécutif + Rapport technique + Retest',
    regulations: ['DORA', 'PCI DSS'],
  },
  {
    id: 'pentest-mobile',
    icon: Smartphone, title: 'Pentest Mobile Android', badge: 'APK / Frida',
    description: "Nous décompilons votre APK, analysons le stockage local, interceptons les communications réseau.",
    targets: ['Fintechs', 'Healthtechs', 'Apps B2C', 'Applications manipulant des données sensibles', 'Startups mobile-first', 'Entreprises avec apps connectées a backend/API critique'],
    tests: ['Reverse engineering', 'Stockage non chiffre', 'Certificate pinning', 'Interception MITM'],
    deliverables: 'Rapport exécutif + Rapport technique + Retest',
    regulations: ['DORA', 'RGPD'],
  },
  {
    id: 'phishing',
    icon: Mail, title: 'Simulation de Phishing', badge: 'Sensibilisation',
    description: "Emails de phishing réalistes envoyes a vos collaborateurs. Rapport comportemental détaillé.",
    targets: ['Toute entreprise', 'Soumises a NIS2'],
    tests: ['Taux de clic', 'Taux de saisie', 'Temps de signalement'],
    deliverables: 'Rapport comportemental + formation + Retest',
    regulations: ['NIS2', 'DORA'],
  },
  {
    id: 'osint',
    icon: Search, title: 'OSINT', badge: 'Reconnaissance',
    description: "Cartographie de tout ce qu'un attaquant peut découvrir sur votre entreprise sans toucher a vos systemes.",
    targets: ['Entreprises soucieuses de leur exposition'],
    tests: ['Sous-domaines', 'Fuites de credentials', 'Métadonnées', 'Technologies exposées'],
    deliverables: 'Cartographie complète + recommandations + Retest',
    regulations: ['RGPD'],
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/90 via-background-dark/95 to-background-dark" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">Nos services de cybersécurité offensive</h1>
            <p className="text-lg text-white/70">Chaque test est réalisé manuellement par un expert. Pas de scan automatique, pas de rapport générique.</p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div id={service.id} className="border-t border-white/10 pt-16 scroll-mt-24">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-6 h-6 text-accent-primary" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-serif text-white">{service.title}</h2>
                          <span className="badge text-xs mt-2 inline-block">{service.badge}</span>
                        </div>
                      </div>
                      <p className="text-white/70 mt-6">{service.description}</p>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">A qui c'est destiné</h3>
                        <ul className="space-y-2">
                          {service.targets.map((t) => (
                            <li key={t} className="flex items-center gap-2 text-white/60 text-sm">
                              <CheckCircle className="w-4 h-4 text-accent-primary flex-shrink-0" />{t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Ce que nous testons</h3>
                        <ul className="space-y-2">
                          {service.tests.map((t) => (
                            <li key={t} className="flex items-center gap-2 text-white/60 text-sm">
                              <CheckCircle className="w-4 h-4 text-accent-primary flex-shrink-0" />{t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Ce que vous recevez</h3>
                        <p className="text-white/60 text-sm">{service.deliverables}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Cadre réglementaire</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.regulations.map((r) => (<span key={r} className="badge text-xs">{r}</span>))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    {(service.id === 'pentest-web' || service.id === 'pentest-api' || service.id === 'pentest-mobile' || service.id === 'osint' || service.id === 'phishing') && (
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium hover:gap-3 transition-all"
                      >
                        En savoir plus <ArrowRight size={18} />
                      </Link>
                    )}
                    <Link to="/contact" className="inline-flex items-center gap-2 text-accent-primary font-medium hover:gap-3 transition-all">
                      Demander un devis <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
