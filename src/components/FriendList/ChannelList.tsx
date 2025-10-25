import { useState } from 'react';
import Dropdown from '../common/Dropdown';
import ProfileIMGChannel from '@/assets/svgs/profile/profileIMG-channel.svg';

const BirthdayProfileList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <div className="h-[0.5px] w-full bg-[#373633]/10" />
      <div className="pt-3">
        <div className="flex justify-between">
          <div className="flex">
            <div className="body-med mb-2.5">채널</div>
            <div className="relative top-[-12px] flex cursor-pointer items-end px-2.5 text-[9px] font-medium text-[#373633]/50 underline">
              더보기
            </div>
          </div>
          <Dropdown isOpen={isOpen} onClick={toggleDropdown} />
        </div>

        {isOpen && (
          <div className="mb-5 flex gap-1.5">
            <div className="flex cursor-pointer rounded-[6px] bg-[#EBE4E0] p-2">
              <img src={ProfileIMGChannel} alt="채널프로필" className="mr-[11px] h-10.5 w-10.5" />
              <div className="flex flex-col justify-center gap-0.75">
                <div className="body-sb">세오스</div>
                <div className="caption2-reg">안녕하세요 세오스입니다.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdayProfileList;
