/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0908',
        card: '#14100F',
        muted: '#1A1514',
        accentGray: '#383230',
        'accentGray-light': '#4A4340',
        accentTeal: '#E2E4E9',
        'accentTeal-hover': '#FFFFFF',
        textPrimary: '#F5F1EC',
        textMuted: '#9A9490',
        platinum: '#E2E4E9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow-teal': '0 0 30px rgba(226, 228, 233, 0.25)',
        'glow-gray': '0 0 25px rgba(56, 50, 48, 0.4)',
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gray-glow': 'radial-gradient(circle, rgba(56,50,48,0.4) 0%, transparent 70%)',
        'teal-glow': 'radial-gradient(circle, rgba(226,228,233,0.12) 0%, transparent 75%)',
        'text-gradient-silver': 'linear-gradient(135deg, #FFFFFF 0%, #E2E4E9 50%, #9A9490 100%)',
      }
    },
  },
  plugins: [],
}
