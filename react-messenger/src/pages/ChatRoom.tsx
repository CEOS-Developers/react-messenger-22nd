import ContactAction from "../components/chatRoom/ContactAction";
import MessageInput from "../components/chatRoom/MessageInput";
import RecievedChat from "../components/chatRoom/ReceivedChat";
import SentChat from "../components/chatRoom/SentChat";

const ChatRoom = () => {
  return (
    <div className="w-[375px] h-[812px] bg-light-green relative flex flex-col">
      <ContactAction />
      <div className="flex-1 overflow-y-auto pt-[8px] pb-[92px] pr-[16px] pl-[16px]">
        <RecievedChat text="이러쿵 저렇궁" />
        <RecievedChat text="이러쿵 저렇궁 잘지내고 있나요" />
        <RecievedChat text="이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요" />
        <RecievedChat text="이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요" />
        <RecievedChat text="이러쿵 저렇궁" />
        <RecievedChat text="이러쿵 저렇궁" />
        <RecievedChat text="이러쿵 저렇궁" />
        <RecievedChat text="이러쿵 저렇궁" />
        <SentChat text="요래요래" />
        <SentChat text="요래요래" />
        <RecievedChat text="이러쿵 저렇궁" />
        <RecievedChat text="이러쿵 저렇궁" />
        <RecievedChat text="이러쿵 저렇궁" />
        <SentChat text="요래요래" />
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatRoom;
