'use client'

import { useEffect, useRef } from 'react'

// Code d'intégration Spondei fourni (formulaire de contact Atlas RedConsult).
// Injecté en HTML brut car Spondei utilise des attributs non standards
// (displaylogo, src, type...) que React/TypeScript n'acceptent pas sur un <div>.
const SPONDEI_EMBED = `<div displaylogo="false" displaylanguageupdate="false" lang="fr" attr="sp-container-standard" id="sp-container-standard" src="https://atlas-redconsult.spondei.com/s/SY0T0_GP-Zs=" height="800" width="100%" type="inline"></div>`

const SPONDEI_SCRIPT = 'https://app.spondei.com/assets/js/embedCode.js'

export default function SpondeiForm() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const w = window as unknown as {
      SpondeiEmbed?: { init?: (root?: Document) => void; upgrade?: (root?: Document) => void }
    }

    // Le script Spondei ne s'exécute qu'une seule fois par chargement de page
    // (garde globale). Lors d'une navigation interne Next.js, il est déjà
    // chargé : on relance simplement son initialisation sur le nouveau conteneur.
    if (w.SpondeiEmbed?.init) {
      w.SpondeiEmbed.upgrade?.(document)
      w.SpondeiEmbed.init(document)
      return
    }

    if (!document.querySelector(`script[src="${SPONDEI_SCRIPT}"]`)) {
      const script = document.createElement('script')
      script.src = SPONDEI_SCRIPT
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <>
      {/* Le script Spondei force un fond blanc sur le conteneur : on le remet en noir */}
      <style>{`
        #sp-container-standard,
        #sp-frame-standard {
          background: #0A0A0A !important;
          background-color: #0A0A0A !important;
          border: none !important;
          color-scheme: dark;
        }
        /* Le contenu de l'iframe Spondei n'est pas stylable depuis le site :
           on inverse ses couleurs (fond blanc -> noir) en conservant les teintes */
        #sp-frame-standard {
          filter: invert(1) hue-rotate(180deg);
          background: #FFFFFF !important;
        }
      `}</style>
      <div
        ref={ref}
        className="w-full min-h-[800px] bg-[#0A0A0A] rounded-xl overflow-hidden"
        dangerouslySetInnerHTML={{ __html: SPONDEI_EMBED }}
      />
    </>
  )
}
