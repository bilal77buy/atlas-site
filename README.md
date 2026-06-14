# Atlas Red Consult — Site Web

Cabinet de pentest offensif B2B. Site Next.js 14 optimisé SEO, performance et conversion.

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **CSS** : Tailwind CSS 3
- **Fonts** : Inter + Space Grotesk (next/font/google)
- **Déploiement** : Vercel

## Installation

```bash
npm install
npm run dev   # http://localhost:3000
```

## Variables d'environnement

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | URL de production |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager |
| `RESEND_API_KEY` | Clé Resend pour emails |
| `CONTACT_EMAIL` | Email de réception |

## Déploiement Vercel

```bash
npm install -g vercel
vercel --prod
```

Ou connecter le repo GitHub dans l'interface Vercel (détection Next.js automatique).

## Checklist post-déploiement

- [ ] Vérifier `/sitemap.xml`
- [ ] Vérifier `/robots.txt`
- [ ] Soumettre sitemap dans Google Search Console
- [ ] Configurer GA4 (variable d'env)
- [ ] Vérifier Core Web Vitals (PageSpeed Insights)
- [ ] Tester le formulaire de contact
- [ ] Configurer le domaine dans Vercel
- [ ] Vérifier l'indexation Google sous 2-4 semaines
