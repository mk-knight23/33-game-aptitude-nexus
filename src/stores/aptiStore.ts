import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { AptiState, TestResult, Question, TestCategory } from '@/types/apti'

interface AptiStore extends AptiState {
  setView: (view: AptiState['view']) => void
  toggleDarkMode: () => void
  startTest: (category: TestCategory | 'mixed', questions: Question[]) => void
  submitAnswer: (questionId: string, answerIndex: number) => void
  finishTest: (result: TestResult) => void
  clearHistory: () => void
}

export const useAptiStore = create<AptiStore>()(
  persist(
    (set) => ({
      view: 'calculator',
      isDarkMode: true,
      currentTest: null,
      history: [],
      
      setView: (view) => set({ view }),
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      
      startTest: (category, questions) => set({
        view: 'test',
        currentTest: {
          questions,
          currentIndex: 0,
          answers: {},
          startTime: Date.now(),
          category
        }
      }),
      
      submitAnswer: (questionId, answerIndex) => set((state) => {
        if (!state.currentTest) return state
        const isLast = state.currentTest.currentIndex === state.currentTest.questions.length - 1
        return {
          currentTest: {
            ...state.currentTest,
            answers: { ...state.currentTest.answers, [questionId]: answerIndex },
            currentIndex: isLast ? state.currentTest.currentIndex : state.currentTest.currentIndex + 1
          }
        }
      }),
      
      finishTest: (result) => set((state) => ({
        view: 'results',
        history: [result, ...state.history],
        currentTest: null
      })),
      
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: 'apticalc-storage',
    }
  )
)
