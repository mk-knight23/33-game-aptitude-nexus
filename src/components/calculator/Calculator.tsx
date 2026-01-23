import { useState } from 'react'
import { evaluate } from 'mathjs'
import { Delete, X, Divide, Minus, Plus, Equal, Hash } from 'lucide-react'

export function Calculator() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')

  const handleKey = (key: string) => {
    if (key === '=') {
      try {
        const res = evaluate(expression)
        setResult(res.toString())
      } catch (err) {
        setResult('Error')
      }
    } else if (key === 'C') {
      setExpression('')
      setResult('')
    } else if (key === 'DEL') {
      setExpression(prev => prev.slice(0, -1))
    } else {
      setExpression(prev => prev + key)
    }
  }

  const buttons = [
    ['C', '(', ')', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', 'DEL', '=']
  ]

  return (
    <div className="max-w-md mx-auto glass p-8 rounded-[2.5rem] shadow-2xl space-y-8">
      {/* Display */}
      <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl text-right space-y-2 min-h-[120px] flex flex-col justify-end">
        <p className="text-sm font-mono text-slate-400 overflow-hidden whitespace-nowrap">{expression || '0'}</p>
        <p className="text-4xl font-display font-black text-blue-600 dark:text-blue-400 truncate">
          {result || expression || '0'}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-3">
        {buttons.flat().map((btn) => (
          <button
            key={btn}
            onClick={() => handleKey(btn)}
            className={clsx(
              "calc-btn",
              ['/', '*', '-', '+', '(', ')'].includes(btn) ? "calc-btn-op" : 
              btn === '=' ? "calc-btn-action" : 
              btn === 'C' ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400" :
              "calc-btn-num"
            )}
          >
            {btn === '/' ? <Divide size={20} /> :
             btn === '*' ? <X size={20} /> :
             btn === '-' ? <Minus size={20} /> :
             btn === '+' ? <Plus size={20} /> :
             btn === '=' ? <Equal size={24} /> :
             btn === 'DEL' ? <Delete size={20} /> :
             btn}
          </button>
        ))}
      </div>
      
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center flex items-center justify-center gap-2">
          <Hash size={12} /> Powered by Math.js
        </p>
      </div>
    </div>
  )
}

function clsx(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}
