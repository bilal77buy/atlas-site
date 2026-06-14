'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Shield, Menu, X, ChevronDown } from 'lucide-react'

const services = [
  { href: '/services/pentest-entreprise', label: 'Pentest entreprise' },
  { href: '/services/pentest-web', label: 'Pentest web' },
  { href: '/services/pentest-api', label: 'Pentest API' },
  { href: '/services/pentest-infrastructure-reseau', label: 'Pentest infrastructure' },
  { href: '/services/pentest-active-directory', label: 'Pentest Active Directory' },
  { href: '/services/red-team', label: 'Red Team' },
]

const conformite = [
  { href: '/conformite/nis2', label: 'NIS2' },
  { href: '/conformite/dora', label: 'DORA' },
  { href: '/conformite/pci-dss', label: 'PCI DSS' },
  { href: '/conformite/iso-27001', label: 'ISO 27001' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [conformiteOpen, setConformiteOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-md border-b border-border shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-white">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg">Atlas Red Consult</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Services dropdown */}
            <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-sm text-muted hover:text-white transition-colors py-2">
                Services <ChevronDown className="w-3 h-3" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-60 bg-dark-card border border-border rounded-xl shadow-xl py-2 z-50">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-muted hover:text-white hover:bg-dark-hover transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Conformité dropdown */}
            <div className="relative group" onMouseEnter={() => setConformiteOpen(true)} onMouseLeave={() => setConformiteOpen(false)}>
              <button className="flex items-center gap-1 text-sm text-muted hover:text-white transition-colors py-2">
                Conformité <ChevronDown className="w-3 h-3" />
              </button>
              {conformiteOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-dark-card border border-border rounded-xl shadow-xl py-2 z-50">
                  {conformite.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2 text-sm text-muted hover:text-white hover:bg-dark-hover transition-colors"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/methodologie" className="text-sm text-muted hover:text-white transition-colors">Méthodologie</Link>
            <Link href="/ressources" className="text-sm text-muted hover:text-white transition-colors">Ressources</Link>
            <Link href="/contact" className="btn-primary text-sm px-4 py-2">Demander un audit</Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-muted hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-card border-t border-border">
          <div className="section-container py-4 space-y-1">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider px-3 py-2">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block px-3 py-2 text-sm text-muted hover:text-white rounded-lg hover:bg-dark-hover transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {s.label}
              </Link>
            ))}
            <p className="text-xs font-semibold text-muted uppercase tracking-wider px-3 py-2 mt-3">Conformité</p>
            {conformite.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block px-3 py-2 text-sm text-muted hover:text-white rounded-lg hover:bg-dark-hover transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {c.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border">
              <Link href="/methodologie" className="block px-3 py-2 text-sm text-muted hover:text-white rounded-lg hover:bg-dark-hover transition-colors" onClick={() => setMobileOpen(false)}>Méthodologie</Link>
              <Link href="/ressources" className="block px-3 py-2 text-sm text-muted hover:text-white rounded-lg hover:bg-dark-hover transition-colors" onClick={() => setMobileOpen(false)}>Ressources</Link>
              <div className="px-3 pt-2">
                <Link href="/contact" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>Demander un audit</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
