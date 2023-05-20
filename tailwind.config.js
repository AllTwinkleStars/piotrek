/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pw-green': '#095164',
        'pw-gold': '#C8982C',
        'charcoal': '#001C23',
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      width: {
        '150': '600px',
        '55': '220px'
      },
      height: {
        '55': '220px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
