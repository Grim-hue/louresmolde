/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: '#1A1A1A',
        steel: '#2C3E50',
        smoke: '#7A7A7A',
        silver: '#D9D9D9',
        offwhite: '#F9F7F5',
        brand: '#2C3E50',
        'brand-light': '#3D5166',
        accent: '#D97757',
        'accent-light': '#F4A896',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
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
        'card': '0 2px 20px rgba(139, 90, 43, 0.12)',
        'card-hover': '0 8px 40px rgba(139, 90, 43, 0.16)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, rgba(26,26,26,0.55) 0%, rgba(26,26,26,0.3) 100%)',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
      },
    },
  },
  plugins: [],
}
