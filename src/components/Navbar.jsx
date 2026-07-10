import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './ui.jsx'
import { NAV_LINKS, SITE } from '../config.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')
  const [scrolled, setScrolled] = useState(false)

  // Detach the nav into a floating pill once the user scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: underline the link whose section is in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        scrolled ? 'px-3 pt-3 sm:px-6 sm:pt-5' : 'px-0 pt-0'
      }`}
    >
      <div
        className={`mx-auto border bg-slate-950/70 backdrop-blur-md transition-all duration-300 ease-out ${
          scrolled
            ? 'max-w-7xl rounded-2xl border-slate-800/80 shadow-lg shadow-black/40'
            : 'max-w-none rounded-none border-transparent shadow-none'
        }`}
      >
        <nav
          className={`mx-auto flex h-16 items-center justify-between gap-4 sm:h-[72px] ${
            scrolled ? 'px-4 sm:px-6' : 'max-w-7xl px-4 sm:px-6 lg:px-8'
          }`}
        >
          <Logo subtitle="by Phoenix" />

          {/* Desktop links */}
          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => {
              const isActive = active === l.id
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative text-[13px] font-medium uppercase tracking-[0.15em] transition-colors ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-orange-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              )
            })}
          </div>

          {/* Desktop buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={SITE.phoneHref}
              className="rounded-lg bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-950 transition-all hover:bg-slate-200"
            >
              Call AI
            </a>
            <a
              href={SITE.calendly}
              className="rounded-lg border border-slate-700 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:border-orange-500/60 hover:bg-orange-500/10"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-slate-800 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-slate-800 px-4 pb-4 pt-2 lg:hidden">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-widest hover:bg-slate-800 ${
                  active === l.id ? 'text-orange-400' : 'text-slate-200'
                }`}
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <a
                href={SITE.phoneHref}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-white px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-slate-950"
              >
                Call AI
              </a>
              <a
                href={SITE.calendly}
                onClick={() => setOpen(false)}
                className="rounded-lg border border-slate-700 px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-white"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
