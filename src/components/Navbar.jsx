import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/20">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-orange-400 shadow-lg shadow-purple-500/20 grid place-items-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">
            NovaInfra AI
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#solutions" className="hover:text-slate-900 transition">Solutions</a>
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex h-10 rounded-xl px-4 text-sm font-medium text-slate-700 hover:text-slate-900 transition">
            Sign in
          </button>
          <button className="inline-flex h-10 rounded-xl px-4 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition shadow-sm">
            Get Started
          </button>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  )
}
