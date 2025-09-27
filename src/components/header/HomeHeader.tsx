import { type ReactNode } from 'react';
import Search from '@/assets/svgs/header/home/search.svg';
import Notification from '@/assets/svgs/header/home/notification.svg';
import AddUser from '@/assets/svgs/header/home/add-user.svg';
import Setting from '@/assets/svgs/header/home/setting.svg';

interface HomeHeaderProps {
  rightActions?: ReactNode;
}

const HomeHeader = ({ rightActions }: HomeHeaderProps) => {
  return (
    <div className="flex items-center justify-between h-full px-[24px] py-[10px]">
      {/* 홈 */}
      <div className="flex items-center">
        <span className="text-headline2">홈</span>
      </div>
      
      {/* 오른쪽 아이콘들 */}
      <div className="flex items-center gap-[12px]">
        {rightActions || (
          <>
            <button className='cursor-pointer'>
              <img src={Search} alt="검색" className="w-[22px] h-[22px]" />
            </button>
            <button className='cursor-pointer'>
              <img src={Notification} alt="알림" className="w-[22px] h-[22px]" />
            </button>
            <button className='cursor-pointer'>
              <img src={AddUser} alt="사용자 추가" className="w-[22px] h-[22px]" />
            </button>
            <button className='cursor-pointer'>
              <img src={Setting} alt="설정" className="w-[22px] h-[22px]" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeHeader;