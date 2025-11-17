export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(168,85,247,0.4)_0%,rgba(0,0,0,0)_60%)]" />
          <div className="relative grid gap-8 p-10 md:grid-cols-2 md:p-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Ready to modernize your stack with AI?
              </h3>
              <p className="mt-3 text-slate-300">
                Our architects will design a blueprint tailored to your scale, security, and compliance needs.
              </p>
            </div>
            <form className="grid gap-3">
              <input className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-400/40" placeholder="Work email" />
              <input className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-400/40" placeholder="Company" />
              <button className="h-11 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Request a demo</button>
              <p className="text-xs text-slate-400">By submitting this form, you agree to our privacy policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
