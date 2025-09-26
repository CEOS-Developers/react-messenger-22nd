// src/app/BottomIndicator.tsx
import { Icon } from '@/components/Icon';

export default function BottomIndicator() {
  // 파일명이 정리되어 있다면 'iphone-status-bar-lower' 로 접근 (다르면 name만 변경)
  return (
    <div className="grid h-[32px] w-full place-items-center">
      <Icon name="iphone-status-bar-lower" className="h-[5px] w-[134px]" alt="home handle" />
    </div>
  );
}
