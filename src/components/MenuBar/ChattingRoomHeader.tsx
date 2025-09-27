import BeforeBtn from '@/assets/svgs/menubar/upper-menubar/before-arrow-button.svg';
import Search from '@/assets/svgs/menubar/upper-menubar/search.svg';
import MenuHamburger from '@/assets/svgs/menubar/upper-menubar/menu-hamburger.svg';

const ChattingRoomHeader = () => {
  return (
    <div className="mb-[3px] flex w-full justify-between gap-[10px] px-[20px]">
      <button className="cursor-pointer">
        <img src={BeforeBtn} alt="before-btn" className="h-[24px] w-[24px]" />
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 transform">
        <p className="font-semibold">세오스</p>
      </div>
      <button className="absolute right-[20px] flex gap-[12px]">
        <img src={Search} alt="search" className="h-[24px] w-[24px] cursor-pointer" />
        <img src={MenuHamburger} alt="menu-hamburger" className="h-[24px] w-[24px] cursor-pointer" />
      </button>
    </div>
  );
};

export default ChattingRoomHeader;
