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
  Trash2,
  Sigma,
  Puzzle,
  MessageSquare,
  Shuffle
} from 'lucide-react'
import { QUESTIONS } from '@/data/questions'
import type { TestCategory } from '@/types/apti'

type CategoryType = TestCategory | 'mixed'

const CATEGORIES: Array<{ id: CategoryType; name: string; icon: any; color: string; description: string }> = [
  { id: 'math', name: 'Mathematics', icon: Sigma, color: 'from-blue-500 to-indigo-600', description: 'Numbers, algebra, and problem-solving' },
  { id: 'logic', name: 'Logic', icon: Puzzle, color: 'from-purple-500 to-pink-600', description: 'Patterns, sequences, and reasoning' },
  { id: 'verbal', name: 'Verbal', icon: MessageSquare, color: 'from-emerald-500 to-teal-600', description: 'Language, vocabulary, and grammar' },
  { id: 'mixed', name: 'Mixed', icon: Shuffle, color: 'from-orange-500 to-amber-600', description: 'A balanced mix of all categories' }
]

export function Dashboard() {
  const { setView, startTest, history, clearHistory } = useAptiStore()

  const handleStart = (category: CategoryType) => {
    let questions: typeof QUESTIONS

    if (category === 'mixed') {
      // Get 5 from each category for a balanced 15-question test
      const mathQuestions = QUESTIONS.filter(q => q.category === 'math').sort(() => 0.5 - Math.random()).slice(0, 5)
      const logicQuestions = QUESTIONS.filter(q => q.category === 'logic').sort(() => 0.5 - Math.random()).slice(0, 5)
      const verbalQuestions = QUESTIONS.filter(q => q.category === 'verbal').sort(() => 0.5 - Math.random()).slice(0, 5)
      questions = [...mathQuestions, ...logicQuestions, ...verbalQuestions].sort(() => 0.5 - Math.random())
    } else {
      // Get 10 questions from selected category
      questions = QUESTIONS
        .filter(q => q.category === category)
        .sort(() => 0.5 - Math.random())
        .slice(0, 10)
    }

    startTest(category, questions)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }

  const getCategoryLabel = (category: CategoryType) => {
    return CATEGORIES.find(c => c.id === category)?.name || category
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
          className="glass p-10 rounded-[3rem] border-2 border-transparent hover:border-apti-secondary transition-all"
        >
          <div className="bg-purple-50 dark:bg-purple-900/20 w-16 h-16 rounded-2xl flex items-center justify-center text-apti-secondary mb-8">
            <BrainCircuit size={32} />
          </div>
          <h3 className="text-3xl font-display font-black mb-6">Start Assessment</h3>
          <p className="text-slate-500 font-medium mb-6">Choose a category to test your skills:</p>

          <div className="space-y-3">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => handleStart(cat.id as CategoryType)}
                  className="w-full p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 hover:from-slate-100 dark:hover:from-slate-700 transition-all flex items-center gap-4 group/btn"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-sm">{cat.name}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">{cat.description}</p>
                  </div>
                  <ArrowUpRight className="opacity-0 group-hover/btn:opacity-100 transition-opacity text-apti-primary" size={18} />
                </button>
              )
            })}
          </div>
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center text-2xl font-black text-apti-primary">
                    {Math.round((res.score / res.totalQuestions) * 100)}%
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{getCategoryLabel(res.category as CategoryType)} Assessment</h4>
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
                   <div className={`p-2 ${res.score / res.totalQuestions >= 0.7 ? 'bg-emerald-50 dark:bg-emerald-900/20 text-apti-accent' : 'bg-amber-50 dark:bg-amber-900/20 text-amber-500'} rounded-xl`}>
                      <Trophy size={20} />
                   </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/30 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800">
            <Zap className="mx-auto text-slate-300 mb-4" size={48} />
            <p className="text-slate-400 font-bold">No tests taken yet. Your brain awaits.</p>
          </div>
        )}
      </section>
    </div>
  )
}
