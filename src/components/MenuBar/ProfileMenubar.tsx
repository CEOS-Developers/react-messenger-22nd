import BeforeBtn from '@/assets/svgs/menubar/upper-menubar/before-arrow-button-white.svg';
import Shopping from '@/assets/svgs/menubar/upper-menubar/shopping.svg';
import Scan from '@/assets/svgs/menubar/upper-menubar/scan.svg';
import Settings from '@/assets/svgs/menubar/upper-menubar/settings-white.svg';

const ProfileMenubar = () => {
  return (
    <>
      <div className="flex">
        <img src={BeforeBtn} alt="before-btn" />
        <img src={Shopping} alt="shopping" />
        <img src={Scan} alt="scan" />
        <img src={Settings} alt="settings" />
      </div>
    </>
  );
};

export default ProfileMenubar;
