export type Id = string;

export interface User {
  id: Id;
  name: string;
  avatarUrl: string;
}

export type MessageKind = 'text';

export interface BaseMessage {
  id: Id;
  chatId: Id;
  userId: Id;
  createdAt: string; // ISO
}
export interface TextMessage extends BaseMessage {
  kind: 'text';
  text: string;
}
export type Message = TextMessage;

export interface Conversation {
  id: Id;
  title: string;
  participantIds: Id[];
  lastMessageAt: string;
  unreadCount: number;
  avatarUrl?: string;
}

/** 전역 상태(컨텍스트에 저장되는 모양) */
export interface ChatState {
  users: Record<Id, User>;
  conversations: Record<Id, Conversation>;
  messagesByChat: Record<Id, Message[]>;
  meId: Id | null;
}

export type ChatAction =
  | {
      type: 'LOAD_ALL';
      payload: {
        users: User[];
        conversations: Conversation[];
        messages: Message[];
        meId: Id;
      };
    }
  | { type: 'ADD_MESSAGE'; payload: { message: Message } };

/** 채팅방 화면에서 훅이 돌려주는 모양(메시지 배열이 반드시 존재) */
export interface UseChatRoomReturn {
  messages: Message[];
  users: Record<Id, User>;
  meId: Id | null;
  sendText: (text: string) => Promise<void>;
}
