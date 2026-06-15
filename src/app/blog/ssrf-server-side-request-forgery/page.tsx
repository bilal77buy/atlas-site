import type { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'SSRF — Server Side Request Forgery : Comprendre et Prévenir | Atlas RedConsult',
  description:
    'Les attaques SSRF permettent d\'accéder aux métadonnées cloud et aux ressources internes. Comprendre le mécanisme et les mesures de protection.',
  alternates: { canonical: 'https://atlasredconsult.fr/blog/ssrf-server-side-request-forgery' },
}

export default function SSRFPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'SSRF — Server Side Request Forgery : Comprendre et Prévenir',
    datePublished: '2024-02-19',
    author: { '@type': 'Organization', name: 'Atlas RedConsult' },
    publisher: { '@type': 'Organization', name: 'Atlas RedConsult' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://atlasredconsult.fr/blog/ssrf-server-side-request-forgery' },
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://atlasredconsult.fr' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://atlasredconsult.fr/blog' },
      { '@type': 'ListItem', position: 3, name: 'SSRF', item: 'https://atlasredconsult.fr/blog/ssrf-server-side-request-forgery' },
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
              <span className="text-gray-300">SSRF</span>
            </nav>
          </div>
        </div>
        <article className="mx-auto max-w-4xl px-6 py-12 md:py-20">
          <header className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-[#DC2626]/10 px-3 py-1 text-xs font-medium text-[#DC2626] border border-[#DC2626]/20">Sécurité Cloud</span>
              <time dateTime="2024-02-19" className="text-sm text-gray-500">19 février 2024</time>
              <span className="text-sm text-gray-500">· 8 min de lecture</span>
            </div>
            <h1 className="font-display mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              <span className="text-[#DC2626]">SSRF</span> — Server Side Request Forgery : Comprendre et Prévenir
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Le SSRF est l'une des vulnérabilités les plus dangereuses dans les environnements cloud modernes. En forçant le serveur à effectuer des requêtes vers des ressources internes, un attaquant peut compromettre l'ensemble de l'infrastructure.
            </p>
          </header>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Définition du SSRF</h2>
              <p>
                Le Server-Side Request Forgery (SSRF) est une vulnérabilité applicative qui permet à un attaquant de forcer le serveur d'une application à effectuer des requêtes HTTP vers une destination choisie par l'attaquant. Cette destination peut être interne au réseau de l'organisation (inaccessible depuis Internet) ou une adresse spéciale comme les endpoints de métadonnées des instances cloud.
              </p>
              <p className="mt-4">
                L'OWASP a intégré le SSRF dans son Top 10 2021 à la position A10:2021, reflétant son importance croissante dans les architectures cloud-native. Sa présence dans le Top 10 OWASP API Security (API7:2023) confirme également son impact spécifique sur les APIs modernes.
              </p>
              <p className="mt-4">
                Le SSRF exploite une fonctionnalité légitime des applications : la capacité à effectuer des requêtes vers d'autres serveurs (pour récupérer des aperçus d'URL, des images, des webhooks, ou des données depuis des APIs tierces). Le problème survient quand l'URL cible fournie par l'utilisateur n'est pas suffisamment validée et filtrée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Mécanisme d'une attaque SSRF</h2>
              <p>
                Pour comprendre le SSRF, considérons une application qui propose une fonctionnalité de prévisualisation de liens : l'utilisateur soumet une URL, le serveur la récupère et renvoie un aperçu (titre, description, image). Si l'application ne filtre pas les URLs soumises, l'attaquant peut substituer une URL légitime par une adresse interne.
              </p>
              <p className="mt-4">
                En soumettant une URL pointant vers des ressources internes inaccessibles depuis Internet — comme l'interface d'administration d'une base de données Redis sur le port 6379, un service interne sur le réseau privé, ou les endpoints de métadonnées des instances cloud — l'attaquant reçoit en réponse les données que le serveur a pu récupérer depuis ces ressources internes.
              </p>
              <p className="mt-4">
                Le serveur d'application agit alors comme un proxy involontaire, effectuant depuis le réseau interne des requêtes que l'attaquant ne pourrait pas effectuer directement depuis Internet. C'est le principe fondamental du SSRF.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Le risque spécifique des environnements cloud : les endpoints de métadonnées</h2>
              <p>
                Dans les environnements cloud modernes (AWS, GCP, Azure), chaque instance de machine virtuelle ou conteneur dispose d'un endpoint de métadonnées accessible uniquement depuis l'instance elle-même. Ces endpoints fournissent des informations de configuration et des credentials temporaires permettant à l'instance d'accéder aux services cloud.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-5">
                  <h3 className="font-semibold text-white mb-2">AWS EC2 Instance Metadata Service (IMDS)</h3>
                  <p className="text-sm text-gray-400">
                    L'endpoint <code className="text-[#DC2626]">http://169.254.169.254/latest/meta-data/</code> expose les credentials IAM temporaires de l'instance. Une SSRF permettant d'accéder à cet endpoint peut révéler des clés d'accès AWS temporaires avec les permissions assignées au rôle IAM de l'instance — potentiellement très étendues. AWS IMDSv2 mitigue ce risque par l'exigence d'un token de session, mais les déploiements n'ont pas tous migré.
                  </p>
                </div>
                <div className="rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-5">
                  <h3 className="font-semibold text-white mb-2">Google Cloud Platform</h3>
                  <p className="text-sm text-gray-400">
                    Sur GCP, l'endpoint de métadonnées est accessible à <code className="text-[#DC2626]">http://metadata.google.internal/computeMetadata/v1/</code>. Il expose les service account tokens permettant d'accéder aux APIs Google Cloud (GCS, Pub/Sub, BigQuery, etc.) avec les permissions du service account de l'instance.
                  </p>
                </div>
                <div className="rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-5">
                  <h3 className="font-semibold text-white mb-2">Microsoft Azure</h3>
                  <p className="text-sm text-gray-400">
                    Azure expose ses métadonnées via <code className="text-[#DC2626]">http://169.254.169.254/metadata/instance</code> et l'IMDS Azure permet d'obtenir des tokens d'accès pour les Managed Identities assignées à la VM, donnant potentiellement accès aux ressources Azure autorisées.
                  </p>
                </div>
              </div>

              <p className="mt-4">
                L'exploitation d'une SSRF vers ces endpoints peut mener à une compromission complète du compte cloud : exfiltration de données depuis les buckets de stockage, déploiement de backdoors dans les services serverless, pivotement vers d'autres ressources du VPC, ou même prise de contrôle de l'ensemble de l'organisation cloud.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">SSRF aveugle vs SSRF classique</h2>
              <p>
                Les SSRF se divisent en deux variantes selon la capacité à récupérer les réponses :
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-5">
                  <h3 className="font-semibold text-white mb-2">SSRF classique (in-band)</h3>
                  <p className="text-sm text-gray-400">
                    La réponse de la requête interne est renvoyée à l'attaquant dans la réponse HTTP. C'est la forme la plus directement exploitable : l'attaquant voit le contenu des ressources internes qu'il cible. Exemple : la prévisualisation d'URL qui retourne le contenu de la page dans la réponse de l'API.
                  </p>
                </div>
                <div className="rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-5">
                  <h3 className="font-semibold text-white mb-2">SSRF aveugle (out-of-band)</h3>
                  <p className="text-sm text-gray-400">
                    La requête interne est effectuée mais la réponse n'est pas retournée à l'attaquant. Pour confirmer et exploiter la vulnérabilité, des techniques out-of-band sont nécessaires (DNS lookups vers un serveur contrôlé, timing attacks, ou interaction avec des services qui réagissent différemment selon la destination). Outils comme Burp Collaborator ou interactsh facilitent cette détection.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Détection en pentest</h2>
              <p>
                La détection des SSRF lors d'un pentest suit plusieurs étapes :
              </p>
              <ul className="mt-4 list-disc list-inside space-y-3">
                <li><strong className="text-white">Identification des fonctionnalités à risque :</strong> toute fonctionnalité qui accepte une URL ou une adresse comme paramètre est candidate. Webhooks, récupération d'images distantes, imports de fichiers par URL, prévisualisations de liens, fonctions d'export PDF qui rendent du HTML.</li>
                <li><strong className="text-white">Tests avec adresses loopback :</strong> substituer l'URL légitime par <code className="text-[#DC2626]">http://127.0.0.1/</code>, <code className="text-[#DC2626]">http://localhost/</code>, ou des variations encodées (décimal, hexadécimal, IPv6) pour contourner les filtres simples.</li>
                <li><strong className="text-white">Interactions DNS out-of-band :</strong> utiliser des domaines collaboratifs pour détecter les SSRF aveugles même quand les réponses ne sont pas renvoyées.</li>
                <li><strong className="text-white">Tests de ports internes :</strong> scanner les ports typiquement ouverts en interne (22, 3306, 5432, 6379, 8080) pour cartographier les services internes accessibles via SSRF.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Mesures de prévention et remédiation</h2>

              <h3 className="text-xl font-semibold text-white mt-4 mb-3">Allowlists strictes</h3>
              <p>
                La contre-mesure la plus efficace contre le SSRF est de n'autoriser les requêtes sortantes que vers des destinations explicitement listées et approuvées (allowlist). Si l'application doit récupérer des images Twitter, listez uniquement les domaines Twitter autorisés. Les expressions régulières trop larges sur les allowlists peuvent être contournées (exemple : un filtre qui accepte tout ce qui contient "trusted.com" peut être trompé par "trusted.com.attacker.com").
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Blocage des adresses privées et de métadonnées</h3>
              <p>
                Bloquer explicitement les plages d'adresses RFC 1918 (10.x.x.x, 172.16-31.x.x, 192.168.x.x), les adresses loopback (127.0.0.0/8), les adresses de lien-local (169.254.0.0/16), et les adresses IPv6 équivalentes. Ce blocage doit intervenir après résolution DNS pour éviter le DNS rebinding.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Migration vers IMDSv2 (AWS)</h3>
              <p>
                Pour les déploiements AWS, migrer vers IMDSv2 (Instance Metadata Service version 2) qui exige un token de session obtenu via une requête PUT avant de pouvoir accéder aux métadonnées. Cette mesure rend l'exploitation SSRF des métadonnées AWS beaucoup plus difficile.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Segmentation réseau</h3>
              <p>
                Appliquer le principe de moindre privilège réseau : les serveurs d'application ne devraient pas avoir accès direct aux bases de données, aux services d'orchestration internes, ou aux endpoints d'administration. La segmentation en sous-réseaux avec des firewalls internes limite l'impact d'une SSRF même exploitée.
              </p>
            </section>
          </div>

          <div className="mt-12 rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Articles connexes</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog/methodologie-pentest-owasp" className="text-sm text-[#DC2626] hover:text-red-400 transition-colors">→ Méthodologie Pentest OWASP</Link>
              <Link href="/blog/bola-bfla-securite-api" className="text-sm text-[#DC2626] hover:text-red-400 transition-colors">→ BOLA et BFLA — Sécurité API</Link>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-[#DC2626]/30 bg-[#DC2626]/5 p-8 text-center">
            <h3 className="mb-3 text-xl font-bold text-white">Besoin d'un pentest ?</h3>
            <p className="mb-6 text-gray-400">Vos applications cloud sont-elles exposées au SSRF ? Nos experts identifient et qualifient les vulnérabilités SSRF lors de pentests web et API complets.</p>
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
