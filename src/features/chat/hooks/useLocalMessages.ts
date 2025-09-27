// src/features/chat/hooks/useLocalMessages.ts
import { useEffect, useState } from 'react';

export type TextMessage = {
  id: string;
  kind: 'text';
  chatId: string;
  userId: string;
  text: string;
  createdAt: string; // ISO
};

function safeId() {
  // 일부 브라우저/환경에서 crypto.randomUUID가 없을 수 있어 폴백
  return (globalThis.crypto as any)?.randomUUID?.() ?? `m_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

/**
 * 채팅방별 메시지를 메모리 + localStorage에 저장/로딩.
 * - messages: 항상 배열(빈배열 포함)로 보장 → iterable 오류 방지
 * - sendText: 시각(ISO) 포함해 새 메시지 push
 */
export function useLocalMessages(chatId: string, meId: string, seed: TextMessage[] = []) {
  const storageKey = `msgs:${chatId}`;

  const [messages, setMessages] = useState<TextMessage[]>(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) return JSON.parse(raw) as TextMessage[];
    } catch {}
    return Array.isArray(seed) ? seed : [];
  });

  // 저장
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(messages));
    } catch {}
  }, [storageKey, messages]);

  // 전송(엔터/아이콘 공용)
  const sendText = async (text: string) => {
    const t = text.trim();
    if (!t) return;

    const now = new Date();
    const msg: TextMessage = {
      id: safeId(),
      kind: 'text',
      chatId,
      userId: meId,
      text: t,
      createdAt: now.toISOString(),
    };
    setMessages((prev) => [...prev, msg]);
  };

  return { messages, sendText };
}
