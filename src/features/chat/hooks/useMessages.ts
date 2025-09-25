// src/features/chat/hooks/useMessages.ts
import { useMemo } from 'react';
import { useChatState } from '@/context/ChatContext';
import type { Id, TextMessage, User } from '@/types/chat';

export function useChatRoom(chatId: Id) {
  const { users, messagesByChat, meId, sendText } = useChatState();

  const messages: TextMessage[] = useMemo(
    () => (messagesByChat[chatId] ?? []) as TextMessage[],
    [messagesByChat, chatId],
  );

  const onSend = (text: string) => sendText(chatId, text);

  return { users: users as Record<Id, User>, messages, meId: meId!, sendText: onSend };
}
