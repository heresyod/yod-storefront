import type { Config } from 'tailwindcss';

/* Tokens mirror the coming-soon site's :root variables exactly (see app/globals.css). */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        panel: '#040404',
        'panel-2': '#080808',
        line: 'rgba(255,255,255,0.09)',
        'line-strong': 'rgba(255,255,255,0.18)',
        silver: '#d2d2d2',
        'silver-dim': '#8f8f8f',
        mist: '#5a5a5a',
        gold: '#a89067',
        'gold-soft': '#cbb58e'
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Times New Roman', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Jost', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      borderRadius: { none: '0' }
    }
  },
  plugins: []
};

export default config;
