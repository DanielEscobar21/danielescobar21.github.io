/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          100: '#1e1e1e',
          200: '#2d2d2d',
          300: '#3d3d3d',
          400: '#4d4d4d',
          500: '#5c5c5c',
          600: '#6b6b6b',
          700: '#7a7a7a',
          800: '#8a8a8a',
          900: '#999999',
        },
      },
      backgroundColor: {
        'dark-base': '#121212',
        'dark-elevated': '#1e1e1e',
        'light-base': '#ffffff',
        'light-elevated': '#f8f9fa',
      },
    },
  },
  plugins: [],
} 