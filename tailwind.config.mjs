/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'pixel-black': '#0a0a0a',
        'pixel-gray': '#1a1a1a',
        'pixel-blue': '#00ffff',
        'pixel-purple': '#ff00ff',
        'pixel-green': '#00ff00',
        'pixel-yellow': '#ffff00',
        'pixel-red': '#ff0040',
        'pixel-white': '#ffffff'
      },
      fontFamily: {
        'pixel': ['monospace']
      },
      animation: {
        'blink': 'blink 1s infinite',
        'float': 'float 3s ease-in-out infinite',
        'crow-fly': 'crow-fly 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      }
    }
  },
  plugins: []
};