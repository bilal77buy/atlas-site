import type { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Vulnérabilité IDOR — Insecure Direct Object Reference Expliquée | Atlas RedConsult',
  description:
    'Comprendre la vulnérabilité IDOR (Insecure Direct Object Reference) : comment elle fonctionne, comment la détecter en pentest et comment s\'en protéger.',
  alternates: {
    canonical: 'https://atlasredconsult.fr/blog/vulnerabilite-idor-expliquee',
  },
  openGraph: {
    title: 'Vulnérabilité IDOR — Insecure Direct Object Reference Expliquée | Atlas RedConsult',
    description:
      'Comprendre la vulnérabilité IDOR : comment elle fonctionne, comment la détecter en pentest et comment s\'en protéger efficacement.',
    url: 'https://atlasredconsult.fr/blog/vulnerabilite-idor-expliquee',
    locale: 'fr_FR',
    type: 'article',
  },
}

export default function IDORPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Vulnérabilité IDOR — Insecure Direct Object Reference Expliquée',
    datePublished: '2024-01-15',
    dateModified: '2024-01-15',
    author: { '@type': 'Organization', name: 'Atlas RedConsult', url: 'https://atlasredconsult.fr' },
    publisher: { '@type': 'Organization', name: 'Atlas RedConsult', url: 'https://atlasredconsult.fr' },
    description: 'Comprendre la vulnérabilité IDOR : comment elle fonctionne, comment la détecter en pentest et comment s\'en protéger efficacement.',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://atlasredconsult.fr/blog/vulnerabilite-idor-expliquee' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://atlasredconsult.fr' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://atlasredconsult.fr/blog' },
      { '@type': 'ListItem', position: 3, name: 'Vulnérabilité IDOR', item: 'https://atlasredconsult.fr/blog/vulnerabilite-idor-expliquee' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-[#0A0A0A] text-white">
        {/* Breadcrumb */}
        <div className="border-b border-[#2A2A2A] py-4">
          <div className="mx-auto max-w-4xl px-6">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-300">Vulnérabilité IDOR</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="mx-auto max-w-4xl px-6 py-12 md:py-20">
          {/* Header */}
          <header className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-[#DC2626]/10 px-3 py-1 text-xs font-medium text-[#DC2626] border border-[#DC2626]/20">
                Sécurité Web
              </span>
              <time dateTime="2024-01-15" className="text-sm text-gray-500">
                15 janvier 2024
              </time>
              <span className="text-sm text-gray-500">· 7 min de lecture</span>
            </div>
            <h1 className="font-display mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Vulnérabilité IDOR —{' '}
              <span className="text-[#DC2626]">Insecure Direct Object Reference</span> Expliquée
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              La vulnérabilité IDOR figure parmi les failles les plus répandues des applications web modernes. Simple à comprendre mais souvent sous-estimée, elle peut permettre à un attaquant d'accéder à l'ensemble des données d'une organisation.
            </p>
          </header>

          {/* Content */}
          <div className="prose-custom space-y-10 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Qu'est-ce qu'une vulnérabilité IDOR ?</h2>
              <p>
                IDOR, acronyme d'<em>Insecure Direct Object Reference</em> (référence directe non sécurisée à un objet), est une classe de vulnérabilité de contrôle d'accès classée dans l'OWASP Top 10 sous la catégorie A01:2021 — Broken Access Control. Elle survient lorsqu'une application web utilise des identifiants contrôlables par l'utilisateur — comme des entiers séquentiels, des UUID prévisibles ou des noms de fichiers — pour accéder directement à des objets internes sans vérifier que l'utilisateur authentifié est bien autorisé à y accéder.
              </p>
              <p className="mt-4">
                En d'autres termes, l'application fait confiance à l'identifiant fourni par le client sans valider côté serveur si cet utilisateur a le droit de consulter ou modifier l'objet correspondant. Cette absence de validation d'autorisation est au cœur du problème.
              </p>
              <p className="mt-4">
                Concrètement, imaginez une application de facturation où, après connexion, vous consultez votre facture via l'URL <code className="bg-[#1A1A1A] px-2 py-0.5 rounded text-[#DC2626] text-sm">/facture/1234</code>. Si l'application ne vérifie pas que la facture 1234 vous appartient bien, un attaquant peut simplement modifier l'identifiant en <code className="bg-[#1A1A1A] px-2 py-0.5 rounded text-[#DC2626] text-sm">/facture/1235</code>, <code className="bg-[#1A1A1A] px-2 py-0.5 rounded text-[#DC2626] text-sm">/facture/1236</code> et ainsi de suite pour consulter toutes les factures de tous les clients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Comment fonctionne une attaque IDOR</h2>
              <p>
                Le mécanisme d'exploitation d'une IDOR est remarquablement simple, ce qui en fait une vulnérabilité particulièrement dangereuse. Le processus se déroule généralement en trois étapes :
              </p>
              <ol className="mt-4 list-decimal list-inside space-y-3 text-gray-300">
                <li><strong className="text-white">Identification de l'objet référencé :</strong> L'attaquant observe les requêtes HTTP (via un proxy comme Burp Suite) et identifie les paramètres qui semblent référencer des objets internes. Il peut s'agir de paramètres dans l'URL (<code className="text-[#DC2626]">?id=</code>), dans le corps d'une requête POST, ou dans les en-têtes.</li>
                <li><strong className="text-white">Manipulation de l'identifiant :</strong> L'attaquant modifie la valeur de cet identifiant pour tenter d'accéder à un objet appartenant à un autre utilisateur. Si les identifiants sont séquentiels (1, 2, 3...), l'énumération est triviale. Si des UUID sont utilisés, l'attaque peut être plus difficile mais pas impossible.</li>
                <li><strong className="text-white">Exploitation :</strong> Si l'application renvoie les données de l'autre utilisateur sans erreur ni contrôle d'autorisation, la vulnérabilité est confirmée. L'attaquant peut alors automatiser l'énumération pour extraire massivement des données.</li>
              </ol>
              <p className="mt-4">
                Les IDOR ne se limitent pas aux requêtes GET. Elles peuvent aussi toucher les opérations d'écriture : modifier le profil d'un autre utilisateur (<code className="text-[#DC2626]">PUT /user/456</code>), supprimer ses données, ou déclencher des actions en son nom. Dans ce cas, on parle d'IDOR sur des actions, potentiellement encore plus graves que les IDOR en lecture.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Types d'IDOR : escalade horizontale vs verticale</h2>
              <p>
                Les vulnérabilités IDOR se divisent en deux grandes catégories selon le type d'accès non autorisé qu'elles permettent :
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-6">
                  <h3 className="text-lg font-semibold text-[#DC2626] mb-3">Escalade horizontale de privilèges</h3>
                  <p className="text-sm text-gray-400">
                    L'utilisateur accède aux ressources d'un autre utilisateur ayant le même niveau de privilèges. C'est le cas classique : l'utilisateur A accède aux données de l'utilisateur B. Les deux sont des comptes "standard", mais A peut voir ou modifier ce qui appartient à B. Exemple : accéder aux commandes d'un autre client e-commerce, consulter les messages privés d'un autre membre, télécharger les documents d'un autre collaborateur.
                  </p>
                </div>
                <div className="rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-6">
                  <h3 className="text-lg font-semibold text-[#DC2626] mb-3">Escalade verticale de privilèges</h3>
                  <p className="text-sm text-gray-400">
                    Un utilisateur avec peu de privilèges accède à des ressources normalement réservées à des utilisateurs plus privilegiés (administrateurs, par exemple). Exemple : un utilisateur standard accède à l'interface d'administration via <code>/admin/users/1</code>, ou consulte les logs systèmes en manipulant un identifiant de ressource. Cette forme d'IDOR est particulièrement critique car elle peut mener à une compromission totale de l'application.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Impact réel des vulnérabilités IDOR</h2>
              <p>
                Les conséquences d'une IDOR exploitée peuvent être désastreuses pour une organisation, particulièrement dans un contexte B2B où les données traitées sont souvent critiques :
              </p>
              <ul className="mt-4 list-disc list-inside space-y-3 text-gray-300">
                <li><strong className="text-white">Violation massive de données personnelles :</strong> Un attaquant peut extraire les données de milliers, voire de millions d'utilisateurs en automatisant l'énumération des identifiants. Ces données tombent ensuite sous le coup du RGPD, avec des obligations de notification et des risques de sanctions pouvant atteindre 4% du chiffre d'affaires mondial.</li>
                <li><strong className="text-white">Espionnage économique :</strong> Dans un contexte B2B, l'accès aux devis, contrats, ou données financières des concurrents via une IDOR peut représenter un préjudice commercial considérable.</li>
                <li><strong className="text-white">Atteinte à la réputation :</strong> La divulgation d'une telle faille érode irrémédiablement la confiance des clients et partenaires.</li>
                <li><strong className="text-white">Responsabilité légale :</strong> En fonction du secteur (santé, finance, secteur public), l'exposition de données sensibles peut engager la responsabilité pénale des dirigeants.</li>
              </ul>
              <p className="mt-4">
                Des cas célèbres illustrent l'ampleur des dégâts : en 2012, une IDOR dans les systèmes de Facebook permettait d'accéder aux photos privées de n'importe quel utilisateur. En 2019, une faille similaire dans une application gouvernementale indienne a exposé des millions de dossiers médicaux. Plus récemment, des applications de gestion RH et de comptabilité en mode SaaS ont vu leurs données clients entièrement exfiltrées via des IDOR non détectées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Détection des IDOR en pentest</h2>
              <p>
                La détection des vulnérabilités IDOR est une compétence centrale dans tout test d'intrusion applicatif. Voici la méthodologie que nos équipes appliquent systématiquement :
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">1. Cartographie des points d'entrée</h3>
              <p>
                La première étape consiste à cartographier exhaustivement tous les endpoints de l'application qui acceptent des identifiants d'objets : URLs, paramètres POST, paramètres JSON dans les corps de requêtes, identifiants dans les cookies ou les en-têtes personnalisés. Outils utilisés : Burp Suite Pro (avec son module d'audit automatisé), OWASP ZAP, et des scripts Intruder personnalisés.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2. Tests manuels d'énumération</h3>
              <p>
                Après avoir créé deux comptes de test distincts (A et B), le pentesteur authentifié en tant que A tente d'accéder aux ressources créées avec le compte B en manipulant les identifiants. Il teste les opérations CRUD complètes : lecture (GET), modification (PUT/PATCH), suppression (DELETE) et création avec un identifiant existant (POST).
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3. Test sur les identifiants non-séquentiels</h3>
              <p>
                Même les UUID (Universally Unique Identifiers) peuvent être vulnérables si l'application expose des identifiants via d'autres canaux (listes, exports, logs), ou si les UUID sont générés de manière prévisible (UUID v1 basé sur le timestamp). Le pentesteur analyse la structure des identifiants pour détecter tout pattern exploitable.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4. Test des paramètres cachés</h3>
              <p>
                Certaines IDOR sont dissimulées dans des paramètres non documentés : champs cachés dans les formulaires, paramètres supplémentaires acceptés mais non affichés dans la documentation, ou métadonnées dans les requêtes API. Une analyse approfondie du trafic HTTP et du code JavaScript côté client peut révéler ces vecteurs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Remédiation et bonnes pratiques</h2>
              <p>
                La correction des vulnérabilités IDOR repose sur plusieurs mécanismes complémentaires :
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Contrôles d'autorisation systématiques côté serveur</h3>
              <p>
                Toute requête accédant à un objet doit être précédée d'une vérification serveur de l'appartenance : l'utilisateur authentifié est-il bien le propriétaire de l'objet demandé, ou dispose-t-il d'une permission explicite pour y accéder ? Cette vérification ne doit jamais être omise, même pour des routes considérées comme "internes".
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Références indirectes aux objets</h3>
              <p>
                Au lieu d'exposer les identifiants internes de la base de données, l'application peut utiliser des références indirectes : une table de mappage par session qui associe des tokens temporaires aux IDs réels, ou des identifiants opaques spécifiques à chaque session utilisateur. Ainsi, même si l'identifiant est manipulé, il ne correspond à aucun objet valide pour un autre utilisateur.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Validation côté serveur à chaque niveau</h3>
              <p>
                La validation doit intervenir à chaque couche de l'application : au niveau du contrôleur pour les règles métier de haut niveau, au niveau du service pour la logique d'autorisation, et au niveau du repository/ORM pour les requêtes en base de données (utilisation de clauses WHERE incluant l'identifiant utilisateur).
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Tests unitaires et d'intégration dédiés</h3>
              <p>
                Intégrer des tests automatisés vérifiant que les ressources d'un utilisateur ne sont pas accessibles à un autre dans la suite de tests de l'application. Ces tests de régression garantissent que les corrections tiennent dans le temps face aux évolutions du code.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Références OWASP</h2>
              <p>
                La vulnérabilité IDOR est documentée par l'OWASP sous plusieurs entrées :
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                <li>OWASP Top 10 2021 — A01: Broken Access Control (catégorie principale)</li>
                <li>OWASP Testing Guide v4.2 — OTG-AUTHZ-004 : Testing for Insecure Direct Object References</li>
                <li>OWASP WSTG-ATHZ-04 : Insecure Direct Object Reference Testing</li>
                <li>CWE-639 : Authorization Bypass Through User-Controlled Key</li>
              </ul>
              <p className="mt-4">
                Ces ressources sont précieuses pour les équipes de développement souhaitant comprendre en profondeur les mécanismes et contre-mesures associés aux IDOR.
              </p>
            </section>

          </div>

          {/* Related Links */}
          <div className="mt-12 rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Articles connexes</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog/bola-bfla-securite-api" className="text-sm text-[#DC2626] hover:text-red-400 transition-colors">
                → BOLA et BFLA — Vulnérabilités des APIs
              </Link>
              <Link href="/blog/methodologie-pentest-owasp" className="text-sm text-[#DC2626] hover:text-red-400 transition-colors">
                → Méthodologie Pentest OWASP
              </Link>
              <Link href="/blog/rapport-pentest-comment-lire" className="text-sm text-[#DC2626] hover:text-red-400 transition-colors">
                → Comment lire un rapport de pentest
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-lg border border-[#DC2626]/30 bg-[#DC2626]/5 p-8 text-center">
            <h3 className="mb-3 text-xl font-bold text-white">Besoin d'un pentest ?</h3>
            <p className="mb-6 text-gray-400">
              Vos applications sont-elles exposées à des vulnérabilités IDOR ? Nos experts identifient et qualifient toutes les failles de contrôle d'accès lors d'un test d'intrusion complet.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#DC2626] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#B91C1C]"
            >
              Demandez votre devis gratuit
            </Link>
          </div>

          {/* Back */}
          <div className="mt-8">
            <Link href="/blog" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour au blog
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}
