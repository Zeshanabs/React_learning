import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const slides = [
  {
    id: 1,
    title: 'Meadows & Trails',
    subtitle: 'Breathe easy in open fields and forest paths.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Mountain Escapes',
    subtitle: 'Reach new heights with our curated mountain tours.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Coastal Adventures',
    subtitle: 'Discover serene beaches, cliffs, and sunset views.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop',
  },
]

function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const activeSlide = slides[activeIndex]

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="relative min-h-[80vh] sm:min-h-[85vh]">
        <img
          src={activeSlide.image}
          alt={activeSlide.title}
          className="absolute inset-0 h-full w-full object-cover transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-end px-6 pb-20 pt-10 sm:px-8 lg:items-center lg:pt-24">
          <div className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">{activeSlide.title}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Your Journey, Your Story
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
              {activeSlide.subtitle} Discover curated trips across meadows, mountains, and coastlines with Bayyan.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink
                to="/services"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Travel Plan
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Discover
              </NavLink>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-8 mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
          <button
            type="button"
            onClick={() => setActiveIndex((activeIndex - 1 + slides.length) % slides.length)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white transition hover:bg-slate-900"
          >
            ‹
          </button>
          <div className="flex items-center gap-3 rounded-full bg-slate-950/80 px-4 py-2 backdrop-blur-xl">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition ${
                  index === activeIndex ? 'bg-cyan-400' : 'bg-slate-400/60'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setActiveIndex((activeIndex + 1) % slides.length)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white transition hover:bg-slate-900"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider
