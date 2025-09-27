import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/types/chat';
import { mapUsersWithProfile } from '@/utils/userUtils';
import usersData from '@/data/users.json';

interface UserState {
  // 기본 사용자 (항상 "나")
  defaultUserId: string;
  
  // 채팅방별 현재 사용자 시점 저장
  currentUserByRoom: Record<string, string>; // { "1": "user2", "2": "user3" }
  
  // 전체 사용자 데이터
  users: User[];
  
  // Actions
  loadUsers: () => void;
  getUserById: (userId: string) => User | undefined;
  getCurrentUserId: (chatRoomId: string) => string;
  switchToUser: (chatRoomId: string, userId: string, chatRoomParticipants: string[]) => void;
  resetToDefault: (chatRoomId: string) => void; // 기본 사용자로 리셋
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      defaultUserId: 'user2', // 기본 사용자는 항상 "나"
      currentUserByRoom: {},
      users: [],

      loadUsers: () => {
        const mappedUsers = mapUsersWithProfile(usersData as User[]);
        set({ users: mappedUsers });
      },

      getUserById: (userId: string) => {
        const { users } = get();
        return users.find(user => user.id === userId);
      },

      getCurrentUserId: (chatRoomId: string) => {
        const { currentUserByRoom, defaultUserId } = get();
        // 해당 채팅방에 저장된 시점이 있으면 사용, 없으면 기본값
        return currentUserByRoom[chatRoomId] || defaultUserId;
      },

      switchToUser: (chatRoomId: string, userId: string, chatRoomParticipants: string[]) => {
        // 해당 사용자가 채팅방 참여자인지 확인
        if (!chatRoomParticipants.includes(userId)) {
          console.warn(`User ${userId} is not a participant in this chat room`);
          return;
        }
        
        // 자기 자신으로는 전환하지 않음
        const currentUserId = get().getCurrentUserId(chatRoomId);
        if (userId === currentUserId) {
          console.info('Already viewing from this user\'s perspective');
          return;
        }
        
        // 해당 채팅방의 시점만 변경
        set(state => ({
          currentUserByRoom: {
            ...state.currentUserByRoom,
            [chatRoomId]: userId
          }
        }));
      },

      resetToDefault: (chatRoomId: string) => {
        const { defaultUserId } = get();
        set(state => ({
          currentUserByRoom: {
            ...state.currentUserByRoom,
            [chatRoomId]: defaultUserId
          }
        }));
      }
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({ 
        currentUserByRoom: state.currentUserByRoom,
        defaultUserId: state.defaultUserId 
      })
    }
  )
);