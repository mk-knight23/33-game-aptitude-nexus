import { motion } from 'framer-motion'
import { 
  CheckCircle2, 
  Timer, 
  ChevronRight, 
  Brain
} from 'lucide-react'
import { useAptiStore } from '@/stores/aptiStore'
import type { TestResult } from '@/types/apti'

export function TestEngine() {
  const { currentTest, submitAnswer, finishTest } = useAptiStore()

  if (!currentTest) return null

  const question = currentTest.questions[currentTest.currentIndex]
  const isLast = currentTest.currentIndex === currentTest.questions.length - 1
  const progress = ((currentTest.currentIndex + 1) / currentTest.questions.length) * 100

  const handleFinish = () => {
    const timeSpent = Math.floor((Date.now() - currentTest.startTime) / 1000)
    let score = 0
    
    currentTest.questions.forEach(q => {
      if (currentTest.answers[q.id] === q.correctAnswer) {
        score++
      }
    })

    const result: TestResult = {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
      score,
      totalQuestions: currentTest.questions.length,
      category: currentTest.category,
      timeSpent
    }

    finishTest(result)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <Brain size={14} className="text-apti-primary" /> {currentTest.category} Assessment
          </h3>
          <p className="text-lg font-bold">Question {currentTest.currentIndex + 1} of {currentTest.questions.length}</p>
        </div>
        <div className="flex items-center gap-2 text-apti-primary font-mono font-bold bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-xl">
          <Timer size={18} />
          <span>Active Session</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-apti-primary"
        />
      </div>

      {/* Question Card */}
      <motion.div 
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass p-10 rounded-[2.5rem] shadow-xl space-y-8"
      >
        <h4 className="text-2xl font-display font-bold leading-snug">
          {question.text}
        </h4>

        <div className="grid gap-4">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => submitAnswer(question.id, idx)}
              className={clsx(
                "w-full text-left p-6 rounded-2xl border-2 transition-all group flex items-center justify-between",
                currentTest.answers[question.id] === idx 
                  ? "border-apti-primary bg-apti-primary/5" 
                  : "border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              )}
            >
              <div className="flex items-center gap-4">
                <span className={clsx(
                  "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm",
                  currentTest.answers[question.id] === idx ? "bg-apti-primary text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                )}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="font-medium">{option}</span>
              </div>
              {currentTest.answers[question.id] === idx && (
                <CheckCircle2 size={20} className="text-apti-primary" />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Actions */}
      <div className="flex justify-end gap-4">
        {isLast ? (
          <button 
            onClick={handleFinish}
            className="bg-apti-accent text-white px-10 py-4 rounded-2xl font-black shadow-lg shadow-apti-accent/20 hover:scale-105 transition-all"
          >
            FINISH ASSESSMENT
          </button>
        ) : (
          <div className="text-slate-400 text-sm font-medium flex items-center gap-2">
            Select an answer to proceed <ChevronRight size={16} />
          </div>
        )}
      </div>
    </div>
  )
}

function clsx(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}
