export type TestCategory = 'math' | 'logic' | 'verbal'

export interface Question {
  id: string
  category: TestCategory
  text: string
  options: string[]
  correctAnswer: number
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface TestResult {
  id: string
  date: string
  score: number
  totalQuestions: number
  category: TestCategory | 'mixed'
  timeSpent: number
}

export interface AptiState {
  view: 'calculator' | 'test' | 'results' | 'history'
  isDarkMode: boolean
  currentTest: {
    questions: Question[]
    currentIndex: number
    answers: Record<string, number>
    startTime: number
    category: TestCategory | 'mixed'
  } | null
  history: TestResult[]
}
