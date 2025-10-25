// src/components/common/StatusBar.tsx
import { useEffect, useState } from 'react';
import { Icon } from '@/components/Icon';

const pad2 = (n: number) => (n < 10 ? `0${n}` : String(n));

export default function StatusBar() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);
  const hh = pad2(now.getHours());
  const mm = pad2(now.getMinutes());

  return (
    // ✅ 정확히 375×47, 여백 없음
    <div className="h-[47px] w-[375px] bg-white">
      <div className="flex h-full w-full items-center">
        {/* 시계: 88×47 박스 우측 정렬 */}
        <div className="flex h-full w-[88px] items-center justify-end pr-[10px]">
          <span className="text-[15px] leading-none font-medium tracking-tight">
            {hh}:{mm}
          </span>
        </div>

        <div className="flex-1" />

        {/* 우측 인디케이터: 오른쪽/위/아래 6.5px 바깥 여백 */}
        <div className="my-[6.5px] mr-[6.5px] flex h-[13px] w-[77.3px] items-center">
          <Icon
            name="indicators-group" // src/icons/indicators-group.svg (소문자-하이픈)
            className="block h-full w-full object-contain"
            alt="status indicators"
          />
        </div>
      </div>
    </div>
  );
}
