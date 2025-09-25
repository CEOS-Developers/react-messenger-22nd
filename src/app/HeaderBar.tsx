import { Icon } from '@/components/Icon';

export default function HeaderBar({ title }: { title: string }) {
  return (
    <header className="flex h-12 items-center justify-between border-b bg-[var(--white)] px-3">
      <h1 className="text-title-2">{title}</h1>
      <div className="flex items-center gap-3">
        <Icon name="search" className="h-5 w-5" />
        <Icon name="burger" className="h-5 w-5" />
      </div>
    </header>
  );
}
