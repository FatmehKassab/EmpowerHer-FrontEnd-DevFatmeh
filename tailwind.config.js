/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AB2849', // dark pink
        secondary: '#EED5DB', //light pink
        third: '#EADFE3', // bg color lighter pink aa gray
        text:'#666666', //grey
        boxC1:"#FF9D9D", //pink
        boxC2:"#FFB7A0", //light pink
        boxC3:"#B48CCC", //lavender
        iconC2:"#FF7043", //orange
        iconC3:"#6A1B9A", //purple
        change:"#02D73D", //green
    
      },
    },
  },
  plugins: [],
}
