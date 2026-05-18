// ============================================================
// FILE: src/pages/Contact.jsx
// PURPOSE: Contact page with form — local state for form fields
// CONCEPTS USED: useState (local state for form), onSubmit handler,
//                controlled inputs, e.preventDefault()
// ============================================================

import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

/*
  NOTE ON STATE CHOICE:
  Form input data uses LOCAL state (useState) here, not Redux.
  WHY? Form data is temporary UI state — it doesn't need to be
  shared across the app. Redux is best for SHARED/GLOBAL state.
  
  Rule of thumb:
  - Local state (useState) → UI-only, temporary, single-component data
  - Redux state → data shared across multiple components or pages
*/

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  destination: '',
  message: '',
}

const Contact = () => {
  // Local state for form fields
  const [formData, setFormData] = useState(initialFormState)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  /*
    handleChange: Generic change handler for all inputs.
    [e.target.name]: Dynamic key using the input's "name" attribute.
    This way we don't need a separate handler for each field.
  */
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,                    // Keep all existing values
      [e.target.name]: e.target.value, // Update only the changed field
    }))
  }

  /*
    handleSubmit: Called when form is submitted.
    e.preventDefault(): Stops default browser form behavior (page reload).
  */
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call (in real app, you'd use fetch/axios here)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData(initialFormState) // Reset form
    }, 1500)
  }

  return (
    <div className="pt-16 font-poppins">

      {/* Hero Banner */}
      <div
        className="relative h-64 sm:h-80 flex items-center justify-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Contact Us</h1>
          <p className="text-gray-300 text-base">Home &nbsp;/ &nbsp;Contact</p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Contact Info */}
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Get In Touch
              </span>
              <h2 className="text-4xl font-extrabold text-secondary mt-2 mb-6">
                We'd Love To Hear From You
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                Have a question about a destination? Want to plan a custom trip? 
                Our travel experts are ready to help you craft your perfect adventure.
              </p>

              {/* Info Cards */}
              {[
                { icon: <FaPhone />, title: 'Phone', value: '+1 (800) TRIPPY-1', sub: 'Mon-Fri, 9am-6pm EST' },
                { icon: <FaEnvelope />, title: 'Email', value: 'hello@trippy.travel', sub: 'We reply within 24 hours' },
                { icon: <FaMapMarkerAlt />, title: 'Office', value: '123 Travel St, Adventure City', sub: 'World, 45678' },
                { icon: <FaWhatsapp />, title: 'WhatsApp', value: '+1 800 874 779', sub: 'Available 24/7' },
              ].map((info) => (
                <div key={info.title} className="flex items-start gap-5 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-bold text-secondary">{info.title}</p>
                    <p className="text-gray-600 text-sm">{info.value}</p>
                    <p className="text-gray-400 text-xs">{info.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
              {submitted ? (
                /* Success Message */
                <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">
                    Thanks for reaching out! Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-500 transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-bold text-secondary mb-6">
                    Book a Free Consultation
                  </h3>

                  {/* Name + Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2">
                        Full Name *
                      </label>
                      {/*
                        Controlled Input:
                        value={formData.name} → React controls what's displayed
                        onChange={handleChange} → Updates state on every keystroke
                        name="name" → Matches the key in formData object
                      */}
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Phone + Destination Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2">
                        Dream Destination
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="Bali, Paris, Maldives..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your dream trip..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-400/40 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message ✈️'
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
