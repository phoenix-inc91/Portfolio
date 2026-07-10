import { PhoneCall, ArrowRight, Zap } from 'lucide-react'
import { Button } from './ui.jsx'
import { SITE } from '../config.js'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background: grid texture + orange radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-orange-500/20 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400">
            <Zap className="h-3.5 w-3.5" />
            AI Automation for the Trades
          </span>
        </div>

        <h1 className="mt-8 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
          You miss 3 calls a week.{' '}
          <span className="relative whitespace-nowrap text-orange-500">
            That&apos;s $3,000
            <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-orange-500/40" />
          </span>{' '}
          in lost revenue.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-slate-300 sm:text-xl">
          Phoenix Inc. builds blazing-fast websites equipped with 24/7 AI Voice
          Dispatchers for home-service pros — HVAC, roofing, electrical &amp;
          every trade. While you&apos;re on the job, our AI quotes the customer
          and books your calendar.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button as="a" href={SITE.calendly} variant="primary" className="w-full sm:w-auto">
            Get Your AI Agent
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button as="a" href="#demo" variant="secondary" className="w-full sm:w-auto">
            <PhoneCall className="h-4 w-4 text-orange-400" />
            Hear The AI Live
          </Button>
        </div>

        {/* trust strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-widest text-slate-500">
          <span>HVAC</span>
          <span className="h-1 w-1 rounded-full bg-slate-700" />
          <span>Roofing</span>
          <span className="h-1 w-1 rounded-full bg-slate-700" />
          <span>Electrical</span>
          <span className="h-1 w-1 rounded-full bg-slate-700" />
          <span>Landscaping</span>
          <span className="h-1 w-1 rounded-full bg-slate-700" />
          <span>Plumbing</span>
          <span className="h-1 w-1 rounded-full bg-slate-700" />
          <span>Answers on the first ring</span>
        </div>
      </div>
    </section>
  )
}
