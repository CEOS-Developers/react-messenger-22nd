import { useState, useRef, useEffect } from "react";
import ContactAction from "../components/chatRoom/ContactAction";
import MessageInput from "../components/chatRoom/MessageInput";
import RecievedChat from "../components/chatRoom/ReceivedChat";
import SentChat from "../components/chatRoom/SentChat";
import DateDivider from "../components/chatRoom/DateDivider";

interface Message {
  id: number;
  text: string;
  type: "sent" | "received";
  createdAt: string;
  time: string;
}

const ChatRoom = () => {
  // Message 타입을 이용하여 렌더링
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "이러쿵 저렇궁",
      type: "received",
      createdAt: "2025-09-26",
      time: "09:15",
    },
    {
      id: 2,
      text: "이러쿵 저렇궁 잘지내고 있나요",
      type: "received",
      createdAt: "2025-09-26",
      time: "09:17",
    },
    {
      id: 3,
      text: "이러쿵 저렇궁 잘지내고 있나요 이러쿵 저렇궁 잘지내고 있나요",
      type: "received",
      createdAt: "2025-09-26",
      time: "09:17",
    },
    {
      id: 4,
      text: "이러쿵 저렇궁 잘지내고 있나요 ... (긴 메시지)",
      type: "received",
      createdAt: "2025-09-26",
      time: "09:17",
    },
    {
      id: 5,
      text: "이러쿵 저렇궁",
      type: "received",
      createdAt: "2025-09-26",
      time: "09:25",
    },

    {
      id: 6,
      text: "이러쿵 저렇궁",
      type: "received",
      createdAt: "2025-09-27",
      time: "14:02",
    },
    {
      id: 7,
      text: "이러쿵 저렇궁",
      type: "received",
      createdAt: "2025-09-27",
      time: "14:05",
    },
    {
      id: 8,
      text: "이러쿵 저렇궁",
      type: "received",
      createdAt: "2025-09-27",
      time: "14:07",
    },
    {
      id: 9,
      text: "요래요래",
      type: "sent",
      createdAt: "2025-09-27",
      time: "14:08",
    },
    {
      id: 10,
      text: "요래요래",
      type: "sent",
      createdAt: "2025-09-27",
      time: "14:10",
    },

    {
      id: 11,
      text: "이러쿵 저렇궁",
      type: "received",
      createdAt: "2025-09-27",
      time: "14:12",
    },
    {
      id: 12,
      text: "이러쿵 저렇궁",
      type: "received",
      createdAt: "2025-09-27",
      time: "14:14",
    },
    {
      id: 13,
      text: "이러쿵 저렇궁",
      type: "received",
      createdAt: "2025-09-27",
      time: "14:15",
    },
    {
      id: 14,
      text: "요래요래",
      type: "sent",
      createdAt: "2025-09-27",
      time: "14:16",
    },
  ]);

  // 메세지 전송 시 자동 스크롤
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

          // 시간 표시 여부 → 다음 메시지와 비교
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
