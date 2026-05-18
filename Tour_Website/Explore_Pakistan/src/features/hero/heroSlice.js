// ============================================================
// FILE: src/features/hero/heroSlice.js
// PURPOSE: Redux slice for Hero section (slide data + current index)
// ============================================================

import { createSlice } from '@reduxjs/toolkit'

// Hero slide data lives in Redux — this is "single source of truth"
const heroSlides = [
  {
    id: 1,
    title: 'Explore The Beautiful World!',
    subtitle: 'Find Your Perfect Destination',
    description: 'Travel is the only purchase that makes you richer. Let us guide you to the most breathtaking places on earth.',
    bg: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=80',
    tag: 'Adventure Awaits',
  },
  {
    id: 2,
    title: 'Discover Hidden Gems',
    subtitle: 'Explore New Horizons',
    description: 'Step off the beaten path and discover places most people never get to see. Every journey begins with a single step.',
    bg: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=80',
    tag: 'Nature Escapes',
  },
  {
    id: 3,
    title: 'Create Lasting Memories',
    subtitle: 'Your Dream Vacation Starts Here',
    description: 'Life is short and the world is wide. Start exploring — book your dream destination with Trippy today.',
    bg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80',
    tag: 'Beach Paradise',
  },
]

const heroSlice = createSlice({
  name: 'hero',
  initialState: {
    slides: heroSlides,
    currentIndex: 0,  // which slide is showing right now
  },
  reducers: {
    nextSlide: (state) => {
      // Wrap around: if on last slide, go to first
      state.currentIndex = (state.currentIndex + 1) % state.slides.length
    },
    prevSlide: (state) => {
      // Wrap around: if on first slide, go to last
      state.currentIndex =
        (state.currentIndex - 1 + state.slides.length) % state.slides.length
    },
    goToSlide: (state, action) => {
      state.currentIndex = action.payload
    },
  },
})

export const { nextSlide, prevSlide, goToSlide } = heroSlice.actions
export default heroSlice.reducer
