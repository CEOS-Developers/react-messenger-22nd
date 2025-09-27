import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import chatMessageData from '@/data/chatMessages.json';

// 메시지타입
export type DataMessage = {
  msgId: string;
  senderId: string;
  senderName: string;
  content: string;
  type: 'text' | 'image' | 'video' | 'file';
  sentAt: string;
};

// 변환 후 사용할 메시지 타입
export type Message = Omit<DataMessage, 'sentAt'> & { sentAt: Date };

// 나 (유저)
export const MY_ID = 'user-0';

interface ChatContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error('ChatProvider 사용 필요');
  return context;
};

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
