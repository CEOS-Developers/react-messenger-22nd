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
          <div key={msg.msgId}>
            {!isMine && <img src={DefaultProfile} alt={msg.senderName} className="h-[24px] w-[24px] rounded-full" />}
            <div>
              {!isMine && <span>{msg.senderName}</span>}
              <div>{msg.content}</div>
              <span>
                {msg.sentAt.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatScreen;
