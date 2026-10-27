import { NextRequest, NextResponse } from 'next/server'

const CONTACT_EMAIL = 'contact@atlasredconsult.fr'

// Échappe les champs saisis par l'utilisateur avant de les mettre dans l'email HTML
const esc = (v: unknown) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .slice(0, 500)

type Answer = { question: string; answer: string; points: number }

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, company_size, phone, score, level } = body
    const answers: Answer[] = Array.isArray(body.answers) ? body.answers.slice(0, 20) : []

    if (!name || !email || !company || !company_size) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const rows = answers
      .map(
        (a) =>
          `<tr><td style="padding:4px 8px">${esc(a.question)}</td><td style="padding:4px 8px">${esc(
            a.answer
          )}</td><td style="padding:4px 8px;text-align:center">${Number(a.points) || 0}</td></tr>`
      )
      .join('')

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'Atlas RedConsult <onboarding@resend.dev>',
        to: CONTACT_EMAIL,
        replyTo: email,
        subject: `Nouveau lead quiz — ${esc(company)} (${Number(score) || 0}/28, ${esc(level)})`,
        html: `
          <h2>Nouveau lead — Diagnostic maturité cyber</h2>
          <p><strong>Nom :</strong> ${esc(name)}</p>
          <p><strong>Entreprise :</strong> ${esc(company)} (${esc(company_size)} salariés)</p>
          <p><strong>Email :</strong> ${esc(email)}</p>
          <p><strong>Téléphone :</strong> ${esc(phone) || 'Non renseigné'}</p>
          <p><strong>Score :</strong> ${Number(score) || 0} / 28 — ${esc(level)}</p>
          <table border="1" cellspacing="0" style="border-collapse:collapse;font-size:13px">
            <tr><th>Question</th><th>Réponse</th><th>Pts</th></tr>
            ${rows}
          </table>
        `,
      })
    } else {
      console.log('Quiz lead (no RESEND_API_KEY):', { name, email, company, score, level })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Quiz email error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
