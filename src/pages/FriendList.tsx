import { useState, useEffect } from 'react';
import StatusBar from '@/components/MenuBar/StatusBar';
import FriendListHeader from '@/components/MenuBar/FriendListHeader';
import UserTab from '@/components/FriendList/UserTab';
import UpdatedProfileList from '@/components/FriendList/UpdatedProfileList';
import BirthdayProfileList from '@/components/FriendList/BirthdayFriendList';
import ChannelList from '@/components/FriendList/ChannelList';
import BookmarkFriendList from '@/components/FriendList/BookmarkFriendList';
import FriendsList from '@/components/FriendList/FriendsList';
import Profile from '@/pages/Profile';

interface FriendListProps {
  setHideLowerMenubar: (hide: boolean) => void;
}

const FriendList: React.FC<FriendListProps> = ({
  setHideLowerMenubar,
}: {
  setHideLowerMenubar: (hide: boolean) => void;
}) => {
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);

  useEffect(() => {
    setHideLowerMenubar(isUserProfileOpen);
  }, [isUserProfileOpen, setHideLowerMenubar]);

  if (isUserProfileOpen) {
    return <Profile onBack={() => setIsUserProfileOpen(false)} />;
  }

  return (
    <div className="flex h-full flex-col overflow-auto">
      <div className="flex-shrink-0">
        <StatusBar />
        <FriendListHeader />
      </div>
      <div className="flex flex-1 flex-grow overflow-y-auto">
        <div className="w-full flex-col px-5 py-5">
          <div onClick={() => setIsUserProfileOpen(true)}>
            <UserTab />
          </div>
          <UpdatedProfileList />
          <BirthdayProfileList />
          <ChannelList />
          <BookmarkFriendList />
          <FriendsList />
        </div>
      </div>
    </div>
  );
};

export default FriendList;
