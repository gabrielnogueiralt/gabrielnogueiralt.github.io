import { profile } from '../data/profile'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,#020617)] [mask-image:linear-gradient(to_bottom,transparent,black_40%)]"
      />

      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <p className="mb-5 font-mono text-sm text-cyan-400">Hi, my name is</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
              {profile.name}.
            </h1>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-400 sm:text-5xl lg:text-6xl">
              {profile.title}
            </h2>

            <p className="mt-6 max-w-2xl font-mono text-sm text-slate-500 sm:text-base">
              {profile.tagline}
            </p>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              I build scalable web systems and LLM-powered software — bridging
              modern frontend architecture, high-performance backends, and AI-driven
              developer workflows.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-md border border-cyan-400/60 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-400/20 hover:text-cyan-200"
              >
                View experience
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100"
              >
                Get in touch
              </a>
            </div>

            <p className="mt-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              {profile.location}
            </p>
          </div>

          <div className="mx-auto w-full max-w-[200px] shrink-0 sm:max-w-[220px] lg:mx-0 lg:max-w-[220px]">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-transparent to-cyan-400/10 blur-sm"
              />
              <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/50 p-1 shadow-xl shadow-cyan-950/30">
                <img
                  src={profile.avatar}
                  alt={profile.avatarAlt}
                  width={220}
                  height={220}
                  className="aspect-square w-full rounded-xl object-cover object-center"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
