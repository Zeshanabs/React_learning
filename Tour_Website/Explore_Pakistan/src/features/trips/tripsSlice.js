// ============================================================
// FILE: src/features/trips/tripsSlice.js
// PURPOSE: Redux slice for trip/package cards data
// ============================================================

import { createSlice } from '@reduxjs/toolkit'

const tripsData = [
  {
    id: 1,
    title: 'Mountain Adventure',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    price: 550,
    oldPrice: 700,
    duration: '3 Days',
    people: '10-15 People',
    description: 'Trek through stunning mountain trails with breathtaking views and expert guides.',
    included: ['Hotel', 'Breakfast', 'Guide', 'Transport'],
  },
  {
    id: 2,
    title: 'Beach Getaway',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    price: 750,
    oldPrice: 950,
    duration: '5 Days',
    people: '8-12 People',
    description: 'Relax on pristine beaches with crystal-clear waters and luxury resort stays.',
    included: ['Resort', 'All Meals', 'Snorkeling', 'Transport'],
  },
  {
    id: 3,
    title: 'Cultural City Tour',
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&q=80',
    price: 450,
    oldPrice: 600,
    duration: '4 Days',
    people: '15-20 People',
    description: 'Immerse yourself in rich cultural heritage, museums, and local cuisine.',
    included: ['Hotel', 'Breakfast', 'Museum Passes', 'City Tour'],
  },
]

const tripsSlice = createSlice({
  name: 'trips',
  initialState: {
    items: tripsData,
  },
  reducers: {
    // could add bookTrip, etc. in the future
  },
})

export default tripsSlice.reducer
