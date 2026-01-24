/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apti: {
          bg: '#fdfdfd',
          dark: '#0a0a0a',
          primary: '#2563eb',
          secondary: '#7c3aed',
          accent: '#059669',
          light: {
            bg: '#fdfdfd',
            primary: '#1d4ed8',
            dark: '#171717',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
