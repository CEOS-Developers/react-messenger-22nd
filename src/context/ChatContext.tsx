import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Message, DataMessage } from '@/type/ChatType.types';
import chatMessageData from '@/data/chatMessages.json';
import { ChatContext } from '@/type/ChatType.types';

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const parsed = (chatMessageData as DataMessage[])
      .map((m) => ({ ...m, sentAt: new Date(m.sentAt) }))
      .sort((a, b) => a.sentAt.getTime() - b.sentAt.getTime());
    setMessages(parsed);
  }, []);

  return <ChatContext.Provider value={{ messages, setMessages }}>{children}</ChatContext.Provider>;
};
