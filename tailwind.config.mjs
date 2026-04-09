/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte}'],
  theme: {
    extend: {
      colors: {
        brand: {
          amber: '#D4700A',
          'amber-dark': '#B35E08',
          'amber-mid': '#D4700A99',
          'amber-ghost': '#D4700A22',
          black: '#111111',
          dark: '#1A1A1A',
          bg: '#FAFAF8',
        },
        content: {
          'on-light-primary': '#111111',
          'on-light-secondary': '#444444',
          'on-light-muted': '#666666',
          'on-dark-primary': '#FFFFFF',
          'on-dark-secondary': '#D1D1D1',
          'on-dark-muted': '#A0A0A0',
        },
        border: {
          light: '#E5E5E5',
          dark: '#2A2A2A',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '1.05', letterSpacing: '-1.5px' }],
        'section': ['30px', { lineHeight: '1.1', letterSpacing: '-0.5px' }],
      },
      maxWidth: {
        content: '1100px',
      },
      borderWidth: {
        'thin': '0.5px',
      },
    },
  },
  plugins: [],
}
