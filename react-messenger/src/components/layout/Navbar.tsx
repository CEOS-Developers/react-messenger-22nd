import { useState } from "react";

// svg 아이콘 import (svgr 사용 가정)
import ChatDefault from "../../assets/icons/BNB/chat-default.svg?react";
import ChatPressed from "../../assets/icons/BNB/chat-pressed.svg?react";
import FriendDefault from "../../assets/icons/BNB/friend-default.svg?react";
import FriendPressed from "../../assets/icons/BNB/friend-pressed.svg?react";
import MoreDefault from "../../assets/icons/BNB/more-default.svg?react";
import MorePressed from "../../assets/icons/BNB/more-pressed.svg?react";
import OpenChatDefault from "../../assets/icons/BNB/openChat-default.svg?react";
import OpenChatPressed from "../../assets/icons/BNB/openChat-pressed.svg?react";
import shopDefault from "../../assets/icons/BNB/shop-default.svg?react";
import shopPressed from "../../assets/icons/BNB/shop-pressed.svg?react";

const navItems = [
  { id: "friend", defaultIcon: FriendDefault, pressedIcon: FriendPressed },
  { id: "chat", defaultIcon: ChatDefault, pressedIcon: ChatPressed },
  { id: "open", defaultIcon: OpenChatDefault, pressedIcon: OpenChatPressed },
  { id: "shop", defaultIcon: shopDefault, pressedIcon: shopPressed },
  { id: "more", defaultIcon: MoreDefault, pressedIcon: MorePressed },
];

const Navbar = () => {
  const [active, setActive] = useState("friend"); // 기본 선택은 '채팅'
  return (
    <nav className="w-full h-[84px] bg-white flex justify-around items-center border-t border-neutral-200">
      {navItems.map((item) => {
        const Icon = active === item.id ? item.pressedIcon : item.defaultIcon;
        return (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="flex flex-col items-center -translate-y-2.5 focus:outline-none"
          >
            <Icon className="w-[48px] h-[44px]" />
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
