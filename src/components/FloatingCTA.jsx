import { useEffect, useState } from 'react'
import { PhoneCall } from 'lucide-react'

// Floating action button, desktop-only. Appears after scrolling past the
// hero and links to the live demo section.
export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#demo"
      className={`fixed bottom-8 right-8 z-40 hidden items-center gap-2 rounded-full bg-orange-500 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-orange-500/60 lg:flex ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
      </span>
      <PhoneCall className="h-4 w-4" />
      Hear The AI Live
    </a>
  )
}
