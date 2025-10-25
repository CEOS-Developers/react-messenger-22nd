import ProfileMenubar from '@/components/MenuBar/ProfileMenubar';
import StatusBar from '@/components/MenuBar/StatusBar';
import UserProfile from '@/components/UserProfile/UserProfile';

const Profile = ({ onBack }: { onBack?: () => void }) => {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-[14px] bg-[#5E544E]">
      <div>
        <StatusBar theme="brown" />
        <ProfileMenubar onBack={onBack} />
      </div>
      <div className="pb-8.5">
        <UserProfile />
      </div>
    </div>
  );
};

export default Profile;
