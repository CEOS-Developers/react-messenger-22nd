// src/context/ChatContext.tsx
import React, { createContext, useContext, useMemo, useState } from 'react';
import type { Id, User, TextMessage } from '@/types/chat';

type Conversation = { id: Id; title: string; memberCount?: number };

type State = {
  users: Record<Id, User>;
  conversations: Record<Id, Conversation>;
  messagesByChat: Record<Id, TextMessage[]>;
  meId: Id | null;
  sendText: (chatId: Id, text: string) => Promise<void>;
};

const ChatContext = createContext<State | null>(null);

const CHAT_ID: Id = 'ceos-22';

// 샘플 데이터 (시안과 유사)
const initialUsers: Record<Id, User> = {
  me: { id: 'me', name: '나', avatarUrl: '/src/assets/react.svg' },
  o: { id: 'o', name: '오스세', avatarUrl: '/src/assets/react.svg' },
  s1: { id: 's1', name: '스세오', avatarUrl: '/src/assets/react.svg' },
  s2: { id: 's2', name: '세세오스', avatarUrl: '/src/assets/react.svg' },
  s3: { id: 's3', name: '세오오스', avatarUrl: '/src/assets/react.svg' },
};

const initialConversations: Record<Id, Conversation> = {
  [CHAT_ID]: { id: CHAT_ID, title: 'CEOS 22기 잡담방', memberCount: 65 },
};

// 헬퍼
const iso = (h: number, m: number) => {
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d.toISOString();
};

const initialMessages: TextMessage[] = [
  {
    id: 'm1',
    chatId: CHAT_ID,
    userId: 'o',
    kind: 'text',
    text:
      `[CEOS 22기 잡담방]\n` +
      `22기 여러분 모두 환영합니다!\n🎉 모두들 서로 반갑게 인사해 주세요!\n\n` +
      `그리고 여러분 공지 확인 부탁드립니다😄`,
    createdAt: iso(12, 30),
  },
  {
    id: 'm2',
    chatId: CHAT_ID,
    userId: 's1',
    kind: 'text',
    text: '22기 여러분 세오스의 가족이 되신걸 환영합니다!!',
    createdAt: iso(12, 35),
  },
  { id: 'm3', chatId: CHAT_ID, userId: 'me', kind: 'text', text: '다들 반갑습니다!!', createdAt: iso(12, 40) },
  {
    id: 'm4',
    chatId: CHAT_ID,
    userId: 'me',
    kind: 'text',
    text: '22기 디자인 세오스입니다! 잘 부탁드립니다!!',
    createdAt: iso(12, 45),
  },
  {
    id: 'm5',
    chatId: CHAT_ID,
    userId: 's2',
    kind: 'text',
    text: '안녕하세요! 22기 디자인 세세오스입니다. 잘 부탁드립니다!!',
    createdAt: iso(12, 50),
  },
  {
    id: 'm6',
    chatId: CHAT_ID,
    userId: 's3',
    kind: 'text',
    text: '안녕하세요! 22기 디자인 세오오스입니다. 잘 부탁드립니다!!',
    createdAt: iso(12, 55),
  },
];

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [users] = useState(initialUsers);
  const [conversations] = useState(initialConversations);
  const [messagesByChat, setMessagesByChat] = useState<Record<Id, TextMessage[]>>({
    [CHAT_ID]: initialMessages,
  });
  const [meId] = useState<Id>('me');

  const sendText = async (chatId: Id, text: string) => {
    const t = text.trim();
    if (!t) return;
    const msg: TextMessage = {
      id: crypto.randomUUID(),
      chatId,
      userId: meId,
      kind: 'text',
      text: t,
      createdAt: new Date().toISOString(),
    };
    setMessagesByChat((prev) => ({
      ...prev,
      [chatId]: [...(prev[chatId] ?? []), msg],
    }));
  };

  const value = useMemo(
    () => ({ users, conversations, messagesByChat, meId, sendText }),
    [users, conversations, messagesByChat, meId],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChatState() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChatState must be used within ChatProvider');
  return ctx;
}
