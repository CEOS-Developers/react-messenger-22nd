import type { TextMessage, User } from '@/types/chat';

type Props = {
  message: TextMessage;
  isMine: boolean;
  user?: User;
  showAvatar?: boolean; // 같은 사람의 첫 말풍선일 때만 아바타/이름
  time?: string; // 표시할 시간(없으면 숨김)
};

export default function MessageBubble({ message, isMine, user, showAvatar, time }: Props) {
  // 시간 컴포넌트: Caption_M_12 + gray500
  const Time = ({ side }: { side: 'left' | 'right' }) =>
    time ? (
      <span
        className={[
          'text-caption-medium self-end leading-none text-[color:var(--gray-500)]',
          side === 'left' ? 'pr-1' : 'pl-1',
        ].join(' ')}
      >
        {time}
      </span>
    ) : null;

  return (
    <div className={`mb-2 flex items-end gap-2 ${isMine ? 'justify-end' : 'justify-start'}`}>
      {/* 상대 메시지일 때만 아바타(둥근 사각) */}
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

      {/* 내 메시지면 시간 먼저(왼쪽), 아니면 마지막(오른쪽) */}
      {isMine && <Time side="left" />}

      {/* 말풍선 스택 */}
      <div className={`flex max-w-[75%] flex-col ${isMine ? 'items-end' : 'items-start'}`}>
        {!isMine && showAvatar && (
          <div className="text-body2-medium mb-1 pl-1 text-[color:var(--gray-800)]">{user?.name ?? ''}</div>
        )}
        <div className="text-body2-medium rounded-[12px] bg-[var(--white)] px-4 py-3 whitespace-pre-wrap text-[color:var(--gray-800)]">
          {message.text}
        </div>
      </div>

      {!isMine && <Time side="right" />}
    </div>
  );
}
