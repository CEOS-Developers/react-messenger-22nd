import React from "react";

// svg 아이콘 import
import SearchIcon from "../../assets/icons/Buttons/header/search.svg?react";
import AddFriendIcon from "../../assets/icons/Buttons/header/addFriend.svg?react";
import SettingsIcon from "../../assets/icons/Buttons/header/setting.svg?react";

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className="w-[375px] h-[48px] flex items-center justify-between px-4 bg-white">
      {/* 왼쪽: 타이틀 */}
      <h1 className="text-[17px] font-semibold -translate-y-1">{title}</h1>

      {/* 오른쪽: 아이콘들 */}
      <div className="flex items-center gap-4 -translate-y-1">
        <button aria-label="검색" className="w-[32px] h-[32px]">
          <SearchIcon className="w-full h-full text-gray-700" />
        </button>
        <button aria-label="친구추가" className="w-[32px] h-[32px]">
          <AddFriendIcon className="w-full h-full text-gray-700" />
        </button>
        <button aria-label="설정" className="w-[32px] h-[32px]">
          <SettingsIcon className="w-full h-full text-gray-700" />
        </button>
      </div>
    </header>
  );
};

export default Header;
