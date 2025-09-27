import { useContext } from 'react';
import { ChatContext } from '@/type/ChatType.types';

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error('ChatProvider 사용 필요');
  return context;
};
