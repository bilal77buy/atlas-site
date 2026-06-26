import { NextRequest, NextResponse } from 'next/server'

const CONTACT_EMAIL = 'contact@atlasredconsult.fr'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nom, entreprise, email, telephone, besoin, message } = body

    if (!nom || !entreprise || !email || !besoin || !message) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'Atlas RedConsult <onboarding@resend.dev>',
        to: CONTACT_EMAIL,
        subject: `Nouvelle demande de devis — ${entreprise}`,
        html: `
          <h2>Nouvelle demande de devis — Atlas RedConsult</h2>
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Entreprise :</strong> ${entreprise}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${telephone || 'Non renseigné'}</p>
          <p><strong>Besoin :</strong> ${besoin}</p>
          <p><strong>Message :</strong></p>
          <p>${message}</p>
        `,
      })
    } else {
      console.log('Contact form submission (no RESEND_API_KEY):', { nom, entreprise, email, besoin })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
