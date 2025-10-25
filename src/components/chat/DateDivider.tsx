// src/components/chat/DateDivider.tsx
export default function DateDivider({ label = '2025년 9월 18일 목요일' }: { label?: string }) {
  return (
    <div className="my-3 flex w-full justify-center">
      {/* 144x21, radius 32, padding: T/B 2px, L/R 12px, bg gray500, text white(Caption_M_12) */}
      <span className="text-caption grid h-[21px] min-w-[144px] place-items-center rounded-[32px] bg-[var(--gray-500)] px-[12px] py-[2px] font-medium text-[color:var(--white)]">
        {label}
      </span>
    </div>
  );
}
