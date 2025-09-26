// src/layouts/MobileFrame.tsx
import type { ReactNode } from 'react';

export default function MobileFrame({ children }: { children: ReactNode }) {
  // 전체 프레임: 375x812, 바깥 배경은 gray-100
  return (
    <div className="relative grid min-h-screen place-items-center bg-[var(--gray-100)]">
      <div className="absolute top-[0px] flex h-[812px] w-[375px] flex-col overflow-hidden border border-[var(--gray-300)] bg-[var(--white)]">
        {children}
      </div>
    </div>
  );
}
