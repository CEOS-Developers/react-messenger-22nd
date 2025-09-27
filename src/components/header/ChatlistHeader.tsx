import { type ReactNode } from 'react';
import Filter from '@/assets/svgs/header/chatlist/filter.svg';
import AddChat from '@/assets/svgs/header/chatlist/add-chat.svg';
import Image from '@/assets/svgs/header/chatlist/image.svg';

interface ChatlistHeaderProps {
  rightActions?: ReactNode;
}

const ChatlistHeader = ({ rightActions }: ChatlistHeaderProps) => {
  return (
    <div className="flex items-center justify-between h-[53px] px-[24px] py-[10px] bg-gray-0">
      {/* 대화 */}
      <div className="flex items-center">
        <span className="text-headline2">대화</span>
      </div>
      
      {/* 오른쪽 아이콘들 */}
      <div className="flex items-center gap-[12px]">
        {rightActions || (
          <>
            <button>
              <img src={Filter} alt="필터" className="w-[22px] h-[22px] text-gray-0" />
            </button>
            <button className='cursor-pointer'>
              <img src={Image} alt="이미지" className="w-[22px] h-[22px]" />
            </button>
            <button className='cursor-pointer'>
              <img src={AddChat} alt="채팅 추가" className="w-[22px] h-[22px]" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatlistHeader;