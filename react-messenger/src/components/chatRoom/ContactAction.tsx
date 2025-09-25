import LeftIcon from "../../assets/icons/ContactAction/LeftIcon";
import SearchIcon from "../../assets/icons/ContactAction/SearchIcon";
import CallIcon from "../../assets/icons/ContactAction/CallIcon";
import VideoIcon from "../../assets/icons/ContactAction/VideoIcon";
import ProfileIcon from "../../assets/icons/ContactAction/ProfileIcon";
import RightIcon from "../../assets/icons/ContactAction/RightIcon";

const ContactAction = () => {
  return (
    <div className="h-[100px] bg-white relative border-b border-[#EBEBEB]">
      <button className="absolute top-[60px] left-[16px] right-[13px] ">
        <LeftIcon />
      </button>

      <div className="absolute bottom-[10px] left-[45px] flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-[8px]">
          <ProfileIcon />
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex flex-col">
            <div className="flex items-center space-x-1">
              <span className="max-w-[128px] truncate title-3 mb-[3px] mr-1">
                박서령 ParkSeorabcdefghijklmno
              </span>
              <button className="body-3 text-gray-450">
                <RightIcon />
              </button>
            </div>
            <span className="text-gray-400 text-xs">+82 1234-5678</span>
          </div>
        </div>
      </div>

      {/* 오른쪽 아이콘들 */}
      <div className="absolute bottom-4 right-4 flex items-center space-x-3 text-green-500">
        <SearchIcon />
        <CallIcon />
        <VideoIcon />
      </div>
    </div>
  );
};

export default ContactAction;
