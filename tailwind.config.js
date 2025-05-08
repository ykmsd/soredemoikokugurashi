/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Noto Sans JP', 'Noto Sans JP Fallback', 'system-ui', 'sans-serif'],
        'title': ['Zen Kaku Gothic New', 'Zen Kaku Gothic New Fallback', 'system-ui', 'sans-serif'],
      },
      colors: {
      },
    },
  },
  plugins: [],
};