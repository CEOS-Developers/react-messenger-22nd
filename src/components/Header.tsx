import type { ReactNode } from 'react';

interface HeaderProps {
  title?: ReactNode;
  right?: ReactNode;
}

export default function Header({ title, right }: HeaderProps) {
  return (
    <header className="sticky top-[0px] mb-4 flex h-[59px] w-[375px] justify-between gap-4 p-4 px-4">
      <span className="flex items-center text-xl font-bold">{title}</span>
      <div className="flex gap-4">{right}</div>
    </header>
  );
}
