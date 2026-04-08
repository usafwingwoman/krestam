/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#C8590A',
          'orange-light': '#C8590A15',
          'orange-muted': '#C8590A22',
          black: '#0E0E0E',
          dark: '#1a1a1a',
        },
        neutral: {
          50: '#f7f7f5',
          100: '#e5e5e5',
          400: '#aaa',
          500: '#888',
          600: '#666',
          700: '#555',
        },
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
