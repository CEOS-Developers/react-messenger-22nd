import { Link } from 'react-router-dom';
import type { User} from '@/types/chat';
import type { ChatRoom } from '@/types/chatlist';
import { findUserById } from '@/utils/userUtils';
import { formatChatListTime } from '@/utils/timeUtils';
import DefaultProfile from '@/assets/svgs/chatroom/default-profile.svg';

interface ChatListItemProps {
  chatRoom: ChatRoom;
  users: User[];
  currentUserId: string;
}

const ChatListItem = ({ chatRoom, users, currentUserId }: ChatListItemProps) => {
  // 채팅방 이름 생성
  const getChatRoomName = () => {
    if (chatRoom.chatType === 'individual') {
      // 개인 채팅: 상대방 이름
      const otherParticipant = chatRoom.participants.find((id: string) => id !== currentUserId);
      const partner = findUserById(users, otherParticipant || '');
      return partner.name;
    } else {
      // 단체 채팅: 참여자 이름들 (본인 제외)
      const otherParticipants = chatRoom.participants
        .filter((id: string) => id !== currentUserId)
        .map((id: string) => findUserById(users, id).name)
        .join(', ');
      return otherParticipants || chatRoom.chatName;
    }
  };

  // 프로필 이미지 가져오기
  const getProfileImage = () => {
    if (chatRoom.chatType === 'individual') {
      const otherParticipant = chatRoom.participants.find((id: string) => id !== currentUserId);
      const partner = findUserById(users, otherParticipant || '');
      return partner.profile || DefaultProfile;
    } else {
      // 단체 채팅은 기본 프로필 사용
      return DefaultProfile;
    }
  };

  // 마지막 메시지 가져오기
  const getLastMessage = () => {
    if (!chatRoom.lastMessage) return '';
    return chatRoom.lastMessage.content;
  };

  return (
    <Link to={`/chatroom/${chatRoom.chatId}`}>
      <div className="flex items-center px-5 py-3 hover:bg-gray-1 cursor-pointer">
        {/* 프로필 이미지 */}
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 mr-3">
          <img
            src={getProfileImage()}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 채팅방 정보 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            {/* 채팅방 이름 */}
            <span className="text-body2-m text-gray-7 truncate">
              {getChatRoomName()}
            </span>
            
            {/* 시간 */}
            <span className="text-caption2 text-gray-6 flex-shrink-0 ml-2">
              {formatChatListTime(chatRoom.lastUpdated)}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            {/* 마지막 메시지 */}
            <span className="text-body3-r text-gray-6 truncate flex-1 mr-2">
              {getLastMessage() || '대화를 시작해보세요'}
            </span>
            
            {/* 읽지 않은 메시지 수 */}
            {chatRoom.unreadCount > 0 && (
              <div className="bg-green-3 text-gray-0 text-caption3-m rounded-full min-w-[20px] h-[20px] flex items-center justify-center px-1 flex-shrink-0">
                {chatRoom.unreadCount > 99 ? '99+' : chatRoom.unreadCount}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChatListItem;