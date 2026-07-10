import { useEffect, useState } from 'react'
import { PhoneCall, CalendarCheck } from 'lucide-react'
import { SITE } from '../config.js'

// Fixed bottom bar, mobile-only. Appears once the user has scrolled past
// the hero so it never competes with the hero's own CTAs.
export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-slate-800 bg-slate-950/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={SITE.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-950"
        >
          <PhoneCall className="h-4 w-4" />
          Call AI
        </a>
        <a
          href={SITE.calendly}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-orange-500/30"
        >
          <CalendarCheck className="h-4 w-4" />
          Book Call
        </a>
      </div>
    </div>
  )
}
