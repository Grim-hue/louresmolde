/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: '#1C1C1E',
        steel: '#3A3A3C',
        smoke: '#8A8A8E',
        silver: '#D1D1D6',
        offwhite: '#F5F5F0',
        brand: '#1B3A6B',
        'brand-light': '#2A528F',
        accent: '#C05C28',
        'accent-light': '#E8936A',
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'hero-sub': ['clamp(1rem, 2.5vw, 1.25rem)', { lineHeight: '1.6' }],
      },
      spacing: {
        section: '6rem',
        'section-sm': '4rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      boxShadow: {
        'card': '0 2px 20px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.14)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 100%)',
      },
    },
  },
  plugins: [],
}
