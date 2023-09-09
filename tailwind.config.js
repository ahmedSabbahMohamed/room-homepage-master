/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 63%)",
        "black": "hsl(0, 0%, 0%)",
        "white": "hsl(0, 0%, 100%)",
        "very-dark-gray": "hsl(0, 0%, 27%)",
      },
      fontSize: {
        rem: "12px"
      },
      fontFamily: {
        "my-font": ['Be Vietnam Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
}
