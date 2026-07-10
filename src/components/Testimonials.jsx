import { Star, Thermometer, Home, Zap, Trees, Bug, DoorOpen } from 'lucide-react'
import { Eyebrow } from './ui.jsx'
import Reveal from './Reveal.jsx'

const testimonials = [
  {
    quote:
      'The AI booked a $4k roof job at 11pm on a Sunday. I was asleep. Woke up to a confirmed slot already on my calendar.',
    name: 'Mike Delgado',
    company: 'Summit Roofing Co.',
    trade: 'Roofing',
    icon: Home,
  },
  {
    quote:
      "We used to lose two or three AC calls a day in July. Now the AI answers every single one and quotes the visit before I even see my phone.",
    name: 'Carla Jimenez',
    company: 'Coastal Air & Heat',
    trade: 'HVAC',
    icon: Thermometer,
  },
  {
    quote:
      'A breaker panel emergency came in at 2am. The AI collected the address and urgency and had my on-call guy dispatched in minutes.',
    name: 'Darnell Price',
    company: 'Voltify Electrical',
    trade: 'Electrical',
    icon: Zap,
  },
  {
    quote:
      "Spring is chaos for us. The AI now handles every 'can you quote my yard' call so my crew stays heads-down on install days.",
    name: 'Ana Ruiz',
    company: 'Greenline Landscapes',
    trade: 'Landscaping',
    icon: Trees,
  },
  {
    quote:
      'Rodent calls come in scared and urgent. The AI calms them down, gets the details right, and books same-day slots automatically.',
    name: 'Tom Whitfield',
    company: 'ProGuard Pest Control',
    trade: 'Pest Control',
    icon: Bug,
  },
  {
    quote:
      "Locked-out-of-the-garage calls are all urgency, no patience. The AI answers instantly and we haven't lost a lead to voicemail since.",
    name: 'Jason Ferro',
    company: 'Ferro Garage Doors',
    trade: 'Garage Doors',
    icon: DoorOpen,
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Results</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Every trade. <span className="text-orange-500">Same result.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              From roofs to rodents, the AI doesn&apos;t care what&apos;s on
              your truck — it just answers the phone.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition-colors hover:border-orange-500/40">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-orange-400">
                    <t.icon className="h-3.5 w-3.5" />
                    {t.trade}
                  </span>
                  <Stars />
                </div>
                <p className="mt-5 flex-1 text-slate-200">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 border-t border-slate-800 pt-4">
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.company}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
