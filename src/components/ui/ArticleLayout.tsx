import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react'

interface ArticleLayoutProps {
  title: string
  description: string
  category: string
  readTime: string
  date: string
  children: React.ReactNode
}

export default function ArticleLayout({ title, description, category, readTime, date, children }: ArticleLayoutProps) {
  return (
    <>
      <section className="relative pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-muted/20 via-transparent to-transparent pointer-events-none" />
        <div className="section-container relative max-w-3xl">
          <Link href="/ressources" className="inline-flex items-center gap-2 text-muted hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour aux ressources
          </Link>
          <span className="badge mb-4 inline-block">{category}</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">{title}</h1>
          <p className="text-muted text-lg leading-relaxed mb-6">{description}</p>
          <div className="flex items-center gap-4 text-xs text-muted">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {readTime}</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <article className="lg:col-span-3 prose-dark max-w-none">
              {children}
            </article>
            <aside className="space-y-4">
              <div className="card sticky top-24">
                <h3 className="font-semibold text-white text-sm mb-4">Besoin d&apos;un pentest ?</h3>
                <p className="text-muted text-xs mb-4">Nos experts évaluent vos défenses et vous fournissent un rapport actionnable.</p>
                <Link href="/contact" className="btn-primary text-xs px-3 py-2 w-full justify-center">
                  Demander un audit <ArrowRight className="w-3 h-3" />
                </Link>
                <div className="mt-4 pt-4 border-t border-border space-y-2">
                  <p className="text-xs font-medium text-white">Services associés</p>
                  {[['Pentest entreprise', '/services/pentest-entreprise'], ['Pentest web', '/services/pentest-web'], ['Red Team', '/services/red-team']].map(([l, h]) => (
                    <Link key={l} href={h} className="block text-xs text-muted hover:text-white transition-colors">{l} →</Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
