import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/types/chat';
import { mapUsersWithProfile } from '@/utils/userUtils';
import usersData from '@/data/users.json';

interface UserState {
  // 현재 사용자
  currentUserId: string;
  
  // 전체 사용자 데이터
  users: User[];
  
  // Actions
  setCurrentUserId: (userId: string) => void;
  loadUsers: () => void;
  getUserById: (userId: string) => User | undefined;
  switchUser: () => void; // user1 <-> user2 전환
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      currentUserId: 'user2',
      users: [],

      setCurrentUserId: (userId: string) => {
        set({ currentUserId: userId });
      },

      loadUsers: () => {
        const mappedUsers = mapUsersWithProfile(usersData as User[]);
        set({ users: mappedUsers });
      },

      getUserById: (userId: string) => {
        const { users } = get();
        return users.find(user => user.id === userId);
      },

      switchUser: () => {
        const { currentUserId } = get();
        const newUserId = currentUserId === 'user2' ? 'user1' : 'user2';
        set({ currentUserId: newUserId });
      }
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({ currentUserId: state.currentUserId })
    }
  )
);