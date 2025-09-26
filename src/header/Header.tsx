import type { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  right?: ReactNode;
}

export default function Header({ title, right }: HeaderProps) {
  return (
    <header className="top-[124px] mb-4 flex h-[65px] w-[375px] justify-between gap-4 p-4 px-4 opacity-100">
      <span className="flex items-center text-xl font-bold">{title}</span>
      <div className="flex gap-4">{right}</div>
    </header>
  );
}
