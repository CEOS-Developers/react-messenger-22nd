function formatKDate(iso: string) {
  const d = new Date(iso);
  const yoil = ['일', '월', '화', '수', '목', '금', '토'][d.getDay()];
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 (${yoil})`;
}
export default function DateDivider({ iso }: { iso: string }) {
  return (
    <div className="py-2">
      <div className="text-caption mx-auto w-max rounded-full bg-[var(--gray-300)] px-3 py-1 text-[color:var(--gray-700)]">
        {formatKDate(iso)}
      </div>
    </div>
  );
}
