import { colors } from './src/styles/colors';
import { fontFamily } from './src/styles/font-family';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors,
      fontFamily
    },
  },
  plugins: [],
};
