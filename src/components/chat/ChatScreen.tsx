// src/components/chat/ChatScreen.tsx
import MobileFrame from '@/layouts/MobileFrame';
import StatusBar from '@/app/StatusBar';
import HeaderBar from '@/app/HeaderBar';
import MessageList from '@/components/chat/MessageList';
import ChatInput from '@/components/chat/ChatInput';
import BottomIndicator from '@/app/BottomIndicator';
import { useLocalMessages, type TextMessage } from '@/features/chat/hooks/useLocalMessages';
import type { User } from '@/types/chat';
import ceossUrl from '@/icons/ceoss.svg';
import ceoosUrl from '@/icons/ceoos.svg';

// 고정값 (이번 과제: 단일 채팅방 화면)
const CHAT_ID = 'c_ceos';
const ME_ID = 'me';

// 초기 시드 메시지 (2025-09-18 목 고정)
const SEED: TextMessage[] = [
  {
    id: 'm1',
    kind: 'text',
    chatId: CHAT_ID,
    userId: 'u_cony',
    text:
      '[CEOS 22기 잡담방]\n' +
      '22기 여러분 모두 환영합니다!\n' +
      '🎉 모두들 서로 반갑게 인사해 주세요!\n\n' +
      '그리고 여러분 공지 확인 부탁드립니다🥳',
    createdAt: '2025-09-18T12:30:00+09:00',
  },
  {
    id: 'm2',
    kind: 'text',
    chatId: CHAT_ID,
    userId: 'u_brown',
    text: '22기 여러분 세오스의 가족이 되신걸 환영합니다!!',
    createdAt: '2025-09-18T12:35:00+09:00',
  },
  {
    id: 'm3',
    kind: 'text',
    chatId: CHAT_ID,
    userId: ME_ID,
    text: '다들 반갑습니다!!',
    createdAt: '2025-09-18T12:40:00+09:00',
  },
  {
    id: 'm4',
    kind: 'text',
    chatId: CHAT_ID,
    userId: ME_ID,
    text: '22기 디자인 세오스입니다! 잘 부탁드립니다!!',
    createdAt: '2025-09-18T12:41:00+09:00',
  },
  {
    id: 'm5',
    kind: 'text',
    chatId: CHAT_ID,
    userId: 'u_brown',
    text: '안녕하세요! 22기 디자인 세세오스입니다. 잘 부탁드립니다!!',
    createdAt: '2025-09-18T12:45:00+09:00',
  },
];

// 참여자(아이디 → 유저) 맵
const usersById: Record<string, User> = {
  me: { id: 'me', name: '세오스', avatarUrl: '/avatars/me.png' },
  u_brown: { id: 'u_brown', name: '스세오', avatarUrl: ceossUrl }, // ← 여기!
  u_cony: { id: 'u_cony', name: '오스세', avatarUrl: ceoosUrl },
};

export default function ChatScreen() {
  // 메시지 상태(메모리 + localStorage) 훅
  const { messages, sendText } = useLocalMessages(CHAT_ID, ME_ID, SEED);

  return (
    <MobileFrame>
      {/* 47px */}
      <StatusBar />
      {/* 47px */}
      <HeaderBar title="CEOS 22기 잡담방" />
      {/* 중간 영역(가변) – 채팅 배경색 지정 */}
      <div className="min-h-0 flex-1 bg-[var(--green-100)]">
        <MessageList messages={messages} usersById={usersById} meId={ME_ID} />
      </div>
      {/* 56px */}
      <ChatInput onSend={sendText} />
      {/* 32px */}
      <BottomIndicator />
    </MobileFrame>
  );
}
