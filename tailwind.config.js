/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color': '#e45250',
        'bg-color': '#FDFDFD'
      },
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        'heading-font': ['Yeseva One', 'serif']
      }, 
      height: {
        'hero': '600px', 
      },
    },
  },
  plugins: [],
}

