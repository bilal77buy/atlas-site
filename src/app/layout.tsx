import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://atlasredconsult.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Atlas Red Consult | Cabinet de Pentest Offensif B2B',
    template: '%s | Atlas Red Consult',
  },
  description:
    'Atlas RedConsult — Cabinet de pentest offensif à Paris. Tests d\'intrusion boîte noire, boîte grise et boîte blanche. Audit sécurité, Red Team, conformité DORA & NIS2. Devis gratuit sous 48h.',
  keywords: [
    'pentest entreprise',
    'cabinet pentest',
    'test intrusion',
    'audit cybersécurité',
    'pentest offensif',
    'sécurité informatique',
    'red team',
  ],
  authors: [{ name: 'Atlas Red Consult', url: siteUrl }],
  creator: 'Atlas Red Consult',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Atlas Red Consult',
    title: 'Atlas Red Consult | Cabinet de Pentest Offensif B2B',
    description:
      'Atlas RedConsult — Cabinet de pentest offensif à Paris. Tests d\'intrusion boîte noire, boîte grise et boîte blanche. Audit sécurité, Red Team, conformité DORA & NIS2.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Atlas Red Consult - Cabinet de Pentest Offensif',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Red Consult | Cabinet de Pentest Offensif B2B',
    description: 'Cabinet de pentest offensif B2B. Tests d\'intrusion, audit cybersécurité, red team.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Atlas Red Consult',
    description: 'Cabinet de pentest offensif B2B spécialisé en tests d\'intrusion et audit cybersécurité',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    email: 'contact@atlasredconsult.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    areaServed: 'FR',
    serviceType: ['Test d\'intrusion', 'Pentest', 'Audit cybersécurité', 'Red Team'],
    knowsAbout: ['Cybersécurité', 'Pentest offensif', 'DORA', 'NIS2', 'PCI DSS', 'ISO 27001'],
  }

  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="google-site-verification" content="REPLACE_WITH_GSC_CODE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* GTM - replace with real ID */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
            }}
          />
        )}
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased">
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
