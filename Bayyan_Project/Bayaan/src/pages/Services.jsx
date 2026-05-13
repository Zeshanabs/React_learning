import Hero from '../components/Hero'
import Trip from '../components/Trip'

function Services() {
  const services = [
    {
      id: 1,
      title: 'Custom Tour Design',
      description: 'Create personalized itineraries with expert planning and immersive local experiences.',
    },
    {
      id: 2,
      title: 'Group Travel Planning',
      description: 'Coordinate group bookings, family-friendly accommodations, and shared tour activities.',
    },
    {
      id: 3,
      title: 'Luxury Concierge',
      description: 'Arrange premium stays, private transportation, and VIP travel support.',
    },
  ]

  return (
    <div className="space-y-10">
      <Hero
        eyebrow="Our Services"
        heading="Tour services built to simplify every step of your journey."
        description="From custom itinerary design to luxury concierge support, our service page shares the travel solutions designed for modern explorers."
        primaryLabel="Book a trip"
        primaryLink="/contact"
        secondaryLabel="About us"
        secondaryLink="/about"
        panelTitle="Service options"
        panelBadge="Flexible"
        panelDescription="Choose from custom planning, group travel, and VIP support for every type of trip."
        stats={[
          { label: 'Planning', value: 'Personalized' },
          { label: 'Support', value: '24/7' },
          { label: 'Options', value: 'Multiple' },
        ]}
      />

      <section className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/20">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Services overview</p>
          <h2 className="text-3xl font-semibold text-white">Flexible solutions for every traveler.</h2>
          <p className="max-w-3xl text-sm leading-7 text-slate-300">
            We design service packages that let you travel with confidence. Pick the plan that fits your budget, group size, and desired level of comfort.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="rounded-[1.8rem] border border-slate-800/70 bg-slate-950/95 p-6 transition hover:border-cyan-400/30 hover:bg-slate-900/95">
              <p className="text-xl font-semibold text-white">{service.title}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
              <div className="mt-6 inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-300">
                Learn more
              </div>
            </article>
          ))}
        </div>
      </section>

      <Trip />
    </div>
  )
}

export default Services
