import { NavLink } from 'react-router-dom'

function Hero({
  eyebrow = 'Explore with confidence',
  heading,
  description,
  primaryLabel = 'Our Services',
  primaryLink = '/services',
  secondaryLabel = 'Book a trip',
  secondaryLink = '/contact',
  panelTitle = 'Santorini, Greece',
  panelBadge = 'Best seller',
  panelDescription = 'Island escapes, luxury stays, and expert support for every traveler.',
  stats = [
    { label: 'Duration', value: '7 days' },
    { label: 'Group size', value: 'Small' },
    { label: 'Support', value: '24/7' },
  ],
}) {
  return (
    <section className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/20 lg:p-12">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            {eyebrow}
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {heading}
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <NavLink
              to={primaryLink}
              className="inline-flex items-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {primaryLabel}
            </NavLink>
            <NavLink
              to={secondaryLink}
              className="inline-flex items-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
            >
              {secondaryLabel}
            </NavLink>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-800/70 bg-slate-950/95 p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-rose-500/5" />
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800')" }} />
          <div className="relative space-y-5">
            <div className="rounded-[1.8rem] bg-slate-900/90 p-6 shadow-lg shadow-slate-950/20">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Top destination</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">{panelTitle}</h2>
                </div>
                <span className="rounded-3xl bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-200">
                  {panelBadge}
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">{panelDescription}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl bg-slate-900/90 p-4 text-center">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-slate-950/90 via-slate-900 to-slate-950/90 p-5 text-slate-300">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Why travel with us?</p>
              <ul className="mt-4 space-y-3 text-sm leading-6">
                <li>• Personalized itineraries</li>
                <li>• Local expert support</li>
                <li>• Flexible booking options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
