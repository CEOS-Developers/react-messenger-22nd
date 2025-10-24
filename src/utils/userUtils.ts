import type { User } from '@/types/chat';

// chatroom 폴더의 모든 svg 파일을 동적으로 가져옴
const profileImages: Record<string, { default: string }> = import.meta.glob('@/assets/svgs/chatroom/*.svg', { eager: true });

// users.json의 프로필 경로를 실제 이미지 경로로 변환해주는 함수
export const getProfileImage = (path: string): string => {
  const formattedPath = `/src${path.substring(1)}`;
  return profileImages[formattedPath]?.default || '';
};

// 사용자 데이터에 프로필 이미지를 매핑하는 함수
export const mapUsersWithProfile = (users: User[]): User[] => {
  return users.map(user => ({
    ...user,
    profile: getProfileImage(user.profile)
  }));
};

// 사용자 ID로 사용자 정보 찾기
export const findUserById = (users: User[], userId: string): User => {
  return users.find(user => user.id === userId) || {
    id: userId,
    name: '알 수 없음',
    profile: '@/assets/svgs/chatroom/default-profile.svg'
  };
};