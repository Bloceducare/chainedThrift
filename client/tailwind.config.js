module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-1': '#000',
        'dark-2': '#131118',
        'dark-3': '#1C1924',
        'dark-4': '#101419',
        'dark-5': '#181E25',
        'dark-6': 'rgba(32, 29, 41, 0.72);', //this is used for modal backdrop background color in dark mode
        'transparent-white': 'rgba(74, 153, 211, 0.1)', //used as bg color of the 'how it works section of the landing page
        'gray-1': '#A6A0BB',
        'gray-2': '#2F2A3C',
        'gray-3': '#9FA2B4',
        'gray-4': '#23242F',
        'gray-5': '#2C2D3A',
        'gray-6': '#4F5069',
        'gray-7': '#C4C4C4',
        'gray-8': '#23273C',
        'gray-9': '#ADADAD',
        'gray-10': '#C2C2C2',
        'gray-11': '#B9B8BC',
        'gray-12': '#DBDBDB',
        'gray-13': '#8786AB',
        'gray-14': '#59588D',
        'gray-15': '#59B7E6',
        'gray-16': '#282A2E',
        'white-1': '#fff',
        'white-2': '#CFCFCF',
        'white-3': '#E0E0E0',
        'purple-1': '#833EF1',
        'purple-2': '#6C5CE7',
        'purple-3': '#242140',
        'blue-1': '#0177FB',
        'blue-2': '#2F6EFF',
        'blue-3': '#3D8DFF',
        'blue-4': '#70B2FF',
        'blue-5': '#171538',
        'blue-6': '#1A66FF',
        'yellow-dark':'#FDCB6E',
        'green-1':'#42FF00',
      },
      backgroundImage: {
        'overlay-img': "url('../public/assets/bg.svg')",
        'overlay-img-2': "url('../public/assets/coin.svg')",
        'btn': 'linear-gradient(180deg, #833EF1 0%, #491CB5 100%)',
        'nav-dark': 'linear-gradient(90.18deg, rgba(61, 61, 61, 0.2052) 0%, rgba(29, 29, 29, 0.285) 100%)', //used for navbar in dark mode
        'blue-gradient': 'linear-gradient(180deg, rgba(38, 34, 80, 0.65) 0%, rgba(27, 25, 66, 0.85) 57.44%, #17163B 100%)', // dashbord side nav bg color
        'pink-gradient': 'linear-gradient(136.67deg, #FF409A 8.34%, #C438EF 95.26%)', //notification badge bg
        'blue-gradient-2': 'linear-gradient(180deg, rgba(38, 34, 80, 0.65) 0%, rgba(27, 25, 66, 0.85) 57.44%, #17163B 100%)',
      },
      fontFamily:{
        Poppins: ['Poppins', 'sans-serif'],
        Monserat: ['Montserrat', 'sans-serif'],
        Inter: [ 'Inter', 'sans-serif']

      },
      boxShadow: {
        'card': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      width: {
        'large': '78rem',
      }
    },
  },
  plugins: [],
}