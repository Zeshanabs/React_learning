// ============================================================
// FILE: src/components/Navbar.jsx
// PURPOSE: Responsive Navbar with Redux-powered mobile menu toggle
// CONCEPTS USED: useSelector, useDispatch, NavLink (React Router), useState
// ============================================================

import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toggleMenu, closeMenu, setActiveLink } from '../features/nav/navSlice'
import { FaBars, FaTimes, FaPlane } from 'react-icons/fa'

// Navigation links array — easy to add/remove links
const navLinks = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'service', label: 'Services', path: '/service' },
  { id: 'contact', label: 'Contact', path: '/contact' },
]

const Navbar = () => {
  /*
    useSelector: Reads data FROM the Redux store.
    - state.nav.menuOpen: Is the hamburger menu open?
    - This component will re-render whenever these values change.
  */
  const menuOpen = useSelector((state) => state.nav.menuOpen)

  /*
    useDispatch: Sends ACTIONS to the Redux store to change state.
    - Think of dispatch as a "remote control" for the store.
  */
  const dispatch = useDispatch()

  const handleLinkClick = (id) => {
    dispatch(setActiveLink(id))   // Update which link is active in Redux
    dispatch(closeMenu())          // Close mobile menu after clicking a link
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-secondary/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ---- LOGO ---- */}
          <NavLink to="/" className="flex items-center gap-2" onClick={() => handleLinkClick('home')}>
            <FaPlane className="text-primary text-2xl rotate-45" />
            <span className="text-white font-poppins font-bold text-2xl tracking-wide">
              Bayaan<span className="text-primary"></span>
            </span>
          </NavLink>

          {/* ---- DESKTOP NAV LINKS (hidden on mobile) ---- */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                {/*
                  NavLink: Like <Link> but adds an "active" class automatically
                  when the URL matches its "to" prop.
                  className can be a function that receives { isActive }
                */}
                <NavLink
                  to={link.path}
                  end={link.path === '/'}   // "end" prevents "/" from matching all routes
                  onClick={() => handleLinkClick(link.id)}
                  className={({ isActive }) =>
                    `font-poppins font-medium text-sm transition-all duration-300 pb-1 ${
                      isActive
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-300 hover:text-primary'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ---- BOOK NOW BUTTON (desktop) ---- */}
          <div className="hidden md:block">
            <NavLink to="/contact">
              <button className="bg-primary text-white font-poppins font-semibold text-sm px-5 py-2 rounded-full hover:bg-orange-500 transition-all duration-300 shadow-md hover:shadow-orange-400/40">
                Book Now
              </button>
            </NavLink>
          </div>

          {/* ---- HAMBURGER ICON (mobile only) ---- */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => dispatch(toggleMenu())}
            aria-label="Toggle menu"
          >
            {/*
              Conditionally render hamburger or X icon
              based on menuOpen state from Redux
            */}
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* ---- MOBILE MENU (slides down when menuOpen is true) ---- */}
      {/*
        We use Tailwind classes conditionally with a ternary operator.
        When menuOpen is true → show (translate-y-0, opacity-100)
        When menuOpen is false → hide (translate-y-[-100%], opacity-0)
      */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 bg-secondary border-t border-gray-700">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                onClick={() => handleLinkClick(link.id)}
                className={({ isActive }) =>
                  `font-poppins font-medium text-base transition-all duration-300 ${
                    isActive ? 'text-primary' : 'text-gray-300 hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/contact" onClick={() => handleLinkClick('contact')}>
              <button className="bg-primary text-white font-poppins font-semibold text-sm px-6 py-2 rounded-full hover:bg-orange-500 transition-all duration-300">
                Book Now
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
