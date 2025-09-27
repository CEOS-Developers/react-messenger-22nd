import ProfileMenubar from '@/components/MenuBar/ProfileMenubar';
import StatusBar from '@/components/MenuBar/StatusBar';

const Profile = () => {
  return (
    <div className="bg-[#5E544E]">
      <StatusBar theme="brown" />
      <ProfileMenubar />
    </div>
  );
};

export default Profile;
