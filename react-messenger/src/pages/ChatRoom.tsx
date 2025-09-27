import { useState, useRef, useEffect } from "react";
import ContactAction from "../components/chatRoom/ContactAction";
import MessageInput from "../components/chatRoom/MessageInput";
import RecievedChat from "../components/chatRoom/ReceivedChat";
import SentChat from "../components/chatRoom/SentChat";
import DateDivider from "../components/chatRoom/DateDivider";
import type { Message } from "../types/chat";
import messageData from "../data/messages.json";

const ChatRoom = () => {
  // Message 타입을 이용하여 렌더링
  const [messages, setMessages] = useState<Message[]>(messageData as Message[]);

  // 메세지 전송 시 자동 스크롤
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 자동 스크롤 구현
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text: string) => {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const time = now.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const newMessage: Message = {
      id: Date.now(),
      userId: 0,
      text,
      type: "sent",
      createdAt: today,
      time,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="w-[375px] h-[812px] bg-light-green relative flex flex-col">
      <ContactAction />
      <div className="flex-1 overflow-y-auto pt-[8px] pb-[92px] pr-[16px] pl-[16px]">
        {messages.map((msg, index) => {
          const prevMsg = messages[index - 1];
          const nextMsg = messages[index + 1];
          const showDivider = !prevMsg || prevMsg.createdAt !== msg.createdAt;

          // 시간 표시 여부: 다음 메시지와 비교
          const showTime =
            !nextMsg || nextMsg.time !== msg.time || nextMsg.type !== msg.type;

          return (
            <div key={msg.id}>
              {showDivider && <DateDivider date={msg.createdAt} />}
              {msg.type === "sent" ? (
                <SentChat
                  text={msg.text}
                  time={showTime ? msg.time : undefined}
                />
              ) : (
                <RecievedChat
                  text={msg.text}
                  time={showTime ? msg.time : undefined}
                />
              )}
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatRoom;
