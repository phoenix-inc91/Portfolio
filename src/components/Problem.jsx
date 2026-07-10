import { Thermometer, PhoneOff, MapPin } from 'lucide-react'
import { Eyebrow } from './ui.jsx'
import Reveal from './Reveal.jsx'

const points = [
  {
    icon: Thermometer,
    title: 'Hands full, phone ringing',
    body: "When you're elbow-deep in a job — up on a roof, under a sink, inside a panel — the phone rings out. Nobody's grabbing a call with greasy hands and a torch running.",
  },
  {
    icon: PhoneOff,
    title: 'Nobody leaves a voicemail',
    body: "A homeowner with an emergency on their hands isn't waiting around. Voicemail? Forget it. They hang up before the beep.",
  },
  {
    icon: MapPin,
    title: 'They call the next guy',
    body: 'Straight back to Google Maps, straight to your competitor down the road. That job was yours — for the four rings you couldn’t answer.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="relative bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The Greasy Hands Problem</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              You can&apos;t run the job{' '}
              <span className="text-orange-500">and</span> answer the phone.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              Every missed call is a customer already dialing someone else. The
              problem isn&apos;t your work — it&apos;s that the phone rings while
              your hands are full, whatever trade you&apos;re in.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {points.map((p) => (
              <div
                key={p.title}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition-colors hover:border-orange-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 ring-1 ring-orange-500/25">
                  <p.icon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 text-slate-400">{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
