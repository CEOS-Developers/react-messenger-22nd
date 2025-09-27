import { useEffect, useRef } from 'react';
import DefaultProfile from '@/assets/svgs/profile/profileIMG-default.svg';
import { useChat, MY_ID } from '@/context/ChatContext';

// Date 객체 → "YYYY년 M월 D일"
const formatDate = (date: Date) => `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
// Date 객체 -> "00:00"
const formatTime = (date: Date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
};

// minutes 일치 비교 (for rendering 채팅메시지)
const isSameMinute = (d1: Date, d2: Date) => {
  return d1.getHours() === d2.getHours() && d1.getMinutes() === d2.getMinutes();
};

const ChatScreen = () => {
  const { messages } = useChat();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 스크롤 화면으로 아래로 자동 이동
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div>
      {messages.map((msg, idx) => {
        const isMine = msg.senderId === MY_ID;
        const prevMsg = idx > 0 ? messages[idx - 1] : null;

        // 날짜 비교
        const showDate = idx === 0 || formatDate(msg.sentAt) !== formatDate(messages[idx - 1].sentAt);

        // 프로필+이름 표시 조건
        const showProfileAndName =
          !prevMsg ||
          prevMsg.senderId !== msg.senderId ||
          (prevMsg.senderId === msg.senderId && !isSameMinute(prevMsg.sentAt, msg.sentAt));

        return (
          <div>
            <div key={msg.msgId} className={`px-[20px] py-[8px] ${isMine ? 'justify-end' : 'justify-start'}`}>
              {showDate && (
                <div className="flex justify-center">
                  <span className="mb-[3px] rounded-[1000px] bg-[#ECEEF0] px-[23px] py-[5px] text-center text-[9px] font-normal text-[#6F7173]">
                    {formatDate(msg.sentAt)}
                  </span>
                </div>
              )}
              <div className="flex flex-row gap-[10px]">
                {!isMine && showProfileAndName && (
                  <img src={DefaultProfile} alt={msg.senderName} className="h-[44px] w-[44px] rounded-[6px]" />
                )}
                <div className={`flex flex-col text-[11px] ${isMine ? 'ml-auto items-end' : ''}`}>
                  {!isMine && showProfileAndName && <span className="pt-[1px] font-semibold">{msg.senderName}</span>}

                  <div className={`${isMine ? 'mb-[-15px]' : showProfileAndName ? '' : 'mt-[-15px] ml-[54px]'}`}>
                    <div className={`flex flex-row gap-[8px] ${isMine ? 'flex-row-reverse' : ''}`}>
                      <span
                        className={`mt-[5px] rounded-[6px] ${isMine ? 'bg-[#815840] text-white' : 'bg-[#EBE4E0]'} px-[10px] py-[8px] font-normal`}
                      >
                        {msg.content}
                      </span>
                      <span className="mb-[1px] self-end font-normal text-[#888A8C]">{formatTime(msg.sentAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* 아래로 스크롤 내려줄 기준점 */}
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatScreen;
