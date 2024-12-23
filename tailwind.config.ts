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
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      // Add these lines:
      animation: {
        slowspin: 'spin 15s reverse linear infinite',
        'slide-up': 'slide-up 0.8s ease forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
