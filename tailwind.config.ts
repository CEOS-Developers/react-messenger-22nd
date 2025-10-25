import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'main-1': 'var(--color-main-1)',
        'main-2': 'var(--color-main-2)',
        'main-3': 'var(--color-main-3)',
        'main-4': 'var(--color-main-4)',
        'main-5': 'var(--color-main-5)',

        'gray-1': 'var(--color-gray-1)',
        'gray-2': 'var(--color-gray-2)',
        'gray-3': 'var(--color-gray-3)',
        'gray-4': 'var(--color-gray-4)',
        'gray-5': 'var(--color-gray-5)',
        'gray-6': 'var(--color-gray-6)',
        'gray-7': 'var(--color-gray-7)',
        'gray-8': 'var(--color-gray-8)',
        'gray-9': 'var(--color-gray-9)',
        'gray-10': 'var(--color-gray-10)',
        'gray-11': 'var(--color-gray-11)',

        'white-0': 'var(--color-white)',
        'black-0': 'var(--color-black)',
      },
    },
  },
  plugins: [],
};
export default config;
