import { profile } from '../data/profile'
import { Section } from './Section'

export function Interests() {
  return (
    <Section id="interests" eyebrow="06. Interests" title="What I'm exploring">
      <ul className="grid gap-3 sm:grid-cols-2">
        {profile.interests.map((interest) => (
          <li
            key={interest}
            className="flex gap-3 rounded-lg border border-slate-800 bg-slate-900/40 p-4"
          >
            <span
              aria-hidden="true"
              className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
            />
            <span className="text-sm leading-relaxed text-slate-300 sm:text-base">
              {interest}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
