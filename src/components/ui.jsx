import { Flame } from 'lucide-react'

// Wordmark: "Phoenix Inc." with an orange flame + orange accent dot.
// `subtitle` renders a two-line lockup with wide letter-spacing (nav style).
export function Logo({ className = '', subtitle }) {
  return (
    <a href="#top" className={`group flex items-center gap-3 ${className}`}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10 ring-1 ring-orange-500/30">
        <Flame className="h-5 w-5 text-orange-500 transition-transform group-hover:scale-110" />
      </span>
      {subtitle ? (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-semibold tracking-[0.22em] text-white sm:text-xl">
            PHOENIX INC<span className="text-orange-500">.</span>
          </span>
          <span className="mt-1.5 text-[11px] font-medium tracking-widest text-slate-500">
            {subtitle}
          </span>
        </span>
      ) : (
        <span className="text-lg font-extrabold tracking-tight text-white">
          Phoenix Inc
          <span className="text-orange-500">.</span>
        </span>
      )}
    </a>
  )
}

// Primary = solid glowing orange. Secondary = ghost/outline.
export function Button({ as = 'a', variant = 'primary', className = '', children, ...props }) {
  const Tag = as
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'
  const variants = {
    primary:
      'bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:bg-orange-400 hover:shadow-orange-500/50 hover:-translate-y-0.5',
    secondary:
      'border border-slate-700 bg-slate-900/50 text-slate-100 hover:border-orange-500/50 hover:bg-slate-800 hover:text-white',
    ghost: 'text-slate-300 hover:text-white',
  }
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

// Reusable little pill/eyebrow above section headings.
export function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">
      {children}
    </span>
  )
}
