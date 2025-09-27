import { useState, useRef, useEffect } from "react";
import ContactAction from "../components/chatRoom/ContactAction";
import MessageInput from "../components/chatRoom/MessageInput";
import RecievedChat from "../components/chatRoom/ReceivedChat";
import SentChat from "../components/chatRoom/SentChat";

interface Message {
  id: number;
  text: string;
  type: "sent" | "received";
}

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "이러쿵 저렇궁", type: "received" },
    { id: 2, text: "이러쿵 저렇궁 잘지내고 있나요", type: "received" },
    {
      id: 3,
      text: "이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요",
      type: "received",
    },
    {
      id: 4,
      text: "이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요",
      type: "received",
    },
    { id: 5, text: "이러쿵 저렇궁", type: "received" },
    { id: 6, text: "이러쿵 저렇궁", type: "received" },
    { id: 7, text: "이러쿵 저렇궁", type: "received" },
    { id: 8, text: "이러쿵 저렇궁", type: "received" },
    { id: 9, text: "요래요래", type: "sent" },
    { id: 10, text: "요래요래", type: "sent" },
    { id: 11, text: "이러쿵 저렇궁", type: "received" },
    { id: 12, text: "이러쿵 저렇궁", type: "received" },
    { id: 13, text: "이러쿵 저렇궁", type: "received" },
    { id: 14, text: "요래요래", type: "sent" },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      type: "sent",
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="w-[375px] h-[812px] bg-light-green relative flex flex-col">
      <ContactAction />
      <div className="flex-1 overflow-y-auto pt-[8px] pb-[92px] pr-[16px] pl-[16px]">
        {messages.map((msg) =>
          msg.type === "sent" ? (
            <SentChat key={msg.id} text={msg.text} />
          ) : (
            <RecievedChat key={msg.id} text={msg.text} />
          )
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatRoom;
