// ============================================================
// FILE: src/pages/Service.jsx
// PURPOSE: Services page — shown at /service route
// CONCEPTS USED: Component, array .map(), Tailwind grid layout
// ============================================================

const services = [
  {
    icon: '✈️',
    title: 'Flight Booking',
    desc: 'Find the best flight deals worldwide. We compare 500+ airlines to get you the lowest fares with zero hassle.',
    features: ['Best Price Guarantee', '24/7 Support', 'Flexible Cancellation', 'Airport Transfers'],
  },
  {
    icon: '🏨',
    title: 'Hotel Booking',
    desc: 'From budget-friendly stays to luxury resorts, we have accommodation options for every traveler and budget.',
    features: ['Verified Reviews', 'Instant Confirmation', 'Free Breakfast Options', 'Best Locations'],
  },
  {
    icon: '🗺️',
    title: 'Tour Packages',
    desc: 'Fully guided tours with expert local guides. Everything is taken care of so you just enjoy the journey.',
    features: ['Expert Local Guides', 'All-Inclusive Packages', 'Small Group Tours', 'Custom Itineraries'],
  },
  {
    icon: '🚢',
    title: 'Cruise Booking',
    desc: 'Sail the worlds most beautiful waters on luxury cruise liners with world-class amenities.',
    features: ['Ocean & River Cruises', 'Cabin Selection', 'Shore Excursions', 'Onboard Activities'],
  },
  {
    icon: '🛡️',
    title: 'Travel Insurance',
    desc: 'Travel with peace of mind knowing you\'re fully protected. Comprehensive coverage for any situation.',
    features: ['Medical Coverage', 'Trip Cancellation', 'Lost Luggage', 'Emergency Assistance'],
  },
  {
    icon: '🎯',
    title: 'Custom Trips',
    desc: 'Tell us your dream destination and we\'ll build a completely personalized itinerary just for you.',
    features: ['Personalized Planning', 'Budget Flexibility', 'Private Guides', 'VIP Access'],
  },
]

const Service = () => {
  return (
    <div className="pt-16 font-poppins">

      {/* Hero Banner */}
      <div
        className="relative h-64 sm:h-80 flex items-center justify-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Our Services</h1>
          <p className="text-gray-300 text-base">Home &nbsp;/ &nbsp;Services</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="text-4xl font-extrabold text-secondary mt-2 mb-4">
              Everything You Need For Your Perfect Trip
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From booking to boarding, we handle everything. Explore our comprehensive range 
              of travel services designed to make your journey seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-transparent hover:border-primary/20"
              >
                {/* Icon */}
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-bold text-secondary text-xl mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-500 text-sm">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <button className="mt-6 text-primary font-semibold text-sm hover:underline">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white font-poppins">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
            Join thousands of happy travelers and let us plan your perfect getaway today.
          </p>
          <button className="bg-white text-primary font-bold px-10 py-3.5 rounded-full hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg">
            Book Your Trip Now
          </button>
        </div>
      </section>

    </div>
  )
}

export default Service
