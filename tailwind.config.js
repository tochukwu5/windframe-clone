/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 5px 10px  rgba(0, 0, 0, 0.15)',
    },
  },
  plugins: [],
}
}