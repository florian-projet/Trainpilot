/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefcf3',
          100: '#fef7e0',
          200: '#fdecc0',
          300: '#fbda95',
          400: '#f7c467',
          500: '#D4AF37',
          600: '#b8941e',
          700: '#987517',
          800: '#7d5e18',
          900: '#684e19',
        },
        light: {
          DEFAULT: '#F7F8FA',
          100: '#F7F8FA',
        },
        dark: {
          DEFAULT: '#0F1115',
          800: '#343a40',
          900: '#212529',
          950: '#0F1115',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}