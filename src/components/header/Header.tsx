import { type ReactNode } from 'react';
import ChatroomHeader from '@/components/header/ChatroomHeader';
import ChatlistHeader from '@/components/header/ChatlistHeader';
import HomeHeader from '@/components/header/HomeHeader';
import ProfileHeader from '@/components/header/ProfileHeader';

// 헤더 타입 정의
export type HeaderType = 'chatroom' | 'chatlist' | 'home' | 'profile';

interface HeaderProps {
  type: HeaderType;
  title?: string; // 화면 제목
  onBack?: () => void; // 왼쪽 뒤로가기 버튼 (채팅방, 프로필)
  onTitleClick?: () => void; // 채팅방 제목 클릭 이벤트
  rightActions?: ReactNode; // 오른쪽 헤더 아이콘
}

const Header = ({ type, title, onBack, onTitleClick, rightActions }: HeaderProps) => {
  const renderHeader = () => {
    switch (type) {
      case 'home':
        return <HomeHeader rightActions={rightActions} />;
      case 'chatlist':
        return <ChatlistHeader rightActions={rightActions} />;
      case 'chatroom':
        return <ChatroomHeader title={title} onBack={onBack} onTitleClick={onTitleClick} rightActions={rightActions} />;
      case 'profile':
        return <ProfileHeader onBack={onBack} rightActions={rightActions} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-[53px] bg-gray-0">
      {renderHeader()}
    </div>
  );
};

export default Header;