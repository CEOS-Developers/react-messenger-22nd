import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { api } from "../api/api";
import type { User, Room, Message } from "@/types";

type ChatState = {
  rooms: Room[];
  messages: Record<string, Message[]>;
  users: Record<string, User>;
  activeRoomId?: string;
  input: string;
  isLoading: boolean;

  setActiveRoom: (roomId: string) => void;
  setInput: (v: string) => void;
  init: (roomId: string) => Promise<void>;
  send: () => Promise<void>;
  clearRoom: (roomId: string) => void;
};

export const useChatting = create<ChatState>()(
  persist(
    (set, get) => ({
      rooms: [],
      messages: {},
      users: {},
      activeRoomId: undefined,
      input: "",
      isLoading: false,

      setActiveRoom: (roomId) => set({ activeRoomId: roomId }),
      setInput: (v) => set({ input: v }),

      init: async (roomId) => {
        set({ isLoading: true, activeRoomId: roomId });

        const [rooms, seedByRoom, usersArr] = await Promise.all([
          api.rooms.list(),
          api.messages.list(),
          api.users.list(),
        ]);

        const users: Record<string, User> = {};
        usersArr.forEach((u) => (users[u.id] = u));

        // persist된 로컬 메시지와 seed 머지, 중복삭제
        const persisted = get().messages;
        const ids = new Set([
          ...Object.keys(seedByRoom),
          ...Object.keys(persisted),
        ]);

        const merged: Record<string, Message[]> = {};
        ids.forEach((rid) => {
          const map = new Map<string, Message>();
          (seedByRoom[rid] ?? []).forEach((m) => map.set(m.id, m));
          (persisted[rid] ?? []).forEach((m) => map.set(m.id, m));
          merged[rid] = [...map.values()].sort(
            (a, b) => a.createdAt - b.createdAt
          );
        });

        set({ rooms, users, messages: merged, isLoading: false });
      },

      send: async () => {
        const { activeRoomId, input, messages } = get();
        if (!activeRoomId) return;
        const text = input.trim();
        if (!text) return;

        const now = Date.now();
        const msg: Message = {
          id: `local-${now}`,
          userId: "me",
          text,
          createdAt: now,
        };

        set((s) => ({
          messages: {
            ...s.messages,
            [activeRoomId]: [...(messages[activeRoomId] ?? []), msg],
          },
          input: "",
        }));
      },

      clearRoom: (roomId) =>
        set((s) => {
          const next = { ...s.messages };
          delete next[roomId];
          return { messages: next };
        }),
    }),
    {
      name: "chat-store",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ messages: s.messages }), // 메시지만 persist
    }
  )
);
