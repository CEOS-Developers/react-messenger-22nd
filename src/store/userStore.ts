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
  switchToUser: (userId: string, chatRoomParticipants: string[]) => void; // 특정 사용자로 전환
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
      },

      switchToUser: (userId: string, chatRoomParticipants: string[]) => {
        // 해당 사용자가 채팅방 참여자인지 확인
        if (!chatRoomParticipants.includes(userId)) {
          console.warn(`User ${userId}는 이 채팅방의 참여자가 아닙니다.`);
          return;
        }
        
        // 자기 자신으로는 전환하지 않음
        const { currentUserId } = get();
        if (userId === currentUserId) {
          console.info('이미 해당 user의 시점입니다.');
          return;
        }
        
        set({ currentUserId: userId });
      }
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({ currentUserId: state.currentUserId })
    }
  )
);