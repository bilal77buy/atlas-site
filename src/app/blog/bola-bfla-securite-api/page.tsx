import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'BOLA et BFLA — Vulnérabilités Critiques des APIs | Atlas RedConsult',
  description:
    'BOLA (Broken Object Level Authorization) et BFLA (Broken Function Level Authorization) : comprendre ces vulnérabilités OWASP API Top 10 et les corriger.',
  alternates: { canonical: 'https://atlasredconsult.fr/blog/bola-bfla-securite-api' },
}

export default function BolaBflaPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'BOLA et BFLA — Vulnérabilités Critiques des APIs',
    datePublished: '2024-02-05',
    author: { '@type': 'Organization', name: 'Atlas RedConsult' },
    publisher: { '@type': 'Organization', name: 'Atlas RedConsult' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://atlasredconsult.fr/blog/bola-bfla-securite-api' },
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://atlasredconsult.fr' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://atlasredconsult.fr/blog' },
      { '@type': 'ListItem', position: 3, name: 'BOLA et BFLA', item: 'https://atlasredconsult.fr/blog/bola-bfla-securite-api' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <div className="border-b border-[#2A2A2A] py-4">
          <div className="mx-auto max-w-4xl px-6">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-300">BOLA et BFLA</span>
            </nav>
          </div>
        </div>
        <article className="mx-auto max-w-4xl px-6 py-12 md:py-20">
          <header className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-[#DC2626]/10 px-3 py-1 text-xs font-medium text-[#DC2626] border border-[#DC2626]/20">Sécurité API</span>
              <time dateTime="2024-02-05" className="text-sm text-gray-500">5 février 2024</time>
              <span className="text-sm text-gray-500">· 9 min de lecture</span>
            </div>
            <h1 className="font-display mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              <span className="text-[#DC2626]">BOLA</span> et <span className="text-[#DC2626]">BFLA</span> — Vulnérabilités Critiques des APIs
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Les APIs modernes sont le nouveau périmètre d'attaque privilégié. BOLA et BFLA figurent en tête de l'OWASP API Security Top 10 et représentent les vecteurs les plus exploités lors des pentests d'APIs REST et GraphQL.
            </p>
          </header>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Le contexte OWASP API Security Top 10</h2>
              <p>
                L'explosion des architectures orientées microservices et des applications mobiles a fait des APIs REST et GraphQL le principal vecteur d'échange de données dans les systèmes modernes. Cette omniprésence a attiré l'attention des attaquants, conduisant l'OWASP à publier un référentiel dédié : l'OWASP API Security Top 10, dont la version 2023 est la référence actuelle.
              </p>
              <p className="mt-4">
                Ce référentiel liste les dix risques de sécurité les plus critiques spécifiques aux APIs. BOLA (Broken Object Level Authorization) occupe la première place (API1:2023), tandis que BFLA (Broken Function Level Authorization) se classe en cinquième position (API5:2023). Leur positionnement reflète leur prévalence : nos équipes les retrouvent dans la grande majorité des audits d'APIs que nous conduisons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">BOLA — Broken Object Level Authorization (API1:2023)</h2>
              <p>
                BOLA est essentiellement la version API de la vulnérabilité IDOR (Insecure Direct Object Reference), adaptée aux spécificités des APIs REST et GraphQL. Elle survient lorsqu'une API expose des endpoints qui acceptent des identifiants d'objets — dans l'URL, les paramètres de requête, ou le corps JSON — sans vérifier que l'utilisateur authentifié est bien autorisé à accéder à cet objet spécifique.
              </p>
              <p className="mt-4">
                Exemple concret avec une API REST de gestion de commandes : un utilisateur authentifié effectue une requête <code className="bg-[#1A1A1A] px-2 py-0.5 rounded text-[#DC2626] text-sm">GET /api/v1/orders/8472</code> pour consulter sa commande. Si l'API ne vérifie pas que la commande 8472 appartient bien à l'utilisateur authentifié, n'importe quel utilisateur connecté peut énumérer et consulter les commandes de tous les autres clients.
              </p>
              <p className="mt-4">
                Les APIs GraphQL sont particulièrement exposées à BOLA car elles permettent souvent des requêtes très granulaires sur des objets référencés par ID. Une requête GraphQL permettant de récupérer n'importe quel <code className="text-[#DC2626]">user(id: X)</code> sans vérification d'autorisation est un exemple typique.
              </p>
              <p className="mt-4">
                L'impact de BOLA peut être massif : en automatisant les requêtes avec des identifiants incrémentaux ou des UUID collectés, un attaquant peut exfiltrer l'intégralité de la base de données clients d'une application, incluant informations personnelles, historiques d'achats, données financières. C'est l'une des vulnérabilités les plus fréquemment à l'origine de violations de données massives.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">BFLA — Broken Function Level Authorization (API5:2023)</h2>
              <p>
                BFLA est une vulnérabilité distincte qui concerne les autorisations au niveau des fonctions (endpoints/actions) plutôt qu'au niveau des objets. Elle survient lorsqu'une API expose des fonctions administratives ou privilégiées à des utilisateurs qui ne devraient pas y avoir accès, en raison d'une mauvaise implémentation des contrôles d'accès basés sur les rôles (RBAC).
              </p>
              <p className="mt-4">
                Exemple type : une API d'une plateforme SaaS dispose d'un endpoint <code className="bg-[#1A1A1A] px-2 py-0.5 rounded text-[#DC2626] text-sm">DELETE /api/v1/admin/users/:id</code> pour supprimer des comptes utilisateurs. Si ce endpoint ne vérifie pas correctement que l'appelant a le rôle administrateur, n'importe quel utilisateur authentifié peut potentiellement supprimer des comptes — y compris ceux d'administrateurs.
              </p>
              <p className="mt-4">
                BFLA se manifeste fréquemment dans les situations suivantes : différence de méthode HTTP (un GET autorisé mais le DELETE correspondant pas protégé), endpoints "cachés" non documentés supposés inaccessibles car non exposés dans l'interface utilisateur, fonctions administratives accessibles aux utilisateurs premium ou aux partenaires API sans contrôle suffisant, et endpoints de versioning anciens encore actifs mais non sécurisés (<code className="text-[#DC2626]">/api/v1/</code> moins sécurisé que <code className="text-[#DC2626]">/api/v2/</code>).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Différences clés entre BOLA et BFLA</h2>
              <div className="overflow-x-auto rounded-lg border border-[#2A2A2A]">
                <table className="w-full text-sm">
                  <thead className="bg-[#1A1A1A]">
                    <tr>
                      <th className="px-4 py-3 text-left text-gray-400">Aspect</th>
                      <th className="px-4 py-3 text-left text-[#DC2626]">BOLA</th>
                      <th className="px-4 py-3 text-left text-yellow-500">BFLA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2A2A2A]">
                    {[
                      ['Niveau d\'autorisation', 'Objet (instance)', 'Fonction (action/endpoint)'],
                      ['Question posée', 'Puis-je accéder à CET objet ?', 'Puis-je appeler CETTE fonction ?'],
                      ['OWASP 2023', 'API1:2023', 'API5:2023'],
                      ['Attaque typique', 'Énumération d\'IDs', 'Appel d\'admin endpoints'],
                      ['Impact principal', 'Fuite de données massives', 'Actions privilégiées non autorisées'],
                    ].map(([aspect, bola, bfla]) => (
                      <tr key={aspect} className="bg-[#0A0A0A] hover:bg-[#1A1A1A]">
                        <td className="px-4 py-3 text-gray-300 font-medium">{aspect}</td>
                        <td className="px-4 py-3 text-gray-400">{bola}</td>
                        <td className="px-4 py-3 text-gray-400">{bfla}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Méthodologie de détection en pentest d'API</h2>
              <p>
                La détection de BOLA et BFLA nécessite une approche méthodique qui va au-delà des scanners automatisés. Voici le processus que nous appliquons lors de nos pentests d'APIs :
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Cartographie complète de l'API</h3>
              <p>
                Avant tout test, nous collectons la documentation disponible (Swagger/OpenAPI, Postman collections), interceptons l'ensemble du trafic de l'application frontend, et construisons un inventaire exhaustif des endpoints, paramètres et types d'objets exposés. Les APIs non documentées ou versionnings legacy sont particulièrement scrutés.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Tests d'autorisation horizontaux</h3>
              <p>
                Avec deux comptes de même niveau de privilège (utilisateur A et utilisateur B), nous vérifions systématiquement que les ressources créées ou appartenant à B ne sont pas accessibles depuis A. Nous testons toutes les méthodes HTTP (GET, POST, PUT, PATCH, DELETE) pour chaque type d'objet.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Tests d'escalade verticale (BFLA)</h3>
              <p>
                Depuis un compte utilisateur standard, nous tentons d'appeler des endpoints administratifs ou des fonctions réservées à des rôles supérieurs. Nous analysons également les réponses d'erreur : une erreur 403 confirme que l'endpoint existe mais est protégé, tandis qu'une réponse 200 avec données révèle une BFLA exploitable.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Analyse des tokens JWT</h3>
              <p>
                Les JWTs mal implémentés sont souvent à l'origine de BFLA. Nous analysons la structure des claims JWT (rôles, permissions, identifiants utilisateur) pour détecter des failles : algorithme "none" accepté, signature non vérifiée, claims de rôle modifiables côté client, tokens sans expiration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Stratégies de remédiation</h2>

              <h3 className="text-xl font-semibold text-white mt-4 mb-3">Pour BOLA</h3>
              <p>
                La correction de BOLA repose sur la mise en place systématique de vérifications d'autorisation au niveau objet dans chaque handler d'API. Chaque requête sur un objet identifié doit déclencher une vérification : l'utilisateur authentifié (extrait du token JWT ou de la session) est-il propriétaire de cet objet, ou dispose-t-il d'une permission explicite accordée par le propriétaire ?
              </p>
              <p className="mt-3">
                Cette logique ne doit pas être dupliquée dans chaque endpoint, mais centralisée dans un middleware d'autorisation ou un service dédié, pour éviter les oublis. Les frameworks modernes comme Spring Security, Django Rest Framework, ou NestJS avec des guards proposent des mécanismes adaptés.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Pour BFLA</h3>
              <p>
                La remédiation de BFLA nécessite d'implémenter un système RBAC (Role-Based Access Control) robuste et de l'appliquer systématiquement à chaque endpoint via des annotations, des décorateurs, ou des middlewares. Chaque endpoint doit déclarer explicitement les rôles autorisés. Les endpoints administratifs ne doivent jamais être "sécurisés par l'obscurité" (non documentés mais accessibles) — ils doivent être protégés par des contrôles d'accès techniques.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Bonnes pratiques JWT</h3>
              <p>
                Les JWTs doivent utiliser des algorithmes asymétriques (RS256, ES256) plutôt que HS256 quand possible, contenir uniquement les claims nécessaires (principle of least privilege), avoir une durée de vie courte, et être validés côté serveur à chaque requête — jamais côté client uniquement. Le serveur doit valider la signature ET les claims de rôle/permission à chaque appel.
              </p>
            </section>
          </div>

          <div className="mt-12 rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Articles connexes</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog/vulnerabilite-idor-expliquee" className="text-sm text-[#DC2626] hover:text-red-400 transition-colors">→ Vulnérabilité IDOR expliquée</Link>
              <Link href="/blog/oauth-vulnerabilites-pentest" className="text-sm text-[#DC2626] hover:text-red-400 transition-colors">→ Vulnérabilités OAuth 2.0</Link>
              <Link href="/blog/methodologie-pentest-owasp" className="text-sm text-[#DC2626] hover:text-red-400 transition-colors">→ Méthodologie Pentest OWASP</Link>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-[#DC2626]/30 bg-[#DC2626]/5 p-8 text-center">
            <h3 className="mb-3 text-xl font-bold text-white">Besoin d'un pentest ?</h3>
            <p className="mb-6 text-gray-400">Vos APIs sont-elles exposées à des failles BOLA ou BFLA ? Nos experts réalisent des audits complets de sécurité API selon l'OWASP API Security Top 10.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#DC2626] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#B91C1C]">
              Demandez votre devis gratuit
            </Link>
          </div>

          <div className="mt-8">
            <Link href="/blog" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Retour au blog
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}
