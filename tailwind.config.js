/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f8f9ff',
        surface: '#eff4ff',
        ink: '#0b1c30',
        muted: '#45464d',
        line: '#dce9ff',
        secondary: '#0051d5',
        text: 'var(--text)',
        'text-h': 'var(--text-h)',
        border: 'var(--border)',
        'code-bg': 'var(--code-bg)',
        accent: 'var(--accent)',
        'accent-bg': 'var(--accent-bg)',
        'accent-border': 'var(--accent-border)',
        'social-bg': 'var(--social-bg)',
      },
      boxShadow: {
        ui: 'var(--shadow)',
      },
    },
  },
  plugins: [],
}

