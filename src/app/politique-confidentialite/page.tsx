import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Atlas RedConsult",
  description: "Politique de confidentialité d'Atlas RedConsult. Comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.",
  alternates: { canonical: 'https://atlasredconsult.com/politique-confidentialite' },
  robots: { index: false },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-red-500">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Politique de confidentialité</span>
        </nav>

        <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité</h1>
        <p className="text-gray-400 mb-12">Dernière mise à jour : juin 2024 — Conforme au Règlement Général sur la Protection des Données (RGPD)</p>

        <div className="space-y-10 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4">1. Responsable du traitement</h2>
            <div className="bg-[#1A1A1A] rounded-xl p-6 space-y-2">
              <p><strong className="text-white">Atlas RedConsult</strong></p>
              <p>60 rue François 1er, 75008 Paris, France</p>
              <p>Email : contact.atlascyber@gmail.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4">2. Données collectées</h2>
            <p className="mb-4">Nous collectons uniquement les données nécessaires à nos services :</p>
            <div className="space-y-4">
              {[
                { title: 'Formulaire de contact', data: ['Nom et prénom', 'Adresse email professionnelle', 'Nom de l\'entreprise', 'Message et nature de la demande'], base: 'Consentement (Art. 6.1.a RGPD)' },
                { title: 'Données analytiques', data: ['Pages visitées (anonymisées)', 'Durée de session', 'Source de trafic (referral)', 'Type d\'appareil et navigateur'], base: 'Intérêt légitime / Consentement cookie (Art. 6.1.f RGPD)' },
                { title: 'Cookies techniques', data: ['Session et préférences utilisateur', 'Protection CSRF des formulaires'], base: 'Nécessité contractuelle (Art. 6.1.b RGPD)' },
              ].map(item => (
                <div key={item.title} className="bg-[#1A1A1A] rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <ul className="space-y-1 mb-3">{item.data.map(d => <li key={d} className="text-gray-400 text-sm">• {d}</li>)}</ul>
                  <p className="text-gray-500 text-xs"><strong>Base légale :</strong> {item.base}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4">3. Finalités du traitement</h2>
            <ul className="space-y-2">
              {['Répondre à vos demandes de devis et questions commerciales', 'Envoyer des informations relatives à nos services si vous y avez consenti', 'Améliorer l\'expérience utilisateur du site (analytics)', 'Respecter nos obligations légales et réglementaires'].map(item => (
                <li key={item} className="flex items-start gap-3"><span className="text-red-600 shrink-0 mt-1">→</span><span>{item}</span></li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4">4. Durée de conservation</h2>
            <div className="space-y-2">
              {[
                ['Données de contact (prospects)', '3 ans à partir du dernier contact'],
                ['Données de contact (clients)', '5 ans à partir de la fin de la relation contractuelle'],
                ['Données analytiques', '13 mois maximum (standard CNIL)'],
                ['Cookies', 'Maximum 13 mois'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-center bg-[#1A1A1A] rounded-lg px-4 py-3">
                  <span className="text-gray-300 text-sm">{label}</span>
                  <span className="text-gray-400 text-sm">{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4">5. Destinataires des données</h2>
            <p className="mb-4">Vos données peuvent être partagées avec :</p>
            <ul className="space-y-2">
              {['Nos prestataires techniques (hébergement : Vercel, email : Google)', 'Google Analytics pour les statistiques de visite (données anonymisées)', 'Les autorités compétentes si requis par la loi'].map(item => (
                <li key={item} className="flex items-start gap-3"><span className="text-red-600 shrink-0 mt-1">→</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="mt-4">Nous ne vendons jamais vos données personnelles à des tiers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4">6. Vos droits RGPD</h2>
            <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                ['Droit d\'accès', 'Obtenir une copie de vos données'],
                ['Droit de rectification', 'Corriger des données inexactes'],
                ['Droit à l\'effacement', 'Demander la suppression de vos données'],
                ['Droit d\'opposition', 'Vous opposer à un traitement'],
                ['Droit à la portabilité', 'Recevoir vos données dans un format lisible'],
                ['Droit à la limitation', 'Limiter le traitement de vos données'],
              ].map(([right, desc]) => (
                <div key={right} className="bg-[#1A1A1A] rounded-lg p-3">
                  <strong className="text-red-500 text-sm">{right}</strong>
                  <p className="text-gray-400 text-xs mt-1">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">Pour exercer vos droits, contactez-nous à <strong>contact.atlascyber@gmail.com</strong>. Vous pouvez également introduire une réclamation auprès de la <strong>CNIL</strong> (cnil.fr).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4">7. Sécurité des données</h2>
            <p>Atlas RedConsult met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, divulgation ou altération. En tant que cabinet de cybersécurité, la protection des données est au cœur de notre métier.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-4">8. Cookies</h2>
            <p className="mb-4">Ce site utilise des cookies. Vous pouvez configurer votre navigateur pour refuser tous les cookies. Notez que certaines fonctionnalités du site peuvent être affectées si vous désactivez les cookies.</p>
            <p>Les cookies analytiques (Google Analytics) sont soumis à votre consentement préalable et peuvent être refusés sans impact sur l&apos;accès au site.</p>
          </section>

          <div className="bg-[#1A1A1A] border border-gray-700 rounded-xl p-6">
            <p className="text-gray-400 text-sm">Pour toute question relative à cette politique ou pour exercer vos droits :</p>
            <p className="text-white mt-2">contact.atlascyber@gmail.com</p>
            <p className="text-gray-400 text-sm mt-2">Atlas RedConsult — 60 rue François 1er, 75008 Paris</p>
          </div>

          <p className="text-gray-500 text-sm">Cette politique peut être mise à jour périodiquement. Nous vous invitons à la consulter régulièrement.</p>
        </div>
      </div>
    </main>
  )
}
