import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StatsBar from './components/StatsBar.jsx'
import Problem from './components/Problem.jsx'
import Services from './components/Services.jsx'
import LiveDemo from './components/LiveDemo.jsx'
import ROICalculator from './components/ROICalculator.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import StickyMobileCTA from './components/StickyMobileCTA.jsx'
import FloatingCTA from './components/FloatingCTA.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-orange-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Problem />
        <Services />
        <LiveDemo />
        <ROICalculator />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      <FloatingCTA />
    </div>
  )
}
