// src/components/chat/MessageBubble.tsx
import type { Message, User } from '@/types/chat';

type Props = {
  message: Message;
  isMine: boolean;
  user?: User;
  showAvatar: boolean;
  time: string;
};

export default function MessageBubble({ message, isMine, user, showAvatar, time }: Props) {
  const align = isMine ? 'items-end' : 'items-start';
  const row = isMine ? 'justify-end' : 'justify-start';
  const bubbleBg = isMine ? 'bg-[var(--bubble-out-bg, var(--green-300))]' : 'bg-[var(--bubble-in-bg, var(--white))]';
  const bubbleText = isMine ? 'text-[color:var(--white)]' : 'text-[color:var(--black)]';
  const bubbleSideGap = isMine ? 'ml-10' : 'mr-10';

  return (
    <div className={`flex flex-col ${align} ${bubbleSideGap} gap-1`}>
      {/* 상대 이름 */}
      {!isMine && user?.name && (
        <div className="text-body2-regular pl-11 text-[color:var(--gray-700)]">{user.name}</div>
      )}

      <div className={`flex ${row} items-end gap-2`}>
        {/* 아바타 */}
        {!isMine && showAvatar ? (
          <img src={user?.avatarUrl} alt={user?.name ?? 'avatar'} className="h-8 w-8 rounded-full object-cover" />
        ) : (
          !isMine && <div className="h-8 w-8" />
        )}

        {/* 말풍선 */}
        <div className={`rounded-bubble max-w-[75%] px-4 py-2 whitespace-pre-wrap shadow-sm ${bubbleBg} ${bubbleText}`}>
          {message.kind === 'text' ? message.text : <em>지원하지 않는 메시지</em>}
        </div>

        {/* 시간 */}
        <span className="text-caption pb-1 text-[color:var(--gray-700)]">{time}</span>

        {/* 내 메시지일 때 우측 여백 맞춤 */}
        {isMine && <div className="h-8 w-8" />}
      </div>
    </div>
  );
}
