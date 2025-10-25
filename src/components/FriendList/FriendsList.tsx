import { useState } from 'react';
import Dropdown from '../common/Dropdown';
import ProfileIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';
import friendData from '@/data/friendsData.json';

const FriendsList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <div className="h-[0.5px] w-full bg-[#373633]/10" />
      <div className="pt-3.25 pb-5">
        <div className="flex justify-between">
          <div className="body-med mb-2.5">친구 {friendData.length}</div>
          <Dropdown isOpen={isOpen} onClick={toggleDropdown} />
        </div>

        {isOpen && (
          <div>
            {friendData.map((friend) => (
              <div key={friend.userId} className="flex py-2">
                <div className="mr-[12.44px] h-10.5">
                  <img
                    src={friend.profileImage || ProfileIMGDefault}
                    alt="{friend.name}"
                    className="h-10.5 w-10.5 cursor-pointer"
                  />
                </div>
                <div className="flex cursor-pointer flex-col justify-center">
                  <div className="body-med">{friend.name}</div>
                  {friend.statusMessage && <div className="caption2-reg">{friend.statusMessage}</div>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsList;
