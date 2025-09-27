import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useUserStore } from '@/store/userStore';
import { useChatStore } from '@/store/chatStore';
import { findUserById } from '@/utils/userUtils';

import messagesData from '@/data/messages.json';

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

  // 컴포넌트 마운트 시 초기화
  useEffect(() => {
    // 사용자 데이터 로드
    loadUsers();
    
    // 특정 채팅방의 초기 메시지가 없다면 기본 메시지 로드
    if (chatRoomId === '1' && messages.length === 0) {
      setMessages(chatRoomId, messagesData);
    }
  }, [chatRoomId, loadUsers, setMessages, messages.length]);

  // 채팅 상대방 정보 가져오기
  const getChatPartner = () => {
    if (users.length === 0) return null;
    
    // 현재는 user1과 user2만 있다고 가정
    const partnerId = currentUserId === "user2" ? "user1" : "user2";
    return findUserById(users, partnerId);
  };

  const chatPartner = getChatPartner();

  // 새로운 메시지 전송 핸들러
  const handleSendMessage = (content: string) => {
    sendMessage(chatRoomId || '1', content, currentUserId);
  };

  return (
    <div className="flex flex-col h-full">
      <Header
        type="chatroom"
        title={chatPartner ? chatPartner.name : "대화상대"}
        onBack={() => navigate(-1)}
        onTitleClick={switchUser} // 임시로 기존 방식 유지, 다음 커밋에서 제거 예정
      />

      <ChatArea
        messages={messages}
        users={users}
        currentUserId={currentUserId}
      />

      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatRoom;