/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f7fb',
          100: '#eef0f7',
          200: '#d9deeb',
          300: '#b7c0d7',
          400: '#8694b4',
          500: '#5d6a8a',
          600: '#43506c',
          700: '#2e374e',
          800: '#1d2434',
          900: '#0f1420',
        },
        accent: {
          50: '#fff8e5',
          100: '#ffefbf',
          200: '#ffe28a',
          300: '#ffd255',
          400: '#f7c234',
          500: '#e9ad0f',
          600: '#bd8a0d',
          700: '#8f6a0b',
          800: '#614709',
          900: '#3a2a06',
        },
      },
      boxShadow: {
        glass: '0 24px 80px rgba(15, 20, 32, 0.24)',
      },
      backgroundImage: {
        'noise-grid':
          'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};