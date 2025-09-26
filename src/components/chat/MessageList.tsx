import { useEffect, useMemo, useRef } from 'react';
import type { Id, Message, User } from '@/types/chat';
import MessageItem from './MessageItem';

type Props = {
  messages: Message[];
  usersById: Record<Id, User>;
  meId: Id;
};

export default function MessageList({ messages, usersById, meId }: Props) {
  const endRef = useRef<HTMLDivElement>(null);

  // 날짜별 섹션 그룹
  const sections = useMemo(() => {
    const map = new Map<string, Message[]>();
    for (const m of messages) {
      const day = m.createdAt.slice(0, 10);
      if (!map.has(day)) map.set(day, []);
      map.get(day)!.push(m);
    }
    return Array.from(map.entries()).sort(([a], [b]) => (a < b ? -1 : 1));
  }, [messages]);

  // 새로운 메시지 → 하단 스크롤
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages.length]);

  return (
    <div className="flex h-full flex-col gap-3 overflow-y-auto px-4 py-3">
      {sections.map(([day, list]) => (
        <section key={day} className="flex flex-col gap-3">
          {/* 날짜칩(이미 있으시면 그대로 쓰세요) */}
          <div className="my-1 flex justify-center">
            <span className="text-caption rounded-[32px] bg-[var(--gray-500)] px-3 py-[2px] text-[color:var(--white)]">
              {day}
            </span>
          </div>

          {list.map((m) => (
            <MessageItem key={m.id} message={m} user={usersById[m.userId]} isMe={m.userId === meId} />
          ))}
        </section>
      ))}
      <div ref={endRef} />
    </div>
  );
}
