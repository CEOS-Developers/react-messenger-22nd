import { headerItems, type HeaderItem } from '@/constants/FriendListHeaderItems';

const FriendListHeader = () => {
  return (
    <div className="mt-[-5px] flex items-center justify-between px-5">
      <div className="title2-sb">친구</div>
      <div className="flex gap-3">
        {headerItems.map((item: HeaderItem) => (
          <img key={item.id} alt={item.label} src={item.src} className="h-6 w-6 cursor-pointer" />
        ))}
      </div>
    </div>
  );
};

export default FriendListHeader;
