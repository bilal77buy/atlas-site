'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: FAQItem[]
  title?: string
}

export default function FAQSection({ items, title = 'Questions fréquentes' }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section className="section-padding">
      <div className="section-container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <h2 className="section-title mb-10 text-center">{title}</h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((item, i) => (
            <div key={i} className="card">
              <button
                className="w-full flex items-center justify-between gap-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-white text-sm md:text-base">{item.question}</span>
                {open === i ? (
                  <ChevronUp className="w-4 h-4 text-accent flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted flex-shrink-0" />
                )}
              </button>
              {open === i && (
                <p className="mt-4 text-muted text-sm leading-relaxed">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
