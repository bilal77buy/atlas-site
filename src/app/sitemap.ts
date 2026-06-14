import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://atlasredconsult.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/services/pentest-entreprise`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/services/pentest-web`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/services/pentest-api`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/services/pentest-infrastructure-reseau`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/services/pentest-active-directory`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/services/red-team`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/conformite/nis2`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/conformite/dora`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/conformite/pci-dss`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/conformite/iso-27001`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/methodologie`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/ressources`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    {
      url: `${siteUrl}/ressources/quest-ce-quun-pentest`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/ressources/pentest-black-box-grey-box-white-box`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/ressources/nis2-pourquoi-le-pentest-devient-essentiel`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/ressources/dora-preparer-resilience-operationnelle`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/ressources/pci-dss-tests-intrusion-indispensables`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/ressources/pentest-web-failles-frequentes-entreprise`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/ressources/red-team-vs-pentest-quelle-approche`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/ressources/comment-choisir-cabinet-pentest`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  return staticPages
}
