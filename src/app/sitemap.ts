import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://atlasredconsult.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    // BLOC 1 — Main pages
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/audit-securite-informatique`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${siteUrl}/pentest-web`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/pentest-api`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/pentest-mobile-android`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/red-team-cybersecurite`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/a-propos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // BLOC 2 — Services Pentest
    { url: `${siteUrl}/pentest-boite-noire`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/pentest-boite-grise`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/pentest-boite-blanche`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/pentest-externe`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/pentest-interne`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/pentest-as-a-service`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/pentest-entreprise`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/pentest-fintech`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/pentest-saas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/pentest-ecommerce`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/cybersecurite-offensive`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/audit-pentest`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // BLOC 3 — Conformité
    { url: `${siteUrl}/conformite-dora`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/audit-nis2`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/conformite-nis2`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/audit-pci-dss`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/pentest-iso-27001`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/conformite-rgpd`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // BLOC 4 — Blog
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${siteUrl}/blog/vulnerabilite-idor-expliquee`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/blog/pentest-blackbox-vs-greybox-vs-whitebox`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/blog/bola-bfla-securite-api`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/blog/ssrf-server-side-request-forgery`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/blog/oauth-vulnerabilites-pentest`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/blog/methodologie-pentest-owasp`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/blog/dora-tests-tlpt-fintechs`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/blog/nis2-obligations-entreprises`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/blog/pci-dss-v4-ecommerce`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/blog/rapport-pentest-comment-lire`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/blog/hall-of-fame-google-microsoft-meta`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/blog/remediation-apres-pentest`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Legal
    { url: `${siteUrl}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/politique-confidentialite`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
