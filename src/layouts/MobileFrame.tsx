export default function MobileFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen place-items-center bg-[var(--gray-100)]">
      <div className="h-[740px] w-[360px] overflow-hidden rounded-[24px] border bg-white shadow-xl">{children}</div>
    </div>
  );
}
