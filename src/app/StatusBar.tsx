// src/app/StatusBar.tsx
import { Icon } from '@/components/Icon';

function hhmm(date = new Date()) {
  const h = String(date.getHours()).padStart(2, '0');
  const m = String(date.getMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}

export default function StatusBar() {
  return (
    <div className="flex h-[47px] w-full items-center">
      {/* 좌측 시계: 88x47 박스 내 우측 정렬 (글자 17px) */}
      <div className="flex h-[47px] w-[88px] items-center justify-end pr-3">
        <span className="text-[17px] leading-[17px] font-medium">{hhmm()}</span>
      </div>

      <div className="flex-1" />

      {/* 우측 인디케이터 묶음: 위·아래·오른쪽 6.5px 여백, 실제 아이콘 77.3x13 */}
      <div className="h-[47px] pr-[6.5px]">
        <div className="grid h-full place-items-center p-[6.5px]">
          <Icon name="indicators-group" className="h-[13px] w-[77.3px] object-contain" alt="status indicators" />
        </div>
      </div>
    </div>
  );
}
