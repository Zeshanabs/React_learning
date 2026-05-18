// ============================================================
// FILE: src/features/nav/navSlice.js
// PURPOSE: Redux slice for Navbar state (mobile menu toggle)
// ============================================================

import { createSlice } from '@reduxjs/toolkit'

/*
  createSlice() creates:
  - name: identifier for this slice of state
  - initialState: starting values
  - reducers: functions that change state (called "actions")

  Redux Toolkit uses Immer under the hood, so we can write
  "mutating" code like state.menuOpen = true, and it handles
  immutability for us automatically.
*/

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    menuOpen: false,      // Is the mobile hamburger menu open?
    activeLink: 'home',   // Which nav link is currently active?
  },
  reducers: {
    // Toggles the menu open/closed
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen
    },
    // Forces menu closed (used when a link is clicked)
    closeMenu: (state) => {
      state.menuOpen = false
    },
    // Sets which link is currently active
    setActiveLink: (state, action) => {
      // action.payload is the value passed when dispatching
      state.activeLink = action.payload
    },
  },
})

// Export actions so components can dispatch them
export const { toggleMenu, closeMenu, setActiveLink } = navSlice.actions

// Export reducer so store.js can use it
export default navSlice.reducer
