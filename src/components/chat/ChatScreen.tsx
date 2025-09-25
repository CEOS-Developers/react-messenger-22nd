// src/components/chat/ChatScreen.tsx
//import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import StatusBar from '@/components/common/StatusBar';
//import ChatHeader from '@/components/chat/ChatHeader';
import MessageList from '@/components/chat/MessageList';
import ChatInput from '@/components/chat/ChatInput';
import { useChatRoom } from '@/features/chat/hooks/useMessages';
//import { useChatState } from '@/context/ChatContext';

export type ChatScreenProps = { chatId?: string; onBack?: () => void };

export default function ChatScreen({ chatId: chatIdProp }: ChatScreenProps) {
  const { chatId: chatIdFromRoute } = useParams<{ chatId: string }>();
  //const navigate = useNavigate();
  const chatId = (chatIdProp ?? chatIdFromRoute ?? '').trim();
  //const back = onBack ?? (() => navigate(-1));

  const { messages, users, meId, sendText } = useChatRoom(chatId);
  //const { conversations } = useChatState();
  //const title = useMemo(() => conversations[chatId]?.title ?? 'CEOS 22기 잡담방', [conversations, chatId]);
  //const memberCount = useMemo(() => conversations[chatId]?.memberCount ?? 65, [conversations, chatId]);

  return (
    <div className="bg-[var(--chat-bg, #f3f8f3)] flex h-full flex-col">
      <StatusBar />
      {/* <ChatHeader title={title} memberCount={memberCount} onBack={back} /> */}
      {/* 본문: 메시지 리스트 */}
      <div className="min-h-0 flex-1">
        {meId ? (
          <MessageList messages={messages} usersById={users} meId={meId} />
        ) : (
          <div className="text-body1-regular grid h-full place-items-center text-[color:var(--gray-700)]">
            초기화 중…
          </div>
        )}
      </div>
      {/* 하단 입력바 */}
      <ChatInput onSend={sendText} />
    </div>
  );
}
