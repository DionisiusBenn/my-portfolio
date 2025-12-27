import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'floatSlow 5s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'zoom-in': 'zoomIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '0', transform: 'translateX(100%)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.9' }],
        '12xl': ['12rem', { lineHeight: '0.9' }],
        '15xl': ['15rem', { lineHeight: '0.9' }],
      },
    },
  },
  plugins: [],
}
export default config