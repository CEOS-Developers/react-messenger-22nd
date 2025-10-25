import { useNavigate } from 'react-router-dom';
import BeforeBtn from '@/assets/svgs/menubar/upper-menubar/before-arrow-button-black.svg';
import Search from '@/assets/svgs/menubar/upper-menubar/search.svg';
import MenuHamburger from '@/assets/svgs/menubar/upper-menubar/menu-hamburger.svg';

interface ChattingRoomHeaderProps {
  roomName: string;
}

const ChattingRoomHeader: React.FC<ChattingRoomHeaderProps> = ({ roomName }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="mb-0.5 flex w-full justify-between gap-2.5 px-5">
      <button onClick={goBack} className="cursor-pointer">
        <img src={BeforeBtn} alt="before-btn" className="h-6 w-6" />
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 transform">
        <div className="title4-sm pt-0.25">{roomName}</div>
      </div>
      <button className="right-5 flex gap-3">
        <img src={Search} alt="search" className="h-6 w-6 cursor-pointer" />
        <img src={MenuHamburger} alt="menu-hamburger" className="h-6 w-6 cursor-pointer" />
      </button>
    </div>
  );
};

export default ChattingRoomHeader;
