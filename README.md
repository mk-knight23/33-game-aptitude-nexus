# 33-game-aptitude-nexus

<p align="center">
  <img src="https://img.shields.io/badge/Version-3.0.0-06B6D4?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Style-Quantum_Nexus-4F46E5?style=for-the-badge" alt="Style">
  <img src="https://img.shields.io/badge/Stack-React_Zustand-61DAFB?style=for-the-badge&logo=react" alt="Stack">
</p>

## 🌐 The Neural Calculation Protocol

**APTITUDE_NEXUS** is a professional-grade intelligence assessment platform. It combines a high-precision scientific calculator core with a multi-modal aptitude testing engine, all wrapped in a sleek, "Quantum Institute" interface.

## ⚡ Nexus Features

| Module | Legacy (v1.0) | Nexus Core (v3.0) |
|:---|:---|:---|
| **Question Bank** | 5 questions | **45+ Adaptive Modules** |
| **Logic Engine** | Basic Arithmetic | **Scientific + Neural Memory** |
| **Analytics** | Simple Score | **Performance Ring & Trend Analysis** |
| **Interface** | Standard | **Quantum Glassmorphism** |

## Features

### Scientific Calculator
- **Basic Mode**: Standard arithmetic operations (+, -, ×, ÷)
- **Scientific Mode**: Trigonometry (sin, cos, tan), logarithms, exponents, roots
- **Memory Functions**: MC, MR, M+, M- for storing values
- **History**: Recent calculations with clickable results
- **Constants**: π and e support
- **Percentage**: Quick percentage calculations

### Aptitude Assessments
- **45 Questions**: Comprehensive question bank across all categories
  - 15 Math questions (easy, medium, hard)
  - 15 Logic questions (easy, medium, hard)
  - 15 Verbal questions (easy, medium, hard)
- **Category Selection**: Choose specific category or take a mixed test
- **Adaptive Testing**: Questions are randomly selected for each attempt

### Performance Analytics
- **Performance Levels**: Beginner, Novice, Intermediate, Advanced, Expert
- **Visual Score Ring**: Circular progress indicator
- **Trend Analysis**: Compare your performance against average
- **Suggestions**: Personalized improvement tips based on results
- **Progress Charts**: Visual representation of your last 5 test results

### User Experience
- **Dark/Light Mode**: Adaptive interface that respects your system or manual theme preferences
- **Smooth Animations**: Framer Motion powered transitions
- **Mobile Optimized**: Fully responsive layout for testing on any device
- **Persistent History**: All test results saved locally

## Tech Stack

- **React 18** - UI foundation with hooks
- **TypeScript** - Type safety and developer experience
- **Vite 6** - Build optimization and development speed
- **Tailwind CSS v4** - Modern layout and styling
- **Zustand** - Global state and persistence
- **Framer Motion** - High-quality UI animations
- **Math.js** - Advanced mathematical processing
- **Lucide React** - Professional icon set

---

## 🏗️ Architecture

### Component Architecture

```
┌─────────────────────────────────────────────────────────┐
│                  Quantum Glassmorphism UI              │
│           Dark/Light Mode + Smooth Animations          │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│              React Application Layer                    │
│  React 18 + TypeScript + React Router 7               │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│              State Management Layer                     │
│       Zustand (gameStore, aptiStore) + Persistence      │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│               Business Logic Layer                      │
│  Calculator Engine + Test Engine + Analytics Engine     │
└─────────────────────────────────────────────────────────┘
```

### Project Structure

```
33-game-aptitude-nexus/
├── src/
│   ├── main.tsx               # React entry point
│   ├── App.tsx                # Main app component
│   ├── router/
│   │   └── index.tsx          # React Router configuration
│   ├── pages/
│   │   ├── Game.tsx           # Game hub page
│   │   ├── Stats.tsx          # Statistics page
│   │   └── Achievements.tsx   # Achievements page
│   ├── components/
│   │   ├── calculator/
│   │   │   └── Calculator.tsx # Scientific calculator
│   │   ├── test/
│   │   │   └── TestEngine.tsx # Test engine
│   │   ├── Dashboard.tsx      # Analytics dashboard
│   │   └── ResultsView.tsx    # Results display
│   ├── stores/
│   │   ├── gameStore.ts       # Game state
│   │   └── aptiStore.ts       # Aptitude test state
│   ├── data/
│   │   └── questions.ts       # Question bank (45 questions)
│   ├── types/
│   │   └── apti.ts            # TypeScript definitions
│   └── utils/
│       └── cn.ts              # Utility functions
├── .github/workflows/
│   ├── ci.yml                 # Lint and build workflow
│   └── deploy.yml             # GitHub Pages deployment
├── index.html                 # HTML entry point
├── package.json               # Dependencies
└── README.md                  # This file
```

### State Management Architecture

```typescript
{
  stores: {
    gameStore: {
      scope: "Global game state",
      features: ["Theme persistence", "User preferences", "Timer settings"],
      middleware: ["Zustand persist", "LocalStorage"]
    },
    aptiStore: {
      scope: "Aptitude test state",
      features: [
        "Test progress tracking",
        "Score calculation",
        "Performance history",
        "Question bookmarking",
        "Weakness highlighting"
      ],
      middleware: ["Zustand persist", "LocalStorage"]
    }
  }
}
```

### Data Flow

```
User Input → React Components → Zustand Stores → localStorage
     ↓              ↓                   ↓              ↓
  Calculator   Calculator Engine    State Update   Persistence
  Test Answer   Test Engine         React Re-render   Load
  Settings      Validation          UI Update         Sync
```

### Test Engine Architecture

```typescript
{
  testEngine: {
    questionBank: {
      total: 45,
      categories: {
        math: 15,
        logic: 15,
        verbal: 15
      },
      difficulty: ["easy", "medium", "hard"]
    },
    selection: {
      mode: "Random adaptive",
      categories: "Math/Logic/Verbal/Mixed",
      quantity: "15 per test (5 per category in mixed mode)"
    },
    scoring: {
      system: "Percentage-based",
      levels: [
        { score: 90, level: "Expert" },
        { score: 75, level: "Advanced" },
        { score: 60, level: "Intermediate" },
        { score: 40, level: "Novice" },
        { score: 0,  level: "Beginner" }
      ]
    },
    analytics: {
      performanceRing: "Circular progress indicator",
      trendAnalysis: "Compare vs average",
      weaknessHighlighting: "Identify weakest category",
      progressChart: "Last 5 test results"
    }
  }
}
```

### Calculator Engine Architecture

```typescript
{
  calculator: {
    modes: {
      basic: {
        operations: ["+", "-", "×", "÷"],
        features: ["History", "Percentage", "Constants (π, e)"]
      },
      scientific: {
        operations: [
          "sin", "cos", "tan",
          "log", "ln", "exp",
          "√", "x²", "x^y",
          "1/x", "|x|", "!"
        ],
        features: [
          "Trigonometry",
          "Logarithms",
          "Exponents",
          "Roots",
          "Memory functions (MC, MR, M+, M-)"
        ]
      }
    },
    processing: {
      engine: "Math.js",
      precision: "High-precision floating-point",
      evaluation: "Safe expression parsing"
    }
  }
}
```

### UI Component Architecture

```typescript
{
  ui: {
    style: "Quantum Glassmorphism",
    theme: {
      modes: ["Dark", "Light"],
      adaptive: "System preference detection",
      transition: "Smooth Framer Motion"
    },
    components: {
      Dashboard: "Analytics overview with performance ring",
      TestEngine: "Question display with timer and bookmarks",
      ResultsView: "Score breakdown and recommendations",
      Calculator: "Dual-mode scientific calculator"
    },
    animations: {
      library: "Framer Motion",
      features: [
        "Page transitions",
        "Score ring animation",
        "Progress indicators",
        "Button hover effects"
      ]
    }
  }
}
```

### Routing Architecture

```typescript
{
  router: {
    library: "React Router 7",
    routes: [
      { path: "/", component: "Game", label: "Dashboard" },
      { path: "/stats", component: "Stats", label: "Statistics" },
      { path: "/achievements", component: "Achievements", label: "Achievements" }
    ],
    features: [
      "SPA navigation",
      "Browser history",
      "Route guards (if needed)"
    ]
  }
}
```

### Data Persistence Strategy

```typescript
{
  persistence: {
    storage: "localStorage",
    data: {
      testHistory: "Array of past test results",
      bookmarks: "Bookmarked question IDs",
      preferences: {
        theme: "dark/light",
        timerEnabled: true/false,
        timerDuration: 900 (seconds)
      },
      masteryProgress: {
        testsTaken: "Number of tests completed",
        averageScore: "Performance average"
      }
    },
    sync: "Zustand persist middleware"
  }
}
```

### Performance Optimizations

- **Zustand**: Minimal bundle size (~1.5KB per store)
- **React Router**: Code splitting with lazy loading
- **Framer Motion**: GPU-accelerated animations
- **Vite**: Fast HMR and optimized production builds
- **Tailwind CSS v4**: Zero-runtime CSS generation
- **Math.js**: Lazy loading for calculator engine

### Mastery Rank System

```typescript
{
  ranks: [
    { name: "Rookie", tests: 0 },
    { name: "Student", tests: 5, minScore: 50 },
    { name: "Practitioner", tests: 10, minScore: 60 },
    { name: "Adept", tests: 15, minScore: 70 },
    { name: "Expert", tests: 20, minScore: 75 },
    { name: "Grandmaster", tests: 20, minScore: 80 }
  ],
  progress: "Based on test count and average score",
  motivation: "Dopamine trigger through progress visualization"
}
```

### CI/CD Pipeline

```yaml
Push to main → CI Check → Build → Deploy
     ↓            ↓          ↓         ↓
  Trigger     Lint+Check   Production   GitHub Pages
              (Vite)       Build        Static Site
```

- **CI**: Linting and build checks
- **Build**: Production-optimized bundle with Vite
- **Deploy**: Automatic to GitHub Pages

### Multi-Platform Deployment

| Platform | URL | Type |
|----------|-----|------|
| GitHub Pages | github.io/33-game-aptitude-nexus | Static Site |
| Vercel | 33-game-aptitude-nexus.vercel.app | Static Site |
| Render | three3-game-aptitude-nexus.onrender.com | Static Site |

### Question Bank Structure

```typescript
{
  questions: [
    {
      id: 1,
      category: "math",
      difficulty: "easy",
      question: "What is 15% of 200?",
      options: ["30", "25", "35", "20"],
      correctAnswer: "30",
      explanation: "15% × 200 = 0.15 × 200 = 30"
    }
    // ... 44 more questions
  ],
  distribution: {
    math: { easy: 5, medium: 5, hard: 5 },
    logic: { easy: 5, medium: 5, hard: 5 },
    verbal: { easy: 5, medium: 5, hard: 5 }
  }
}
```

### Design Philosophy

```typescript
{
  ui: {
    style: "Quantum Glassmorphism",
    features: [
      "Modern gradient overlays",
      "Glass-like transparency",
      "Smooth animations",
      "High contrast for readability"
    ]
  },
  ux: {
    testing: {
      realistic: "Timed tests simulate real conditions",
      adaptive: "Question selection based on category",
      personalized: "Weakness highlighting and recommendations"
    },
    calculator: {
      dualMode: "Basic and Scientific modes",
      history: "Recent calculations",
      memory: "Store and recall values"
    },
    analytics: {
      visual: "Performance ring and charts",
      actionable: "Specific improvement suggestions",
      trackable: "Progress over time"
    }
  }
}
```

### Key Architectural Decisions

**Why React 18 instead of 19?**
- Stable release with proven performance
- All features needed are available
- Wide ecosystem support

**Why Zustand for State Management?**
- Lightweight alternative to Redux
- Built-in localStorage persistence
- Simple API for both game and test state
- Good TypeScript support

**Why Math.js for Calculator?**
- Comprehensive mathematical functions
- Safe expression evaluation
- High-precision calculations
- Well-maintained library

**Why Framer Motion?**
- Professional-quality animations
- Smooth transitions
- GPU acceleration
- Easy to implement

**Why Fixed Question Bank?**
- Shared experience among users
- Consistent difficulty progression
- Reliability (no AI hallucination)
- Better for targeted practice

### Extension Points

```typescript
{
  newFeatures: [
    "Add more question categories",
    "Add timed practice modes",
    "Add difficulty progression",
    "Add comparative leaderboards (optional)"
  ],
  newComponents: [
    "Add new calculator modes",
    "Add new test visualization charts",
    "Add new analytics widgets"
  ],
  newQuestions: [
    "Add to questions.ts data file",
    "Maintain category distribution",
    "Include explanations for learning"
  ]
}
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/mk-knight23/39-Aptitude-Calculator.git

# Navigate to project
cd 39-Aptitude-Calculator

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Build optimized bundle
npm run build

# Preview production build
npm run preview
```

## Test Categories

### Mathematics
- Number sequences and patterns
- Percentages and ratios
- Algebra and equations
- Geometry
- Time, speed, and distance problems
- Compound interest

### Logic
- Coding and decoding
- Blood relations
- Direction sense
- Series completion
- Odd one out
- Mathematical operations
- Seating arrangements

### Verbal
- Synonyms and antonyms
- One-word substitutions
- Idioms and phrases
- Grammar and parts of speech
- Figures of speech
- Voice and narration

## Deployment

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to the `main` branch to trigger deployment

## License

MIT License - see [LICENSE](LICENSE) for details

---

## 🎮 Live Demos

| Platform | URL |
|----------|-----|
| **Vercel** | [33-game-aptitude-nexus.vercel.app](https://33-game-aptitude-nexus.vercel.app) |
| **Render** | [three3-game-aptitude-nexus.onrender.com](https://three3-game-aptitude-nexus.onrender.com) |

---

## 📝 Design Notes (V2)

### Intentional Quirk: The Mastery Rank System
I added a ranking system (Rookie → Student → Practitioner → Adept → Expert → Grandmaster) based on test count and performance. It's completely arbitrary—20 tests at 80%+ gets you Grandmaster. Why? Humans love progress bars. The ranks mean nothing objectively, but they feel like achievement. The "personal best" celebration triggers dopamine even though it's just comparing numbers with yourself.

### Tradeoff: Fixed Question Bank vs. AI Generation
The 45-question bank is static and memorizable. I could have added AI-generated infinite questions. The tradeoff: personality over infinite variety. Fixed questions create shared experience—"oh, that train problem"—like a known adversary. Random AI questions feel cold and disposable. This is a study tool, not a Turing test.

### What I Chose NOT to Build
No social features. No leaderboards, no sharing scores, no "challenge a friend." Your progress is yours alone. The decision: competition adds anxiety. This tool is for personal growth, not relative ranking. If you want to brag, screenshot it. The app doesn't need to know your friends exist.

## 🎉 Additional Features (V3)

Three focused improvements for the testing experience:

### Test Timer
**Why added**: Real aptitude tests are timed. Practicing without a timer doesn't simulate actual conditions.

**What changed**: Added an optional countdown timer (default: 15 minutes) that displays during tests. Can be toggled off in settings for stress-free practice. The timer shows a subtle warning when under 2 minutes remain.

### Question Bookmarks
**Why added**: During practice, you encounter questions you want to revisit later. Without bookmarks, you'd have to remember or screenshot them.

**What changed**: Added a bookmark icon on each question. Bookmarked questions appear in a "Review" panel after the test completes. Useful for focusing on weak areas during later study sessions.

### Weakness Highlighting
**Why added**: The app showed scores but didn't help you identify specific areas needing improvement.

**What changed**: After each test, your weakest category (Math/Logic/Verbal) is highlighted with a "Focus Area" recommendation. The category breakdown now shows color-coded performance bars.

### Intentionally Rejected: AI Explanation Generation
I considered adding AI-generated explanations for each answer. Rejected because it would require an API key or backend. The static explanations are concise and trustworthy. AI can hallucinate, and for aptitude prep, accuracy matters more than cleverness.

---

*Last updated: 2026-03-01*
