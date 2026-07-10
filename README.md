# Phoenix Inc.

Single-page agency site — websites + 24/7 AI Voice Receptionists for home-service / blue-collar trades (HVAC, Plumbing, Roofing, Electrical, Landscaping, Pest Control, Garage Doors, and more).

Stack: **Vite + React 18 + Tailwind CSS v3 + lucide-react**. Dark, industrial-premium theme with Phoenix Orange (`orange-500`) accents.

## Run

```bash
npm install
npm run dev      # local dev server (localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Edit business info

All company details (phone, Calendly link, nav) live in one file:

```
src/config.js
```

Swap the placeholder phone `(555) 123-4567` and Calendly URL there — they propagate everywhere.

## Structure

```
src/
  App.jsx              # section composition
  config.js            # SITE + NAV_LINKS (edit business data here)
  index.css            # Tailwind + .bg-grid + base tokens
  components/
    ui.jsx             # Logo, Button, Eyebrow (shared)
    Navbar.jsx         # floating scroll-spy nav
    Hero.jsx           # headline + glow
    StatsBar.jsx       # animated count-up stats
    Problem.jsx        # "Greasy Hands" section
    Services.jsx       # 3 services grid
    LiveDemo.jsx       # call-the-AI phone card
    ROICalculator.jsx  # interactive lost-revenue calculator
    Testimonials.jsx   # 6 cards, one per trade
    Pricing.jsx        # two tiers + Phoenix Guarantee
    FinalCTA.jsx       # closing CTA
    Footer.jsx
    Reveal.jsx         # scroll-reveal wrapper
    StickyMobileCTA.jsx
    FloatingCTA.jsx
```

See `CLAUDE.md` for the full design-system + positioning notes.
