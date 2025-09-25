import { useState } from "react";
import CameraIcon from "../../assets/icons/CameraIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import StickerIcon from "../../assets/icons/StickerIcon";
import SendIcon from "../../assets/icons/SendIcon";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="h-[84px] w-[375px] relative">
      <div className="h-[62px] bg-white absolute bottom-0 left-0 w-full"></div>
      <div className="h-[44px] w-[343px] bg-[rgba(224,224,224,0.3)] backdrop-blur-[20px] rounded-[100px] flex items-center px-3 absolute left-1/2 bottom-[62px] translate-x-[-50%] translate-y-1/2">
        <button className="w-6 h-6 flex items-center justify-center mr-[12px]">
          <PlusIcon />
        </button>
        <input
          className="w-[201px] bg-transparent placeholder:text-gray-500 list-2 focus:outline-none focus:text-black"
          placeholder="메세지 입력"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <div className="ml-auto flex">
          <StickerIcon />
          {message.trim() ? <SendIcon /> : <CameraIcon />}
        </div>
      </div>
    </div>
  );
};
export default MessageInput;
