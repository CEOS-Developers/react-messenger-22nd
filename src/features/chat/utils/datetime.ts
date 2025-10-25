// src/features/chat/utils/datetime.ts
const WEEK = ['일', '월', '화', '수', '목', '금', '토'];

export function formatHM(iso: string) {
  const d = new Date(iso);
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
}

export function formatKDate(yyyyMmDd: string) {
  // yyyy-mm-dd
  const [y, m, d] = yyyyMmDd.split('-').map((v) => parseInt(v, 10));
  const dt = new Date(y, m - 1, d);
  return `${y}년 ${m}월 ${d}일 (${WEEK[dt.getDay()]})`;
}
