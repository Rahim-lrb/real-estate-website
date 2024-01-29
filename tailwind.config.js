module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f3e72',
        secondary: 'rgba(255, 255, 255, 0.78)',
        black: '#131110',
        oranges: "#ffa500",
        gri: "#8c8ba9",
        // blue-gradient: 'linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)',
        blueGradient: '#2949c6',
        blue: '#4066ff',
        lightBlue: '#eeeeff',
        shadow: '0px 23px 21px -8px rgba(136, 160, 255, 0.25)',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}