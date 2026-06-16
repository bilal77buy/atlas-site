import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const articles: Record<string, {
  title: string
  description: string
  date: string
  category: string
  content: string
}> = {
  'vulnerabilite-idor-expliquee': {
    title: 'Vulnérabilité IDOR — Insecure Direct Object Reference Expliquée',
    description: 'Comprendre la vulnérabilité IDOR : comment elle fonctionne, comment la détecter en pentest et comment s\'en protéger efficacement.',
    date: '2024-01-15',
    category: 'Sécurité Web',
    content: `
      <h2>Qu'est-ce qu'une vulnérabilité IDOR ?</h2>
      <p>IDOR (Insecure Direct Object Reference) est une faille de contrôle d'accès classée dans l'OWASP Top 10 (A01:2021 — Broken Access Control). Elle survient lorsqu'une application utilise des identifiants contrôlables par l'utilisateur pour accéder à des objets internes sans vérifier les autorisations.</p>
      <p>Exemple : vous consultez votre facture via <code>/facture/1234</code>. Si l'application ne vérifie pas que la facture 1234 vous appartient, un attaquant peut accéder à toutes les factures en modifiant l'identifiant.</p>
      <h2>Types d'IDOR</h2>
      <p><strong>Escalade horizontale :</strong> accès aux ressources d'un autre utilisateur de même niveau. <strong>Escalade verticale :</strong> accès à des ressources d'un niveau de privilège supérieur (admin).</p>
      <h2>Impact</h2>
      <p>Violation massive de données personnelles, espionnage économique, sanctions RGPD (jusqu'à 4% du CA mondial), atteinte à la réputation.</p>
      <h2>Détection en pentest</h2>
      <p>Cartographie des endpoints, tests manuels avec deux comptes distincts (A et B), énumération des identifiants, test sur UUID, analyse des paramètres cachés (Burp Suite Pro).</p>
      <h2>Remédiation</h2>
      <p>Contrôles d'autorisation systématiques côté serveur, références indirectes aux objets, validation à chaque couche applicative, tests unitaires dédiés.</p>
    `,
  },
  'pentest-blackbox-vs-greybox-vs-whitebox': {
    title: 'Pentest Black Box vs Grey Box vs White Box — Guide Complet',
    description: 'Comparaison des trois approches de test d\'intrusion : avantages, inconvénients et cas d\'usage pour chaque méthode.',
    date: '2024-01-22',
    category: 'Méthodologie',
    content: `
      <h2>Les trois approches de pentest</h2>
      <p>Le choix de la méthode de test d'intrusion dépend de vos objectifs, de votre budget et du niveau de réalisme souhaité.</p>
      <h2>Black Box — Boîte Noire</h2>
      <p>Le pentesteur n'a aucune information préalable sur la cible. Il simule un attaquant externe sans accès privilégié. <strong>Avantages :</strong> réalisme maximal, test de la surface d'attaque externe. <strong>Inconvénients :</strong> coûteux en temps, couverture limitée.</p>
      <h2>Grey Box — Boîte Grise</h2>
      <p>Le pentesteur dispose d'informations partielles (architecture, comptes utilisateurs standards). <strong>Avantages :</strong> bon équilibre réalisme/couverture, simule un attaquant interne ou un utilisateur compromis. <strong>C'est l'approche la plus courante.</strong></p>
      <h2>White Box — Boîte Blanche</h2>
      <p>Accès complet : code source, documentation, architecture, credentials. <strong>Avantages :</strong> couverture maximale, identification de vulnérabilités logiques profondes. <strong>Inconvénients :</strong> moins réaliste, nécessite plus de temps d'analyse.</p>
      <h2>Quand choisir quoi ?</h2>
      <p>Black Box pour tester la défense périmétrique. Grey Box pour les tests récurrents et la conformité. White Box pour les audits de code source et les applications critiques.</p>

    `,
  },
  'bola-bfla-securite-api': {
    title: 'BOLA et BFLA — Vulnérabilités Critiques des APIs',
    description: 'Broken Object Level Authorization et Broken Function Level Authorization : les vulnérabilités les plus critiques des APIs modernes.',
    date: '2024-02-05',
    category: 'Sécurité API',
    content: `
      <h2>BOLA — Broken Object Level Authorization</h2>
      <p>BOLA (OWASP API Security #1) est l'équivalent de l'IDOR pour les APIs. Elle survient quand une API ne vérifie pas que l'utilisateur a le droit d'accéder à l'objet demandé via son identifiant.</p>
      <p>Exemple : <code>GET /api/orders/12345</code> renvoie la commande 12345 sans vérifier que l'utilisateur authentifié en est le propriétaire.</p>
      <h2>BFLA — Broken Function Level Authorization</h2>
      <p>BFLA (OWASP API Security #5) survient quand une API expose des fonctions administratives à des utilisateurs non autorisés. Un utilisateur standard peut accéder à des endpoints admin comme <code>DELETE /api/users/456</code> ou <code>GET /api/admin/reports</code>.</p>
      <h2>Différence BOLA vs BFLA</h2>
      <p>BOLA = accès à des <strong>données</strong> d'un autre utilisateur. BFLA = accès à des <strong>fonctions</strong> non autorisées (souvent admin).</p>
      <h2>Impact</h2>
      <p>Exfiltration massive de données, modification/suppression de comptes tiers, escalade de privilèges vers l'administration.</p>
      <h2>Tests en pentest</h2>
      <p>Interception des requêtes API (Burp Suite), manipulation des identifiants d'objets, test de tous les endpoints avec différents niveaux de privilèges, fuzzing des paramètres d'autorisation.</p>
      <h2>Remédiation</h2>
      <p>Validation systématique côté serveur à chaque appel API, liste blanche d'endpoints par rôle, logging et alerting sur les accès non autorisés.</p>
    `,
  },
  'ssrf-server-side-request-forgery': {
    title: 'SSRF — Server Side Request Forgery : Comprendre et Prévenir',
    description: 'Comment les attaques SSRF permettent d\'accéder aux ressources internes d\'un serveur et comment s\'en protéger dans un environnement cloud.',
    date: '2024-02-19',
    category: 'Sécurité Web',
    content: `
      <h2>Qu'est-ce que le SSRF ?</h2>
      <p>Server-Side Request Forgery (SSRF) — OWASP Top 10 A10:2021 — est une vulnérabilité qui permet à un attaquant de forcer le serveur à effectuer des requêtes HTTP vers des ressources internes ou externes, en abusant d'une fonctionnalité légitime (import d'URL, webhook, preview de lien).</p>
      <h2>Exemple d'exploitation</h2>
      <p>Une application permet d'importer une image via URL. L'attaquant soumet <code>http://169.254.169.254/latest/meta-data/</code> (AWS metadata endpoint). Le serveur effectue la requête et retourne les clés IAM de l'instance EC2.</p>
      <h2>Impact en environnement cloud</h2>
      <p>Accès aux métadonnées d'instance (AWS IMDSv1, GCP, Azure), vol de credentials IAM, mouvement latéral vers d'autres services internes, scan du réseau interne, accès à des services non exposés publiquement (Redis, Elasticsearch, Kubernetes API).</p>
      <h2>Variantes SSRF</h2>
      <p><strong>SSRF aveugle :</strong> pas de retour direct mais effets observables (DNS lookup, connexion TCP). <strong>SSRF semi-aveugle :</strong> réponse partielle (code HTTP, durée). <strong>SSRF complet :</strong> contenu de la réponse accessible.</p>
      <h2>Détection en pentest</h2>
      <p>Test de tous les paramètres acceptant des URLs, utilisation de Burp Collaborator pour le SSRF aveugle, fuzzing avec des adresses internes (10.0.0.0/8, 172.16.0.0/12, 169.254.169.254).</p>
      <h2>Remédiation</h2>
      <p>Liste blanche d'URLs autorisées, désactivation des redirections HTTP, utilisation d'IMDSv2 sur AWS, résolution DNS côté serveur avec validation, isolation réseau des serveurs applicatifs.</p>
    `,
  },
  'oauth-vulnerabilites-pentest': {
    title: 'Vulnérabilités OAuth 2.0 — Guide Pentest et Sécurisation',
    description: 'Les failles OAuth 2.0 les plus courantes : open redirect, token leakage, absence de PKCE — comment les tester et les corriger.',
    date: '2024-03-04',
    category: 'Authentification',
    content: `
      <h2>OAuth 2.0 — Rappel des flux</h2>
      <p>OAuth 2.0 est le protocole d'autorisation standard pour les APIs. Les flux principaux : Authorization Code (applications web), Implicit (déprécié), Client Credentials (machine-to-machine), PKCE (applications mobiles/SPA).</p>
      <h2>Vulnérabilités les plus courantes</h2>
      <h3>Open Redirect sur redirect_uri</h3>
      <p>Si le serveur d'autorisation ne valide pas strictement le paramètre <code>redirect_uri</code>, un attaquant peut voler le code d'autorisation en redirigeant vers son serveur. Exemple : <code>redirect_uri=https://attacker.com/callback</code>.</p>
      <h3>Absence de state parameter</h3>
      <p>Le paramètre <code>state</code> protège contre les attaques CSRF sur le flux OAuth. Son absence ou sa non-validation permet à un attaquant de forcer l'authentification d'une victime avec son propre compte (CSRF login).</p>
      <h3>Absence de PKCE</h3>
      <p>Pour les applications mobiles et SPA, PKCE (Proof Key for Code Exchange) protège contre le vol du code d'autorisation. Sans PKCE, une application malveillante sur l'appareil peut intercepter le code et échanger un token.</p>
      <h3>Token leakage via Referer</h3>
      <p>Si l'access token est dans l'URL (flux Implicit), il peut être transmis via l'en-tête Referer à des ressources tierces chargées sur la page.</p>
      <h2>Tests en pentest</h2>
      <p>Manipulation du redirect_uri (wildcards, sous-domaines, encodage URL), suppression du state parameter, test d'interception du code d'autorisation, analyse des tokens JWT (algorithme none, RS256 vs HS256).</p>
      <h2>Remédiation</h2>
      <p>Validation stricte et liste blanche du redirect_uri, state parameter obligatoire, PKCE pour toutes les applications publiques, tokens de courte durée de vie, rotation des refresh tokens.</p>
    `,
  },
  'methodologie-pentest-owasp': {
    title: 'Méthodologie Pentest OWASP — Guide Complet OWASP Top 10',
    description: 'Comment les pentesteurs professionnels utilisent l\'OWASP Top 10 comme framework pour conduire des tests d\'intrusion rigoureux.',
    date: '2024-03-18',
    category: 'Méthodologie',
    content: `
      <h2>L'OWASP Top 10 2021</h2>
      <p>L'OWASP (Open Web Application Security Project) publie le Top 10 des vulnérabilités web les plus critiques. La version 2021 identifie :</p>
      <p>A01 — Broken Access Control • A02 — Cryptographic Failures • A03 — Injection • A04 — Insecure Design • A05 — Security Misconfiguration • A06 — Vulnerable Components • A07 — Authentication Failures • A08 — Integrity Failures • A09 — Logging Failures • A10 — SSRF</p>
      <h2>Les 6 phases d'un pentest OWASP</h2>
      <h3>Phase 1 — Reconnaissance</h3>
      <p>Collecte d'informations passives (OSINT) et actives : cartographie des technologies, identification des endpoints, analyse des headers HTTP, découverte de sous-domaines.</p>
      <h3>Phase 2 — Scan et énumération</h3>
      <p>Scan des ports et services, fingerprinting des frameworks, découverte des API endpoints, analyse du JavaScript côté client.</p>
      <h3>Phase 3 — Tests d'authentification (A07)</h3>
      <p>Brute force des comptes, test de la politique de mots de passe, test du flux OAuth/OIDC, session management (fixation, hijacking).</p>
      <h3>Phase 4 — Tests d'autorisation (A01)</h3>
      <p>Tests IDOR, privilege escalation, test des contrôles d'accès par rôle (RBAC), manipulation des tokens JWT.</p>
      <h3>Phase 5 — Tests d'injection (A03)</h3>
      <p>SQL injection (manuel + sqlmap), XSS réfléchi/stocké/DOM, XXE, SSTI, command injection, LDAP injection.</p>
      <h3>Phase 6 — Reporting</h3>
      <p>Rapport avec score CVSS v3.1, preuve de concept reproductible, impact business, recommandations priorisées.</p>
    `,
  },
  'dora-tests-tlpt-fintechs': {
    title: 'DORA et Tests TLPT — Guide pour les Fintechs en 2024',
    description: 'Le règlement DORA impose des tests TLPT aux entités financières. Guide complet sur les obligations et comment s\'y préparer.',
    date: '2024-04-01',
    category: 'Conformité',
    content: `
      <h2>Qu'est-ce que DORA ?</h2>
      <p>DORA (Digital Operational Resilience Act) est un règlement européen (UE 2022/2554) entré en application le 17 janvier 2025. Il impose des exigences de résilience opérationnelle numérique aux entités financières de l'UE.</p>
      <h2>Entités concernées</h2>
      <p>Banques, assurances, gestionnaires d'actifs, plateformes de trading, prestataires de services de paiement (PSP), sociétés de crypto-actifs (MiCA), et leurs fournisseurs ICT critiques.</p>
      <h2>Les TLPT — Threat-Led Penetration Testing</h2>
      <p>DORA impose des tests TLPT aux "entités financières significatives" tous les 3 ans. Les TLPT sont des exercices de Red Team avancés basés sur le renseignement de menaces réelles (threat intelligence) ciblant spécifiquement votre secteur.</p>
      <h2>Cadre TIBER-EU</h2>
      <p>Le TIBER-EU (Threat Intelligence-Based Ethical Red Teaming) est le cadre européen pour les TLPT. Il comprend 3 phases : Threat Intelligence (renseignement sur les menaces réelles), Red Team Testing (simulation d'attaque APT), Closure & Remediation (remédiation et rapport).</p>
      <h2>Autres obligations DORA</h2>
      <p>Gestion des risques ICT (Art. 6-16), gestion des incidents (Art. 17-23), tests de résilience opérationnelle (Art. 24-27), gestion des risques tiers ICT (Art. 28-44), partage d'informations sur les cybermenaces (Art. 45).</p>
      <h2>Sanctions</h2>
      <p>Jusqu'à 1% du CA mondial quotidien pendant 6 mois maximum pour les entités non conformes. Les prestataires ICT critiques : jusqu'à 5M€ ou 1% du CA mondial.</p>
    `,
  },
  'nis2-obligations-entreprises': {
    title: 'NIS2 — Obligations Cybersécurité pour les Entreprises',
    description: 'La directive NIS2 étend les obligations de cybersécurité à des milliers d\'entreprises européennes. Périmètre, obligations, sanctions.',
    date: '2024-04-15',
    category: 'Conformité',
    content: `
      <h2>Qu'est-ce que NIS2 ?</h2>
      <p>La directive NIS2 (UE 2022/2555) remplace NIS1 et étend massivement le périmètre des obligations de cybersécurité. Transposée en droit français depuis octobre 2024, elle concerne environ 15 000 entités en France.</p>
      <h2>Entités Essentielles (EE)</h2>
      <p>Secteurs : énergie, transports, banques, infrastructures financières, santé, eau potable, eaux usées, infrastructure numérique, administration publique, espace. Critère : >250 salariés ou CA >50M€ et bilan >43M€. Supervision proactive par l'ANSSI.</p>
      <h2>Entités Importantes (EI)</h2>
      <p>Secteurs élargis : services postaux, gestion des déchets, produits chimiques, alimentation, fabrication, fournisseurs numériques. Critère : >50 salariés ou CA >10M€. Supervision réactive.</p>
      <h2>Obligations principales</h2>
      <p>Mesures de gestion des risques cybersécurité (Art. 21), notification des incidents significatifs sous 24h (alerte) et 72h (rapport initial), sécurisation de la chaîne d'approvisionnement, formation des dirigeants, politique de tests de sécurité.</p>
      <h2>Tests de pénétration NIS2</h2>
      <p>NIS2 impose des "mesures appropriées" incluant des tests réguliers. Atlas RedConsult réalise les audits et pentests conformes NIS2 avec livrables utilisables auprès de l'ANSSI.</p>
      <h2>Sanctions</h2>
      <p>EE : jusqu'à 10M€ ou 2% du CA mondial. EI : jusqu'à 7M€ ou 1,4% du CA mondial. Responsabilité personnelle des dirigeants.</p>
    `,
  },
  'pci-dss-v4-ecommerce': {
    title: 'PCI-DSS v4.0 — Ce qui Change pour l\'E-commerce',
    description: 'PCI-DSS v4.0 introduit des changements majeurs pour les e-commerçants. Nouvelles exigences, obligation de pentest (req 11.4), délais.',
    date: '2024-05-06',
    category: 'Conformité',
    content: `
      <h2>PCI-DSS v4.0 — Les changements clés</h2>
      <p>La version 4.0 de PCI-DSS (Payment Card Industry Data Security Standard), publiée en mars 2022 et obligatoire depuis le 31 mars 2024, introduit des changements significatifs pour les e-commerçants.</p>
      <h2>Exigence 11.4 — Tests d'intrusion</h2>
      <p>Pentest annuel obligatoire sur les périmètres externes et internes en scope PCI. Le pentesteur doit être qualifié et indépendant. Le rapport doit documenter la méthodologie, les résultats et les corrections. Atlas RedConsult fournit des rapports directement compatibles avec cette exigence.</p>
      <h2>Exigence 6.4.3 — Scripts de paiement</h2>
      <p>Nouveau dans v4.0 : inventaire et justification de tous les scripts JavaScript sur les pages de paiement, vérification d'intégrité (SRI), autorisation explicite de chaque script. Protection contre les attaques Magecart/e-skimming.</p>
      <h2>Exigence 6.4.3 — Content Security Policy</h2>
      <p>Mise en place d'une CSP (Content Security Policy) stricte sur les pages de checkout pour bloquer les scripts non autorisés.</p>
      <h2>Nouveautés v4.0 vs v3.2.1</h2>
      <p>Approche "customized implementation" (flexibilité dans la méthode), MFA obligatoire pour tous les accès au CDE (Cardholder Data Environment), exigences renforcées sur l'authentification, nouvelles exigences sur le phishing.</p>
      <h2>Délais</h2>
      <p>Les exigences "futures" de v4.0 deviennent toutes obligatoires au 31 mars 2025. Les e-commerçants doivent être pleinement conformes maintenant.</p>
    `,
  },
  'rapport-pentest-comment-lire': {
    title: 'Comment Lire un Rapport de Pentest — Guide Pratique',
    description: 'Guide pour comprendre un rapport de pentest : scores CVSS, niveaux de risque, recommandations et priorisation des remédiations.',
    date: '2024-05-20',
    category: 'Guide',
    content: `
      <h2>Structure d'un rapport de pentest</h2>
      <p>Un rapport de pentest professionnel comporte systématiquement : un résumé exécutif (pour les dirigeants), un résumé technique (pour le RSSI), les vulnérabilités détaillées avec preuves, et un plan de remédiation priorisé.</p>
      <h2>Le score CVSS v3.1</h2>
      <p>Le Common Vulnerability Scoring System (CVSS) quantifie la sévérité des vulnérabilités sur une échelle de 0 à 10 :</p>
      <p><strong>Critique (9.0-10.0) :</strong> exploitation immédiate possible, impact maximal. Corriger en urgence (24-48h). <strong>Élevé (7.0-8.9) :</strong> impact important, correctif sous 7 jours. <strong>Moyen (4.0-6.9) :</strong> impact modéré, correctif sous 30 jours. <strong>Faible (0.1-3.9) :</strong> impact limité, inclure dans la prochaine release.</p>
      <h2>Comment lire une vulnérabilité</h2>
      <p>Chaque finding comprend : titre et classification (CWE/OWASP), score CVSS avec vecteur détaillé, description technique, preuve de concept (PoC) reproductible, impact business, recommandation de remédiation, et références (CVE, OWASP).</p>
      <h2>La preuve de concept (PoC)</h2>
      <p>Le PoC est la démonstration que la vulnérabilité est réellement exploitable. Il peut prendre la forme d'une capture d'écran, d'une requête HTTP, d'un script d'exploitation ou d'une vidéo. Un bon PoC est reproductible par vos équipes.</p>
      <h2>Plan de remédiation</h2>
      <p>Priorisez par criticité CVSS et facilité de correction. Commencez par les vulnérabilités Critiques et Élevées exploitables depuis Internet. Planifiez un retest pour les vulnérabilités Critiques et Élevées après correction.</p>
      <h2>Le retest</h2>
      <p>Atlas RedConsult inclut un retest post-correction pour toutes les vulnérabilités Critiques et Élevées. Le retest valide que la correction est effective et qu'aucune régression n'a été introduite.</p>
    `,
  },
  'hall-of-fame-google-microsoft-meta': {
    title: 'Hall of Fame Google, Microsoft, Meta — Notre Parcours Bug Bounty',
    description: 'Atlas RedConsult reconnu dans les programmes de bug bounty de Google, Microsoft, Meta et le DoD américain. Notre parcours en responsible disclosure.',
    date: '2024-06-03',
    category: 'À Propos',
    content: `
      <h2>Responsible Disclosure — Notre engagement</h2>
      <p>Les experts d'Atlas RedConsult participent activement aux programmes de bug bounty des grandes organisations technologiques. Cette pratique de responsible disclosure est au cœur de notre éthique professionnelle et garantit que nos compétences offensives sont utilisées pour renforcer la sécurité globale.</p>
      <h2>Google Vulnerability Reward Program (VRP)</h2>
      <p>Le Google VRP récompense la découverte de vulnérabilités dans les produits Google (Chrome, Android, GCP, Gmail, Google Search). Nos experts ont identifié et signalé des vulnérabilités reconnues par le programme, avec inscription au Hall of Fame Google Security.</p>
      <h2>Microsoft Security Response Center (MSRC)</h2>
      <p>Le MSRC gère les signalements de vulnérabilités dans les produits Microsoft (Windows, Azure, M365, Teams). La reconnaissance au MSRC Hall of Fame atteste d'une expertise approfondie sur les écosystèmes Microsoft, particulièrement pertinente pour nos clients utilisant Azure AD et M365.</p>
      <h2>Meta Bug Bounty Program</h2>
      <p>Le programme Meta couvre Facebook, Instagram, WhatsApp et les APIs associées. Nos contributions au programme Meta témoignent d'une expertise en sécurité des applications sociales et des APIs OAuth à grande échelle.</p>
      <h2>US Department of Defense — Vulnerability Disclosure Program</h2>
      <p>Le VDP du DoD américain (géré via HackerOne) est l'un des programmes de disclosure les plus exigeants. La reconnaissance dans ce programme atteste d'une expertise en sécurité des infrastructures critiques.</p>
      <h2>Pourquoi c'est important pour vous</h2>
      <p>Ces reconnaissances garantissent que nos pentesteurs ont une expérience réelle de la découverte de vulnérabilités complexes dans des environnements de production à grande échelle — pas seulement en laboratoire. Quand nous testons vos applications, vous bénéficiez de cette expertise validée.</p>
    `,
  },
  'remediation-apres-pentest': {
    title: 'Remédiation Après Pentest — Guide Complet de Correction',
    description: 'Comment corriger efficacement les vulnérabilités identifiées lors d\'un pentest : priorisation, vérification des correctifs, contre-audit.',
    date: '2024-06-17',
    category: 'Guide',
    content: `
      <h2>Phase 1 — Triage et priorisation (J0-J3)</h2>
      <p>À réception du rapport de pentest, constituez une cellule de remédiation incluant le RSSI, les développeurs et les ops. Triez les vulnérabilités par criticité CVSS et par facilité de correction. Identifiez les "quick wins" : vulnérabilités Critiques/Élevées faciles à corriger rapidement.</p>
      <h2>Phase 2 — Corrections urgentes (J0-J7)</h2>
      <p>Corrigez immédiatement les vulnérabilités Critiques exploitables depuis Internet. Pour les vulnérabilités sans patch disponible, appliquez des mesures compensatoires (WAF, restriction d'accès, monitoring renforcé). Documentez chaque correction avec le commit Git correspondant.</p>
      <h2>Phase 3 — Corrections planifiées (J7-J45)</h2>
      <p>Intégrez les corrections Élevées et Moyennes dans vos cycles de développement normaux. Évitez les corrections à la va-vite qui introduisent des régressions. Pour chaque vulnérabilité, révisez le code environnant — une faille révèle souvent des problèmes similaires à proximité.</p>
      <h2>Phase 4 — Retest et validation (J45-J60)</h2>
      <p>Faites valider vos corrections par le pentesteur initial. Le retest vérifie : (1) que la vulnérabilité est effectivement corrigée, (2) que la correction n'introduit pas de régression, (3) que des variantes de la vulnérabilité ne subsistent pas.</p>
      <h2>Remédiation systémique</h2>
      <p>Au-delà des corrections individuelles, adressez les causes racines : formation des développeurs aux vulnérabilités identifiées, ajout de tests de sécurité automatisés (SAST/DAST) dans la CI/CD, revue du processus de développement sécurisé (SDLC).</p>
      <h2>Documentation et conformité</h2>
      <p>Conservez le rapport de pentest original et les preuves de remédiation. Cette documentation est requise pour PCI-DSS (exigence 11.4), NIS2 et ISO 27001. Atlas RedConsult fournit un rapport de retest qui peut être présenté aux auditeurs et régulateurs.</p>
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles[params.slug]
  if (!article) return { title: 'Article non trouvé' }
  return {
    title: `${article.title} | Atlas RedConsult`,
    description: article.description,
    alternates: { canonical: `https://atlasredconsult.fr/blog/${params.slug}` },
  }
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug]
  if (!article) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    datePublished: article.date,
    author: { '@type': 'Organization', name: 'Atlas RedConsult', url: 'https://atlasredconsult.fr' },
    publisher: { '@type': 'Organization', name: 'Atlas RedConsult' },
    description: article.description,
  }

  const formatDate = (d: string) => new Date(d).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-[#0A0A0A] text-white">
        <div className="border-b border-[#2A2A2A] py-4">
          <div className="max-w-4xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-300">{article.category}</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-6 py-12">
          <header className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-red-600/10 px-3 py-1 text-xs font-medium text-red-500 border border-red-600/20">
                {article.category}
              </span>
              <time className="text-sm text-gray-500">{formatDate(article.date)}</time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {article.title.split('—').map((part, i) => i === 0
                ? <span key={i}>{part}— </span>
                : <span key={i} className="text-red-600">{part}</span>
              )}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">{article.description}</p>
          </header>

          <div
            className="prose-custom space-y-6 text-gray-300 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-4 [&_h2]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mb-3 [&_h3]:mt-6 [&_p]:mb-4 [&_code]:bg-[#1A1A1A] [&_code]:px-2 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-red-400 [&_code]:text-sm [&_strong]:text-white [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-12 rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Autres articles</h3>
            <div className="flex flex-wrap gap-3">
              {Object.entries(articles).filter(([s]) => s !== params.slug).slice(0, 4).map(([s, a]) => (
                <Link key={s} href={`/blog/${s}`} className="text-sm text-red-500 hover:text-red-400 transition-colors">
                  → {a.title.split('—')[0].trim()}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-red-600/30 bg-red-600/5 p-8 text-center">
            <h3 className="mb-3 text-xl font-bold text-white">Besoin d'un pentest ?</h3>
            <p className="mb-6 text-gray-400">Nos experts certifiés analysent la sécurité de vos applications. Devis gratuit sous 48h.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-4 font-semibold text-white hover:bg-red-700 transition-colors">
              Demandez votre devis gratuit
            </Link>
          </div>

          <div className="mt-8">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-white transition-colors">← Retour au blog</Link>
          </div>
        </article>
      </main>
    </>
  )
}
