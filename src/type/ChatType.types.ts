import { createContext } from 'react';

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

// 채팅방별 메시지 저장 구조
export type RoomMessages = Record<string, Message[]>;

// ChatData 타입 (chatMessages.json)
export interface ChatRoom {
  roomId: string;
  name: string;
  isFavorite: boolean;
  participants: Array<{ userId: string; name: string }>;
  messages: DataMessage[];
}

// localStorage 저장용 메시지 타입
export type StoredMessage = Omit<Message, 'sentAt'> & { sentAt: string };

interface ChatContextType {
  roomMessages: RoomMessages;
  setRoomMessages: React.Dispatch<React.SetStateAction<RoomMessages>>;
}

// 나 (유저)
export const MY_ID = 'user-0';

export const ChatContext = createContext<ChatContextType | undefined>(undefined);
