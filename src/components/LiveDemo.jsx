import { PhoneCall, Signal } from 'lucide-react'
import { SITE } from '../config.js'

export default function LiveDemo() {
  return (
    <section id="demo" className="relative overflow-hidden py-24 sm:py-32">
      {/* dramatic orange glow behind the card */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/25 blur-[130px] animate-pulse-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
          </span>
          Live Demo
        </span>

        <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Don&apos;t believe us?{' '}
          <span className="text-orange-500">Call our AI right now.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
          Pretend you&apos;re a customer calling about any job — HVAC,
          roofing, electrical, whatever. See how our AI handles it — collects
          your details, quotes the visit, and books the slot. No human on the
          line.
        </p>

        {/* the phone card */}
        <div className="mx-auto mt-12 max-w-xl">
          <div className="relative rounded-3xl border-2 border-orange-500/60 bg-slate-900/70 p-8 shadow-2xl shadow-orange-500/25 backdrop-blur-sm sm:p-10">
            <div className="flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-widest text-orange-400">
              <Signal className="h-4 w-4" />
              Phoenix AI Dispatcher · Online
            </div>

            <a
              href={SITE.phoneHref}
              className="mt-6 block text-4xl font-extrabold tracking-tight text-white transition-colors hover:text-orange-400 sm:text-6xl"
            >
              {SITE.phone}
            </a>

            <a
              href={SITE.phoneHref}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/40 transition-all hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-orange-500/60"
            >
              <PhoneCall className="h-5 w-5" />
              Tap to Call the AI
            </a>

            <p className="mt-5 text-xs text-slate-500">
              Available 24/7 · No signup · Talk to the same AI your customers would
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
