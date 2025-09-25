import { useRef, useEffect } from 'react';
import type { Message, User } from '@/types/chat'; 
import MessageBubble from '@/components/chatroom/MessageBubble';
import DateSeparator from '@/components/chatroom/DateSeparator';

interface ChatAreaProps {
  messages: Message[];
  users: User[];
  currentUserId: string;
  isGroupChat?: boolean;
}

const ChatArea = ({ messages, users, currentUserId, isGroupChat = false }: ChatAreaProps) => {
  // 스크롤을 맨 아래로 이동시키기 위한 ref
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatAreaRef = useRef<HTMLDivElement>(null);

  // 메시지가 추가될 때마다 스크롤을 하단으로 이동
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // 사용자 정보 찾기
  const getUser = (userId: string) => {
    return users.find(user => user.id === userId) || {
      // 사용자 정보가 없을 때 기본값 
      id: userId, 
      name: '알 수 없음', 
      profile: '@/assets/svgs/chatroom/default-profile.svg'
    };
  };

  // 프로필 표시 여부 함수
  const shouldShowProfile = (currentMessage: Message, index: number) => {
    
    if (currentMessage.userId === currentUserId) 
      return false; // 내 메시지는 프로필 표시 안함
  
    // 첫 메시지는 항상 프로필 표시
    if (index === 0) 
      return true; 
    
    const prevMessage = messages[index - 1];
    
    // 날짜가 바뀌면 프로필 표시
    if (currentMessage.date) 
      return true;
    
    // 이전 메시지와 다른 사용자면 프로필 표시
    if (prevMessage.userId !== currentMessage.userId) 
      return true;
    
    // 같은 사용자지만 시간(분)이 다르면 프로필 표시
    const currentTime = new Date(currentMessage.timestamp);
    const prevTime = new Date(prevMessage.timestamp);
    
    return currentTime.getMinutes() !== prevTime.getMinutes() ||
           currentTime.getHours() !== prevTime.getHours();
  };

  // 같은 시간(분) 그룹의 마지막 메시지인지 확인
  const isLastInTimeGroup = (currentMessage: Message, index: number) => {
    // 마지막 메시지면 true
    if (index === messages.length - 1) 
      return true; 

    const nextMessage = messages[index + 1];
    const currentTime = new Date(currentMessage.timestamp);
    const nextTime = new Date(nextMessage.timestamp);
    
    // 다음 메시지가 다른 사용자거나, 분/시간이 다르면 마지막
    return currentMessage.userId !== nextMessage.userId || 
           currentTime.getMinutes() !== nextTime.getMinutes() ||
           currentTime.getHours() !== nextTime.getHours();
  };

  // 메시지 간격 계산
  const getMessageMargin = (currentMessage: Message, index: number) => {
    if (index === 0) return ''; // 첫 메시지는 간격 없음

    const prevMessage = messages[index - 1];
    const currentTime = new Date(currentMessage.timestamp);
    const prevTime = new Date(prevMessage.timestamp);

    // 날짜 구분선이 있으면 간격 없음
    if (currentMessage.date) return '';

    // 다른 사용자의 메시지면 12px
    if (currentMessage.userId !== prevMessage.userId) return 'mt-3';

    // 같은 사용자, 같은 분이면 4px
    if (currentTime.getMinutes() === prevTime.getMinutes() &&
        currentTime.getHours() === prevTime.getHours()) {
      return 'mt-1';
    }

    // 같은 사용자, 다른 분이면 12px
    return 'mt-3';
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <div
      ref={chatAreaRef}
      className="flex-1 overflow-y-auto px-3 py-4 bg-green-2"
    >
      <div className="w-full max-w-[351px] mx-auto">
        {messages.map((message, index) => {
          const user = getUser(message.userId);
          const isMe = message.userId === currentUserId;
          const showProfile = shouldShowProfile(message, index);
          const isLastInGroup = isLastInTimeGroup(message, index);
          const marginClass = getMessageMargin(message, index);
          
          return (
            <div key={message.id} className={marginClass}>
              {/* 날짜 구분선 */}
              {message.date && (
                <DateSeparator 
                  date={message.date} 
                  isFirstMessage={index === 0}
                />
              )}
              
              {/* 메시지 버블 */}
              <MessageBubble
                message={message.content}
                time={formatTime(message.timestamp)}
                isMe={isMe}
                userName={user.name}
                userProfile={user.profile}
                showProfile={showProfile}
                isLastInGroup={isLastInGroup}
              />
            </div>
          );
        })}
        
        {/* 스크롤 앵커 */}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
};

export default ChatArea;