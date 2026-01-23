import { Question } from '@/types/apti'

export const QUESTIONS: Question[] = [
  {
    id: 'm1',
    category: 'math',
    text: 'What is the next number in the sequence: 2, 6, 12, 20, 30, ...?',
    options: ['40', '42', '44', '46'],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 'l1',
    category: 'logic',
    text: 'If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies.',
    options: ['True', 'False', 'Cannot be determined'],
    correctAnswer: 0,
    difficulty: 'easy'
  },
  {
    id: 'm2',
    category: 'math',
    text: 'A train 120m long passes a telegraph post in 6 seconds. Find the speed of the train in km/hr.',
    options: ['60 km/hr', '72 km/hr', '64 km/hr', '80 km/hr'],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 'v1',
    category: 'verbal',
    text: 'Choose the synonym for "RESILIENT":',
    options: ['Fragile', 'Stubborn', 'Flexible', 'Weak'],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 'l2',
    category: 'logic',
    text: 'Which word does NOT belong with the others?',
    options: ['Parsley', 'Basil', 'Dill', 'Mayonnaise'],
    correctAnswer: 3,
    difficulty: 'easy'
  }
]
