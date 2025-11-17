import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Logos from './components/Logos'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <CTA />
      <footer className="border-t border-slate-200/70">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} NovaInfra AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 transition">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition">Security</a>
            <a href="#" className="hover:text-slate-900 transition">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
