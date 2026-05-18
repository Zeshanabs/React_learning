// ============================================================
// FILE: src/components/Trips.jsx
// PURPOSE: Trip/Package section — data from Redux, rendered with .map()
// CONCEPTS USED: useSelector, array .map(), props passing to sub-component
// ============================================================

import { useSelector } from 'react-redux'
import { FaClock, FaUsers, FaCheck, FaTag } from 'react-icons/fa'

// ---- TRIP CARD (sub-component) ----
const TripCard = ({ trip }) => {
  const discount = Math.round(((trip.oldPrice - trip.price) / trip.oldPrice) * 100)

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">

      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Discount badge */}
        <div className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          -{discount}% OFF
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <h3 className="font-poppins font-bold text-secondary text-xl mb-2">
          {trip.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">
          {trip.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-6 mb-4 text-gray-400 text-sm">
          <span className="flex items-center gap-2">
            <FaClock className="text-primary" />
            {trip.duration}
          </span>
          <span className="flex items-center gap-2">
            <FaUsers className="text-primary" />
            {trip.people}
          </span>
        </div>

        {/* Included items */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {trip.included.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2 text-gray-500 text-xs">
              <FaCheck className="text-green-500 text-xs" />
              {item}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <span className="text-2xl font-extrabold text-primary">${trip.price}</span>
            <span className="text-sm text-gray-400 line-through ml-2">${trip.oldPrice}</span>
            <span className="text-gray-400 text-xs ml-1">/person</span>
          </div>
          <button className="bg-primary text-white font-poppins font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-orange-500 hover:scale-105 transition-all duration-300 shadow-md">
            Book Trip
          </button>
        </div>
      </div>
    </div>
  )
}

// ---- MAIN TRIPS COMPONENT ----
const Trips = () => {
  /*
    useSelector reads the trips array from the Redux store.
    state.trips.items maps to the initialState.items in tripsSlice.js
  */
  const trips = useSelector((state) => state.trips.items)

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Best Packages
          </span>
          <h2 className="text-4xl font-extrabold text-secondary mt-2 mb-4">
            Our Trip Packages
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Choose from our carefully curated packages designed to give you the best 
            experience at the most affordable prices.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Trips
