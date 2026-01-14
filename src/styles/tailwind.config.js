/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // University of Michigan brand colors
        'maize': '#ffcb05',
        'umichblue': '#00274c',
        'umichblue-dark': '#001a36',
        
        // DTC-specific brand colors
        'dtc-primary': '#D86018',
        'dtc-secondary': '#00B2A9', 
        'dtc-accent': '#2F65A7',
        
        // Extended U-M palette
        'tappanRed': '#9A3324',
        'rossOrange': '#D86018',
        'rackhamGreen': '#75988d',
        'waveFieldGreen': '#A5A508',
        'taubmanTeal': '#00B2A9',
        'arboretumBlue': '#2F65A7',
        'a2Amethyst': '#702082',
        'matthaeiViolet': '#575294',
        'uMMATan': '#CFC096',
        'burtonTowerBeige': '#9B9A6D',
        'angellHallAsh': '#989C97',
        'lawQuadStone': '#655A52',
        'pumaBlack': '#131516',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'open-sans': ['Open Sans', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'sm': '0.125rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}