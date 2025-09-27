import { type ReactNode } from 'react';
import Close from '@/assets/svgs/header/profile/close.svg';
import Image from '@/assets/svgs/header/profile/image.svg';
import Setting from '@/assets/svgs/header/profile/setting.svg';

interface ProfileHeaderProps {
  onBack?: () => void;
  rightActions?: ReactNode;
}

const ProfileHeader = ({ onBack, rightActions }: ProfileHeaderProps) => {
  return (
    <div className="flex items-center justify-between h-full px-[20px] py-[10px]">
      {/* 왼쪽 */}
      <div className="flex items-center">
        <button onClick={onBack}>
          <img src={Close} alt="닫기" className="w-[22px] h-[22px]" />
        </button>
      </div>
      
      {/* 오른쪽 */}
      <div className="flex items-center gap-[12px]">
        {rightActions || (
          <>
            <button className='cursor-pointer'>
              <img src={Image} alt="이미지" className="w-[22px] h-[22px]" />
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

export default ProfileHeader;