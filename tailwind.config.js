module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        cyberpunkPink: '#ff007f',
        cyberpunkBlue: '#00bfff',
        cyberpunkPurple: '#800080',
        cyberpunkGreen: '#00ff00',
      },
      fontFamily: {
        cyberpunk: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
