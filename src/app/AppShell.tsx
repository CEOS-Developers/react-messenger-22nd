export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen place-items-center bg-[var(--gray-100)]">
      <main className="shadow-card flex h-screen w-full max-w-[420px] flex-col border bg-[var(--white)]">
        {children}
      </main>
    </div>
  );
}
