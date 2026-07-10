import { useEffect, useRef, useState } from 'react'
import { PhoneCall, TrendingUp, DollarSign, Clock } from 'lucide-react'
import Reveal from './Reveal.jsx'

const stats = [
  { icon: PhoneCall, value: 1200, suffix: '+', label: 'Calls Answered' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Pickup Rate' },
  { icon: DollarSign, value: 340, prefix: '$', suffix: 'K', label: 'Booked Revenue' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Always On', noCommify: true },
]

function useCountUp(target, active) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf
    const duration = 1400
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])
  return value
}

function Stat({ stat }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const count = useCountUp(stat.value, active)
  const display = stat.noCommify ? count : count.toLocaleString()

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 ring-1 ring-orange-500/25">
        <stat.icon className="h-6 w-6 text-orange-500" />
      </div>
      <div className="sm:text-left">
        <div className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {stat.prefix}
          {display}
          {stat.suffix}
        </div>
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          {stat.label}
        </div>
      </div>
    </div>
  )
}

export default function StatsBar() {
  return (
    <section className="relative py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
            {stats.map((stat) => (
              <Stat key={stat.label} stat={stat} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
