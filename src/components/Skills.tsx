import { profile } from '../data/profile'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" eyebrow="02. Skills" title="Tools I work with">
      <div className="mb-10 rounded-lg border border-slate-800 bg-slate-900/40 p-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-500">
          Top skills
        </p>
        <ul className="flex flex-wrap gap-2">
          {profile.topSkills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.skillGroups.map((group) => (
          <div
            key={group.name}
            className="rounded-lg border border-slate-800 bg-slate-900/40 p-5"
          >
            <h3 className="mb-3 text-sm font-semibold text-slate-200">
              {group.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-slate-700/70 bg-slate-800/40 px-2.5 py-1 text-xs text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
