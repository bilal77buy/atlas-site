import Link from 'next/link'

const servicesPentest = [
  ['Pentest Boîte Noire', '/pentest-boite-noire'],
  ['Pentest Boîte Grise', '/pentest-boite-grise'],
  ['Pentest Boîte Blanche', '/pentest-boite-blanche'],
  ['Pentest Externe', '/pentest-externe'],
  ['Pentest Interne', '/pentest-interne'],
  ['Pentest as a Service', '/pentest-as-a-service'],
  ['Pentest Entreprise', '/pentest-entreprise'],
  ['Pentest Fintech', '/pentest-fintech'],
  ['Pentest SaaS', '/pentest-saas'],
  ['Pentest E-commerce', '/pentest-ecommerce'],
  ['Cybersécurité Offensive', '/cybersecurite-offensive'],
  ['Audit Pentest', '/audit-pentest'],
]

const conformite = [
  ['Conformité DORA', '/conformite-dora'],
  ['Audit NIS2', '/audit-nis2'],
  ['Conformité NIS2', '/conformite-nis2'],
  ['Audit PCI DSS', '/audit-pci-dss'],
  ['Pentest ISO 27001', '/pentest-iso-27001'],
  ['Conformité RGPD', '/conformite-rgpd'],
]

const blogArticles = [
  ['Blog', '/blog'],
  ['Vulnérabilité IDOR expliquée', '/blog/vulnerabilite-idor-expliquee'],
  ['Pentest Black/Grey/White Box', '/blog/pentest-blackbox-vs-greybox-vs-whitebox'],
  ['BOLA & BFLA — Sécurité API', '/blog/bola-bfla-securite-api'],
  ['SSRF — Server-Side Request Forgery', '/blog/ssrf-server-side-request-forgery'],
  ['OAuth — Vulnérabilités & Pentest', '/blog/oauth-vulnerabilites-pentest'],
  ['Méthodologie Pentest OWASP', '/blog/methodologie-pentest-owasp'],
  ['DORA — Tests TLPT Fintechs', '/blog/dora-tests-tlpt-fintechs'],
  ['NIS2 — Obligations entreprises', '/blog/nis2-obligations-entreprises'],
  ['PCI DSS v4 E-commerce', '/blog/pci-dss-v4-ecommerce'],
  ['Comment lire un rapport pentest', '/blog/rapport-pentest-comment-lire'],
  ['Hall of Fame Google/Microsoft/Meta', '/blog/hall-of-fame-google-microsoft-meta'],
  ['Remédiation après pentest', '/blog/remediation-apres-pentest'],
]

const legal = [
  ['Mentions légales', '/mentions-legales'],
  ['Politique de confidentialité', '/politique-confidentialite'],
  ['Contact', '/contact'],
  ['À Propos', '/a-propos'],
]

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-[#2A2A2A] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Services Pentest */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Services Pentest</h3>
            <ul className="space-y-2">
              {servicesPentest.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#9CA3AF] hover:text-white text-sm transition-colors">
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
              {conformite.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#9CA3AF] hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Blog</h3>
            <ul className="space-y-2">
              {blogArticles.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#9CA3AF] hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Contact */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Informations</h3>
            <ul className="space-y-2">
              {legal.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#9CA3AF] hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="mailto:contact@atlasredconsult.com"
                className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
              >
                contact@atlasredconsult.fr
              </a>
              <div className="mt-2">
                <a href="tel:+330787230292" className="text-[#9CA3AF] hover:text-white text-sm transition-colors">
                  +33 07 87 23 02 92
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] mt-10 pt-6">
          <p className="text-[#9CA3AF] text-xs text-center">
            © 2025 Atlas RedConsult — Cabinet de Pentest Paris 75008 | 60 rue François 1er
          </p>
        </div>
      </div>
    </footer>
  )
}
