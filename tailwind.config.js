/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta de Grises Profesional - Colores principales del proyecto
        elegant: {
          50: '#F7FAFC',   // Blanco Nieve (Fondo Principal)
          100: '#EDF2F7',  // Gris muy claro (Fondo Secundario)
          200: '#E2E8F0',  // Bordes sutiles
          300: '#CBD5E1',  // Bordes definidos
          400: '#A0AEC0',  // Elementos decorativos
          500: '#718096',  // Texto terciario
          600: '#4A5568',  // Elementos interactivos
          700: '#2D3748',  // Texto secundario
          800: '#1A202C',  // Grafito Profundo (Títulos y principal)
          900: '#1A202C',   // Grafito Profundo (Títulos y principal)
          950: '#111827'    // Deeper Dark for BG
        },
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        },
        secondary: {
          500: '#6b7280',
          600: '#4b5563'
        },
        accent: {
          500: '#374151'
        },
        dark: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a'
        }
      },
      fontFamily: {
        'manrope': ['Manrope', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'bounce-in': 'bounceIn 0.8s ease-out forwards'
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        bounceIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)'
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)'
          },
          '70%': {
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}