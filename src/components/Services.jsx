import { Gauge, PhoneCall, CalendarCheck, Search, Bot, Sheet, Send } from 'lucide-react'
import { Eyebrow } from './ui.jsx'
import Reveal from './Reveal.jsx'

const services = [
  {
    icon: Gauge,
    title: 'Lightning-Fast Websites',
    body: 'Sub-second load times, built to rank. SEO-optimized for local search so you show up when someone types "[your trade] near me."',
    bullets: [
      { icon: Search, text: 'Local SEO baked in' },
      { icon: Gauge, text: '90+ PageSpeed scores' },
    ],
  },
  {
    icon: PhoneCall,
    title: '24/7 AI Voice Dispatcher',
    body: 'Answers on the first ring, every ring — day, night, weekends. Collects the address, the issue, and the urgency like your best CSR.',
    bullets: [
      { icon: Bot, text: 'Human-sounding voice' },
      { icon: PhoneCall, text: 'Never sends to voicemail' },
    ],
    featured: true,
  },
  {
    icon: CalendarCheck,
    title: 'Automated CRM Booking',
    body: 'Every lead is captured and written straight to your systems — no clipboard, no lost sticky notes, no double entry.',
    bullets: [
      { icon: Sheet, text: 'Writes to Google Sheets' },
      { icon: Send, text: 'Pings your Telegram instantly' },
    ],
  },
]

export default function Services() {
  return (
    <section id="solution" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The Solution</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              An AI front desk that never{' '}
              <span className="text-orange-500">clocks out.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              Three systems, one machine — capture the lead, book the job, and log
              it before your truck reaches the driveway.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  s.featured
                    ? 'border-orange-500/50 bg-gradient-to-b from-orange-500/[0.08] to-slate-900/40 shadow-xl shadow-orange-500/10 lg:-translate-y-3'
                    : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-orange-500/40">
                    The Money Maker
                  </span>
                )}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ring-1 ${
                    s.featured
                      ? 'bg-orange-500 text-white ring-orange-400'
                      : 'bg-orange-500/10 text-orange-500 ring-orange-500/25'
                  }`}
                >
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 flex-1 text-slate-400">{s.body}</p>
                <ul className="mt-6 space-y-3 border-t border-slate-800 pt-6">
                  {s.bullets.map((b) => (
                    <li key={b.text} className="flex items-center gap-3 text-sm text-slate-300">
                      <b.icon className="h-4 w-4 shrink-0 text-orange-500" />
                      {b.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
