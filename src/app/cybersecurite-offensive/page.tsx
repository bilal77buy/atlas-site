import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Cybersécurité Offensive — Services Attaque et Défense | Atlas RedConsult",
  description: "Cybersécurité offensive : tests d'intrusion, red team, audit de sécurité. Approche attaquant pour renforcer vos défenses. Cabinet Paris. Devis 48h.",
  alternates: { canonical: 'https://atlasredconsult.fr/cybersecurite-offensive' },
}

const schema = { '@context': 'https://schema.org', '@graph': [{ '@type': 'Service', name: 'Cybersécurité Offensive', provider: { '@type': 'ProfessionalService', name: 'Atlas RedConsult', url: 'https://atlasredconsult.fr' }, serviceType: 'Offensive Cybersecurity', areaServed: 'FR' }, { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://atlasredconsult.fr' }, { '@type': 'ListItem', position: 2, name: 'Cybersécurité Offensive', item: 'https://atlasredconsult.fr/cybersecurite-offensive' }] }] }

export default function CybersecuriteOffensivePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="bg-[#0A0A0A] text-white min-h-screen">
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
          <nav className="text-sm text-gray-400 mb-6"><Link href="/" className="hover:text-red-500">Accueil</Link><span className="mx-2">/</span><span className="text-white">Cybersécurité Offensive</span></nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Cybersécurité Offensive — <span className="text-red-600">Approche Attaquant pour Renforcer vos Défenses</span></h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">La cybersécurité offensive consiste à adopter la perspective et les techniques des attaquants pour identifier les vulnérabilités avant qu&apos;ils ne le fassent. C&apos;est le cœur de métier d&apos;Atlas RedConsult.</p>
          <Link href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors">Demander un devis gratuit →</Link>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Qu&apos;est-ce que la cybersécurité offensive ?</h2>
          <p className="text-gray-300 mb-4">La cybersécurité offensive (ou <em>offensive security</em>) englobe toutes les techniques et pratiques qui simulent des cyberattaques réelles pour évaluer la résistance d&apos;un système. Par opposition à la sécurité défensive (firewalls, SIEM, SOC), la sécurité offensive adopte la perspective de l&apos;attaquant.</p>
          <p className="text-gray-300">Cette approche repose sur un principe simple : pour se défendre efficacement, il faut comprendre comment on attaque. Les organisations qui investissent dans la sécurité offensive savent précisément comment elles peuvent être compromises et peuvent prioriser leurs investissements défensifs en conséquence.</p>
        </section>

        <section className="bg-[#1A1A1A] py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-red-500">Différence entre sécurité offensive et défensive</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0A0A0A] rounded-xl p-6">
                <h3 className="text-gray-400 font-semibold mb-4">Sécurité Défensive (Blue Team)</h3>
                <ul className="space-y-2 text-gray-400 text-sm"><li>• Firewall, WAF, IDS/IPS</li><li>• SIEM et corrélation de logs</li><li>• EDR et antivirus</li><li>• Gestion des patches</li><li>• SOC et monitoring 24/7</li><li>• Réponse aux incidents</li></ul>
              </div>
              <div className="bg-[#0A0A0A] border border-red-600/30 rounded-xl p-6">
                <h3 className="text-red-500 font-semibold mb-4">Sécurité Offensive (Red Team)</h3>
                <ul className="space-y-2 text-gray-300 text-sm"><li>• Tests d&apos;intrusion (pentest)</li><li>• Red Team (simulation APT)</li><li>• Bug bounty et research</li><li>• Audit de code source</li><li>• Ingénierie sociale et phishing</li><li>• OSINT et reconnaissance</li></ul>
              </div>
            </div>
            <p className="mt-6 text-gray-400">Les deux approches sont complémentaires et nécessaires. La sécurité offensive permet de valider l&apos;efficacité des contrôles défensifs et d&apos;identifier les angles morts.</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-8 text-red-500">Nos services de cybersécurité offensive</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[{ title: 'Pentest Web & API', href: '/pentest-web', desc: 'Tests OWASP Top 10, logique métier, authentification et autorisation sur vos applications web et APIs.' }, { title: 'Pentest Infrastructure', href: '/pentest-externe', desc: 'Périmètre internet, réseau interne, Active Directory, cloud AWS/GCP/Azure.' }, { title: 'Red Team', href: '/red-team-cybersecurite', desc: 'Simulation d\'attaque APT complète, MITRE ATT&CK, ingénierie sociale, mouvement latéral.' }, { title: 'Audit de code source', href: '/pentest-boite-blanche', desc: 'Revue manuelle + SAST, vulnérabilités de logique métier invisibles de l\'extérieur.' }, { title: 'Pentest Mobile', href: '/pentest-mobile-android', desc: 'Applications Android : analyse statique/dynamique, OWASP Mobile Top 10.' }, { title: 'Audit de conformité', href: '/audit-securite-informatique', desc: 'Tests d\'intrusion pour DORA, NIS2, PCI-DSS, ISO 27001, RGPD.' }].map(item => (
              <Link key={item.title} href={item.href} className="bg-[#1A1A1A] hover:border-red-600/50 border border-gray-800 rounded-xl p-6 transition-colors block">
                <h3 className="text-red-500 font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-[#1A1A1A] py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Méthodologies offensives : PTES, OWASP, MITRE</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[{ name: 'PTES', full: 'Penetration Testing Execution Standard', desc: 'Framework complet pour les pentests : de la reconnaissance au reporting. Standard de facto de l\'industrie.' }, { name: 'OWASP', full: 'Testing Guide v4.2', desc: 'Méthodologie de référence pour les tests de sécurité des applications web et APIs. OWASP Top 10 comme classification.' }, { name: 'MITRE ATT&CK', full: 'Adversarial Tactics, Techniques & Common Knowledge', desc: 'Framework de threat intelligence décrivant les TTPs (Tactics, Techniques, Procedures) des groupes APT réels. Base des opérations Red Team.' }].map(item => (
                <div key={item.name} className="bg-[#0A0A0A] rounded-xl p-6">
                  <h3 className="text-red-500 text-xl font-bold mb-1">{item.name}</h3>
                  <p className="text-gray-500 text-xs mb-3">{item.full}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Pour quels profils d&apos;entreprises ?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Startups SaaS B2B cherchant à rassurer leurs clients grands comptes sur leur sécurité', 'Fintechs soumises à DORA nécessitant des tests de résilience réglementaires', 'E-commerces traitant des paiements et soumis à PCI-DSS', 'ETI et PME cibles de ransomware voulant évaluer leur résistance réelle', 'Grandes entreprises avec des équipes SOC voulant tester leurs capacités de détection', 'Éditeurs de logiciels B2B devant fournir des attestations de sécurité à leurs clients'].map(item => (
              <div key={item} className="flex items-start gap-3 bg-[#1A1A1A] rounded-lg p-4"><span className="text-red-600 shrink-0">→</span><p className="text-gray-300 text-sm">{item}</p></div>
            ))}
          </div>
        </section>

        {/* SPONDEI FORM PLACEHOLDER */}
        {/* <div id="spondei-form" data-form-id="REPLACE_ID">Chargement...</div> */}
        {/* <script src="https://app.spondei.com/embed.js" async></script> */}
        <section className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Adoptez l&apos;approche offensive pour mieux vous défendre</h2>
          <p className="text-gray-300 mb-8">Réponse sous 48h — Devis personnalisé — Cabinet Paris 75008</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors">Demander un devis gratuit</Link>
            <Link href="/audit-pentest" className="border border-gray-600 hover:border-red-600 text-white px-8 py-4 rounded-lg transition-colors">Voir l&apos;audit pentest</Link>
          </div>
        </section>
      </main>
    </>
  )
}
