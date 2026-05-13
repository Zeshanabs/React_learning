function ContactForm() {
  return (
    <section className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/20">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-start">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Get in touch</p>
          <h2 className="text-3xl font-semibold text-white">Send a message to our travel experts.</h2>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            Have questions about destinations, booking, or custom packages? Use this form to share your travel plans and one of our specialists will reach out with next steps.
          </p>
        </div>

        <form className="space-y-4 rounded-[1.8rem] bg-slate-950/95 p-6 shadow-lg shadow-slate-950/20">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-3xl border border-slate-800/70 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/80"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-3xl border border-slate-800/70 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/80"
            />
          </div>

          <select className="w-full rounded-3xl border border-slate-800/70 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/80">
            <option value="">Select service</option>
            <option value="planning">Custom tour planning</option>
            <option value="group">Group travel support</option>
            <option value="luxury">Luxury concierge</option>
          </select>

          <textarea
            rows="5"
            placeholder="Your message"
            className="w-full rounded-3xl border border-slate-800/70 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/80"
          />

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
