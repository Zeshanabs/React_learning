// ============================================================
// FILE: src/pages/Home.jsx
// PURPOSE: Home page — assembles Hero + Destinations + Trips sections
// CONCEPTS USED: Component composition (importing and rendering components)
// ============================================================

import Hero from '../components/Hero'
import Destinations from '../components/Destinations'
import Trips from '../components/Trips'

/*
  The Home page is a "container" component.
  It doesn't have its own state or logic — it just arranges
  other components in the right order.

  This separation of concerns makes each section:
  - Independently testable
  - Reusable on other pages
  - Easier to maintain
*/

const Home = () => {
  return (
    <main>
      {/* Hero Section - full-screen banner with slider */}
      <Hero />

      {/* Stats Bar */}
      <StatsBar />

      {/* Destination Cards Section */}
      <Destinations />

      {/* Trip Packages Section */}
      <Trips />

      {/* Why Choose Us */}
      <WhyUs />
    </main>
  )
}

// ---- STATS BAR (inline component, small enough to keep here) ----
const stats = [
  { number: '50K+', label: 'Happy Travelers' },
  { number: '200+', label: 'Destinations' },
  { number: '15+', label: 'Years Experience' },
  { number: '4.9★', label: 'Average Rating' },
]

const StatsBar = () => (
  <div className="bg-primary py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white font-poppins">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-extrabold">{stat.number}</p>
            <p className="text-sm opacity-80 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// ---- WHY CHOOSE US SECTION ----
const features = [
  {
    icon: '🌍',
    title: 'Global Coverage',
    desc: 'We cover 200+ destinations across all 7 continents with local expertise.',
  },
  {
    icon: '💰',
    title: 'Best Prices',
    desc: 'Guaranteed best prices with no hidden fees. Transparent pricing always.',
  },
  {
    icon: '🛡️',
    title: 'Safe Travel',
    desc: 'Your safety is our priority. 24/7 support throughout your journey.',
  },
  {
    icon: '⭐',
    title: 'Top Rated',
    desc: 'Consistently rated 4.9/5 by over 50,000 satisfied travelers worldwide.',
  },
]

const WhyUs = () => (
  <section className="py-20 bg-gray-50 font-poppins">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">
          Why Trippy?
        </span>
        <h2 className="text-4xl font-extrabold text-secondary mt-2 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          We're not just a travel agency — we're your adventure partners committed to giving you the world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1"
          >
            <div className="text-5xl mb-5">{f.icon}</div>
            <h3 className="font-bold text-secondary text-lg mb-3">{f.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Home
