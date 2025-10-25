import Search from '@/assets/svgs/menubar/upper-menubar/search.svg';
import AddChatting from '@/assets/svgs/menubar/upper-menubar/add-chatting.svg';
import Settings from '@/assets/svgs/menubar/upper-menubar/settings-black.svg';

const ChattingListHeader = () => {
  return (
    <div className="mt-[-5px] mb-5 flex justify-between px-5">
      <div className="title2-sb">채팅</div>
      <div className="flex gap-3">
        <img src={Search} alt="검색" className="h-6 w-6 cursor-pointer" />
        <img src={AddChatting} alt="채팅추가" className="h-6 w-6 cursor-pointer" />
        <img src={Settings} alt="설정" className="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default ChattingListHeader;
