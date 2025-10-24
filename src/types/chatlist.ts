import type { Message, User } from '@/types/chat';

export type ChatRoomType = 'individual' | 'group';

export interface ChatRoom {
  chatId: string;
  chatName: string;
  chatType: ChatRoomType;
  participants: string[]; // user IDs
  lastMessage?: Message;
  unreadCount: number;
  createdAt: string;
  lastUpdated: string;
  messages: Message[]; 
}

export interface ChatListItem {
  chatRoom: ChatRoom;
  participantUsers: User[];
  displayName: string;
  displayProfile: string | string[]; // 개인: 단일 이미지, 그룹: 이미지 묶음
  lastMessageText: string;
  lastMessageTime: string;
}