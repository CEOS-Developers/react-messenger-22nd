// ChatContext.tsx
import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Message, RoomMessages, ChatRoom, StoredMessage, DataMessage } from '@/type/ChatType.types';
import chatData from '@/data/chatMessages.json';
import { ChatContext } from '@/type/ChatType.types';

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [roomMessages, setRoomMessages] = useState<RoomMessages>({});

  // 초기 로드: localStorage에서 불러오거나 chatData 사용
  useEffect(() => {
    const savedData = localStorage.getItem('chatRoomMessages');

    if (savedData) {
      // localStorage에서 불러오기
      const parsed: Record<string, StoredMessage[]> = JSON.parse(savedData);
      const restoredMessages: RoomMessages = {};

      Object.keys(parsed).forEach((roomId) => {
        restoredMessages[roomId] = parsed[roomId]
          .map((m: StoredMessage) => ({
            ...m,
            sentAt: new Date(m.sentAt),
          }))
          .sort((a: Message, b: Message) => a.sentAt.getTime() - b.sentAt.getTime()); // 시간순 정렬
      });

      setRoomMessages(restoredMessages);
    } else {
      // 초기 데이터 로드 (chatData.json의 구조에 맞게)
      const initialMessages: RoomMessages = {};

      (chatData as ChatRoom[]).forEach((room: ChatRoom) => {
        initialMessages[room.roomId] = room.messages
          .map((m: DataMessage) => ({
            ...m,
            sentAt: new Date(m.sentAt),
          }))
          .sort((a: Message, b: Message) => a.sentAt.getTime() - b.sentAt.getTime()); // 시간순 정렬
      });

      setRoomMessages(initialMessages);
    }
  }, []);

  // roomMessages 변경 시 localStorage에 저장
  useEffect(() => {
    if (Object.keys(roomMessages).length > 0) {
      const toSave: Record<string, StoredMessage[]> = {};

      Object.keys(roomMessages).forEach((roomId) => {
        toSave[roomId] = roomMessages[roomId]
          .map(
            (m: Message): StoredMessage => ({
              ...m,
              sentAt: m.sentAt.toISOString(),
            }),
          )
          .sort((a: StoredMessage, b: StoredMessage) => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime()); // 저장 전에도 정렬
      });

      localStorage.setItem('chatRoomMessages', JSON.stringify(toSave));
    }
  }, [roomMessages]);

  return <ChatContext.Provider value={{ roomMessages, setRoomMessages }}>{children}</ChatContext.Provider>;
};
