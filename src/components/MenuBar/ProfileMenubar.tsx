import BeforeBtn from '@/assets/svgs/menubar/upper-menubar/before-arrow-button-white.svg';
import Shopping from '@/assets/svgs/menubar/upper-menubar/shopping.svg';
import Scan from '@/assets/svgs/menubar/upper-menubar/scan.svg';
import Settings from '@/assets/svgs/menubar/upper-menubar/settings-white.svg';

const ProfileMenubar = ({ onBack }: { onBack?: () => void }) => {
  return (
    <>
      <div className="flex justify-between px-5">
        <img src={BeforeBtn} alt="before-btn" className="cursor-pointer" onClick={onBack} />
        <div className="flex gap-[10px]">
          <img src={Shopping} alt="shopping" className="cursor-pointer" />
          <img src={Scan} alt="scan" className="cursor-pointer" />
          <img src={Settings} alt="settings" className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default ProfileMenubar;
