import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        light: '#f9f9f9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
        '103': '1.03',
      },
      screens: {
        xs: '320px',
      },
      keyframes: {
        textRendering: {
          '0%': { transform: 'translateY(5%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        textRendering: 'textRendering .5s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
