import Hero from '../components/Hero'

function About() {
  return (
    <div className="space-y-10">
      <Hero
        eyebrow="About Atlas Tours"
        heading="Travel with a team that knows how to turn trips into memories."
        description="We design responsive, reliable travel experiences for modern explorers. Our agency focuses on seamless planning, local insights, and tailored service from booking to return."
        primaryLabel="Contact us"
        primaryLink="/contact"
        secondaryLabel="View services"
        secondaryLink="/services"
        panelTitle="Our mission"
        panelBadge="Trusted"
        panelDescription="Deliver polished tour experiences with safety, flexibility, and local expertise built into every itinerary."
        stats={[
          { label: 'Years', value: '8+' },
          { label: 'Countries', value: '20+' },
          { label: 'Happy clients', value: '5K+' },
        ]}
      />

      <section className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Our story</p>
            <h2 className="text-3xl font-semibold text-white">A travel company built for unforgettable journeys.</h2>
            <p className="max-w-xl text-sm leading-7 text-slate-300">
              Atlas Tours started with one goal: help travelers discover incredible places without the planning stress. Our team combines technology, local expertise, and customer-first service for every itinerary.
            </p>
          </div>

          <div className="rounded-[1.8rem] bg-slate-950/95 p-6 shadow-lg shadow-slate-950/20">
            <div className="space-y-5">
              <div className="rounded-[1.5rem] border border-slate-800/70 bg-slate-900/90 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Why travelers choose us</p>
                <ul className="mt-6 space-y-4 text-slate-300">
                  <li className="rounded-3xl bg-slate-950/80 p-4">Fast itinerary delivery with expert planning.</li>
                  <li className="rounded-3xl bg-slate-950/80 p-4">Flexible bookings for changing travel plans.</li>
                  <li className="rounded-3xl bg-slate-950/80 p-4">Exclusive access to local experiences.</li>
                </ul>
              </div>
              <div className="rounded-[1.5rem] bg-cyan-500/10 p-6 text-slate-300">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Our promise</p>
                <p className="mt-4 text-sm leading-7">
                  We deliver premium support, clear communication, and the travel tools your journey deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
