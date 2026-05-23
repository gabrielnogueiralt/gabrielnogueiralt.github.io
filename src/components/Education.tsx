import { profile } from '../data/profile'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="education" eyebrow="05. Education" title="Academic background">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.education.map((item) => (
          <li
            key={`${item.institution}-${item.period}`}
            className="rounded-lg border border-slate-800 bg-slate-900/40 p-5 transition-colors hover:border-cyan-400/40"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              {item.period}
            </p>
            <h3 className="mt-3 text-base font-semibold text-slate-100">
              {item.institution}
            </h3>
            <p className="mt-1 text-sm text-slate-400">{item.degree}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
