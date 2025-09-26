// src/components/chat/MessageBubble.tsx
import type { TextMessage, User } from '@/types/chat';

type Props = {
  message: TextMessage; // ✅ 통일
  isMine: boolean;
  user?: User;
  showAvatar?: boolean;
  time: string;
};

export default function MessageBubble({ message, isMine, user, showAvatar, time }: Props) {
  return (
    <div className={`flex items-end gap-2 ${isMine ? 'justify-end' : ''}`} role="listitem">
      {!isMine && showAvatar ? (
        <img src={user?.avatarUrl} alt={user?.name ?? 'user'} className="h-8 w-8 shrink-0 rounded-full object-cover" />
      ) : (
        !isMine && <div className="h-8 w-8 shrink-0" />
      )}

      <div className={`flex max-w-[75%] items-end gap-2 ${isMine ? 'flex-row-reverse' : ''}`}>
        <div className="text-body2-regular rounded-[16px] border-0 bg-[var(--white)] px-3 py-2 whitespace-pre-line shadow-none ring-0">
          {message.text}
        </div>
        <span className="text-caption text-[color:var(--gray-600)]">{time}</span>
      </div>
    </div>
  );
}
