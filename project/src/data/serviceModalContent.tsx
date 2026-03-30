export const serviceModalContent: Record<string, React.ReactNode> = {
  'pentest-web': (
    <div className="space-y-8">
      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Ce que c'est vraiment
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Votre application web est votre surface d'attaque principale. Un pentest web, c'est une simulation d'attaque réelle menée par un expert humain — pas un scanner automatique — dont l'objectif est de trouver ce qu'un attaquant exploiterait avant qu'il ne le fasse.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Ce qu'on teste concrètement
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          Nous suivons le référentiel <span className="text-white font-bold">OWASP Top 10</span> et allons au-delà : injections SQL et NoSQL, failles d'authentification et de gestion de sessions, contournements de logique métier, escalades de privilèges, exposition de données sensibles, mauvaises configurations serveur, failles XSS et CSRF.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Ce qui distingue un vrai pentest d'un scan automatique, c'est précisément la <span className="text-white font-bold">logique métier</span> : un outil ne comprendra jamais que votre flux de paiement en 3 étapes peut être contourné à l'étape 2. Un expert humain, si.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Ce que vous recevez
        </h3>
        <div className="space-y-4">
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Rapport exécutif</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Destiné à votre direction ou à vos investisseurs — sans jargon technique, avec une évaluation claire du niveau de risque et des recommandations priorisées.
            </p>
          </div>
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Rapport technique</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Destiné à vos développeurs — chaque vulnérabilité documentée avec sa preuve d'exploitation (PoC), sa criticité CVSS, et les étapes de correction précises.
            </p>
          </div>
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Retest de validation</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Inclus : une fois vos correctifs déployés, nous vérifions que les failles identifiées sont bien fermées.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Comment se déroule une mission
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          La mission commence par un <span className="text-white font-bold">cadrage précis</span> avec vous : périmètre, environnement testé (production ou staging), identifiants de test, fonctionnalités critiques à prioriser. Aucune action destructive n'est menée sans accord préalable.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          La durée varie selon la complexité de l'application : comptez entre <span className="text-white font-bold">3 et 10 jours ouvrés</span>. Vous êtes informé à chaque étape.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Pour qui
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Ce service s'adresse aux <span className="text-white font-bold">startups SaaS et fintechs</span> qui doivent démontrer leur niveau de sécurité à des clients enterprise ou des auditeurs, aux e-commerces soumis à PCI DSS, et à toute organisation qui souhaite savoir, avec certitude, ce qu'un attaquant peut faire sur son application aujourd'hui.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Une question avant de démarrer ?
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Chaque application est différente. Si vous n'êtes pas sûr du périmètre ou du type de test adapté à votre situation, nous proposons un <span className="text-white font-bold">appel de cadrage gratuit de 30 minutes</span> pour vous orienter sans engagement.
        </p>
      </section>
    </div>
  ),

  'pentest-api': (
    <div className="space-y-8">
      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Ce que c'est vraiment
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          Vos APIs sont la colonne vertébrale de votre produit. Elles exposent vos données, orchestrent vos flux métier et connectent vos services tiers. Elles sont aussi la surface d'attaque la plus négligée — car invisibles pour un utilisateur lambda, mais parfaitement lisibles pour un attaquant.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Un pentest API, c'est une analyse manuelle et exhaustive de chaque endpoint exposé, avec pour objectif de trouver ce qu'un attaquant pourrait extraire, modifier ou détruire.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Ce qu'on teste concrètement
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          Nous couvrons l'intégralité de l'<span className="text-white font-bold">OWASP API Security Top 10</span> : broken object level authorization (BOLA), broken authentication, excessive data exposure, manque de rate limiting, broken function level authorization, mass assignment, mauvaises configurations de sécurité, injections, et gestion défaillante des versions d'API.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          Nous testons <span className="text-white font-bold">REST, GraphQL et WebSocket</span>. Sur GraphQL nous vérifions spécifiquement l'introspection exposée, les attaques par batching et la profondeur de requête non limitée — des vecteurs souvent ignorés par les prestataires généralistes.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Ce qu'un scanner ne verra jamais : qu'un endpoint <span className="text-white font-mono text-sm">/api/v1/orders/{'{id}'}</span> répond correctement à votre token mais accepte aussi l'ID d'un autre client. C'est un <span className="text-white font-bold">BOLA</span> — la faille API la plus répandue en 2024 — et elle se trouve uniquement à la main.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Ce que vous recevez
        </h3>
        <div className="space-y-4">
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Rapport exécutif</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Synthétisant le niveau de risque global, les impacts business concrets et les priorités de correction — lisible par votre direction ou vos investisseurs.
            </p>
          </div>
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Rapport technique</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Détaillant chaque vulnérabilité avec sa preuve d'exploitation, son score CVSS, les requêtes exactes utilisées et les étapes de correction précises pour vos développeurs.
            </p>
          </div>
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Retest de validation</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Inclus dans les 60 jours : une fois vos correctifs déployés, nous vérifions que chaque vulnérabilité critique et haute est effectivement fermée.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Comment se déroule une mission
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          Nous travaillons idéalement en <span className="text-white font-bold">grey box</span> : vous nous fournissez la collection Postman ou la spec OpenAPI/Swagger, des comptes de test sur différents rôles, et les flux métier critiques à prioriser. Ce cadrage nous permet d'aller en profondeur plutôt que de perdre du temps en reconnaissance.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Durée : <span className="text-white font-bold">3 à 7 jours ouvrés</span> selon le volume d'endpoints et la complexité des flux.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Pour qui
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          <span className="text-white font-bold">Fintechs et SaaS B2B</span> exposant des APIs partenaires ou clients, plateformes e-commerce avec des flux de paiement et de gestion de commandes, toute organisation devant démontrer sa conformité DORA, PCI DSS ou NIS2 à un auditeur ou à un client grand compte.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Une question avant de démarrer ?
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Chaque architecture API est différente. Si vous n'avez pas de documentation disponible ou si vous ne savez pas par où commencer, nous proposons un <span className="text-white font-bold">appel de cadrage gratuit de 30 minutes</span>.
        </p>
      </section>
    </div>
  ),

  'pentest-mobile': (
    <div className="space-y-8">
      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Ce que c'est vraiment
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          Votre application mobile est un client installé directement sur les appareils de vos utilisateurs. Elle embarque de la logique, stocke des données, communique avec vos serveurs. Pour un attaquant, c'est une opportunité d'analyser votre code, d'intercepter vos échanges et de contourner vos contrôles de sécurité sans jamais toucher à votre infrastructure.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Un pentest mobile, c'est une analyse complète de l'application — statique, dynamique et réseau — pour trouver ce qu'un attaquant motivé peut extraire ou manipuler avec l'application entre les mains.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Ce qu'on teste concrètement
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          Nous suivons le référentiel <span className="text-white font-bold">OWASP Mobile Security Testing Guide (MSTG)</span> sur Android et iOS.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          <span className="text-white font-bold">Côté analyse statique</span> : décompilation et reverse engineering de l'APK ou de l'IPA, recherche de secrets codés en dur (clés API, tokens, credentials), analyse de la logique d'authentification et de la gestion des certificats.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          <span className="text-white font-bold">Côté analyse dynamique</span> : interception du trafic réseau via proxy, contournement du certificate pinning, analyse du stockage local (SharedPreferences, SQLite, Keychain), détection des fuites de données dans les logs et la mémoire.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          <span className="text-white font-bold">Côté logique applicative</span> : contournement des contrôles d'accès, manipulation des requêtes API depuis l'application, tests d'élévation de privilèges.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Ce que vous recevez
        </h3>
        <div className="space-y-4">
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Rapport exécutif</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Avec le niveau de risque global et les impacts business — adapté à votre direction ou à vos investisseurs.
            </p>
          </div>
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Rapport technique complet</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Avec chaque vulnérabilité documentée, sa preuve d'exploitation, les extraits de code concernés et les corrections précises pour vos développeurs mobile.
            </p>
          </div>
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Retest de validation</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Inclus dans les 60 jours sur les vulnérabilités critiques et hautes.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Comment se déroule une mission
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          Vous nous fournissez le fichier <span className="text-white font-bold">APK ou IPA</span> et des comptes de test. Nous travaillons sur émulateur et appareil physique selon les vecteurs testés. Aucune action n'est menée sur votre environnement de production sans accord préalable.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Durée : <span className="text-white font-bold">4 à 8 jours ouvrés</span> selon la complexité de l'application et le nombre de flux critiques.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Pour qui
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Applications <span className="text-white font-bold">fintech ou néobanques</span> manipulant des données financières ou d'identité, applications de santé soumises à des exigences de confidentialité strictes, SaaS B2B avec un client mobile exposé à des utilisateurs entreprise, et toute application devant passer un audit de sécurité dans le cadre d'une certification ou d'un partenariat grand compte.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Une question avant de démarrer ?
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Vous avez une app en cours de développement et souhaitez anticiper les risques avant la mise en production ? Nous proposons un <span className="text-white font-bold">appel de cadrage gratuit de 30 minutes</span> pour définir le périmètre adapté à votre situation.
        </p>
      </section>
    </div>
  ),

  'phishing': (
    <div className="space-y-8">
      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Ce que c'est vraiment
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          La majorité des cyberattaques commencent par un email. Pas par une faille technique sophistiquée — par un employé qui clique. Le phishing reste le vecteur d'entrée numéro un des ransomwares, des fraudes au virement et des compromissions de comptes.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Une simulation de phishing, c'est une campagne d'attaque réaliste menée contre vos propres équipes, à leur insu, pour mesurer objectivement votre exposition humaine avant qu'un vrai attaquant ne le fasse.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Ce qu'on fait concrètement
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          Nous concevons des campagnes <span className="text-white font-bold">sur mesure</span> — pas des templates génériques. Nous reproduisons les techniques réelles utilisées par les groupes d'attaquants : usurpation d'identité d'un expéditeur interne, faux portails de connexion Microsoft 365 ou Google Workspace, prétextes adaptés à votre secteur et à votre actualité.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          Nous mesurons le <span className="text-white font-bold">taux d'ouverture, le taux de clic, le taux de saisie de credentials et le délai de signalement</span>. Ces quatre indicateurs donnent une image précise et chiffrable de votre niveau de résilience humaine.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Sur demande, nous pouvons étendre la campagne au <span className="text-white font-bold">vishing</span> — appels téléphoniques frauduleux — et au <span className="text-white font-bold">smishing</span> — SMS malveillants — pour couvrir l'ensemble des vecteurs d\'ingénierie sociale.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Ce que vous recevez
        </h3>
        <div className="space-y-4">
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Rapport comportemental complet</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Taux de succès par département, par niveau hiérarchique, par device utilisé. Vous identifiez précisément quelles équipes sont les plus exposées.
            </p>
          </div>
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Rapport exécutif</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Synthétisant le niveau de risque humain global, comparable aux benchmarks sectoriels.
            </p>
          </div>
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Recommandations de sensibilisation ciblées</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Nous ne vous donnons pas une liste générique de bonnes pratiques — nous vous indiquons exactement quelles équipes former en priorité et sur quels vecteurs.
            </p>
          </div>
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Retest</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Inclus à 90 jours pour mesurer l'évolution après vos actions de sensibilisation.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Comment se déroule une mission
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          La campagne est entièrement pilotée par nous. Vous nous fournissez une liste d'adresses email cibles et les informations de contexte utiles — organigramme partiel, outils internes utilisés, actualité récente de l'entreprise. Nous nous chargeons de la conception des prétextes, de l'infrastructure d'envoi et du tracking.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          Vos employés <span className="text-white font-bold">ne sont pas sanctionnés</span> — l'objectif est de mesurer et de former, pas de piéger. Nous pouvons intégrer une page de sensibilisation immédiate pour les employés ayant cliqué, transformant l'exercice en formation en temps réel.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Durée : déploiement en <span className="text-white font-bold">5 à 10 jours ouvrés</span> après cadrage. Rapport livré 48h après la fin de la campagne.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Pour qui
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Toute organisation manipulant des données sensibles ou des flux financiers, entreprises soumises à <span className="text-white font-bold">NIS2 ou DORA</span> devant démontrer un niveau de sensibilisation formalisé, DSI et RSSI souhaitant justifier un budget de sensibilisation avec des chiffres concrets, et directions générales voulant savoir honnêtement où en sont leurs équipes.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Une question avant de démarrer ?
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          La taille de l'équipe cible et le niveau de sophistication souhaité déterminent le format de la mission. Nous proposons un <span className="text-white font-bold">appel de cadrage gratuit de 30 minutes</span> pour construire le scénario le plus pertinent pour votre contexte.
        </p>
      </section>
    </div>
  ),

  'osint': (
    <div className="space-y-8">
      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Ce que c'est vraiment
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          Avant de lancer une attaque, un adversaire passe des heures à vous observer. Il cartographie vos employés sur LinkedIn, identifie vos sous-domaines exposés, analyse vos offres d'emploi pour déduire votre stack technique, et collecte les credentials de vos équipes fuités dans des bases de données publiques.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          Tout ça sans jamais toucher à vos systèmes. Légalement. Et souvent sans que vous le sachiez.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Une mission OSINT, c'est reproduire exactement ce travail de reconnaissance pour vous montrer ce qu'un attaquant voit de vous — avant qu'il ne passe à l'action.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Ce qu'on cartographie concrètement
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          <span className="text-white font-bold">Infrastructure exposée</span> : sous-domaines actifs et oubliés, services exposés sur internet, certificats SSL révélant des actifs cachés, buckets cloud mal configurés, ports et services accessibles publiquement.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          <span className="text-white font-bold">Surface humaine</span> : employés identifiables, rôles et responsabilités exposés, adresses email professionnelles reconstituables, présence sur les forums techniques et les réseaux sociaux, informations exploitables pour du spear phishing ciblé.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          <span className="text-white font-bold">Fuites de données</span> : credentials d'employés présents dans des bases de données compromises, documents internes indexés publiquement, informations sensibles exposées dans des repos GitHub publics ou des pastebins.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          <span className="text-white font-bold">Empreinte technique</span> : technologies et versions détectables, prestataires et fournisseurs identifiables, dépendances tierces exposées, historique DNS et changements d'infrastructure.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Ce que vous recevez
        </h3>
        <div className="space-y-4">
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Rapport de cartographie complet</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Documentant l'intégralité de votre surface d'attaque externe visible — chaque asset exposé, chaque fuite identifiée, chaque vecteur d'entrée potentiel pour un attaquant.
            </p>
          </div>
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Niveau de risque par catégorie</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Infrastructure, humain, données, technique — avec une priorisation claire des actions à mener.
            </p>
          </div>
          <div className="bg-[#E63946]/5 border-l-[3px] border-[#E63946] rounded-md p-5">
            <p className="text-white font-bold mb-1">Recommandations concrètes</p>
            <p className="text-[#8B949E] text-[15px] leading-[1.8]">
              Quoi retirer d'internet, quoi surveiller en continu, quels employés sensibiliser en priorité, quels credentials changer immédiatement.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Comment se déroule une mission
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8] mb-4">
          Nous travaillons exclusivement depuis des <span className="text-white font-bold">sources ouvertes et légales</span> — aucune intrusion, aucun accès non autorisé. Vous nous fournissez uniquement votre nom de domaine principal et le nom légal de votre société. Nous faisons le reste.
        </p>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          Durée : <span className="text-white font-bold">3 à 5 jours ouvrés</span>. Cette mission précède souvent un pentest externe ou une simulation de phishing — les deux bénéficient directement des informations collectées.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Pour qui
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          <span className="text-white font-bold">Startups ayant levé des fonds récemment</span> et devenant des cibles visibles, entreprises avant une certification ISO 27001 ou un audit de conformité, DSI souhaitant connaître leur exposition réelle avant d'engager des travaux de sécurité, et toute organisation voulant voir ce qu'un attaquant voit avant de se faire surprendre.
        </p>
      </section>

      <div className="border-t border-white/[0.06]"></div>

      <section>
        <h3 className="text-white text-base font-bold uppercase tracking-[0.1em] mb-4">
          Une question avant de démarrer ?
        </h3>
        <p className="text-[#8B949E] text-[15px] leading-[1.8]">
          L'OSINT est souvent la première étape d'une stratégie de sécurité globale. Si vous ne savez pas par où commencer, nous proposons un <span className="text-white font-bold">appel de cadrage gratuit de 30 minutes</span> pour identifier les priorités.
        </p>
      </section>
    </div>
  ),
};
