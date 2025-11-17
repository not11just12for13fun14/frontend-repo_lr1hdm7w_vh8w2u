import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900"
          >
            AI-Driven Infrastructure, Built for Scale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-slate-700 max-w-xl"
          >
            We combine intelligent voice agents with automated cloud orchestration to help enterprises deploy, monitor, and optimize systems globally.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#solutions" className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-6 text-white font-medium hover:bg-slate-800 transition">
              Explore Solutions
            </a>
            <a href="#contact" className="inline-flex h-11 items-center justify-center rounded-xl px-6 font-medium border border-slate-300 text-slate-800 hover:bg-white/60 transition">
              Talk to an Expert
            </a>
          </motion.div>
          <div className="mt-10 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex -space-x-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-br from-purple-400 via-blue-400 to-orange-300" />
              ))}
            </div>
            <span>Trusted by teams running 10k+ servers</span>
          </div>
        </div>
        <div className="md:col-span-6" />
      </div>
    </section>
  )
}
