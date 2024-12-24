import { hostname } from 'os';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      // Add these lines:
      animation: {
        slowspin: 'spin 15s reverse linear infinite',
        'slide-up': 'slide-up 0.8s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'fade-out': 'fadeOut 0.5s ease forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
