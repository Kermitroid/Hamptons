/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F5DC',
        ivory: '#FFFFF0',
        navy: {
          light: '#394867',
          DEFAULT: '#14274E',
          dark: '#0F1C3F'
        },
        emerald: {
          light: '#2ECC71',
          DEFAULT: '#27AE60',
          dark: '#229954'
        },
        gold: {
          light: '#FFD700',
          DEFAULT: '#D4AF37',
          dark: '#B8860B'
        },
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Lato"', 'sans-serif'],
        accent: ['"Poiret One"', 'cursive']
      },
      backgroundImage: {
        'art-deco-pattern': "url('https://images.pexels.com/photos/5412450/pexels-photo-5412450.jpeg')",
        'texture': "url('https://images.pexels.com/photos/7135121/pexels-photo-7135121.jpeg')"
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite',
        'fade-in': 'fadeIn 0.7s ease-in-out',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
};