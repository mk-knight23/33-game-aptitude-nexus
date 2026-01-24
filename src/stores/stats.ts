import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface StatsState {
  totalCalculations: number
  totalTestsCompleted: number
  totalQuestionsAnswered: number
  totalTimeSpent: number
  lastSessionDate: string | null

  recordCalculation: () => void
  recordTestCompleted: () => void
  recordQuestionsAnswered: (count: number) => void
  addTimeSpent: (seconds: number) => void
  resetStats: () => void
}

export const useStatsStore = create<StatsState>()(
  persist(
    (set) => ({
      totalCalculations: 0,
      totalTestsCompleted: 0,
      totalQuestionsAnswered: 0,
      totalTimeSpent: 0,
      lastSessionDate: null,

      recordCalculation: () => set((state) => ({
        totalCalculations: state.totalCalculations + 1,
        lastSessionDate: new Date().toISOString()
      })),
      recordTestCompleted: () => set((state) => ({
        totalTestsCompleted: state.totalTestsCompleted + 1,
        lastSessionDate: new Date().toISOString()
      })),
      recordQuestionsAnswered: (count) => set((state) => ({
        totalQuestionsAnswered: state.totalQuestionsAnswered + count
      })),
      addTimeSpent: (seconds) => set((state) => ({
        totalTimeSpent: state.totalTimeSpent + seconds
      })),
      resetStats: () => set({
        totalCalculations: 0,
        totalTestsCompleted: 0,
        totalQuestionsAnswered: 0,
        totalTimeSpent: 0,
        lastSessionDate: null,
      }),
    }),
    {
      name: 'apticalc-stats',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
