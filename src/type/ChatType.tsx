import { createContext } from 'react';
// import type { ChatContextType } from '@/context/ChatContext';

interface ChatContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

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

export const ChatContext = createContext<ChatContextType | undefined>(undefined);
