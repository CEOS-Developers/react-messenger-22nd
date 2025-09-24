export type Id = string;

export interface User {
  id: Id;
  name: string;
  avatarUrl: string;
}

export type MessageKind = 'text'; // 확장: "image" | "system" ...

export interface BaseMessage {
  id: Id;
  userId: Id;
  createdAt: string; // ISO
}

export interface TextMessage extends BaseMessage {
  kind: 'text';
  text: string;
}

export type Message = TextMessage;

// 전역 상태
export interface ChatState {
  users: Record<Id, User>;
  messages: Message[];
  meId: Id | null;
}

// 타입 안전 액션(차별화된 유니언)
export type ChatAction =
  | { type: 'LOAD'; payload: { users: User[]; messages: Message[]; meId: Id } }
  | { type: 'SEND_TEXT'; payload: { text: string; userId: Id } }
  | { type: 'ADD_MESSAGE'; payload: { message: Message } };
