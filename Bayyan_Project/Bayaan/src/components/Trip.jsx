const trips = [
  {
    id: 1,
    title: 'Weekend Escape',
    description: 'Short itineraries for city breaks and quick adventures with easy planning.',
    highlights: ['2-3 days', 'Flexible dates', 'Guided highlights'],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400',
  },
  {
    id: 2,
    title: 'Family Journey',
    description: 'Comfortable family-friendly tours with curated experiences and private support.',
    highlights: ['Kid-friendly', 'Family savings', 'Private guides'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
  },
  {
    id: 3,
    title: 'Luxury Expedition',
    description: 'Premium stays, exclusive access, and concierge service for high-end travelers.',
    highlights: ['Luxury hotels', 'VIP service', 'Tailor-made plans'],
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400',
  },
]

function Trip() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Trips</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Ready-to-book travel packages</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-400 sm:text-right">
          Compare trip styles and choose the package that fits your pace, budget, and adventure goals.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {trips.map((trip) => (
          <div key={trip.id} className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-6 shadow-lg shadow-slate-950/10">
            <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-800 mb-4">
              <img
                src={trip.image}
                alt={trip.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xl font-semibold text-white">{trip.title}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300">{trip.description}</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {trip.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              Book now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Trip
