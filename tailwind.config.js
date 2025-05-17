/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  extend: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    colors: {
      primary: '#1E40AF',
      secondary: '#F59E0B',
      accent: '#10B981',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        900: '#1a202c',
      },
    },
    fontSize: {
      huge: ['4rem', '1.2'],
    },
  },
},
plugins: [],
}