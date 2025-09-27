import { type ReactNode } from 'react';
import ArrowLeft from '@/assets/svgs/header/chatroom/arrow-left.svg';
import Call from '@/assets/svgs/header/chatroom/call.svg';
import Search from '@/assets/svgs/header/chatroom/search.svg';
import Hamburger from '@/assets/svgs/header/chatroom/hamburger.svg';

interface ChatroomHeaderProps {
  title?: string;
  onBack?: () => void;
  onTitleClick?: () => void; // title 클릭 이벤트 핸들러
  rightActions?: ReactNode;
}

const ChatroomHeader = ({ title = "이름", onBack, onTitleClick, rightActions }: ChatroomHeaderProps) => {
  return (
    <div className="flex items-center justify-between h-full pl-[12px] pr-[16px] py-[10px]">
      {/* 왼쪽 대화 상대 이름 */}
      <div className="flex items-center gap-[4px]">
        <button onClick={onBack} className='cursor-pointer'>
          <img src={ArrowLeft} alt="뒤로가기" />
        </button>
        <div className='mt-[1px]'>
          <button onClick={onTitleClick} className='cursor-pointer'>
            <span className="text-body1">{title}</span>
          </button>
        </div>
      </div>
      
      {/* 오른쪽 아이콘들 */}
      <div className="flex items-center gap-[12px]">
        {rightActions || (
          <>
            <button className='cursor-pointer'>
              <img src={Call} alt="전화" className="w-[22px] h-[22px]" />
            </button>
            <button className='cursor-pointer'>
              <img src={Search} alt="검색" className="w-[22px] h-[22px]" />
            </button>
            <button className='cursor-pointer'>
              <img src={Hamburger} alt="메뉴" className="w-[22px] h-[22px]" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatroomHeader;