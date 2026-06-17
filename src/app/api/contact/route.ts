import { NextRequest, NextResponse } from 'next/server'

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

    // Log for now - connect to email service (Resend, SendGrid, etc.) via env vars
    console.log('New contact submission:', { nom, entreprise, email, besoin })

    // TODO: Send email via Resend
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({ from: 'noreply@atlasredconsult.com', to: process.env.CONTACT_EMAIL, subject: `Nouvelle demande de ${entreprise}`, ... })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
