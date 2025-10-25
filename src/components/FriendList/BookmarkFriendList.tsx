import { useState } from 'react';
import Dropdown from '@/components/common/Dropdown';
import ProfileIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';
import FavoriteStar from '@/assets/svgs/profile/favorites-friends-star.svg';
import friendsData from '@/data/friendsData.json';

const BookmarkFriendList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const favoriteFriends = friendsData.filter((friend) => friend.isFavorite);

  if (favoriteFriends.length === 0) return null;

  return (
    <div>
      <div className="h-[0.5px] w-full bg-[#373633]/10" />
      <div className="pt-3.25">
        <div className="flex justify-between">
          <div className="body-med mb-2.5">즐겨찾기</div>
          <Dropdown isOpen={isOpen} onClick={toggleDropdown} />
        </div>

        {isOpen && (
          <div className="mb-5">
            {favoriteFriends.map((friend) => (
              <div className="flex py-2">
                <div className="mr-[12.44px] h-10.5">
                  <img
                    src={friend.profileImage || ProfileIMGDefault}
                    alt="즐겨찾기프로필"
                    className="h-10.5 w-10.5 cursor-pointer"
                  />
                  <img
                    src={FavoriteStar}
                    alt="즐겨찾기"
                    className="w-3.11 relative top-[-44.5px] left-[33.5px] h-[12.442px]"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="body-med cursor-pointer">{friend.name}</div>
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

export default BookmarkFriendList;
