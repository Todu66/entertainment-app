/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "customwidth": "90%",
        "custommaxwidth": "1640px",
      },
      screens: {
        "sm": "400px",
        "custom": "700px",
        
      }
    },
  },
  plugins: [],
}

