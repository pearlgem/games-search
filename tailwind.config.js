const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // ...
}

module.exports = {
    content: ["./src/*/.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };