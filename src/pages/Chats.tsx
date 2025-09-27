import HeaderBar from '@/app/HeaderBar';
import StatusBar from '@/app/StatusBar';
import TabBar from '@/app/TabBar';
import { useConversations } from '@/features/chat/hooks/useMessages';
import type { Conversation } from '@/types/chat';
import { Link } from 'react-router-dom';

type ConvListItem = Conversation & {
  lastMessageAt?: string;
  messageCount: number;
  unreadCount?: number;
  avatarUrl?: string | null;
  lastText?: string | null;
};

export default function Chats() {
  // ✅ 훅이 { conversations } 형태를 리턴하므로 구조분해
  const { conversations } = useConversations() as {
    conversations: ConvListItem[];
  };

  const list = conversations ?? [];

  return (
    <div className="flex h-full flex-col bg-[var(--gray-100)]">
      <StatusBar />
      <HeaderBar title="대화" />
      <div className="flex-1 overflow-auto">
        {list.map((c) => (
          <Link
            key={c.id}
            to={`/chat/${c.id}`} // 라우트가 /chat/:chatId 라면 이렇게
            className="flex items-center gap-3 border-b bg-[var(--white)] p-3"
          >
            <img src={c.avatarUrl ?? '/avatars/group.png'} className="h-12 w-12 rounded-[20%] object-cover" alt="" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <div className="text-body1-medium">{c.title}</div>
                <div className="text-caption text-[color:var(--gray-600)]">
                  {new Date(c.lastMessageAt ?? Date.now()).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
              <div className="text-body2-regular truncate text-[color:var(--gray-600)]">{c.lastText ?? ''}</div>
            </div>
            {c.unreadCount && c.unreadCount > 0 && (
              <span className="text-caption ml-2 grid h-6 min-w-6 place-items-center rounded-full bg-[var(--green-300)] px-2 text-[color:var(--white)]">
                {c.unreadCount}
              </span>
            )}
          </Link>
        ))}
      </div>
      <TabBar />
    </div>
  );
}
