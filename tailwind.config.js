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
        'maastricht-blue': '#002A35',
        'midnight-green': '#014455',
        'rich-black': '#003644',
        'sheen-gold': '#C8982C',
        'charcoal': '#333333',
      },
    },
  },
  plugins: [],
}
