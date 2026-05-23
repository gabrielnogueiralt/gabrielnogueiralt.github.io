import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/80 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <p className="font-mono text-xs text-slate-500">
          © {year} {profile.name}. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-cyan-400"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-cyan-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
