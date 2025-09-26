// src/components/chat/MessageBubble.tsx
import type { TextMessage, User } from '@/types/chat';

type Props = {
  message: TextMessage;
  isMine: boolean;
  user?: User;
  /** 같은 사람의 첫 말풍선일 때만 아바타/이름 노출 */
  showAvatar?: boolean;
  /** 말풍선 옆에 표시할 시각 (예: "12:45") */
  time?: string;
};

export default function MessageBubble({ message, isMine, user, showAvatar, time }: Props) {
  return (
    <div className={`mb-2 flex items-end gap-2 ${isMine ? 'justify-end' : 'justify-start'}`}>
      {/* 상대 메시지일 때만 아바타 공간 */}
      {!isMine && (
        <div className="h-8 w-8 shrink-0">
          {showAvatar ? (
            user?.avatarUrl ? (
              <img src={user.avatarUrl} alt={user?.name ?? 'user'} className="h-8 w-8 rounded-[12px] object-cover" />
            ) : (
              <div className="h-8 w-8 rounded-[12px] bg-[var(--gray-300)]" />
            )
          ) : (
            <div className="h-8 w-8" />
          )}
        </div>
      )}

      {/* 말풍선 스택 */}
      <div className={`flex max-w-[75%] flex-col ${isMine ? 'items-end' : 'items-start'}`}>
        {!isMine && showAvatar && (
          <div className="text-body2-medium mb-1 pl-1 text-[color:var(--gray-800)]">{user?.name ?? ''}</div>
        )}

        <div className="text-body2-medium rounded-[12px] bg-[var(--white)] px-4 py-3 whitespace-pre-wrap text-[color:var(--gray-800)]">
          {message.text}
        </div>
      </div>

      {/* 시간: 말풍선 '옆' + '하단' 정렬, Caption_M_12 + gray500 */}
      <div
        className={`self-end ${isMine ? 'pl-1' : 'pr-1'} text-caption-medium leading-none text-[color:var(--gray-500)]`}
      >
        {time}
      </div>
    </div>
  );
}
