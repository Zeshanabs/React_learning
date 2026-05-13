const destinations = [
  {
    id: 1,
    city: 'Kyoto',
    country: 'Japan',
    price: 'From $1,599',
    description: 'Ancient temples, lush gardens, and cultural immersion tours for every traveler.',
    badge: 'Cultural',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400',
  },
  {
    id: 2,
    city: 'Reykjavík',
    country: 'Iceland',
    price: 'From $2,150',
    description: 'Northern lights, geothermal baths, and adventure itineraries in dramatic landscapes.',
    badge: 'Adventure',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400',
  },
  {
    id: 3,
    city: 'Marrakech',
    country: 'Morocco',
    price: 'From $1,220',
    description: 'Colorful markets, luxury riads, and guided desert excursions with local experts.',
    badge: 'Luxury',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d0b7ef?w=400',
  },
]

function Destination() {
  return (
    <section className="space-y-16">
      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Popular destination</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Handpicked travel experiences</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400 sm:text-right">
            Browse exclusive tour packages built for unforgettable stays, curated from the world’s most inspiring locations.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-6 transition hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-950/90"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-800">
                <img
                  src={destination.image}
                  alt={`${destination.city}, ${destination.country}`}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-white">{destination.city}</p>
                  <p className="mt-1 text-sm text-slate-400">{destination.country}</p>
                </div>
                <span className="rounded-3xl bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-300">
                  {destination.badge}
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">{destination.description}</p>
              <div className="mt-6 flex items-center justify-between gap-4 text-sm text-slate-300">
                <span>{destination.price}</span>
                <button className="rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-2 text-sm text-cyan-300 transition hover:border-cyan-400/50 hover:text-white">
                  Explore
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.05fr] lg:items-center">
        <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Explore more</p>
          <h3 className="text-3xl font-semibold text-white">Discover tours from every angle.</h3>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            Our tour selection includes cultural discoveries, adventure escapes, and luxury stays. Each package is designed for easy booking and exceptional travel value.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.6rem] bg-slate-950/90 p-5 text-slate-300">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Luxury stays</p>
              <p className="mt-3 text-sm leading-7">Premium hotels, private transfers, and VIP experiences.</p>
            </div>
            <div className="rounded-[1.6rem] bg-slate-950/90 p-5 text-slate-300">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Landscape tours</p>
              <p className="mt-3 text-sm leading-7">Guided adventures and scenic routes for nature lovers.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/20">
          <div className="grid gap-5">
            <div className="rounded-[1.8rem] bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Featured trip</p>
              <h4 className="mt-3 text-2xl font-semibold text-white">Seaside adventure package</h4>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Experience coastal villages, private boat tours, and elegant stays with a fully guided itinerary.
              </p>
            </div>
            <div className="rounded-[1.8rem] bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Traveler favorite</p>
              <h4 className="mt-3 text-2xl font-semibold text-white">Cultural city escape</h4>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Spend several days exploring city highlights, museums, and local cuisine with expert guides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destination
