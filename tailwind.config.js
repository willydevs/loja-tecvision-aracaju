/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fff1f1',
          100: '#ffdcdc',
          200: '#ffb9b9',
          300: '#ff8888',
          400: '#ff5757',
          500: '#ff2424',
          600: '#dc0000',
          700: '#b80000',
          800: '#960000',
          900: '#7c0000',
          950: '#460000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px -4px rgba(184, 0, 0, 0.12)',
        'card-hover': '0 12px 40px -4px rgba(184, 0, 0, 0.28)',
        'glow': '0 0 40px rgba(255, 36, 36, 0.15)',
      },
    },
  },
  plugins: [],
}
