// src/types/chat.ts
export type Id = string;

export type User = {
  id: Id;
  name: string;
  avatarUrl?: string;
};

export type BaseMessage = {
  id: Id;
  chatId: Id;
  userId: Id;
  createdAt: string; // ISO
};

export type TextMessage = BaseMessage & {
  kind: 'text';
  text: string;
};

export type Message = TextMessage; // (이미지/파일 등 생기면 합집합으로 확장)

export type Conversation = {
  id: Id;
  title: string;
  memberCount?: number;
  /** 참가자 아이디 목록 (Profile.tsx에서 사용) */
  participantIds?: Id[];
};
