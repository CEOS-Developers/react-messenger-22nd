import { useState } from 'react';
import Dropdown from '../common/Dropdown';
import ProfileIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';
import UpdatesCircle from '@/assets/svgs/profile/updates-circle.svg';
import friendsData from '@/data/friendsData.json';

const UpdatedProfileList = () => {
  const updatedFriends = friendsData.filter((friend) => friend.hasUpdatedProfile);
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  if (updatedFriends.length === 0) return null;

  return (
    <div className="pt-3.25">
      <div className="flex justify-between">
        <div className="body-med mb-2.5">업데이트한 프로필</div>
        <Dropdown isOpen={isOpen} onClick={toggleDropdown} />
      </div>

      {isOpen && (
        <div className="flex gap-2.25">
          {updatedFriends.map((friend) => (
            <div key={friend.userId} className="w-10.75 flex-col">
              <div className="">
                <img src={friend.profileImage || ProfileIMGDefault} alt="업데이트프로필" className="cursor-pointer" />
                <img src={UpdatesCircle} alt="업데이트" className="relative top-[-43px] left-[35px] h-2 w-2" />
              </div>
              <div className="mb-5 cursor-pointer text-center text-[10px] font-medium">{friend.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpdatedProfileList;
