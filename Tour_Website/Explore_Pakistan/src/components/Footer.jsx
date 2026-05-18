// ============================================================
// FILE: src/components/Footer.jsx
// PURPOSE: Site footer with links, social icons, and newsletter
// CONCEPTS USED: Link (React Router), array .map(), JSX structure
// ============================================================

import { Link } from 'react-router-dom'
import {
  FaPlane, FaFacebookF, FaTwitter, FaInstagram, FaYoutube,
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaCalculator,
} from 'react-icons/fa'

const footerLinks = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/service' },
    { label: 'Contact', path: '/contact' },
    { label: 'Careers', path: '/' },
  ],
  Support: [
    { label: 'FAQ', path: '/' },
    { label: 'Privacy Policy', path: '/' },
    { label: 'Terms of Service', path: '/' },
    { label: 'Refund Policy', path: '/' },
  ],
}

const socialLinks = [
  { icon: <FaCalculator />, href: '/', color: 'hover:bg-blue-600' },
  { icon: <FaTwitter />, href: '#', color: 'hover:bg-sky-500' },
  { icon: <FaInstagram />, href: '#', color: 'hover:bg-pink-600' },
  { icon: <FaYoutube />, href: '#', color: 'hover:bg-red-600' },
]

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300 font-poppins">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <FaPlane className="text-primary text-2xl rotate-45" />
              <span className="text-black font-bold text-2xl">
                Bayaan<span className="text-primary"></span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Bayaan is your trusted travel partner for unforgettable adventures. 
              We explore pakistan and northern areas, fun, and affordable.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white text-sm transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-base mb-5 relative inline-block after:block after:w-8 after:h-0.5 after:bg-primary after:mt-1">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 relative inline-block after:block after:w-8 after:h-0.5 after:bg-primary after:mt-1">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                Gali no 1, Astana, Skardu, Gilgit Baltistan
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FaPhone className="text-primary shrink-0" />
                0345 0622296
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FaEnvelope className="text-primary shrink-0" />
                info@bayaan.com
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-white text-sm font-semibold mb-3">Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 text-white placeholder-gray-500 text-sm px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-orange-500 transition-colors duration-300 text-sm font-semibold">
                  Go
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Trippy Travel. All rights reserved.
        </div>
      </div>

    </footer>
  )
}

export default Footer
