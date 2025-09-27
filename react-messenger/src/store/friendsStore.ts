import { create } from "zustand";
import type { User } from "../types/index";
import { api } from "../api/api";

type Collection = { id: string; label: string };
type CollectionId = "all" | "updated" | "birthday" | string;

interface FriendsState {
  me?: User;
  friends: User[];
  query: string;

  // 드롭다운
  collections: Collection[];
  activeCollection: CollectionId;
  isDropdownOpen: boolean;

  collapsed: Record<string, boolean>; // 그 세션이 접혔는지
  categoryOrder: string[]; // 그룹순서들
  customCategories: string[];

  // actions
  init: () => Promise<void>;
  setQuery: (q: string) => void;

  // toggleUpdatedLocal: (id: string) => void;
  toggleCollapsed: (key: string) => void;

  loadCollections: (items: Collection[]) => void;
  setActiveCollection: (id: CollectionId) => void;
  toggleDropdown: (open?: boolean) => void;

  setUserGroupsLocal: (userId: string, groups: string[]) => void;

  // derived
  getFilteredFriends: () => User[];
}

export const useFriends = create<FriendsState>((set, get) => ({
  me: undefined,
  friends: [],
  query: "",

  collections: [{ id: "all", label: "전체" }],
  activeCollection: "all",
  isDropdownOpen: false,

  collapsed: {},
  categoryOrder: ["즐겨찾기", "가족", "회사", "친구"],
  customCategories: [],

  // 초기에 json data 가져오기
  init: async () => {
    const [users, cols] = await Promise.all([
      api.users.list(),
      api.collections.list(),
    ]);
    const me = users.find((u: User) => u.id === "me");
    const friends = users.filter((u: User) => u.id !== "me");

    const allGroups = Array.from(
      new Set(friends.flatMap((f: User) => f.groups ?? []))
    );
    const mergedOrder = [
      ...get().categoryOrder,
      ...allGroups.filter((g) => !get().categoryOrder.includes(g)),
    ];

    set({
      me,
      friends,
      collections: cols?.length ? cols : get().collections,
      categoryOrder: mergedOrder,
    });
  },

  // 검색
  setQuery: (q) => set({ query: q }),
  // 업데이트한 프로필
  // toggleUpdatedLocal: (id) =>
  //   set({
  //     friends: get().friends.map((f) =>
  //       f.id === id ? { ...f, isFavorite: !f.isUpdated } : f
  //     ),
  //   }),

  toggleCollapsed: (key) =>
    set({ collapsed: { ...get().collapsed, [key]: !get().collapsed[key] } }),

  // 드롭다운 옵션 교체
  loadCollections: (items) =>
    set({
      collections: items,
      activeCollection: items.some((i) => i.id === get().activeCollection)
        ? get().activeCollection
        : "all",
    }),

  setActiveCollection: (id) =>
    set({ activeCollection: id, isDropdownOpen: false }),
  toggleDropdown: (open) =>
    set((s) => ({ isDropdownOpen: open ?? !s.isDropdownOpen })),

  setUserGroupsLocal: (userId, groups) => {
    const unique = Array.from(new Set(groups));
    set({
      friends: get().friends.map((f) =>
        f.id === userId ? { ...f, groups: unique } : f
      ),
    });
    const unknown = unique.filter((g) => !get().categoryOrder.includes(g));
    if (unknown.length)
      set({ categoryOrder: [...get().categoryOrder, ...unknown] });
  },

  getFilteredFriends: () => {
    const { friends, query, activeCollection } = get();
    const q = query.trim().toLowerCase();

    let list = friends.filter(
      (f) =>
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.status?.toLowerCase().includes(q)
    );

    if (activeCollection === "all") return list;
    if (activeCollection === "updated") return list.filter((f) => f.isUpdated);
    if (activeCollection === "birthday")
      return list.filter((f) => f.isBirthday);
    return list.filter((f) => (f.groups ?? []).includes(activeCollection));
  },
}));
