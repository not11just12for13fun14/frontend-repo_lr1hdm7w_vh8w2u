const logos = [
  'Stripe', 'Snowflake', 'HashiCorp', 'Cloudflare', 'Datadog', 'Fastly'
]

export default function Logos() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium text-slate-500">Trusted by modern engineering teams</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-slate-400">
          {logos.map((name) => (
            <div key={name} className="h-10 rounded-xl border border-slate-200/70 bg-white grid place-items-center text-xs font-semibold tracking-wide">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
