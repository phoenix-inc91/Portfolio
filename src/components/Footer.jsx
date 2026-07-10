import { SITE } from '../config.js'

export default function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-slate-500">
          © {SITE.year} {SITE.company} — AI Voice Dispatchers &amp; Websites Devs.
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}
