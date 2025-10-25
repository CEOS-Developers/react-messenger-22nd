import ProflieIMGDefault from '@/assets/svgs/profile/profileIMG-default.svg';

const UserTab = () => {
  return (
    <div className="w-full cursor-pointer pb-1.25">
      <div className="flex flex-row rounded-[4px] bg-[#815840] p-2.5">
        <img src={ProflieIMGDefault} alt="유저프사" className="h-13.5 w-13.5" />
        <span className="title4-sm ml-[15px] flex items-center text-white">사용자</span>
      </div>
    </div>
  );
};

export default UserTab;
