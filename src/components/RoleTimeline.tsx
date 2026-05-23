import type { ExperienceItem } from '../data/profile'

type RoleTimelineProps = {
  items: ExperienceItem[]
}

export function RoleTimeline({ items }: RoleTimelineProps) {
  return (
    <ol className="relative space-y-10 border-l border-slate-800 pl-8 sm:pl-10">
      {items.map((job, idx) => (
        <li key={`${job.company}-${job.start}-${idx}`} className="relative">
          <span
            className={`absolute -left-[37px] top-1.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 sm:-left-[45px] ${
              job.current
                ? 'border-cyan-400 bg-cyan-400/30'
                : 'border-slate-700 bg-slate-950'
            }`}
            aria-hidden="true"
          />

          <div className="flex flex-wrap items-baseline gap-x-3">
            <h3 className="text-lg font-semibold text-slate-100">{job.role}</h3>
            <span className="text-slate-500">·</span>
            <span className="text-cyan-400">{job.company}</span>
          </div>

          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-slate-500">
            {job.start} – {job.end} · {job.location}
          </p>

          {job.description && (
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              {job.description}
            </p>
          )}

          {job.stack && job.stack.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-slate-700/70 bg-slate-800/40 px-2 py-0.5 font-mono text-xs text-slate-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}
