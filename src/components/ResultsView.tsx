import { motion } from 'framer-motion'
import { useAptiStore } from '@/stores/aptiStore'
import { 
  Trophy, 
  ArrowLeft, 
  RotateCcw,
  CheckCircle2,
  XCircle,
  Timer
} from 'lucide-react'

export function ResultsView() {
  const { history, setView } = useAptiStore()
  const latest = history[0]

  if (!latest) return null

  const percentage = Math.round((latest.score / latest.totalQuestions) * 100)

  return (
    <div className="max-w-2xl mx-auto text-center space-y-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-6"
      >
        <div className="relative inline-block">
          <div className="w-48 h-48 rounded-full border-8 border-apti-primary/10 flex items-center justify-center">
            <span className="text-6xl font-display font-black text-apti-primary">{percentage}%</span>
          </div>
          <motion.div 
            initial={{ rotate: -20, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-4 -right-4 bg-yellow-400 text-white p-4 rounded-2xl shadow-xl"
          >
            <Trophy size={32} />
          </motion.div>
        </div>

        <div>
          <h2 className="text-4xl font-display font-black mb-2">Assessment Complete!</h2>
          <p className="text-slate-500 font-medium">You scored {latest.score} out of {latest.totalQuestions} questions.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-3 gap-6">
        <div className="glass p-6 rounded-3xl">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Correct</p>
          <div className="flex items-center justify-center gap-2 text-emerald-600 font-black text-2xl">
            <CheckCircle2 size={20} /> {latest.score}
          </div>
        </div>
        <div className="glass p-6 rounded-3xl">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Incorrect</p>
          <div className="flex items-center justify-center gap-2 text-red-500 font-black text-2xl">
            <XCircle size={20} /> {latest.totalQuestions - latest.score}
          </div>
        </div>
        <div className="glass p-6 rounded-3xl">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Time</p>
          <div className="flex items-center justify-center gap-2 text-blue-600 font-black text-2xl">
            <Timer size={20} /> {Math.floor(latest.timeSpent / 60)}m
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button 
          onClick={() => setView('calculator')}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-2xl font-black hover:bg-slate-50 transition-all flex items-center gap-2"
        >
          <ArrowLeft size={18} /> BACK TO CALC
        </button>
        <button 
          onClick={() => setView('calculator')} // Reset to dashboard basically
          className="bg-apti-primary text-white px-10 py-4 rounded-2xl font-black shadow-lg shadow-apti-primary/20 hover:scale-105 transition-all flex items-center gap-2"
        >
          <RotateCcw size={18} /> RETAKE TEST
        </button>
      </div>
    </div>
  )
}
