import FriendListActive from '@/assets/svgs/menubar/lower-menubar/friendlist-active.svg';
import FriendListInActive from '@/assets/svgs/menubar/lower-menubar/friendlist-inactive.svg';
import PrivateChattingInactive from '@/assets/svgs/menubar/lower-menubar/private-chatting-inactive.svg';
import PrivateChattingActive from '@/assets/svgs/menubar/lower-menubar/private-chatting-active.svg';
import OpenChatting from '@/assets/svgs/menubar/lower-menubar/open-chatting.svg';
import Shopping from '@/assets/svgs/menubar/lower-menubar/shopping.svg';
import SeeMore from '@/assets/svgs/menubar/lower-menubar/see-more.svg';

export interface MenuItem {
  id: number;
  label: string;
  activeIcon?: string;
  inactiveIcon?: string;
  icon?: string;
}

export const menuItems = [
  { id: 0, label: '친구', activeIcon: FriendListActive, inactiveIcon: FriendListInActive },
  { id: 1, label: '채팅', activeIcon: PrivateChattingActive, inactiveIcon: PrivateChattingInactive },
  { id: 2, label: '오픈채팅', icon: OpenChatting },
  { id: 3, label: '쇼핑', icon: Shopping },
  { id: 4, label: '더보기', icon: SeeMore },
];
