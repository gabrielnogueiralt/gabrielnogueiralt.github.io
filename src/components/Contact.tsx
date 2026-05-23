import { profile } from '../data/profile'
import { useReveal } from '../hooks/useReveal'

export function Contact() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="contact"
      ref={ref}
      className="reveal scroll-mt-24 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 font-mono text-sm text-cyan-400">07. Contact</p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-5xl">
          Let's build something
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
          I'm always open to discussing engineering opportunities, research
          collaborations, or interesting problems at the intersection of web
          systems and AI. My inbox is the fastest way to reach me.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center rounded-md border border-cyan-400/60 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            Say hello
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5ZM8 19H5V8h3v11Zm-1.5-12.3A1.7 1.7 0 1 1 8.2 5a1.7 1.7 0 0 1-1.7 1.7ZM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5V19Z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <p className="mt-10 font-mono text-xs text-slate-500">
          {profile.email}
        </p>
      </div>
    </section>
  )
}
