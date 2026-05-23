import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, children, className = '' }: SectionProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal scroll-mt-24 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 flex items-baseline gap-4">
          <span className="font-mono text-sm text-cyan-400">{eyebrow}</span>
          <span className="h-px flex-1 bg-slate-800" />
        </div>
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
