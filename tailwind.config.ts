import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class', // (선택) 다크모드 class 기반
  theme: {
    extend: {
      // Pretendard를 기본 sans로 사용
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Noto Sans KR',
          'Apple SD Gothic Neo',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      // (선택) 자주 쓰는 radius/shadow만 유틸화
      borderRadius: { bubble: '16px', card: '14px' },
      boxShadow: { card: '0 4px 14px rgba(0,0,0,0.08)' },
    },
  },
  plugins: [],
} satisfies Config;
