/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    
    
    require('@gradin/tailwindcss-scrollbar')({
      size: '11px', // width or height, default '5px'
      track: {
        background: '#3c3c3c', // default '#f1f1f1'
        // add any css attributes here, will be merged to ::-webkit-scrollbar-track
      },
      thumb: {
        background: '#7675ca ', // default '#c1c1c1'
        borderRadius: '40px',
        // add any css attributes here, will be merged to ::-webkit-scrollbar-thumb
      },
      hover: {
        background: '#aeadfd', // default '#a8a8a8'
        borderRadius: '40px',
        // add any css attributes here, will be merged to ::-webkit-scrollbar-thumb:hover
      },
    }),
    ],
};
