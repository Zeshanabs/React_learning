// ============================================================
// FILE: src/components/Hero.jsx
// PURPOSE: Dynamic hero/banner slider — data & state from Redux
// CONCEPTS USED: useSelector, useDispatch, useEffect (auto-play),
//                array mapping, conditional Tailwind classes
// ============================================================

import { useSelector, useDispatch } from 'react-redux'
import { nextSlide, prevSlide, goToSlide } from '../features/hero/heroSlice'
import { useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Hero = () => {
  /*
    Pull the slides array and currentIndex from the Redux store.
    slides: array of all slide data
    currentIndex: which slide is currently visible
  */
  const { slides, currentIndex } = useSelector((state) => state.hero)
  const dispatch = useDispatch()

  // Current slide object based on index
  const currentSlide = slides[currentIndex]

  /*
    useEffect: Side-effect for auto-play.
    Sets up a timer to advance slide every 5 seconds.
    The cleanup function (return) clears the timer when
    component unmounts or re-renders (prevents memory leaks).
  */
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(nextSlide())
    }, 5000)

    return () => clearInterval(timer)  // Cleanup
  }, [dispatch])  // runs once on mount

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden font-poppins">

      {/* ---- BACKGROUND IMAGE (dynamic from Redux) ---- */}
      {/*
        We map over ALL slides but only the current one is visible.
        Using absolute positioning + opacity to create smooth crossfade.
      */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.bg}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
      ))}

      {/* ---- SLIDE CONTENT ---- */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">

          {/* Badge/Tag */}
          <span className="inline-block bg-primary/90 text-white text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            {currentSlide.tag}
          </span>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            {currentSlide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-primary font-semibold text-lg mb-3">
            {currentSlide.subtitle}
          </p>

          {/* Description */}
          <p className="text-gray-200 text-base leading-relaxed mb-8 max-w-md">
            {currentSlide.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <button className="bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-400/50 hover:scale-105">
                Book Now
              </button>
            </Link>
            <Link to="/about">
              <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-secondary transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ---- PREV / NEXT BUTTONS ---- */}
      <button
        onClick={() => dispatch(prevSlide())}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-primary text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-xl" />
      </button>
      <button
        onClick={() => dispatch(nextSlide())}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-primary text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* ---- DOT INDICATORS ---- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => dispatch(goToSlide(index))}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'bg-primary w-8 h-3'      // active dot: wider
                : 'bg-white/60 w-3 h-3'    // inactive dot
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* ---- SCROLL INDICATOR ---- */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs font-medium tracking-widest rotate-90 mb-2">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>

    </section>
  )
}

export default Hero
