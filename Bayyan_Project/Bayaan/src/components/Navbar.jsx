import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assits/bayanlogo.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 rounded-full bg-white/95 px-5 py-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
        <NavLink to="/" className="flex items-center gap-3 text-lg font-semibold text-slate-950">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-slate-950 ring-1 ring-cyan-200">
            <img src={logo} alt="Bayyan logo" className="h-7 w-7 object-contain" />
          </span>
          Bayyan
        </NavLink>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          Menu
          <span className="text-cyan-600">{open ? '✕' : '☰'}</span>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-cyan-600' : 'text-slate-700 hover:text-slate-950'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <NavLink
            to="/signup"
            className="rounded-full bg-cyan-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500"
          >
            Sign Up
          </NavLink>
        </div>

        {open ? (
          <nav className="w-full rounded-3xl bg-white/95 px-4 py-4 ring-1 ring-slate-200 shadow-xl shadow-slate-900/5 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-3 text-sm font-medium transition ${
                      isActive ? 'bg-cyan-50 text-cyan-700' : 'text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/signup"
                onClick={() => setOpen(false)}
                className="rounded-full bg-cyan-600 px-4 py-3 text-sm font-semibold text-white text-center transition hover:bg-cyan-500"
              >
                Sign Up
              </NavLink>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  )
}

export default Navbar
