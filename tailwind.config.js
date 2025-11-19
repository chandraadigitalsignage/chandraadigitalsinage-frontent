// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        dark: '#1f2937',
        light: '#f3f4f6',
      },
      animation: {
        'fadeOut': 'fadeOut 2s forwards 3s',
        'ping': 'ping 1.5s infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        fadeOut: {
          'to': { 
            opacity: '0', 
            visibility: 'hidden' 
          }
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animationDelay: {
        '200': '0.2s',
        '600': '0.6s',
        '1000': '1s',
      }
    },
  },
  plugins: [],
}