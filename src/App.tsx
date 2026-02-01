import { motion, AnimatePresence } from 'framer-motion'
import { useAptiStore } from '@/stores/aptiStore'
import {
  Zap,
  Moon,
  Sun,
  Github,
  Calculator as CalcIcon,
  BrainCircuit
} from 'lucide-react'
import { Calculator } from './components/calculator/Calculator'
import { TestEngine } from './components/test/TestEngine'
import { Dashboard } from './components/Dashboard'
import { ResultsView } from './components/ResultsView'
import { cn } from '@/utils/cn'

export default function App() {
  const { view, setView, isDarkMode, toggleDarkMode } = useAptiStore()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-16">
          <div
            onClick={() => setView('calculator')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="bg-nexus-primary/20 p-2.5 rounded-none border border-nexus-primary/50 shadow-[0_0_15px_#06b6d44d]">
              <Zap className="text-nexus-primary w-7 h-7" />
            </div>
            <h1 className="text-2xl font-display font-black tracking-widest uppercase italic">
              APTITUDE<span className="text-nexus-primary">_NEXUS</span>
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex bg-nexus-card p-1 rounded-none border border-white/10 mr-4">
              <button
                onClick={() => setView('calculator')}
                className={cn(
                  "px-4 py-2 rounded-none text-xs font-black uppercase tracking-widest transition-all",
                  view === 'calculator' ? "bg-nexus-primary text-black shadow-[0_0_10px_#06b6d466]" : "text-slate-500 hover:text-white"
                )}
              >
                <CalcIcon size={14} className="inline mr-2" /> CORE_CALC
              </button>
              <button
                onClick={() => setView('test')}
                className={cn(
                  "px-4 py-2 rounded-none text-xs font-black uppercase tracking-widest transition-all",
                  view === 'test' ? "bg-nexus-secondary text-white shadow-[0_0_10px_#6366f166]" : "text-slate-500 hover:text-white"
                )}
              >
                <BrainCircuit size={14} className="inline mr-2" /> ASSESSMENT
              </button>
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-none bg-nexus-card border border-white/10 text-slate-500 hover:text-nexus-primary hover:border-nexus-primary/50 transition-all"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://github.com/mk-knight23/39-Aptitude-Calculator"
              className="p-3 rounded-none bg-nexus-card border border-white/10 text-slate-500 hover:text-nexus-primary hover:border-nexus-primary/50 transition-all"
            >
              <Github size={20} />
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <main className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            {view === 'calculator' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                <header className="text-center space-y-4 mb-20">
                  <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-[0.9] text-white uppercase italic">
                    QUANTUM <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-primary to-nexus-secondary">INTELLIGENCE</span>
                  </h2>
                  <p className="text-nexus-primary/60 max-w-xl mx-auto text-sm font-mono tracking-widest uppercase">
                    Advanced Logic Assessment // Neural Calculation Protocol
                  </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <Calculator />
                  <Dashboard />
                </div>
              </motion.div>
            )}

            {view === 'test' && (
              <motion.div
                key="test"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
              >
                <TestEngine />
              </motion.div>
            )}

            {view === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ResultsView />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="mt-48 pb-12 border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500">
          <div className="flex items-center gap-2">
            <Zap className="text-nexus-primary w-4 h-4" />
            <span className="font-display font-black uppercase text-xs tracking-[0.3em]">NEXUS // CORE v3.0</span>
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-nexus-primary transition-colors">Documentation</a>
            <a href="#" className="hover:text-nexus-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-nexus-primary transition-colors">Contact</a>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest">&copy; 2026 MK-ASSESS. ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </div>
  )
}


