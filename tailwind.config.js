/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070a12',
          900: '#0b0f19', // main deep background
          850: '#0e1422',
          800: '#121824', // muted card background
          750: '#161f30',
          700: '#1a2333', // elevated cards & borders
          600: '#273449',
        },
        brand: {
          cyan: '#00A8E8',    // primary bright cyan from logo
          blue: '#0072B1',    // deep technical blue from logo
          navy: '#003459',
          light: '#e0f2fe',
          glow: 'rgba(0, 168, 232, 0.45)',
        }
      },
      fontFamily: {
        arabic: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 15px rgba(0, 168, 232, 0.35), 0 0 30px rgba(0, 168, 232, 0.15)',
        'neon-strong': '0 0 25px rgba(0, 168, 232, 0.6), 0 0 50px rgba(0, 114, 177, 0.3)',
        'neon-subtle': '0 0 10px rgba(0, 168, 232, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
