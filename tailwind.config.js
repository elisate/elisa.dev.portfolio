/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '12ch' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 2s steps(12) infinite alternate, blink .7s infinite',
      },
    },
  
  },
  plugins: [],
  
}
