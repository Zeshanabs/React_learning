import Hero from '../components/Hero'

function SignUp() {
  return (
    <div className="space-y-10">
      <Hero
        eyebrow="Join the journey"
        heading="Create an account and unlock exclusive travel rewards."
        description="Sign up for special offers, itinerary updates, and member-only travel planning tools designed to make your next trip easier."
        primaryLabel="Register now"
        primaryLink="#signup-form"
        secondaryLabel="Browse home"
        secondaryLink="/"
        panelTitle="Member perks"
        panelBadge="Exclusive"
        panelDescription="Access early booking deals, travel tips, and easy account management for your tours."
        stats={[
          { label: 'Bonus', value: 'Welcome offer' },
          { label: 'Deals', value: 'Member only' },
          { label: 'Support', value: 'Expert help' },
        ]}
      />

      <section id="signup-form" className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/20">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Sign up</p>
          <h2 className="text-3xl font-semibold text-white">Register for personalized travel planning.</h2>
          <p className="max-w-3xl text-sm leading-7 text-slate-300">
            Complete the form below to create an account and receive tailored offers for tours, hotels, and adventure packages.
          </p>
        </div>

        <form className="mt-8 grid gap-4 lg:grid-cols-2">
          <input
            type="text"
            placeholder="First name"
            className="w-full rounded-3xl border border-slate-800/70 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/80"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full rounded-3xl border border-slate-800/70 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/80"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-3xl border border-slate-800/70 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/80"
          />
          <input
            type="password"
            placeholder="Create password"
            className="w-full rounded-3xl border border-slate-800/70 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/80"
          />
          <textarea
            rows="4"
            placeholder="Tell us your travel interests"
            className="col-span-full w-full rounded-3xl border border-slate-800/70 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/80"
          />
          <button
            type="submit"
            className="col-span-full inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Create account
          </button>
        </form>
      </section>
    </div>
  )
}

export default SignUp
