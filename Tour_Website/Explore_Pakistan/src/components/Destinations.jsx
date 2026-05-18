// ============================================================
// FILE: src/components/Destinations.jsx
// PURPOSE: Shows destination cards — data pulled from Redux store
// CONCEPTS USED: useSelector, useDispatch, setFilter, array .filter(),
//                .map(), conditional classes, props-less component (data from Redux)
// ============================================================

import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../features/destinations/destinationsSlice'
import { FaStar, FaClock, FaUsers, FaHeart } from 'react-icons/fa'
import { useState } from 'react'

// Filter button labels
const filterOptions = ['all', 'featured']

// ---- DESTINATION CARD (sub-component) ----
// Receives a single destination object as a prop
const DestinationCard = ({ destination }) => {
  const [liked, setLiked] = useState(false) // local state just for UI heart toggle

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 cursor-pointer">

      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Featured badge */}
        {destination.featured && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">
            Featured
          </span>
        )}
        {/* Heart button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-md hover:bg-red-50 transition-all duration-200 z-10"
        >
          <FaHeart className={`text-base ${liked ? 'text-red-500' : 'text-gray-300'}`} />
        </button>
        {/* Price overlay */}
        <div className="absolute bottom-3 right-3 bg-primary text-white font-bold text-sm px-3 py-1 rounded-full shadow">
          {destination.price}
          <span className="font-normal text-xs"> /person</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-poppins font-bold text-secondary text-lg leading-tight">
            {destination.name}
          </h3>
          {/* Star Rating */}
          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar className="text-sm" />
            <span className="text-secondary font-semibold text-sm">{destination.rating}</span>
          </div>
        </div>

        <p className="text-gray-400 text-xs mb-3">
          {destination.reviews.toLocaleString()} reviews
        </p>

        {/* Type chip */}
        <span className="inline-block bg-orange-50 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {destination.type}
        </span>

        {/* Meta info row */}
        <div className="flex items-center gap-4 text-gray-500 text-xs border-t border-gray-100 pt-4">
          <span className="flex items-center gap-1">
            <FaClock className="text-primary" />
            {destination.duration}
          </span>
        </div>

        {/* Book button */}
        <button className="mt-4 w-full bg-secondary text-black font-poppins font-semibold text-sm py-2.5 rounded-xl hover:bg-primary transition-all duration-300">
          Book This Trip
        </button>
      </div>
    </div>
  )
}

// ---- MAIN DESTINATIONS COMPONENT ----
const Destinations = () => {
  /*
    useSelector: Read destinations data + current filter from Redux store.
    When the filter changes in Redux, this component re-renders automatically.
  */
  const { items, filter } = useSelector((state) => state.destinations)
  const dispatch = useDispatch()

  /*
    Filter the items array based on the active filter.
    This is a DERIVED value — we compute it from Redux state.
  */
  const filteredItems =
    filter === 'all' ? items : items.filter((item) => item.featured)

  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Top Destinations
          </span>
          <h2 className="text-4xl font-extrabold text-secondary mt-2 mb-4">
            Popular Destinations
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Explore our most loved destinations picked by thousands of happy travelers.
            Your perfect trip is just a click away.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => dispatch(setFilter(option))}  // Dispatch action to Redux
              className={`capitalize font-semibold text-sm px-6 py-2 rounded-full transition-all duration-300 ${
                filter === option
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-500 hover:bg-primary hover:text-white border border-gray-200'
              }`}
            >
              {option === 'all' ? 'All Destinations' : 'Featured'}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        {/*
          .map() converts each destination object into a <DestinationCard> component.
          Key prop is required by React for efficient list rendering.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary font-bold px-10 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
            View All Destinations
          </button>
        </div>

      </div>
    </section>
  )
}

export default Destinations
