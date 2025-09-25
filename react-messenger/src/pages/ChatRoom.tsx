import ContactAction from "../components/chatRoom/ContactAction";
import MessageInput from "../components/chatRoom/MessageInput";

const ChatRoom = () => {
  return (
    <div className="w-[375px] h-[812px] bg-light-green relative">
      <ContactAction />
      <div className="pb-[84px]">{/* 메시지 목록 들어갈 자리 */}</div>
      <div className="absolute bottom-0 left-0 w-full">
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatRoom;
