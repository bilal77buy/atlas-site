import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Users, BarChart3, BookOpen, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function Phishing() {
  const features = [
    "Campagnes sur mesure",
    "Faux portails Microsoft 365",
    "Usurpation d'identité interne",
    "Mesure taux de clic",
    "Vishing & Smishing",
    "Rapport comportemental"
  ];

  const testAreas = [
    {
      icon: Mail,
      title: "Campagnes sur mesure",
      description: "Pas de templates génériques. Nous reproduisons les techniques réelles des groupes d'attaquants : usurpation d'un expéditeur interne, faux portails Microsoft 365 ou Google Workspace, prétextes adaptés a votre secteur et votre actualité."
    },
    {
      icon: BarChart3,
      title: "Mesure comportementale precise",
      description: "Taux d'ouverture, taux de clic, taux de saisie de credentials et délai de signalement. Ces quatre indicateurs donnent une image chiffrable et precise de votre niveau de résilience humaine."
    },
    {
      icon: Users,
      title: "Multi-vecteurs",
      description: "Sur demande, extension au vishing — appels téléphoniques frauduleux — et au smishing — SMS malveillants — pour couvrir l'ensemble des vecteurs d'ingénierie sociale."
    },
    {
      icon: BookOpen,
      title: "Formation en temps réel",
      description: "Page de sensibilisation immediate pour les employés ayant cliqué. L'exercice se transforme en formation sans attendre. Vos employés ne sont pas sanctionnés — l'objectif est de mesurer et de former."
    }
  ];

  const deliverables = [
    {
      title: "Rapport comportemental complet",
      description: "Taux de succès par département, par niveau hiérarchique, par device utilisé. Vous identifiez précisément quelles équipes sont les plus exposées."
    },
    {
      title: "Rapport Exécutif",
      description: "Niveau de risque humain global comparable aux benchmarks sectoriels. Lisible par votre direction ou vos investisseurs."
    },
    {
      title: "Recommandations ciblées",
      description: "Pas une liste générique de bonnes pratiques. Exactement quelles équipes former en priorité et sur quels vecteurs spécifiques."
    },
    {
      title: "Retest inclus a 90 jours",
      description: "Une fois vos actions de sensibilisation menées, nous remesurons votre exposition pour quantifier la progression. Rapport livré 48h après fin de campagne."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D1117]">
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-[0.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/80 via-[#0D1117]/95 to-[#0D1117]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#E63946]/5 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#E63946] hover:text-[#E63946]/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour aux services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Simulation Phishing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
              La majorité des cyberattaques commencent par un email. Pas par une faille technique sophistiquée — par un employé qui clique. Le phishing reste le vecteur d'entrée numéro un des ransomwares, des fraudes au virement et des compromissions de comptes.
            </p>
            <p className="text-lg text-[#8B949E] max-w-3xl leading-relaxed">
              Une simulation de phishing, c'est une campagne d'attaque réaliste menée contre vos propres équipes, a leur insu, pour mesurer objectivement votre exposition humaine avant qu'un vrai attaquant ne le fasse.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/90 bg-[#161B22] backdrop-blur-sm px-4 py-3 rounded-lg border border-white/[0.06]"
              >
                <CheckCircle className="w-5 h-5 text-[#E63946] flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
            Ce qu'on teste concrètement
          </h2>
          <p className="text-[#8B949E] text-center mb-12 max-w-3xl mx-auto">
            La campagne est entièrement pilotée par nous. Vous nous fournissez une liste d'adresses email cibles et des informations de contexte. Nous gérons la conception des prétextes, l'infrastructure d'envoi et le tracking.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {testAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#161B22] backdrop-blur-sm border border-white/[0.06] rounded-xl p-6 hover:border-[#E63946]/50 transition-all group"
                >
                  <Icon className="w-12 h-12 text-[#E63946] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{area.title}</h3>
                  <p className="text-[#8B949E] leading-relaxed">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-4 bg-[#161B22]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Ce que vous recevez
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#161B22] backdrop-blur-sm border border-white/[0.06] rounded-xl p-6 hover:border-[#E63946]/50 transition-all"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#E63946]">{item.title}</h3>
                <p className="text-[#8B949E] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Pour qui
          </h2>

          <div className="bg-[#161B22] backdrop-blur-sm border border-white/[0.06] rounded-xl p-8 mb-8">
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-1" />
                <span>Toute organisation manipulant des données sensibles ou des flux financiers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-1" />
                <span>Entreprises soumises a NIS2 ou DORA devant démontrer un niveau de sensibilisation formalisé</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-1" />
                <span>DSI souhaitant justifier un budget sensibilisation avec des chiffres concrets</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-1" />
                <span>Directions générales voulant savoir honnêtement ou en sont leurs équipes</span>
              </li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#E63946]/10 backdrop-blur-sm border border-[#E63946]/30 rounded-xl p-8"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-[#E63946] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#E63946]">Le saviez-vous ?</h3>
                <p className="text-white/90 leading-relaxed">
                  77% des intrusions réussies en entreprise commencent par un email de phishing. Source : ANSSI 2024.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#161B22] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Prêt a tester vos équipes ?</h2>
            <p className="text-[#8B949E] mb-8 max-w-2xl mx-auto leading-relaxed">
              La taille de l'équipe cible et le niveau de sophistication souhaite déterminent le format de la mission. Nous proposons un appel de cadrage gratuit de 30 minutes pour construire le scénario le plus pertinent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#E63946] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#E63946]/90 transition-all shadow-lg shadow-[#E63946]/25 hover:shadow-[#E63946]/40 hover:scale-105"
              >
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-[#E63946] text-[#E63946] px-8 py-4 rounded-lg font-semibold hover:bg-[#E63946]/10 transition-all"
              >
                Appel de cadrage gratuit
              </Link>
            </div>
            <p className="text-[#8B949E] text-sm mt-6">
              Réponse sous 24h · Sans engagement · Confidentiel
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
