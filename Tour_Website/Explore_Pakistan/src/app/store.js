// ============================================================
// FILE: src/app/store.js
// PURPOSE: Central Redux store — combines all "slices" (reducers)
// ============================================================

import { configureStore } from '@reduxjs/toolkit'
import navReducer from '../features/nav/navSlice'
import heroReducer from '../features/hero/heroSlice'
import destinationsReducer from '../features/destinations/destinationsSlice'
import tripsReducer from '../features/trips/tripsSlice'

/*
  configureStore() does 3 things automatically:
  1. Combines all reducers (replaces old combineReducers)
  2. Adds Redux DevTools support
  3. Adds middleware (like thunk for async actions)
*/
export const store = configureStore({
  reducer: {
    nav: navReducer,           // controls mobile menu open/close
    hero: heroReducer,         // controls hero slide index
    destinations: destinationsReducer, // destination cards data
    trips: tripsReducer,       // trip package data
  },
})
