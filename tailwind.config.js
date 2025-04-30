module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      boxShadow:{
        'custom':'0px 5px 30px 0px rgba(0, 0, 0, 0.10)'
      },
      fontFamily: {
        inconsolata: ['Inconsolata', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}