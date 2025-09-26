// src/components/chat/MessageList.tsx
import { useEffect, useRef } from 'react';
import DateDivider from './DateDivider';
import type { Id, TextMessage, User } from '@/types/chat';

type Item = Pick<TextMessage, 'id' | 'userId' | 'text' | 'createdAt'>;

type Props = {
  messages?: Item[];
  usersById?: Record<Id, User>;
  meId?: Id;
};

// 디자인 확인용 시드(없을 때만 사용)
const seed: Item[] = [
  {
    id: '1',
    userId: 'os',
    text: '[CEOS 22기 잡담방]\n22기 여러분 모두 환영합니다!\n🎉 모두들 서로 반갑게 인사해 주세요!\n\n그리고 여러분 공지 확인 부탁드립니다😄',
    createdAt: '12:30',
  },
  { id: '2', userId: 'ss', text: '22기 여러분 세오스의 가족이 되신걸 환영합니다!!', createdAt: '12:35' },
  { id: '3', userId: 'me', text: '다들 반갑습니다!!', createdAt: '12:40' },
  { id: '4', userId: 'me', text: '22기 디자인 세오스입니다! 잘 부탁드립니다!!', createdAt: '12:45' },
];

export default function MessageList({ messages, usersById, meId }: Props) {
  const list = Array.isArray(messages) ? messages : seed;

  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [list.length]);

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[var(--green-100)] px-4 py-3">
      <DateDivider />

      {list.map((m, i) => {
        const isMine = meId != null && m.userId === meId;
        const prev = list[i - 1];
        const showAvatar = !isMine && (!prev || prev.userId !== m.userId);
        const user = usersById?.[m.userId];

        return (
          <div key={m.id} className={`mb-2 flex ${isMine ? 'justify-end' : 'justify-start'}`}>
            {/* 아바타(상대방이고 새 그룹일 때만 공간 표시) */}
            {!isMine && (
              <div className="mr-2 h-8 w-8 shrink-0">
                {showAvatar ? (
                  user?.avatarUrl ? (
                    <img
                      src={user.avatarUrl}
                      alt={user?.name ?? 'user'}
                      className="h-8 w-8 rounded-[12px] object-cover"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-[12px] bg-[var(--gray-300)]" />
                  )
                ) : (
                  <div className="h-8 w-8" />
                )}
              </div>
            )}

            {/* 말풍선 + (상대면) 이름 */}
            <div className={`flex max-w-[75%] flex-col ${isMine ? 'items-end' : 'items-start'}`}>
              {/* 이름: 상대 첫 말풍선에만 노출, Body2_M_14 + gray800 */}
              {!isMine && showAvatar && (
                <div className="text-body2-medium mb-1 pl-1 text-[color:var(--gray-800)]">{user?.name ?? ''}</div>
              )}

              {/* 말풍선 텍스트: Body2_M_14 + gray800 */}
              <div className="text-body2-medium rounded-[12px] bg-[var(--white)] px-4 py-3 whitespace-pre-wrap text-[color:var(--gray-800)]">
                {m.text}
              </div>
            </div>

            {/* 시간 */}
            <div className="text-caption pt-2 pl-2 text-[color:var(--gray-600)]">{m.createdAt}</div>
          </div>
        );
      })}

      <div ref={endRef} />
    </div>
  );
}
