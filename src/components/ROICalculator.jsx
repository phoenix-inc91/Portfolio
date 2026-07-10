import { useState } from 'react'
import { ArrowRight, Zap } from 'lucide-react'
import { Eyebrow, Button } from './ui.jsx'
import { SITE } from '../config.js'
import Reveal from './Reveal.jsx'

export default function ROICalculator() {
  const [callsPerWeek, setCallsPerWeek] = useState(3)
  const [jobValue, setJobValue] = useState(450)

  const annualLoss = Math.round(callsPerWeek * jobValue * 52)

  return (
    <section id="roi" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>
              <Zap className="h-3.5 w-3.5" />
              The Cost of Silence
            </Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Here&apos;s what{' '}
              <span className="text-orange-500">silence</span> is costing you.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
              Drag the sliders to match your trade. Watch the number that
              should scare you.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:p-10">
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between text-sm font-medium text-slate-300">
                  <span>Calls missed per week</span>
                  <span className="font-bold text-orange-400">{callsPerWeek}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={15}
                  step={1}
                  value={callsPerWeek}
                  onChange={(e) => setCallsPerWeek(Number(e.target.value))}
                  className="mt-3 w-full accent-orange-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-sm font-medium text-slate-300">
                  <span>Average job value</span>
                  <span className="font-bold text-orange-400">
                    ${jobValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={150}
                  max={2000}
                  step={50}
                  value={jobValue}
                  onChange={(e) => setJobValue(Number(e.target.value))}
                  className="mt-3 w-full accent-orange-500"
                />
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-orange-500/30 bg-orange-500/5 p-6 text-center sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Estimated annual lost revenue
              </div>
              <div className="mt-2 text-4xl font-extrabold tracking-tight text-orange-500 sm:text-6xl">
                ${annualLoss.toLocaleString()}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button as="a" href={SITE.calendly} variant="primary" className="w-full sm:w-auto">
                Stop the Bleeding
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
