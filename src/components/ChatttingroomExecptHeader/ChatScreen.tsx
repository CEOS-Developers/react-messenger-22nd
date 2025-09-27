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

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const parsed = (chatMessagesData as DataMessage[]).map((m) => ({
      ...m,
      sentAt: new Date(m.sentAt), // string → Date 변환
    }));
    setMessages(parsed);
  }, []);

  return (
    <div>
      {messages.map((msg) => {
        const isMine = msg.senderId === MY_ID;

        return (
          <div key={msg.msgId} className="px-[20px] py-[8px]">
            <div className="flex flex-row gap-[10px]">
              {!isMine && <img src={DefaultProfile} alt={msg.senderName} className="h-[44px] w-[44px] rounded-[6px]" />}
              <div className="flex flex-col text-[11px]">
                {!isMine && <span className="pt-[1px] font-semibold">{msg.senderName}</span>}

                <div className="flex flex-row gap-[8px]">
                  <span className="mt-[5px] rounded-[6px] bg-[#EBE4E0] px-[10px] py-[8px] font-normal">
                    {msg.content}
                  </span>
                  <span className="mb-[1px] self-end font-normal text-[#888A8C]">
                    {msg.sentAt.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false,
                    })}
                  </span>
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
