/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', serif",
        roboto: "'Roboto', serif"
      },
      colors: {
        primary: "#fd3d57"
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

