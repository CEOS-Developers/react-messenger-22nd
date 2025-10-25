import { useEffect, useRef, useState } from 'react';
import DefaultProfile from '@/assets/svgs/profile/profileIMG-default.svg';
import Dropdown from '@/assets/svgs/drop-down/dropdown.svg';
import SeeAll from '@/assets/svgs/drop-down/see-all.svg';
import { MY_ID } from '@/type/ChatType.types';
import { formatDate, formatTime } from '@/type/DateType.types';

// minutes 일치 비교 (for rendering 채팅메시지)
const isSameMinute = (d1: Date, d2: Date) => {
  return d1.getHours() === d2.getHours() && d1.getMinutes() === d2.getMinutes();
};

const MAX_MSG_HEIGHT = 288;

interface MessageType {
  msgId: string;
  senderId: string;
  senderName: string;
  content: string;
  type: string;
  sentAt: Date;
}

interface ChatScreenProps {
  messages: MessageType[];
}

const ChatScreen: React.FC<ChatScreenProps> = ({ messages }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const msgRefs = useRef<Record<string, HTMLDivElement>>({});
  const [expandedMsgs, setExpandedMsgs] = useState<Record<string, boolean>>({});
  const [overflowMsgs, setOverflowMsgs] = useState<Record<string, boolean>>({});

  // 스크롤 항상 아래로
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth', // 부드러운 스크롤
      });
    }
  }, [messages]);

  // 전체보기 (메시지 overflow 체크)
  useEffect(() => {
    const newOverflow: Record<string, boolean> = {};
    messages.forEach((msg) => {
      const el = msgRefs.current[msg.msgId];
      if (el) {
        newOverflow[msg.msgId] = el.scrollHeight > MAX_MSG_HEIGHT;
      }
    });
    setOverflowMsgs(newOverflow);
  }, [messages]);

  const toggleExpand = (msgId: string) => {
    setExpandedMsgs((prev) => ({ ...prev, [msgId]: !prev[msgId] }));
  };

  return (
    <div ref={containerRef} className="box-border h-full overflow-y-auto">
      {messages.map((msg, idx) => {
        const isMine = msg.senderId === MY_ID;
        const prevMsg = idx > 0 ? messages[idx - 1] : null;
        const nextMsg = idx < messages.length - 1 ? messages[idx + 1] : null;

        // 날짜 비교
        const showDate = idx === 0 || formatDate(msg.sentAt) !== formatDate(messages[idx - 1].sentAt);

        // 프로필+이름 표시 조건
        const showProfileAndName =
          !prevMsg ||
          prevMsg.senderId !== msg.senderId ||
          (prevMsg.senderId === msg.senderId && !isSameMinute(prevMsg.sentAt, msg.sentAt));

        // 시간 표시 여부
        const showTime = !nextMsg || nextMsg.senderId !== msg.senderId || !isSameMinute(nextMsg.sentAt, msg.sentAt);

        // 전체보기 표시 여부
        const isExpanded = expandedMsgs[msg.msgId] || false;
        const isOverflow = overflowMsgs[msg.msgId] || false;

        return (
          <div className="">
            <div
              key={msg.msgId}
              className={`px-5 py-2 ${isMine ? 'justify-end' : 'justify-start'} ${!isMine && showProfileAndName && prevMsg ? 'mt-[-4px]' : ''}`}
            >
              {showDate && (
                <div className={`flex items-center justify-center`}>
                  <span className="caption2-reg mb-3 flex h-6.5 w-29.75 items-center rounded-[1000px] bg-[#ECEEF0] px-6 py-1 text-center whitespace-nowrap text-[#6F7173]">
                    {formatDate(msg.sentAt)}
                  </span>
                </div>
              )}
              <div className="flex flex-row gap-2">
                {!isMine && showProfileAndName && (
                  <img src={DefaultProfile} alt={msg.senderName} className="rounded-1.5 h-11 w-11" />
                )}
                <div className={`body-sb flex flex-col ${isMine ? 'ml-auto items-end' : ''}`}>
                  {!isMine && showProfileAndName && (
                    <span className="align-center mb-1 flex h-4.5">{msg.senderName}</span>
                  )}

                  <div
                    ref={(el) => {
                      if (el) msgRefs.current[msg.msgId] = el;
                    }}
                    className={`${isMine ? 'mb-[-15px]' : showProfileAndName ? '' : 'mt-[-15px] ml-[51.65px]'}`}
                  >
                    <div className={`flex flex-row gap-2 ${isMine ? 'flex-row-reverse' : ''}`}>
                      {isOverflow && !isExpanded ? (
                        <>
                          <div className="items-starts flex flex-col">
                            <div
                              className={`body3-reg ${!isExpanded ? 'max-h-70 overflow-hidden rounded-t-[6px]' : 'rounded-[6px]'} mb-1 max-w-52 break-words whitespace-pre-wrap ${isMine ? 'bg-[#815840] text-white' : 'bg-[#EBE4E0]'} px-2.5 py-2`}
                            >
                              {msg.content}
                            </div>

                            <div className="mt-1 w-full">
                              <button
                                onClick={() => toggleExpand(msg.msgId)}
                                className={`body3-reg flex h-6.5 w-full items-center justify-between text-left ${isMine ? 'bg-[#815840] text-white' : 'bg-main-5 text-[#242628]'} mt-[-7.5px] cursor-pointer rounded-b-[6px] px-2.5 py-2`}
                              >
                                전체보기
                                <img
                                  src={isMine ? SeeAll : Dropdown}
                                  alt="드롭다운"
                                  className={`${isMine ? 'h-3.5 w-3.5' : 'h-4 w-4 -rotate-90'} `}
                                />
                              </button>
                            </div>
                          </div>
                          {showTime && (
                            <div className="caption1-reg flex items-end" style={{ color: 'var(--color-gray-5)' }}>
                              {formatTime(msg.sentAt)}
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <div
                            className={`body3-reg mb-1 max-w-52 rounded-[6px] break-words whitespace-pre-wrap ${isMine ? 'bg-[#815840] text-white' : 'bg-[#EBE4E0]'} px-2.5 py-2`}
                          >
                            {msg.content}
                          </div>
                          {/* // 전체보기 없을 때는 오른쪽 아래에 시간 */}
                          {showTime && (
                            <div className="mb-[3.5px] flex items-end">
                              <span className="caption1-reg" style={{ color: 'var(--color-gray-5)' }}>
                                {formatTime(msg.sentAt)}
                              </span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
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
