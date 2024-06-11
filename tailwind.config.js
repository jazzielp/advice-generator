/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      manrope: ['Manrope', 'sans-serif']
    },
    colors: {
      'dark-blue': '#202733',
      'dark-grayish-blue': '#313A48',
      'grayish-blue': '#4F5D74',
      'light-cyan': '#CEE3E9',
      'neon-green': '#53FFAA'
    },
    extend: {
      boxShadow: {
        'neon-green': '0px 4px 30px -11px rgba(83,255,170,1)'
      }
    }
  },
  plugins: []
}
