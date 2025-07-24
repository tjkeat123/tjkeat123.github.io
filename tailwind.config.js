/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'handwritten': ['Shadows Into Light', 'cursive'],
        'body': ['Recursive', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        'wistful': {
          '50': '#f2f5fb',
          '100': '#e8edf7',
          '200': '#d5ddf0',
          '300': '#bbc7e6',
          '400': '#a1acda',
          '500': '#8790cd',
          '600': '#6f73bc',
          '700': '#5d5ea5',
          '800': '#4e5185',
          '900': '#43456c',
          '950': '#27273f',
        },
        'wistful-dark': {
          '50': '#27273f',
          '100': '#43456c',
          '200': '#4e5185',
          '300': '#5d5ea5',
          '400': '#6f73bc',
          '500': '#8790cd',
          '600': '#a1acda',
          '700': '#bbc7e6',
          '800': '#d5ddf0',
          '900': '#e8edf7',
          '950': '#f2f5fb',
        },
        'mine-shaft': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#313131',
        },
      },
    },
  },
  plugins: [],
}

