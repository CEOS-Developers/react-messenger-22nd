import LeftIcon from "../../assets/icons/ContactAction/LeftIcon";
import SearchIcon from "../../assets/icons/ContactAction/SearchIcon";
import CallIcon from "../../assets/icons/ContactAction/CallIcon";
import VideoIcon from "../../assets/icons/ContactAction/VideoIcon";
import ProfileIcon from "../../assets/icons/ContactAction/ProfileIcon";
import RightIcon from "../../assets/icons/ContactAction/RightIcon";
import type { Contact } from "../../types/chat";
import userData from "../../data/users.json";

const ContactAction = () => {
  const user: Contact = userData[0];

  return (
    <div className="h-[100px] bg-white relative border-b border-[#EBEBEB]">
      <button className="absolute top-[60px] left-[16px] right-[13px] ">
        <LeftIcon />
      </button>

      <div className="absolute bottom-[10px] left-[45px] flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center mr-[8px]">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <ProfileIcon />
          )}
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex flex-col">
            <div className="flex items-center space-x-1">
              <span className="max-w-[128px] truncate title-3 mb-[3px] mr-1">
                {user.name}
              </span>
              <button className="body-3 text-gray-450">
                <RightIcon />
              </button>
            </div>
            <span className="text-gray-400 text-xs">{user.phone}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex items-center space-x-3 text-green-500">
        <SearchIcon />
        <CallIcon />
        <VideoIcon />
      </div>
    </div>
  );
};

export default ContactAction;
