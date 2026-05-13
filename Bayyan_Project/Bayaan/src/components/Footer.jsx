import { NavLink } from 'react-router-dom'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/95 px-6 py-10 text-slate-400 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="text-xl font-semibold text-white">Atlas Tours</p>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            A component-based travel website built with React and Tailwind CSS, designed for modern tour and booking experiences.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
