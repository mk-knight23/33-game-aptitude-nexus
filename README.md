# AptiCalc - Advanced Aptitude Assessment Tool

A professional-grade application for mathematical calculations and logical aptitude testing. Built with React 18, TypeScript, and Tailwind CSS.

## Features

- **Scientific Calculator** - Robust mathematical engine powered by Math.js for complex calculations.
- **Aptitude Assessments** - Comprehensive testing engine with multiple categories including Math, Logic, and Verbal reasoning.
- **Performance Analytics** - Detailed results view with score breakdown and time tracking.
- **Assessment History** - Persistent tracking of previous test performances via Zustand and localStorage.
- **Modern Interface** - Clean, professional design with smooth transitions and animations.
- **Dark/Light Mode** - Adaptive interface that respects your system or manual theme preferences.
- **Mobile Optimized** - Fully responsive layout for testing on any device.

## Tech Stack

- **React 18** - UI foundation
- **TypeScript** - Type safety and developer experience
- **Vite** - Build optimization and development speed
- **Tailwind CSS** - Modern layout and styling
- **Zustand** - Global state and persistence
- **Framer Motion** - High-quality UI animations
- **Math.js** - Advanced mathematical processing
- **Lucide React** - Professional icon set

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

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

## Project Structure

```
39-Aptitude-Calculator/
├── src/
│   ├── components/
│   │   ├── calculator/    # Scientific calc components
│   │   ├── test/          # Assessment engine components
│   │   ├── Dashboard.tsx  # Main action hub
│   │   └── ResultsView.tsx # Assessment analytics
│   ├── stores/
│   │   └── aptiStore.ts   # Global assessment state
│   ├── types/
│   │   └── apti.ts        # TS interfaces
│   ├── data/
│   │   └── questions.ts   # Assessment dataset
│   ├── App.tsx            # Navigation and layout
│   └── index.css          # Global styles & button variants
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Deployment

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

1. Enable GitHub Pages in repository settings.
2. Set source to "GitHub Actions".
3. Push to the `main` branch to trigger deployment.

## License

MIT License - see [LICENSE](LICENSE) for details.

---

**Live Demo:** [https://mk-knight23.github.io/39-Aptitude-Calculator/](https://mk-knight23.github.io/39-Aptitude-Calculator/)
