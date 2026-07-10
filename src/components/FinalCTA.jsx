import { CalendarCheck } from 'lucide-react'
import { Button } from './ui.jsx'
import { SITE } from '../config.js'
import Reveal from './Reveal.jsx'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-[420px] w-[820px] -translate-x-1/2 translate-y-1/3 rounded-full bg-orange-500/20 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            Stop losing jobs to your{' '}
            <span className="text-orange-500">competitors.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">
            Every ring you miss is money in someone else&apos;s pocket. Let&apos;s
            fix that in one call.
          </p>
          <div className="mt-10">
            <Button
              as="a"
              href={SITE.calendly}
              variant="primary"
              className="px-8 py-4 text-base"
            >
              <CalendarCheck className="h-5 w-5" />
              Schedule Your Setup Call
            </Button>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            15-minute call · Backed by the Phoenix Guarantee
          </p>
        </Reveal>
      </div>
    </section>
  )
}
