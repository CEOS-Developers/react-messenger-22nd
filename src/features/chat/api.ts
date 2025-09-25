import type { Conversation, Message, User } from '@/types/chat';

const STORAGE_KEY = 'ceos-messenger-v2';

type DB = {
  users: User[];
  conversations: Conversation[];
  messages: Message[];
  meId: string;
};

function seed(): DB {
  const me: User = { id: 'me', name: '세오스', avatarUrl: '/avatars/me.png' };
  const brown: User = { id: 'u_brown', name: '브라운', avatarUrl: '/avatars/brown.png' };
  const cony: User = { id: 'u_cony', name: '콩이', avatarUrl: '/avatars/cony.png' };

  const chatCeos: Conversation = {
    id: 'c_ceos',
    title: 'CEOS 22기 잡담방',
    participantIds: [me.id, brown.id, cony.id],
    lastMessageAt: new Date().toISOString(),
    unreadCount: 12,
  };
  const chatBrown: Conversation = {
    id: 'c_brown',
    title: '브라운',
    participantIds: [me.id, brown.id],
    lastMessageAt: new Date().toISOString(),
    unreadCount: 0,
    avatarUrl: brown.avatarUrl,
  };

  const now = new Date();
  const y = new Date(now);
  y.setDate(now.getDate() - 1);

  const messages: Message[] = [
    {
      id: crypto.randomUUID(),
      chatId: 'c_brown',
      userId: 'u_brown',
      kind: 'text',
      text: '우리 MT 어디로 갈까?',
      createdAt: new Date(y.setHours(9, 24)).toISOString(),
    },
    {
      id: crypto.randomUUID(),
      chatId: 'c_brown',
      userId: 'me',
      kind: 'text',
      text: '강촌 어때?',
      createdAt: new Date(y.setHours(10, 36)).toISOString(),
    },
    {
      id: crypto.randomUUID(),
      chatId: 'c_brown',
      userId: 'u_brown',
      kind: 'text',
      text: '다들 시간 돼?',
      createdAt: new Date(y.setHours(14, 46)).toISOString(),
    },

    {
      id: crypto.randomUUID(),
      chatId: 'c_ceos',
      userId: 'u_cony',
      kind: 'text',
      text: '내일 공지 올라갑니다~',
      createdAt: new Date(y.setHours(9, 10)).toISOString(),
    },
    {
      id: crypto.randomUUID(),
      chatId: 'c_ceos',
      userId: 'me',
      kind: 'text',
      text: '확인했어요!',
      createdAt: new Date(y.setHours(9, 33)).toISOString(),
    },
  ];

  return {
    users: [me, brown, cony],
    conversations: [chatCeos, chatBrown],
    messages,
    meId: 'me',
  };
}

function load(): DB {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const s = seed();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    return s;
  }
  return JSON.parse(raw) as DB;
}
function save(db: DB) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

export async function fetchAll() {
  const db = load();
  return db;
}

export async function postMessage(message: Message) {
  const db = load();
  db.messages.push(message);
  // 대화 최근 시각 갱신 + (간단) 안읽음 증가
  const conv = db.conversations.find((c) => c.id === message.chatId);
  if (conv) {
    conv.lastMessageAt = message.createdAt;
    if (message.userId === db.meId) {
      // 내가 보낸 건 상대 unread로 가정 — 여기선 단순화
    } else {
      conv.unreadCount += 1;
    }
  }
  save(db);
  return message;
}
