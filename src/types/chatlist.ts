import type { Message, User } from './chat';

export type ChatRoomType = 'individual' | 'group';

export interface ChatRoom {
  id: string;
  name: string;
  type: ChatRoomType;
  participants: string[]; // user IDs
  lastMessage?: Message;
  unreadCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ChatListItem {
  chatRoom: ChatRoom;
  participantUsers: User[];
  displayName: string;
  displayProfile: string | string[]; // 개인: 단일 이미지, 그룹: 이미지 묶음
  lastMessageText: string;
  lastMessageTime: string;
}