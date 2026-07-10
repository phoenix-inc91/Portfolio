import { Check, ShieldCheck, ArrowRight } from 'lucide-react'
import { Eyebrow, Button } from './ui.jsx'
import { SITE } from '../config.js'
import Reveal from './Reveal.jsx'

const plans = [
  {
    name: 'The Website',
    tagline: 'Get found. Load fast. Look premium.',
    setup: '$1,000',
    monthly: '$247',
    cta: 'Build My Website',
    features: [
      'Custom lightning-fast website',
      'SEO-optimized for local search',
      '90+ PageSpeed, mobile-first design',
      'Hosting, updates & maintenance included',
      'Full setup handled for you',
    ],
  },
  {
    name: 'Website + AI Receptionist',
    tagline: 'Everything above, plus a front desk that never sleeps.',
    setup: '$2,000',
    monthly: '$300',
    cta: 'Get My AI Agent',
    featured: true,
    features: [
      'Everything in The Website, plus:',
      '24/7 AI Voice Dispatcher, tuned to your trade',
      'Answers on the first ring — never voicemail',
      'Auto-booking to Google Sheets + Telegram alerts',
      'AI voice minutes included',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>The ROI</Eyebrow>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            One booked job pays for the{' '}
            <span className="text-orange-500">whole month.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Simple, flat pricing. No per-lead fees, no surprises. Start with a
            site that ranks — add the AI front desk when you&apos;re ready to stop
            missing calls.
          </p>
        </div>

        {/* Two tiers */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 sm:p-10 ${
                plan.featured
                  ? 'border-orange-500/50 bg-gradient-to-b from-slate-900 to-slate-900/40 shadow-xl shadow-orange-500/10'
                  : 'border-slate-800 bg-slate-900/40'
              }`}
            >
              {plan.featured && (
                <>
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-500/20 blur-3xl" />
                  <span className="absolute right-6 top-6 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-orange-500/40">
                    Most Popular
                  </span>
                </>
              )}

              <div className="relative flex flex-1 flex-col">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-orange-400">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{plan.tagline}</p>

                <div className="mt-6 flex flex-wrap items-end gap-x-2 gap-y-1">
                  <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    {plan.setup}
                  </span>
                  <span className="pb-1 text-sm text-slate-400">setup</span>
                  <span className="w-full text-sm font-medium text-slate-300">
                    then{' '}
                    <span className="font-bold text-white">{plan.monthly}</span>
                    /mo
                  </span>
                </div>

                <ul className="mt-8 space-y-3 border-t border-slate-800 pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-slate-200">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/15">
                        <Check className="h-3.5 w-3.5 text-orange-500" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  as="a"
                  href={SITE.calendly}
                  variant={plan.featured ? 'primary' : 'secondary'}
                  className="mt-9 w-full"
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee box */}
        <div className="mx-auto mt-6 max-w-4xl">
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:flex-row sm:items-center sm:p-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 ring-1 ring-orange-500/30">
              <ShieldCheck className="h-8 w-8 text-orange-500" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">
                The Phoenix Guarantee
              </h3>
              <p className="mt-2 text-slate-300">
                If our AI Receptionist doesn&apos;t book you at least{' '}
                <span className="font-semibold text-white">2 extra jobs</span> in
                your first 30 days, we refund your{' '}
                <span className="font-semibold text-white">$2,000</span> setup fee
                entirely. <span className="font-bold text-orange-400">Zero risk.</span>
              </p>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
