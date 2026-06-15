'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/audit-securite-informatique', label: 'Audit Sécurité' },
  { href: '/pentest-web', label: 'Pentest Web' },
  { href: '/pentest-api', label: 'Pentest API' },
  { href: '/pentest-mobile-android', label: 'Pentest Mobile' },
  { href: '/red-team-cybersecurite', label: 'Red Team' },
  { href: '/blog', label: 'Blog' },
  { href: '/a-propos', label: 'À Propos' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A] shadow-lg'
          : 'bg-[#0A0A0A] border-b border-[#2A2A2A]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-display font-bold text-lg">
            <span className="text-[#DC2626]">Atlas RedConsult</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm font-semibold rounded-lg transition-colors duration-200"
            >
              Devis Gratuit
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-[#9CA3AF] hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1A1A1A] border-t border-[#2A2A2A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm text-[#9CA3AF] hover:text-white rounded-lg hover:bg-[#0A0A0A] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#2A2A2A]">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                Devis Gratuit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
