'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const services = [
  { href: '/audit-securite-informatique', label: 'Audit Sécurité' },
  { href: '/pentest-web', label: 'Pentest Web' },
  { href: '/pentest-api', label: 'Pentest API' },
  { href: '/pentest-mobile-android', label: 'Pentest Mobile' },
  { href: '/red-team-cybersecurite', label: 'Red Team' },
  { href: '/pentest-boite-noire', label: 'Pentest Boîte Noire' },
  { href: '/pentest-boite-grise', label: 'Pentest Boîte Grise' },
  { href: '/pentest-boite-blanche', label: 'Pentest Boîte Blanche' },
  { href: '/pentest-externe', label: 'Pentest Externe' },
  { href: '/pentest-interne', label: 'Pentest Interne' },
  { href: '/pentest-as-a-service', label: 'Pentest as a Service' },
  { href: '/pentest-entreprise', label: 'Pentest Entreprise' },
  { href: '/pentest-fintech', label: 'Pentest Fintech' },
  { href: '/pentest-saas', label: 'Pentest SaaS' },
  { href: '/pentest-ecommerce', label: 'Pentest E-commerce' },
  { href: '/cybersecurite-offensive', label: 'Cybersécurité Offensive' },
  { href: '/audit-pentest', label: 'Audit & Pentest' },
]

const conformite = [
  { href: '/conformite-dora', label: 'Conformité DORA' },
  { href: '/audit-nis2', label: 'Audit NIS2' },
  { href: '/conformite-nis2', label: 'Conformité NIS2' },
  { href: '/audit-pci-dss', label: 'Audit PCI-DSS' },
  { href: '/pentest-iso-27001', label: 'Pentest ISO 27001' },
  { href: '/conformite-rgpd', label: 'Conformité RGPD' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [conformiteOpen, setConformiteOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-lg text-[#DC2626]">Atlas RedConsult</Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-sm text-[#9CA3AF] hover:text-white transition-colors">
                Services <ChevronDown className="w-3 h-3" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg shadow-xl py-2 z-50">
                  {services.map(link => (
                    <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-[#9CA3AF] hover:text-white hover:bg-[#2A2A2A] transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Conformité dropdown */}
            <div className="relative" onMouseEnter={() => setConformiteOpen(true)} onMouseLeave={() => setConformiteOpen(false)}>
              <button className="flex items-center gap-1 text-sm text-[#9CA3AF] hover:text-white transition-colors">
                Conformité <ChevronDown className="w-3 h-3" />
              </button>
              {conformiteOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg shadow-xl py-2 z-50">
                  {conformite.map(link => (
                    <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-[#9CA3AF] hover:text-white hover:bg-[#2A2A2A] transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">Blog</Link>
            <Link href="/a-propos" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">À Propos</Link>
            <Link href="/contact" className="inline-flex items-center px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm font-semibold rounded-lg transition-colors">
              Devis Gratuit
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden text-[#9CA3AF] hover:text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1A1A1A] border-t border-[#2A2A2A] max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">Services</p>
            {services.map(link => (
              <Link key={link.href} href={link.href} className="block px-3 py-2 text-sm text-[#9CA3AF] hover:text-white rounded-lg hover:bg-[#0A0A0A] transition-colors" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2 mt-3">Conformité</p>
            {conformite.map(link => (
              <Link key={link.href} href={link.href} className="block px-3 py-2 text-sm text-[#9CA3AF] hover:text-white rounded-lg hover:bg-[#0A0A0A] transition-colors" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#2A2A2A] space-y-1">
              <Link href="/blog" className="block px-3 py-2 text-sm text-[#9CA3AF] hover:text-white rounded-lg hover:bg-[#0A0A0A] transition-colors" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link href="/a-propos" className="block px-3 py-2 text-sm text-[#9CA3AF] hover:text-white rounded-lg hover:bg-[#0A0A0A] transition-colors" onClick={() => setMobileOpen(false)}>À Propos</Link>
              <Link href="/contact" className="block w-full text-center px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm font-semibold rounded-lg transition-colors mt-2" onClick={() => setMobileOpen(false)}>
                Devis Gratuit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
