/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      width: {
        '120': '30rem',
      },
      minWidth: {
        '120': '30rem',
      },
    },
  },
  plugins: [],
}

