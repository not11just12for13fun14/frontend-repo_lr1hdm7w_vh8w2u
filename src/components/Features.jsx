import { Shield, Cpu, Cloud, Headphones } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Autonomous Operations',
    desc: 'ML-driven autoscaling, self-healing clusters, and predictive maintenance.'
  },
  {
    icon: Cloud,
    title: 'Multi-Cloud Orchestration',
    desc: 'One control plane across AWS, Azure, and GCP with zero-trust networking.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'Built-in compliance, continuous posture management, and secret vaults.'
  },
  {
    icon: Headphones,
    title: 'Voice Agent NOC',
    desc: 'Natural language runbooks and voice-first incident response.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-white via-white to-purple-50/40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            The platform powering AI-native infrastructure
          </h2>
          <p className="mt-4 text-slate-600">
            Accelerate delivery while lowering costs with a unified stack that senses, decides, and acts.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 text-white grid place-items-center shadow-md shadow-purple-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
