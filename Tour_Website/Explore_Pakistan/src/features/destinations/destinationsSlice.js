// ============================================================
// FILE: src/features/destinations/destinationsSlice.js
// PURPOSE: Redux slice for destination cards data
// ============================================================

import { createSlice } from '@reduxjs/toolkit'

const destinationsData = [
  {
    id: 1,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&q=80',
    price: '$1,299',
    rating: 4.9,
    reviews: 1280,
    duration: '7 Days / 6 Nights',
    type: 'Beach & Culture',
    featured: true,
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    price: '$899',
    rating: 4.8,
    reviews: 2043,
    duration: '5 Days / 4 Nights',
    type: 'Tropical Paradise',
    featured: false,
  },
  {
    id: 3,
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80',
    price: '$1,599',
    rating: 4.7,
    reviews: 3210,
    duration: '6 Days / 5 Nights',
    type: 'City & Romance',
    featured: true,
  },
  {
    id: 4,
    name: 'Machu Picchu, Peru',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80',
    price: '$1,099',
    rating: 4.9,
    reviews: 987,
    duration: '8 Days / 7 Nights',
    type: 'Adventure & History',
    featured: false,
  },
  {
    id: 5,
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80',
    price: '$2,199',
    rating: 5.0,
    reviews: 756,
    duration: '5 Days / 4 Nights',
    type: 'Luxury Beach',
    featured: true,
  },
  {
    id: 6,
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
    price: '$1,399',
    rating: 4.8,
    reviews: 1654,
    duration: '7 Days / 6 Nights',
    type: 'City & Culture',
    featured: false,
  },
]

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState: {
    items: destinationsData,
    filter: 'all',   // could be 'featured', 'all', etc.
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const { setFilter } = destinationsSlice.actions
export default destinationsSlice.reducer
