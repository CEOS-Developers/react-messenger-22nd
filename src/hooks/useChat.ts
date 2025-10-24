import { v4 as uuidv4 } from 'uuid';
import type { Message } from '@/types/chat';
import { useLocalStorage } from './useLocalStorage';
import { formatDate, isSameDate } from '@/utils/timeUtils';

export const useChat = (chatRoomId: string, initialMessages: Message[] = []) => {
  const [messages, setMessages] = useLocalStorage<Message[]>(`chat_${chatRoomId}`, initialMessages);

  // 새로운 메시지 전송 함수
  const sendMessage = (content: string, userId: string) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const lastMessage = messages[messages.length - 1];
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

    setMessages(prev => [...prev, newMessage]);
  };

  // 메시지 목록 초기화
  const clearMessages = () => {
    setMessages([]);
  };

  // 특정 메시지 삭제
  const deleteMessage = (messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
  };

  return {
    messages,
    sendMessage,
    clearMessages,
    deleteMessage,
    setMessages
  };
};