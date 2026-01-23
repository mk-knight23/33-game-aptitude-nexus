import { motion } from 'framer-motion'
import { useAptiStore } from '@/stores/aptiStore'
import { 
  Calculator as CalcIcon, 
  BrainCircuit, 
  History, 
  Trophy,
  ArrowUpRight,
  Zap,
  Calendar,
  Clock,
  Trash2
} from 'lucide-react'
import { QUESTIONS } from '@/data/questions'

export function Dashboard() {
  const { setView, startTest, history, clearHistory } = useAptiStore()

  const handleStart = () => {
    // Shuffle and pick 5
    const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 5)
    startTest('mixed', shuffled)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }

  return (
    <div className="space-y-16">
      {/* Quick Actions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ y: -5 }}
          onClick={() => setView('calculator')}
          className="glass p-10 rounded-[3rem] border-2 border-transparent hover:border-apti-primary transition-all cursor-pointer group"
        >
          <div className="bg-blue-50 dark:bg-blue-900/20 w-16 h-16 rounded-2xl flex items-center justify-center text-apti-primary mb-8">
            <CalcIcon size={32} />
          </div>
          <h3 className="text-3xl font-display font-black mb-2 flex items-center gap-2">
            Scientific Calc <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-slate-500 font-medium">Advanced mathematical operations for complex problem solving.</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          onClick={handleStart}
          className="glass p-10 rounded-[3rem] border-2 border-transparent hover:border-apti-secondary transition-all cursor-pointer group"
        >
          <div className="bg-purple-50 dark:bg-purple-900/20 w-16 h-16 rounded-2xl flex items-center justify-center text-apti-secondary mb-8">
            <BrainCircuit size={32} />
          </div>
          <h3 className="text-3xl font-display font-black mb-2 flex items-center gap-2">
            Take Assessment <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-slate-500 font-medium">Test your skills across math, logic, and verbal reasoning categories.</p>
        </motion.div>
      </section>

      {/* Recent Performance */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-display font-bold flex items-center gap-3">
            <History className="text-apti-primary" /> Performance History
          </h3>
          {history.length > 0 && (
            <button 
              onClick={clearHistory}
              className="text-xs font-black text-red-500 uppercase tracking-widest hover:underline flex items-center gap-2"
            >
              <Trash2 size={14} /> Clear All
            </button>
          )}
        </div>

        {history.length > 0 ? (
          <div className="grid gap-4">
            {history.map(res => (
              <div key={res.id} className="glass p-6 rounded-3xl flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-2xl font-black text-apti-primary">
                    {Math.round((res.score / res.totalQuestions) * 100)}%
                  </div>
                  <div>
                    <h4 className="font-bold text-lg capitalize">{res.category} Assessment</h4>
                    <div className="flex gap-4 text-xs font-bold text-slate-400 uppercase tracking-tighter mt-1">
                      <span className="flex items-center gap-1.5"><Calendar size={12} /> {new Date(res.date).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1.5"><Clock size={12} /> {formatTime(res.timeSpent)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                   <div className="text-right">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Score</p>
                      <p className="text-xl font-black">{res.score} / {res.totalQuestions}</p>
                   </div>
                   <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 text-apti-accent rounded-xl">
                      <Trophy size={20} />
                   </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/30 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800">
            <Zap className="mx-auto text-slate-300 mb-4" size={48} />
            <p className="text-slate-400 font-bold">No assessment records found. Start your first test today!</p>
          </div>
        )}
      </section>
    </div>
  )
}
