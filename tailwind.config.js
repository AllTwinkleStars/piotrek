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
        'pw-green': {
          'DEFAULT': '#095164',
          '50': '#e9fffe',
          '100': '#c8fffb',
          '200': '#97fff9',
          '300': '#50fffa',
          '400': '#02faff',
          '500': '#00ddf4',
          '600': '#00aecd',
          '700': '#008aa4',
          '800': '#066e84',
          '900': '#095164',
          '950': '#003c4d',
      },      
      'pw-gold': {
        'DEFAULT': '#c8982c',
        '50': '#fbf8eb',
        '100': '#f5eecc',
        '200': '#ecdd9c',
        '300': '#e0c464',
        '400': '#d6ac39',
        '500': '#c8982c',
        '600': '#ab7623',
        '700': '#89571f',
        '800': '#724721',
        '900': '#623c21',
        '950': '#391e0f',
    },
        'charcoal': '#001C23',
      },
      fontFamily: {
        sans: ['var(--font-sora)'],
        serif: ['var(--font-ptserif)']
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
