/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0D1117',
          secondary: '#161B22',
          card: '#21262D',
          dark: '#0D1117',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#8B949E',
          light: '#6E7681',
        },
        accent: {
          primary: '#E63946',
          hover: '#C92A36',
          secondary: '#21262D',
          dark: '#3D1114',
        },
        border: '#30363D',
        status: {
          success: '#238636',
          warning: '#D29922',
          critical: '#F85149',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
