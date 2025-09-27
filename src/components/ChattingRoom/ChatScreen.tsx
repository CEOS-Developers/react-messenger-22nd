import { useState, useEffect } from 'react';
import DefaultProfile from '@/assets/svgs/profile/profileIMG-default.svg';
import chatMessagesData from '@/data/chatMessages.json';

// 메시지타입
type DataMessage = {
  msgId: string;
  senderId: string;
  senderName: string;
  content: string;
  type: 'text' | 'image' | 'video' | 'file';
  sentAt: string;
};

// 변환 후 사용할 메시지 타입
type Message = Omit<DataMessage, 'sentAt'> & { sentAt: Date };

// 나 (유저)
const MY_ID = 'user-0';

// Date 객체 → "YYYY년 M월 D일"
const formatDate = (date: Date) => `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
// Date 객체 -> "00:00"
const formatTime = (date: Date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
};

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const parsed = (chatMessagesData as DataMessage[])
      .map((m) => ({
        ...m,
        sentAt: new Date(m.sentAt), // string → Date 변환
      }))
      .sort((a, b) => a.sentAt.getTime() - b.sentAt.getTime()); // 오래된 순으로 정렬
    setMessages(parsed);
  }, []);

  return (
    <div>
      {messages.map((msg, idx) => {
        const isMine = msg.senderId === MY_ID;

        // 날짜 비교
        const showDate = idx === 0 || formatDate(msg.sentAt) !== formatDate(messages[idx - 1].sentAt);

        return (
          <div key={msg.msgId} className="px-[20px] py-[8px]">
            {showDate && (
              <div className="flex justify-center">
                <span className="rounded-[1000px] bg-[#ECEEF0] px-[23px] py-[5px] text-center text-[9px] font-normal text-[#6F7173]">
                  {formatDate(msg.sentAt)}
                </span>{' '}
              </div>
            )}
            <div className="flex flex-row gap-[10px]">
              {!isMine && <img src={DefaultProfile} alt={msg.senderName} className="h-[44px] w-[44px] rounded-[6px]" />}
              <div className="flex flex-col text-[11px]">
                {!isMine && <span className="pt-[1px] font-semibold">{msg.senderName}</span>}

                <div className="flex flex-row gap-[8px]">
                  <span className="mt-[5px] rounded-[6px] bg-[#EBE4E0] px-[10px] py-[8px] font-normal">
                    {msg.content}
                  </span>
                  <span className="mb-[1px] self-end font-normal text-[#888A8C]">{formatTime(msg.sentAt)}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatScreen;
