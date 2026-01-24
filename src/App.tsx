import { motion, AnimatePresence } from 'framer-motion'
import { useSettingsStore } from '@/stores/settings'
import { useAptiStore } from '@/stores/aptiStore'
import {
  Zap,
  Moon,
  Sun,
  Github,
  Calculator as CalcIcon,
  BrainCircuit,
  Settings as SettingsIcon,
} from 'lucide-react'
import { Calculator } from './components/calculator/Calculator'
import { TestEngine } from './components/test/TestEngine'
import { Dashboard } from './components/Dashboard'
import { ResultsView } from './components/ResultsView'
import { SettingsPanel } from './components/SettingsPanel'

function clsx(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function App() {
  const { isDarkMode, toggleHelp, toggleDarkMode } = useSettingsStore()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <SettingsPanel onClose={() => toggleHelp()} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <div
            onClick={() => useAptiStore.getState().setView('calculator')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="bg-apti-primary p-2.5 rounded-2xl shadow-lg shadow-apti-primary/30">
              <Zap className="text-white w-7 h-7" />
            </div>
            <h1 className="text-2xl font-display font-black tracking-tight">
              Apti<span className="text-apti-primary">Calc</span>
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl mr-4">
              <button
                onClick={() => useAptiStore.getState().setView('calculator')}
                className={clsx(
                  "px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                  useAptiStore.getState().view === 'calculator' ? "bg-white dark:bg-slate-800 text-apti-primary shadow-sm" : "text-slate-400 hover:text-slate-600"
                )}
              >
                <CalcIcon size={14} className="inline mr-2" /> Calculator
              </button>
              <button
                onClick={() => useAptiStore.getState().setView('test')}
                className={clsx(
                  "px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                  useAptiStore.getState().view === 'test' ? "bg-white dark:bg-slate-800 text-apti-primary shadow-sm" : "text-slate-400 hover:text-slate-600"
                )}
              >
                <BrainCircuit size={14} className="inline mr-2" /> Assessment
              </button>
            </div>

            <button
              onClick={() => toggleHelp()}
              className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-apti-primary transition-all"
            >
              <SettingsIcon size={20} />
            </button>
            <button
              onClick={() => { toggleDarkMode(); useSettingsStore.getState().applyTheme() }}
              className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-apti-primary transition-all"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://github.com/mk-knight23/39-Aptitude-Calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-apti-primary transition-all"
            >
              <Github size={20} />
            </a>
          </div>
        </nav>

        <main className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            {useAptiStore.getState().view === 'calculator' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                <header className="text-center space-y-4 mb-20">
                  <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight leading-[0.9]">
                    Master Your <br />
                    <span className="text-apti-primary italic text-shadow-sm">Aptitude</span>
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-lg font-medium">
                    The professional toolkit for mathematical excellence and logical assessment.
                  </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <Calculator />
                  <Dashboard />
                </div>
              </motion.div>
            )}

            {useAptiStore.getState().view === 'test' && (
              <motion.div
                key="test"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
              >
                <TestEngine />
              </motion.div>
            )}

            {useAptiStore.getState().view === 'results' && (
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

        <footer className="mt-48 pb-12 border-t border-slate-200 dark:border-slate-800 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Zap className="text-apti-primary w-5 h-5" />
            <span className="font-display font-black uppercase text-sm tracking-widest text-slate-500">AptiCalc v1.0.0</span>
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-apti-primary transition-colors">Documentation</a>
            <a href="#" className="hover:text-apti-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-apti-primary transition-colors">Contact</a>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">&copy; 2026 MK-ASSESS. ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </div>
  )
}
