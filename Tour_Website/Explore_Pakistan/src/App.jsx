// ============================================================
// FILE: src/App.jsx
// PURPOSE: Root component — defines all routes using React Router v6
// CONCEPTS USED: Routes, Route, useEffect (scroll to top on route change)
// ============================================================

import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'

/*
  ScrollToTop: Custom component that scrolls window to top
  whenever the URL (location.pathname) changes.
  This mimics normal browser navigation behavior in SPAs.
*/
const ScrollToTop = () => {
  const { pathname } = useLocation()  // useLocation: gives current URL info
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])  // runs every time the path changes
  return null  // renders nothing visible
}

/*
  App Component — the SHELL of the entire app.
  
  Structure:
  ┌─────────────────────────┐
  │ <Navbar />              │  ← always visible (fixed)
  ├─────────────────────────┤
  │ <Routes>                │  ← renders the matching page
  │   /       → <Home />    │
  │   /about  → <About />   │
  │   /service→ <Service /> │
  │   /contact→ <Contact /> │
  └─────────────────────────┘
  │ <Footer />              │  ← always visible
  └─────────────────────────┘

  REACT ROUTER v6 CONCEPTS:
  - <Routes>: Container for all <Route> elements
  - <Route path="/" element={<Home />}>: Maps URL "/" to <Home> component
  - Only ONE route renders at a time (the one matching the URL)
  - path="*": Catch-all for 404 pages
*/

const App = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <ScrollToTop />
      
      {/* Navbar stays on top of every page */}
      <Navbar />

      {/*
        Routes: Like a switch statement for URLs.
        React Router checks the current URL and renders
        the component whose path matches.
      */}
      <Routes>
        {/* Home Page at root URL "/" */}
        <Route path="/" element={<Home />} />

        {/* About Page at "/about" */}
        <Route path="/about" element={<About />} />

        {/* Services Page at "/service" */}
        <Route path="/service" element={<Service />} />

        {/* Contact Page at "/contact" */}
        <Route path="/contact" element={<Contact />} />

        {/* 404 - Not Found (catch-all) */}
        <Route
          path="*"
          element={
            <div className="flex flex-col items-center justify-center min-h-screen text-center font-poppins px-4">
              <div className="text-8xl mb-6">🗺️</div>
              <h1 className="text-6xl font-extrabold text-secondary mb-4">404</h1>
              <p className="text-gray-500 text-xl mb-8">
                Oops! This destination doesn't exist on our map.
              </p>
              <a
                href="/"
                className="bg-primary text-white font-bold px-10 py-3 rounded-full hover:bg-orange-500 transition-all duration-300"
              >
                Back to Home
              </a>
            </div>
          }
        />
      </Routes>

      {/* Footer stays at bottom of every page */}
      <Footer />
    </div>
  )
}

export default App
