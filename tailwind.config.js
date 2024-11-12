/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Adjust paths to match your project structure
  ],
  theme: {
    extend: {
      // Define custom CSS variables for the glass effect
      colors: {},
      keyframes: {
        ellipsis: {
          '0%': { content: '.' },
          '33%': { content: '..' },
          '66%': { content: '...' },
          '100%': { content: '.' },
        },
      },
    },
  },
  plugins: [
    require('daisyui'), // Add DaisyUI as a plugin
  ],
  daisyui: {
    themes: [
      'dim', // Add the "dim" theme
      'light', // Include other themes you want to use
      'dark',
    ],
  },
}