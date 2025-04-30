/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'space-dark': '#0B0E18',
        'space-blue': '#1A1E2D',
        'space-light': '#2C3149',
        'nebula-purple': '#6E3CBC',
        'nebula-purple-light': '#9D4EDD',
        'crystal-blue': '#4CC9F0',
        'crystal-blue-light': '#72EFDD',
        'glowing-pink': '#FF2DE3',
        'star-yellow': '#FFD700',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'star-twinkle': 'star-twinkle 4s ease-in-out infinite alternate',
        'crystal-shine': 'crystal-shine 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(76, 201, 240, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(76, 201, 240, 0.7)' },
        },
        'star-twinkle': {
          '0%': { opacity: '0.2' },
          '50%': { opacity: '0.8' },
          '100%': { opacity: '0.2' },
        },
        'crystal-shine': {
          '0%': { filter: 'brightness(1)' },
          '25%': { filter: 'brightness(1.5)' },
          '50%': { filter: 'brightness(1)' },
          '75%': { filter: 'brightness(1.2)' },
          '100%': { filter: 'brightness(1)' },
        },
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #0B0E18, #1A1E2D)',
        'crystal-gradient': 'linear-gradient(45deg, #4CC9F0, #6E3CBC)',
      },
    },
  },
  plugins: [],
};