import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useUserStore } from '@/store/userStore';
import { useChatStore } from '@/store/chatStore';
import { findUserById } from '@/utils/userUtils';

import chatRoomsData from '@/data/chatRooms.json';

import Header from "@/components/header/Header";
import ChatArea from "@/components/chatroom/ChatArea";
import MessageInput from "@/components/chatroom/MessageInput";

const ChatRoom = () => {
  const navigate = useNavigate();
  const { chatRoomId } = useParams<{ chatRoomId: string }>();
  
  // zustand store 사용
  const { currentUserId, users, loadUsers, switchUser } = useUserStore();
  const { getMessages, setMessages, sendMessage } = useChatStore();
  
  // 현재 채팅방의 메시지 가져오기
  const messages = getMessages(chatRoomId || '1');

  // 현재 채팅방 정보 가져오기
  const getCurrentChatRoom = () => {
    return chatRoomsData.find(room => room.chatId === chatRoomId);
  };

  const currentChatRoom = getCurrentChatRoom();

  // 컴포넌트 마운트 시 초기화
  useEffect(() => {
    // 사용자 데이터 로드
    loadUsers();
    
    // 채팅방 초기 메시지 로드
    if (currentChatRoom && messages.length === 0) {
      setMessages(chatRoomId || '1', currentChatRoom.messages);
    }
  }, [chatRoomId, currentChatRoom, loadUsers, setMessages, messages.length]);

  // 채팅방 제목 생성
  const getChatRoomTitle = () => {
    if (!currentChatRoom || users.length === 0) return "대화상대";
    
    if (currentChatRoom.chatType === 'individual') {
      // 개인 채팅방: 상대방 이름
      const otherParticipant = currentChatRoom.participants.find(id => id !== currentUserId);
      const partner = findUserById(users, otherParticipant || '');
      return partner.name;
    } else {
      // 단체 채팅방: 참여자 이름들 (본인 제외)
      const otherParticipants = currentChatRoom.participants
        .filter(id => id !== currentUserId)
        .map(id => findUserById(users, id).name)
        .join(', ');
      return otherParticipants || currentChatRoom.chatName;
    }
  };

  // 새로운 메시지 전송 핸들러
  const handleSendMessage = (content: string) => {
    sendMessage(chatRoomId || '1', content, currentUserId);
  };

  if (!currentChatRoom) {
    return (
      <div className="flex flex-col h-full items-center justify-center">
        <span className="text-body2-m text-gray-5">채팅방을 찾을 수 없습니다</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <Header
        type="chatroom"
        title={getChatRoomTitle()}
        onBack={() => navigate(-1)}
        onTitleClick={switchUser} // 임시로 기존 방식 유지 (다음 커밋에서 제거⚠️⚠️)
      />

      <ChatArea
        messages={messages}
        users={users}
        currentUserId={currentUserId}
        chatRoomParticipants={currentChatRoom.participants}
      />

      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatRoom;