import { Question } from '@/types/apti'

export const QUESTIONS: Question[] = [
  // ============ MATH QUESTIONS ============
  {
    id: 'm1',
    category: 'math',
    text: 'What is the next number in the sequence: 2, 6, 12, 20, 30, ...?',
    options: ['40', '42', '44', '46'],
    correctAnswer: 1,
    difficulty: 'medium'
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
    id: 'm3',
    category: 'math',
    text: 'If 15% of a number is 45, what is 25% of that number?',
    options: ['60', '65', '70', '75'],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 'm4',
    category: 'math',
    text: 'The sum of two numbers is 45 and their difference is 15. What is the larger number?',
    options: ['25', '30', '35', '40'],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 'm5',
    category: 'math',
    text: 'What is 3/4 + 5/6 expressed as a percentage?',
    options: ['125%', '133.33%', '141.67%', '150%'],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 'm6',
    category: 'math',
    text: 'A shopkeeper sells an item at 20% profit. If he had bought it for 10% less and sold for Rs. 18 less, he would have gained 25%. Find the cost price.',
    options: ['Rs. 80', 'Rs. 90', 'Rs. 100', 'Rs. 120'],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 'm7',
    category: 'math',
    text: 'What is the value of: 16 × 8 ÷ 4 + 12 - 6?',
    options: ['32', '34', '36', '38'],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 'm8',
    category: 'math',
    text: 'If the radius of a circle is doubled, by what factor does its area increase?',
    options: ['2x', '3x', '4x', '8x'],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 'm9',
    category: 'math',
    text: 'A mixture contains milk and water in ratio 3:2. If 10 liters of water is added, the ratio becomes 3:3. How much milk was in the original mixture?',
    options: ['15 liters', '18 liters', '30 liters', '36 liters'],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 'm10',
    category: 'math',
    text: 'What is the compound interest on Rs. 10000 at 10% per annum for 2 years, compounded annually?',
    options: ['Rs. 2000', 'Rs. 2100', 'Rs. 2200', 'Rs. 2500'],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 'm11',
    category: 'math',
    text: 'Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both are opened together, how long will it take to fill the tank?',
    options: ['10 min', '12 min', '15 min', '18 min'],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 'm12',
    category: 'math',
    text: 'What is the next number: 1, 1, 2, 3, 5, 8, 13, ...?',
    options: ['18', '20', '21', '24'],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 'm13',
    category: 'math',
    text: 'If x + 1/x = 3, what is the value of x² + 1/x²?',
    options: ['7', '8', '9', '11'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 'm14',
    category: 'math',
    text: 'What is the LCM of 12, 15, and 20?',
    options: ['30', '40', '60', '120'],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 'm15',
    category: 'math',
    text: 'A man can row upstream at 6 km/h and downstream at 10 km/h. What is the speed of the stream?',
    options: ['1 km/h', '2 km/h', '3 km/h', '4 km/h'],
    correctAnswer: 1,
    difficulty: 'medium'
  },

  // ============ LOGIC QUESTIONS ============
  {
    id: 'l1',
    category: 'logic',
    text: 'If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies.',
    options: ['True', 'False', 'Cannot be determined'],
    correctAnswer: 0,
    difficulty: 'easy'
  },
  {
    id: 'l2',
    category: 'logic',
    text: 'Which word does NOT belong with the others?',
    options: ['Parsley', 'Basil', 'Dill', 'Mayonnaise'],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 'l3',
    category: 'logic',
    text: 'If ROSE is coded as 6821, CHAIR is coded as 73456, then what is the code for SEARCH?',
    options: ['246173', '214673', '214763', '216743'],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 'l4',
    category: 'logic',
    text: 'In a row of students, Ram is 7th from left and Shyam is 12th from right. If they interchange, Ram becomes 22nd from left. How many students are there in the row?',
    options: ['31', '32', '33', '34'],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 'l5',
    category: 'logic',
    text: 'If A is the brother of B, B is the sister of C, and C is the father of D, how is A related to D?',
    options: ['Uncle', 'Nephew', 'Cousin', 'Father'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 'l6',
    category: 'logic',
    text: 'Find the odd one out: 8, 27, 64, 100, 125',
    options: ['8', '27', '100', '125'],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 'l7',
    category: 'logic',
    text: 'If "TABLE" is written as "GZYOV", how is "CHAIR" written?',
    options: ['WFXSV', 'VGYTU', 'UFXRU', 'WGYTV'],
    correctAnswer: 0,
    difficulty: 'medium'
  },
  {
    id: 'l8',
    category: 'logic',
    text: 'In a certain code, MONKEY is written as XDJMNL. How is TIGER written in that code?',
    options: ['QDFHS', 'SDFHU', 'QEHIS', 'RDGJT'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 'l9',
    category: 'logic',
    text: 'Which completes the analogy: Book : Pages :: Tree : ?',
    options: ['Branches', 'Leaves', 'Roots', 'Trunk'],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 'l10',
    category: 'logic',
    text: 'If "DOCTOR" is written as "VQWDXR", how is "NURSE" written?',
    options: ['MTRQD', 'LSPQD', 'MTQPD', 'MURTD'],
    correctAnswer: 0,
    difficulty: 'medium'
  },
  {
    id: 'l11',
    category: 'logic',
    text: 'Five friends A, B, C, D, E are sitting in a row facing north. A is to the left of B but right of C. E is to the right of B but left of D. Who is in the middle?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 'l12',
    category: 'logic',
    text: 'Choose the number that completes the series: 2, 5, 10, 17, 26, ?',
    options: ['35', '36', '37', '38'],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 'l13',
    category: 'logic',
    text: 'If "+" means "×", "×" means "-", "-" means "÷", and "÷" means "+", then 8 + 6 × 4 - 2 ÷ 3 = ?',
    options: ['24', '26', '28', '30'],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 'l14',
    category: 'logic',
    text: 'Which pair is different from the others?',
    options: ['Eye : Sight', 'Ear : Hearing', 'Nose : Smell', 'Hand : Touch'],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 'l15',
    category: 'logic',
    text: 'If today is Monday, what day will it be 100 days from now?',
    options: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    correctAnswer: 0,
    difficulty: 'medium'
  },

  // ============ VERBAL QUESTIONS ============
  {
    id: 'v1',
    category: 'verbal',
    text: 'Choose the synonym for "RESILIENT":',
    options: ['Fragile', 'Stubborn', 'Flexible', 'Weak'],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 'v2',
    category: 'verbal',
    text: 'Choose the antonym for "BENEVOLENT":',
    options: ['Kind', 'Malevolent', 'Generous', 'Caring'],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 'v3',
    category: 'verbal',
    text: 'Fill in the blank: The committee met to _____ the issue of funding.',
    options: ['discuss', 'discussing', 'discussion', 'discussed'],
    correctAnswer: 0,
    difficulty: 'easy'
  },
  {
    id: 'v4',
    category: 'verbal',
    text: 'Choose the correctly spelled word:',
    options: ['Accomodate', 'Accommodate', 'Acommodate', 'Acomodate'],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 'v5',
    category: 'verbal',
    text: 'Choose the word that best completes: "The teacher\'s _____ approach helped students understand complex concepts."',
    options: ['pedantic', 'didactic', 'systematic', 'erratic'],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 'v6',
    category: 'verbal',
    text: 'Identify the type of noun in bold: "The **team** is playing well."',
    options: ['Common noun', 'Collective noun', 'Proper noun', 'Abstract noun'],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 'v7',
    category: 'verbal',
    text: 'Choose the meaning of the idiom "Bite the bullet":',
    options: ['To eat quickly', 'To face a difficult situation bravely', 'To be aggressive', 'To speak harshly'],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 'v8',
    category: 'verbal',
    text: 'Select the word that is closest in meaning to "Ephemeral":',
    options: ['Eternal', 'Short-lived', 'Strong', 'Visible'],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 'v9',
    category: 'verbal',
    text: 'Choose the correct form of verb: "Neither of the students _____ completed the assignment."',
    options: ['has', 'have', 'had', 'were'],
    correctAnswer: 0,
    difficulty: 'medium'
  },
  {
    id: 'v10',
    category: 'verbal',
    text: 'What is the passive voice of "She wrote a letter"?',
    options: ['A letter was written by her', 'A letter is written by her', 'A letter has been written by her', 'A letter will be written by her'],
    correctAnswer: 0,
    difficulty: 'medium'
  },
  {
    id: 'v11',
    category: 'verbal',
    text: 'Choose the one-word substitute for "One who loves books":',
    options: ['Bibliophile', 'Philatelist', 'Numismatist', 'Lexicographer'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 'v12',
    category: 'verbal',
    text: 'Select the word that means "the study of the origin and history of words":',
    options: ['Syntax', 'Etymology', 'Semantics', 'Morphology'],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 'v13',
    category: 'verbal',
    text: 'Choose the synonym for "PRAGMATIC":',
    options: ['Idealistic', 'Practical', 'Theoretical', 'Dogmatic'],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 'v14',
    category: 'verbal',
    text: 'Identify the figure of speech: "The wind howled in the night."',
    options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 'v15',
    category: 'verbal',
    text: 'Choose the correct option: "He is one of the students who _____ late today."',
    options: ['is', 'are', 'was', 'has been'],
    correctAnswer: 1,
    difficulty: 'hard'
  }
]
