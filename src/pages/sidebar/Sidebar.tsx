import FriendIcon from '../../assets/friend.svg';
import FriendIconG from '../../assets/friendIconG.svg';
import chatIcon from '../../assets/chatIcon.svg';
import chatIconG from '../../assets/chatIconG.svg';
import communityIconG from '../../assets/communityG.png';
import communityIcon from '../../assets/community.svg';
import callIconG from '../../assets/callG.png';
import callIcon from '../../assets/call.svg';
import settingIconG from '../../assets/settingG.png';
import settingsIcon from '../../assets/setting.svg';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <nav className="border-light-gray fixed bottom-0 left-1/2 z-10 flex h-[65px] w-full max-w-[375px] -translate-x-1/2 items-center justify-around rounded border-t bg-white">
      <button className="flex flex-col items-center justify-center gap-1 border-0 bg-transparent">
        <Link to="/friendList">
          <img
            src={pathname === '/friendList' || pathname === '/' ? FriendIcon : FriendIconG}
            alt="friend"
            className="h-6 w-6"
          />
          <span
            className={
              `font-pretendard text-center text-[12px] leading-[140%] font-semibold tracking-normal ` +
              (pathname === '/friendList' || pathname === '/' ? 'text-black' : 'text-gray-400')
            }
          >
            친구
          </span>
        </Link>
      </button>
      <button className="flex cursor-pointer flex-col items-center justify-center gap-1 border-0 bg-transparent">
        <Link to="/chat" className={pathname === '/chat' ? 'text-black' : 'text-light-gray'}>
          <img src={pathname === '/chat' ? chatIcon : chatIconG} alt="chat" className="h-6 w-6" />
          <span
            className={
              `font-pretendard text-center text-[12px] leading-[140%] font-semibold tracking-normal ` +
              (pathname === '/chat' ? 'text-black' : 'text-gray-400')
            }
          >
            채팅
          </span>
        </Link>
      </button>
      <button className="flex cursor-pointer justify-center gap-1 border-0 bg-transparent">
        <Link to="/community" className="flex flex-col items-center gap-2">
          <img src={pathname === '/community' ? communityIcon : communityIconG} alt="chat" className="h-6 w-6" />
          <span
            className={
              `font-pretendard flex justify-center text-center text-[12px] leading-[140%] font-semibold tracking-normal ` +
              (pathname === '/community' ? 'text-black' : 'text-gray-400')
            }
          >
            커뮤니티
          </span>
        </Link>
      </button>
      <button className="flex cursor-pointer flex-col items-center justify-center gap-1 border-0 bg-transparent">
        <Link to="/call">
          <img src={pathname === '/call' ? callIcon : callIconG} alt="chat" className="h-6 w-6" />
          <span
            className={
              `font-pretendard text-center text-[12px] leading-[140%] font-semibold tracking-normal ` +
              (pathname === '/call' ? 'text-black' : 'text-gray-400')
            }
          >
            통화
          </span>
        </Link>
      </button>
      <button className="flex cursor-pointer flex-col items-center justify-center gap-1 border-0 bg-transparent">
        <Link to="/setting">
          <img src={pathname === '/setting' ? settingsIcon : settingIconG} alt="chat" className="h-6 w-6" />
          <span
            className={
              `font-pretendard text-center text-[12px] leading-[140%] font-semibold tracking-normal ` +
              (pathname === '/setting' ? 'text-black' : 'text-gray-400')
            }
          >
            설정
          </span>
        </Link>
      </button>
    </nav>
  );
}

export default Sidebar;
