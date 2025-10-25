// src/features/chat/hooks/useMessages.ts
import { useMemo } from 'react';
import { useChatState } from '@/context/ChatContext';
import type { Id, TextMessage, User, Conversation } from '@/types/chat';

/** 채팅방별 메시지/전송 (개별 방) */
export function useChatRoom(chatId: Id) {
  const { users, messagesByChat, meId, sendText } = useChatState();
  const messages: TextMessage[] = useMemo(
    () => (messagesByChat[chatId] ?? []) as TextMessage[],
    [messagesByChat, chatId],
  );
  const onSend = (text: string) => sendText(chatId, text);
  return { users: users as Record<Id, User>, messages, meId: meId!, sendText: onSend };
}

/** 채팅방 목록/정보 (목록 화면) */
export function useConversations() {
  const { conversations, messagesByChat } = useChatState();
  const list: (Conversation & { lastMessageAt?: string; messageCount: number })[] = useMemo(() => {
    return Object.values(conversations).map((cv) => {
      const msgs = messagesByChat[cv.id] ?? [];
      return {
        ...cv,
        messageCount: msgs.length,
        lastMessageAt: msgs.at(-1)?.createdAt,
      };
    });
  }, [conversations, messagesByChat]);
  return { conversations: list };
}
