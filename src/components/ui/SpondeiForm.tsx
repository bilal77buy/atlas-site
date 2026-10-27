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
    const container = ref.current
    if (!container) return

    // Le script est (ré)injecté après le montage du conteneur pour que le
    // formulaire se charge aussi lors d'une navigation interne Next.js.
    const script = document.createElement('script')
    script.src = SPONDEI_SCRIPT
    script.async = true
    container.appendChild(script)

    return () => {
      script.remove()
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
      `}</style>
      <div
        ref={ref}
        className="w-full min-h-[800px] bg-[#0A0A0A] rounded-xl overflow-hidden"
        dangerouslySetInnerHTML={{ __html: SPONDEI_EMBED }}
      />
    </>
  )
}
