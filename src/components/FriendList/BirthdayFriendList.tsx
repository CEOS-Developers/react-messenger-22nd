import { useState } from 'react';
import Dropdown from '@/components/common/Dropdown';
import ProfileIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';
import friendsData from '@/data/friendsData.json';

const BirthdayProfileList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // 오늘 날짜 (월, 일)
  const today = new Date();
  const todayMonthDay = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  // 생일자
  const birthdayFriends = friendsData.filter((friend) => {
    const friendBirthday = friend.birthday.slice(5); // "MM-DD" 추출
    return friendBirthday === todayMonthDay;
  });

  if (birthdayFriends.length === 0) return null;

  return (
    <div>
      <div className="h-[0.5px] w-full bg-[#373633]/10" />
      <div className="pt-3">
        <div className="flex justify-between">
          <div className="flex">
            <div className="body-med mb-2.5">생일인 친구</div>
            <div className="relative top-[-12px] flex cursor-pointer items-end px-2.5 text-[9px] font-medium text-[#373633]/50 underline">
              더보기
            </div>
          </div>
          <Dropdown isOpen={isOpen} onClick={toggleDropdown} />
        </div>

        {isOpen && (
          <div className="mb-5 flex gap-2.25">
            {birthdayFriends.map((friend) => (
              <div key={friend.userId} className="w-10.75 flex-col">
                <div className="">
                  <img src={friend.profileImage || ProfileIMGDefault} alt="업데이트프로필" className="cursor-pointer" />
                </div>
                <div className="caption2-reg mt-[8px] cursor-pointer text-center">{friend.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdayProfileList;
