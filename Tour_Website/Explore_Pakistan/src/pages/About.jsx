// ============================================================
// FILE: src/pages/About.jsx
// PURPOSE: About page — rendered when URL is /about
// CONCEPTS USED: React Router page, component structure, Tailwind layout
// ============================================================

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&q=80',
    bio: 'Passionate traveler with 20 years of experience turning dreams into journeys.',
  },
  {
    name: 'Marcus Chen',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
    bio: 'Logistics genius ensuring every trip runs smoother than clockwork.',
  },
  {
    name: 'Priya Patel',
    role: 'Lead Tour Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
    bio: 'Crafts unique itineraries that blend adventure, culture, and local flavors.',
  },
]

const About = () => {
  return (
    <div className="pt-16 font-poppins">

      {/* ---- HERO BANNER ---- */}
      <div
        className="relative h-64 sm:h-80 flex items-center justify-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">About Trippy</h1>
          <p className="text-gray-300 text-base">Home &nbsp;/ &nbsp;About Us</p>
        </div>
      </div>

      {/* ---- OUR STORY ---- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="text-4xl font-extrabold text-secondary mt-2 mb-6">
              We Make Your Travel Dreams Come True
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Founded in 2009, Trippy started as a small team of travel enthusiasts who believed
              that everyone deserves to experience the world's wonders. Today, we're a global
              travel company serving over 50,000 adventurers every year.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              From the beaches of Bali to the mountains of Peru, we craft personalized journeys
              that create memories lasting a lifetime. Our expert team handles every detail so
              you can focus on what matters — the experience.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: '50K+', label: 'Happy Travelers' },
                { num: '200+', label: 'Destinations' },
                { num: '15+', label: 'Years of Service' },
                { num: '99%', label: 'Satisfaction Rate' },
              ].map((s) => (
                <div key={s.label} className="bg-orange-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-extrabold text-primary">{s.num}</p>
                  <p className="text-gray-500 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80"
              alt="Travel"
              className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
            />
            <div className="absolute -bottom-5 -left-5 bg-primary text-white p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-extrabold">15+</p>
              <p className="text-sm opacity-90">Years of Travel Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- TEAM SECTION ---- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Our People
            </span>
            <h2 className="text-4xl font-extrabold text-secondary mt-2 mb-4">
              Meet The Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 text-center group">
                <div className="overflow-hidden h-56">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-secondary text-xl mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
