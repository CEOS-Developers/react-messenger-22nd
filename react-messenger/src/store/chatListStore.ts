import { create } from "zustand";
import { toTimeLabel } from "@/utils/time";
import { api } from "../api/api";

import type { User, Room, Message } from "@/types";

// 채팅목록용 타입
export type ChatPreview = {
  roomId: string;
  title: string;
  thumb: string;
  lastText: string;
  timeLabel: string;
  lastCreatedAt: number;
  unread: number;
  muted: boolean;
};

type ChatState = {
  rooms: Room[];
  messagesByRoom: Record<string, Message[]>;
  users: Record<string, User>;

  loading: boolean;
  error: string | null;
  initialized: boolean;

  init: () => Promise<void>;
  previews: () => ChatPreview[];
  markAsRead: (roomId: string) => void;
};

// const ENDPOINTS = {
//   rooms: "/room",
//   messages: "/messages",
//   users: "/users",
// };

export const useChat = create<ChatState>((set, get) => ({
  rooms: [],
  messagesByRoom: {},
  users: {},

  loading: false,
  error: null,
  initialized: false,

  init: async () => {
    const { initialized, loading } = get();
    if (initialized || loading) return;

    set({ loading: true, error: null });

    try {
      const [rooms, messages, usersArr] = await Promise.all([
        // api.get<Room[]>(ENDPOINTS.rooms),
        // api.get<Record<string, Message[]>>(ENDPOINTS.messages),
        // api.get<User[]>(ENDPOINTS.users),
        api.rooms.list(),
        api.messages.list(),
        api.users.list(),
      ]);

      // users 배열 -> 맵
      const usersMap: Record<string, User> = {};
      for (const u of usersArr) usersMap[u.id] = u;

      set({
        rooms,
        messagesByRoom: messages,
        users: usersMap,
        loading: false,
        initialized: true,
        error: null,
      });
    } catch (e: any) {
      set({
        loading: false,
        error: e?.message ?? "채팅 데이터 로딩 실패",
      });
    }
  },

  previews: () => {
    const { rooms, messagesByRoom } = get();

    const items: ChatPreview[] = rooms.map((r) => {
      const list = messagesByRoom[r.id] ?? [];
      const last =
        list.find((m) => m.id === r.lastMessageId) || list[list.length - 1];

      const lastText = last?.text ?? "";
      const lastCreatedAt = last?.createdAt ?? 0;

      return {
        roomId: r.id,
        title: r.title,
        thumb: r.thumb ?? "",
        lastText,
        timeLabel: lastCreatedAt ? toTimeLabel(lastCreatedAt) : "",
        lastCreatedAt,
        unread: r.unread ?? 0,
        muted: r.isMuted ?? false,
      };
    });

    // 최신순
    items.sort((a, b) => b.lastCreatedAt - a.lastCreatedAt);
    return items;
  },

  markAsRead: (roomId) => {
    set((s) => ({
      rooms: s.rooms.map((r) => (r.id === roomId ? { ...r, unread: 0 } : r)),
    }));
  },
}));
