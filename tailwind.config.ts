import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0FF',
          100: '#CCE1FF',
          200: '#99C3FF',
          300: '#66A5FF',
          400: '#3387FF',
          500: '#0066FF',
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
        },
        secondary: {
          50: '#E6FFFE',
          100: '#CCFFFD',
          200: '#99FFFB',
          300: '#66FFF8',
          400: '#33FFF6',
          500: '#0DCEDA',
          600: '#0AA5AE',
          700: '#087C83',
          800: '#055257',
          900: '#03292C',
        },
        accent: {
          400: '#33FFF6',
          500: '#0DCEDA',
          600: '#0AA5AE',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          400: '#9CA3AF',
          600: '#4B5563',
          700: '#374151',
          900: '#111827',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['60px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-mobile': ['36px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        h1: ['48px', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h1-mobile': ['32px', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
        h2: ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'h2-mobile': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-mobile': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        button: '0 4px 14px 0 rgba(0, 102, 255, 0.25)',
        'button-hover': '0 6px 20px 0 rgba(0, 102, 255, 0.35)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 40px 0 rgba(0, 102, 255, 0.15)',
        'glow': '0 0 30px rgba(0, 102, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #E6F0FF 0%, #ffffff 100%)',
        'gradient-cta': 'linear-gradient(135deg, #0066FF 0%, #0DCEDA 100%)',
        'gradient-brand': 'linear-gradient(135deg, #0052CC 0%, #00B8A9 100%)',
        'gradient-premium': 'linear-gradient(135deg, #0066FF 0%, #0DCEDA 100%)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #0066FF 0%, #0DCEDA 50%, #0066FF 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
