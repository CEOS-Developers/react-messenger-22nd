// src/components/chat/MessageList.tsx
import { useEffect, useMemo, useRef } from 'react';
import type { Id, Message, User } from '@/types/chat';
import { formatKDate, formatHM } from '@/features/chat/utils/datetime';
import MessageBubble from './MessageBubble';

type Props = {
  messages: Message[];
  usersById: Record<Id, User>;
  meId: Id;
};

export default function MessageList({ messages, usersById, meId }: Props) {
  const endRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(() => {
    const map = new Map<string, Message[]>();
    for (const m of messages) {
      const day = m.createdAt.slice(0, 10); // YYYY-MM-DD
      if (!map.has(day)) map.set(day, []);
      map.get(day)!.push(m);
    }
    return Array.from(map.entries()).sort(([a], [b]) => (a < b ? -1 : 1));
  }, [messages]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages.length]);

  return (
    <div className="flex h-full flex-col gap-2 overflow-y-auto p-3">
      {sections.map(([day, list]) => (
        <section key={day} className="flex flex-col gap-2">
          <DateChip date={day} />
          {list.map((m, idx) => {
            const prev = list[idx - 1];
            const isMine = m.userId === meId;
            const showAvatar = !isMine && (!prev || prev.userId !== m.userId);
            const user = usersById[m.userId];
            return (
              <MessageBubble
                key={m.id}
                message={m}
                isMine={isMine}
                user={user}
                showAvatar={showAvatar}
                time={formatHM(m.createdAt)}
              />
            );
          })}
        </section>
      ))}
      <div ref={endRef} />
    </div>
  );
}

function DateChip({ date }: { date: string }) {
  return (
    <div className="my-1 flex justify-center">
      <span className="text-caption rounded-full bg-[var(--gray-300)] px-3 py-1 text-[color:var(--gray-700)]">
        {formatKDate(date)}
      </span>
    </div>
  );
}
