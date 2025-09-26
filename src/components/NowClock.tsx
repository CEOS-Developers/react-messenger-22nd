// src/components/NowClock.tsx
import { useEffect, useState, useRef } from 'react';

type Props = {
  refreshMs?: number; // 기본 30초
  className?: string;
  format?: (d: Date) => string; // 기본: HH:MM (초 없음)
};

export default function NowClock({
  refreshMs = 30_000,
  className,
  format = (d) => d.toLocaleTimeString('ko-KR', { hour12: false, hour: '2-digit', minute: '2-digit' }),
}: Props) {
  const [now, setNow] = useState<Date>(new Date());
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // :00 / :30 경계에 정확히 맞춰 시작 → 이후 30초마다 갱신
    const n = new Date();
    const msInto = (n.getSeconds() * 1000 + n.getMilliseconds()) % refreshMs;
    const delay = refreshMs - msInto;

    timeoutRef.current = window.setTimeout(() => {
      setNow(new Date());
      intervalRef.current = window.setInterval(() => setNow(new Date()), refreshMs);
    }, delay);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [refreshMs]);

  return <span className={className}>{format(now)}</span>;
}
