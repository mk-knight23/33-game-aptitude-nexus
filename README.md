# AptiCalc - Advanced Aptitude Assessment Tool

A professional-grade application for mathematical calculations and logical aptitude testing. Built with React 18, TypeScript, and Tailwind CSS.

## Features Comparison

| Feature | v1.0 | v2.0 (Current) |
|:---|:---|:---|
| **Question Bank** | 5 questions | **45 questions (15 per category)** |
| **Test Categories** | Mixed only | **Math, Logic, Verbal, or Mixed** |
| **Calculator** | Basic operations | **Scientific mode with memory & history** |
| **Analytics** | Basic score | **Performance level, trends, suggestions** |
| **Progress Tracking** | History only | **Visual charts and improvement tips** |

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

### Live Demo
- GitHub Pages: <https://mk-knight23.github.io/39-Aptitude-Calculator/>
- Vercel: [Deploy your own](https://vercel.com/new)
- Netlify: [Deploy your own](https://app.netlify.com/start)

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
