module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // important: "#root",
  purge: {
    content: ['./src/**/*.js', './src/**/**/*.js']
  },
  theme: {
    extend: {},
  },
  plugins: [],
}