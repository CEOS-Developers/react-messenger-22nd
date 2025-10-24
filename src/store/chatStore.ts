import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import type { Message } from '@/types/chat';
import type { ChatRoom } from '@/types/chatlist';
import { formatDate, isSameDate } from '@/utils/timeUtils';

interface ChatState {
  // 채팅방별 메시지 저장
  messagesByRoom: Record<string, Message[]>;
  
  // 채팅방 목록
  chatRooms: ChatRoom[];
  
  // Actions
  sendMessage: (chatRoomId: string, content: string, userId: string) => void;
  setMessages: (chatRoomId: string, messages: Message[]) => void;
  getMessages: (chatRoomId: string) => Message[];
  clearMessages: (chatRoomId: string) => void;
  deleteMessage: (chatRoomId: string, messageId: string) => void;
  updateLastMessage: (chatRoomId: string, message: Message) => void;
  updateUnreadCount: (chatRoomId: string, count: number) => void;
  setChatRooms: (chatRooms: ChatRoom[]) => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      messagesByRoom: {},
      chatRooms: [],

      sendMessage: (chatRoomId: string, content: string, userId: string) => {
        const { messagesByRoom } = get();
        const currentMessages = messagesByRoom[chatRoomId] || [];
        
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        const lastMessage = currentMessages[currentMessages.length - 1];
        let lastMessageDate: Date | null = null;
        if (lastMessage) {
          const lastTimestamp = new Date(lastMessage.timestamp);
          lastMessageDate = new Date(lastTimestamp.getFullYear(), lastTimestamp.getMonth(), lastTimestamp.getDate());
        }

        const newMessage: Message = {
          id: uuidv4(),
          userId,
          content,
          timestamp: now.toISOString()
        };
        
        // 마지막 메시지가 없거나 날짜가 다를 경우 date 속성 추가
        if (!lastMessageDate || !isSameDate(today, lastMessageDate)) {
          newMessage.date = formatDate(now);
        }

        const updatedMessages = [...currentMessages, newMessage];
        
        set(state => ({
          messagesByRoom: {
            ...state.messagesByRoom,
            [chatRoomId]: updatedMessages
          }
        }));

        // 채팅방의 마지막 메시지와 업데이트 시간 갱신
        get().updateLastMessage(chatRoomId, newMessage);
      },

      setMessages: (chatRoomId: string, messages: Message[]) => {
        set(state => ({
          messagesByRoom: {
            ...state.messagesByRoom,
            [chatRoomId]: messages
          }
        }));
      },

      getMessages: (chatRoomId: string) => {
        const { messagesByRoom } = get();
        return messagesByRoom[chatRoomId] || [];
      },

      clearMessages: (chatRoomId: string) => {
        set(state => ({
          messagesByRoom: {
            ...state.messagesByRoom,
            [chatRoomId]: []
          }
        }));
      },

      deleteMessage: (chatRoomId: string, messageId: string) => {
        const { messagesByRoom } = get();
        const currentMessages = messagesByRoom[chatRoomId] || [];
        const updatedMessages = currentMessages.filter(msg => msg.id !== messageId);
        
        set(state => ({
          messagesByRoom: {
            ...state.messagesByRoom,
            [chatRoomId]: updatedMessages
          }
        }));
      },

      updateLastMessage: (chatRoomId: string, message: Message) => {
        set(state => ({
          chatRooms: state.chatRooms.map(room => 
            room.chatId === chatRoomId
              ? { ...room, lastMessage: message, lastUpdated: message.timestamp } // updatedAt → lastUpdated로 수정
              : room
          )
        }));
      },

      updateUnreadCount: (chatRoomId: string, count: number) => {
        set(state => ({
          chatRooms: state.chatRooms.map(room => 
            room.chatId === chatRoomId
              ? { ...room, unreadCount: count }
              : room
          )
        }));
      },

      setChatRooms: (chatRooms: ChatRoom[]) => {
        set({ chatRooms });
      }
    }),
    {
      name: 'chat-storage',
      partialize: (state) => ({ 
        messagesByRoom: state.messagesByRoom,
        chatRooms: state.chatRooms 
      })
    }
  )
);