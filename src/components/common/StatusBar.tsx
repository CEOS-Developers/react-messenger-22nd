// src/components/common/StatusBar.tsx
import { useEffect, useState } from 'react';

function fmtTime(d: Date) {
  return d.toLocaleTimeString('ko-KR', { hour12: false, hour: '2-digit', minute: '2-digit' });
}

export default function StatusBar() {
  const [time, setTime] = useState(() => fmtTime(new Date()));

  useEffect(() => {
    // 매초 갱신(1분 간격보다 정확하고 단순)
    const i = window.setInterval(() => setTime(fmtTime(new Date())), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="flex h-7 items-center justify-between bg-[var(--white)] px-3 text-[color:var(--black)]">
      <span className="text-[13px] font-medium tracking-tight">{time}</span>
      <div className="flex items-center gap-2">
        {/* 셀룰러 */}
        <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden>
          <rect x="1" y="8" width="3" height="3" rx="0.5" fill="currentColor" />
          <rect x="5" y="6" width="3" height="5" rx="0.5" fill="currentColor" />
          <rect x="9" y="4" width="3" height="7" rx="0.5" fill="currentColor" />
          <rect x="13" y="2" width="3" height="9" rx="0.5" fill="currentColor" />
        </svg>
        {/* Wi-Fi */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
          <path d="M1 3c4-3 12-3 16 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 6c3-2 7-2 10 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 9c1-1 3-1 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        {/* 배터리 */}
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" aria-hidden>
          <rect x="1" y="2" width="20" height="8" rx="2" stroke="currentColor" />
          <rect x="3" y="4" width="12" height="4" rx="1" fill="currentColor" />
          <rect x="21" y="4" width="2" height="4" rx="1" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
