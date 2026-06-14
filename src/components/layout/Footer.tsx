import Link from 'next/link'
import { Shield, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-border mt-20">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-white mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              Atlas Red Consult
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Cabinet de pentest offensif B2B. Nous testons vos défenses avant que les attaquants ne le fassent.
            </p>
            <div className="space-y-2">
              <a href="mailto:contact@atlasredconsult.fr" className="flex items-center gap-2 text-muted hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                contact@atlasredconsult.fr
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                ['Pentest entreprise', '/services/pentest-entreprise'],
                ['Pentest web', '/services/pentest-web'],
                ['Pentest API', '/services/pentest-api'],
                ['Pentest infrastructure', '/services/pentest-infrastructure-reseau'],
                ['Pentest Active Directory', '/services/pentest-active-directory'],
                ['Red Team', '/services/red-team'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-muted hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conformité */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Conformité</h3>
            <ul className="space-y-2">
              {[
                ['Audit NIS2', '/conformite/nis2'],
                ['Audit DORA', '/conformite/dora'],
                ['Audit PCI DSS', '/conformite/pci-dss'],
                ['Audit ISO 27001', '/conformite/iso-27001'],
                ['Méthodologie', '/methodologie'],
                ['Ressources', '/ressources'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-muted hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Engagements</h3>
            <ul className="space-y-2 text-muted text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                Réponse sous 24h ouvrées
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                NDA disponible sur demande
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                Rapport exécutif + technique
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                Debriefing post-mission inclus
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                Stricte confidentialité
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/contact" className="btn-primary text-sm px-4 py-2">
                Demander un audit
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Atlas Red Consult. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
