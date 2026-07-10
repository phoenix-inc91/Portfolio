# Phoenix Inc. — Agency Landing Page

Single-page marketing site. Phoenix Inc. sells **blazing-fast websites + 24/7 AI Voice Receptionists** to **home-service / blue-collar businesses**.

## Positioning — IMPORTANT
Do **not** hardcode to HVAC + Plumbing only. Target is **all home-service trades**: HVAC, Plumbing, Roofing, Electrical, Landscaping, Pest Control, Garage Doors, Auto Repair, Cleaning, Locksmiths, Painters, etc. Copy should read "home-service pros" / "the trades" / "your trade" — inclusive, not two-niche. Specific trades are fine as *examples in a list*, never as the whole market.

## Stack
Vite + React 18 + Tailwind CSS v3 + `lucide-react`. No separate CSS files — Tailwind utilities only (global tokens live in `src/index.css`).

## Run
```bash
npm run dev      # localhost:5173
npm run build    # dist/
```

## Design system
- **Theme:** dark, industrial-premium, aggressive, trustworthy. `bg-slate-950` base, `text-slate-300` body, `text-white` headings.
- **Brand accent:** Phoenix Orange = `orange-500` (glows, buttons, highlights, active states). `orange-400` for hover/lighter glow.
- **Font:** Inter (loaded in `index.html`).
- **Motifs:** `.bg-grid` texture + orange radial-blur glows (`bg-orange-500/20 blur-[120px]`), `animate-pulse-glow`, `animate-float-up` (defined in `tailwind.config.js`).
- **Radius:** cards `rounded-2xl`/`rounded-3xl`, buttons `rounded-lg`.
- **Headings:** `font-extrabold tracking-tight text-white`, `text-balance` for wrapping. Accent key phrase with `text-orange-500`.
- **Responsive:** mobile-first. Smooth scroll + `scroll-padding-top` already set.

## Shared components — reuse these, don't re-invent
`src/components/ui.jsx` exports:
- `<Logo subtitle="…" />` — wordmark (pass `subtitle` for two-line nav lockup).
- `<Button as="a" href variant="primary|secondary|ghost">` — primary = solid glowing orange, secondary = outline.
- `<Eyebrow>` — orange pill/eyebrow above section headings.

## Single source of truth
`src/config.js` holds `SITE` (company, phone, phoneHref, calendly, year) and `NAV_LINKS` (each `{label, href, id}` — `id` drives the navbar scroll-spy). Edit business data here only; never hardcode phone/Calendly in components.

## Structure
```
src/
  App.jsx              # section composition order
  config.js            # SITE + NAV_LINKS (edit business data here)
  index.css            # Tailwind + .bg-grid + base tokens
  components/
    ui.jsx             # Logo, Button, Eyebrow (shared primitives)
    Navbar.jsx         # floating pill, scroll-spy underline, mobile menu
    Hero.jsx  Problem.jsx  Services.jsx  LiveDemo.jsx
    Pricing.jsx        # 2 tiers (Website $1000+$247/mo, +AI Receptionist $2000+$300/mo) + guarantee
    FinalCTA.jsx  Footer.jsx
```

## Conventions
- Icons: `lucide-react` only.
- New section = its own file in `src/components/`, imported into `App.jsx`. Give it an `id` if it needs a nav anchor.
- Match existing spacing rhythm: sections `py-20 sm:py-28`, container `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`.
- Keep everything self-contained + build-clean (`npm run build` must pass).
