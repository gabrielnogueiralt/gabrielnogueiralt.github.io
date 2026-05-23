import { profile } from '../data/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" eyebrow="01. About" title="A bit about me">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.summary}
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            Below is my current engineering focus — a quick map of where I spend
            most of my time.
          </p>
        </div>

        <ul className="grid gap-4 lg:col-span-2">
          {profile.focusAreas.map((area) => (
            <li
              key={area.title}
              className="rounded-lg border border-slate-800 bg-slate-900/40 p-5 transition-colors hover:border-cyan-400/40"
            >
              <h3 className="text-sm font-semibold text-cyan-400">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {area.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
