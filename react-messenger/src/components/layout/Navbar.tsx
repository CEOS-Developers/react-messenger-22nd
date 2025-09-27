import { NavLink } from "react-router-dom";
import type { ComponentType, SVGProps } from "react";

// svg 아이콘 import (svgr 사용 가정)
import ChatDefault from "../../assets/icons/BNB/chat-default.svg?react";
import ChatPressed from "../../assets/icons/BNB/chat-pressed.svg?react";
import FriendDefault from "../../assets/icons/BNB/friend-default.svg?react";
import FriendPressed from "../../assets/icons/BNB/friend-pressed.svg?react";
import MoreDefault from "../../assets/icons/BNB/more-default.svg?react";
import MorePressed from "../../assets/icons/BNB/more-pressed.svg?react";
import OpenChatDefault from "../../assets/icons/BNB/openChat-default.svg?react";
import OpenChatPressed from "../../assets/icons/BNB/openChat-pressed.svg?react";
import ShopDefault from "../../assets/icons/BNB/shop-default.svg?react";
import ShopPressed from "../../assets/icons/BNB/shop-pressed.svg?react";

type IconComp = ComponentType<SVGProps<SVGSVGElement>>;

type NavItem = {
  id: "chat" | "friend" | "openchat" | "shop" | "more";
  label: string;
  to: string;
  defaultIcon: IconComp;
  pressedIcon: IconComp;
};

const items: NavItem[] = [
  {
    id: "friend",
    label: "친구",
    to: "/",
    defaultIcon: FriendDefault,
    pressedIcon: FriendPressed,
  },
  {
    id: "chat",
    label: "채팅",
    to: "/chatList",
    defaultIcon: ChatDefault,
    pressedIcon: ChatPressed,
  },
  {
    id: "openchat",
    label: "오픈채팅",
    to: "/openChat",
    defaultIcon: OpenChatDefault,
    pressedIcon: OpenChatPressed,
  },
  {
    id: "shop",
    label: "쇼핑",
    to: "/shop",
    defaultIcon: ShopDefault,
    pressedIcon: ShopPressed,
  },
  {
    id: "more",
    label: "더보기",
    to: "/more",
    defaultIcon: MoreDefault,
    pressedIcon: MorePressed,
  },
];

const Navbar = () => {
  return (
    <nav className="h-[84px] w-full bg-white border-t border-neutral-200 flex items-center">
      <div className="w-full flex justify-around -translate-y-2.5">
        {items.map((it) => {
          return (
            <NavLink
              key={it.id}
              to={it.to}
              className="flex flex-col items-center"
            >
              {({ isActive }) => {
                const ActiveIcon = isActive ? it.pressedIcon : it.defaultIcon;
                return (
                  <>
                    <ActiveIcon className="w-[48px] h-[44px]" />
                  </>
                );
              }}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
