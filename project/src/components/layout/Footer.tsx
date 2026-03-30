import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';


const navigation = [
  { name: 'Services', path: '/services' },
  { name: 'Méthodologie', path: '/methodology' },
  { name: 'À propos', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const services = [
  { name: 'Pentest Web', path: '/services' },
  { name: 'Pentest API', path: '/services' },
  { name: 'Pentest Mobile', path: '/services' },
  { name: 'Simulation Phishing', path: '/services' },
  { name: 'OSINT', path: '/services' },
];

export default function Footer() {
  return (
    <footer className="bg-background-dark relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-accent-primary/50" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-xl font-bold text-white tracking-[0.05em]">ATLAS <span className="text-accent-primary">RED</span> CONSULT</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Cabinet de cybersécurité spécialisé en pentest offensif.
            </p>
            <div className="flex gap-2">
              {['DORA', 'PCI DSS', 'NIS2'].map((badge) => (
                <span key={badge} className="text-xs font-mono bg-background-secondary text-text-secondary px-2 py-1 rounded border border-border">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-text-secondary hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-text-secondary hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@atlasredconsult.fr" className="text-text-secondary hover:text-white text-sm transition-colors inline-flex items-center gap-2">
                  <Mail size={14} />
                  contact@atlasredconsult.fr
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white text-sm transition-colors inline-flex items-center gap-2">
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-light text-xs">
            © 2025 Atlas Red Consult. Tous droits réservés.
          </p>
          <Link to="/legal" className="text-text-light hover:text-white text-xs transition-colors">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
