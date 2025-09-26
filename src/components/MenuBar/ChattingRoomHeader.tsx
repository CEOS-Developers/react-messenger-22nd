import BeforeBtn from '@/assets/svgs/menubar/upper-menubar/before-arrow-button.svg';
import Search from '@/assets/svgs/menubar/upper-menubar/search.svg';
import MenuHamburger from '@/assets/svgs/menubar/upper-menubar/menu-hamburger.svg';

const ChattingRoomHeader = () => {
  return (
    <>
      <img src={BeforeBtn} alt="before-btn" />
      <p>채팅방 이름</p>
      <img src={Search} alt="search" />
      <img src={MenuHamburger} alt="menu-hamburger" />
    </>
  );
};

export default ChattingRoomHeader;
