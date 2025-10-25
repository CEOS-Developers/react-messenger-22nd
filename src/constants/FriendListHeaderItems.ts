import Search from '@/assets/svgs/menubar/upper-menubar/search.svg';
import AddFriend from '@/assets/svgs/menubar/upper-menubar/add-friend.svg';
import Music from '@/assets/svgs/menubar/upper-menubar/music.svg';
import Settings from '@/assets/svgs/menubar/upper-menubar/settings-black.svg';

export interface HeaderItem {
  id: number;
  label: string;
  src: string;
}

export const headerItems: HeaderItem[] = [
  { id: 0, label: '검색', src: Search },
  { id: 1, label: '친구추가', src: AddFriend },
  { id: 2, label: '음악', src: Music },
  { id: 3, label: '설정', src: Settings },
];
