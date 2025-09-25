import DefaultProfile from '@/assets/svgs/chatroom/default-profile.svg';

interface MessageBubbleProps {
  message: string;
  time: string;
  isMe: boolean;
  userName?: string;
  userProfile?: string;
  showProfile?: boolean;
  isLastInGroup?: boolean; // 같은 시간 그룹의 마지막 메시지인지
}

const MessageBubble = ({
  message,
  time,
  isMe,
  userName = "마밍",
  userProfile = DefaultProfile,
  showProfile = true,
  isLastInGroup = true
}: MessageBubbleProps) => {
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      {/* 상대방 메시지일 때 프로필 */}
      {!isMe && showProfile && (
        <div className="flex flex-col items-center mr-2">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={userProfile}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* 상대방 메시지에서 프로필이 없을 때 공간 확보 */}
      {!isMe && !showProfile && (
        <div className="w-8 mr-2 flex-shrink-0"></div>
      )}

      <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
        {/* 상대방 이름 */}
        {!isMe && showProfile && (
          <span className="text-body3-m2 mb-[4px] ml-1 tracking-[-0.12px]">
            {userName}
          </span>
        )}
        
        <div className={`flex items-end gap-1 ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
          {/* 메시지 버블 */}
          <div
            className={`px-3 py-[6px] break-words ${
              isMe
                ? 'bg-white text-gray-7'
                : 'bg-white text-gray-7'
            }`}
            style={{
              maxWidth: '224px', // padding 제외한 최대 너비
              borderRadius: isMe 
                ? '8px 0 8px 8px'  // 내가 보낸 메시지
                : '0 8px 8px 8px'   // 남이 보낸 메시지
            }}
          >
            <span className="text-[13px] font-medium leading-[1.6]">
              {message}
            </span>
          </div>
          
          {/* 시간 (같은 시간 그룹의 마지막 메시지에만 표시) */}
          {isLastInGroup && (
            <span className="text-[11px] text-green-5 font-normal tracking-[-0.11px] whitespace-nowrap mb-[1px]">
              {time}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;