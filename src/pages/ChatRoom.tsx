import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type { User } from '@/types/chat';
import { useChat } from '@/hooks/useChat';
import { mapUsersWithProfile, findUserById } from '@/utils/userUtils';

import usersData from '@/data/users.json';
import messagesData from '@/data/messages.json';

import Header from "@/components/header/Header";
import ChatArea from "@/components/chatroom/ChatArea";
import MessageInput from "@/components/chatroom/MessageInput";

const ChatRoom = () => {
  const navigate = useNavigate();
  const { chatRoomId } = useParams<{ chatRoomId: string }>();
  
  // 채팅 관련 훅 사용
  const { messages, sendMessage, setMessages } = useChat(chatRoomId || '1', []);
  
  // 사용자 데이터와 채팅 상대 관리
  const [users, setUsers] = useState<User[]>([]);
  const [chatPartner, setChatPartner] = useState<User | null>(null);
  const [currentUserId, setCurrentUserId] = useState("user2");
  const [isInitialized, setIsInitialized] = useState(false);

  // 사용자 시점을 전환하는 함수
  const handleUserSwitch = () => {
    setCurrentUserId(prevUserId => (prevUserId === "user2" ? "user1" : "user2"));
  };

  // 사용자 데이터 로드 (한번만 실행)
  useEffect(() => {
    const mappedUsers = mapUsersWithProfile(usersData as User[]);
    setUsers(mappedUsers);
  }, []);

  // 초기 메시지 로드 (한번만 실행)
  useEffect(() => {
    if (chatRoomId === '1' && messages.length === 0 && !isInitialized) {
      setMessages(messagesData);
      setIsInitialized(true);
    }
  }, [chatRoomId, messages.length, isInitialized]);

  // 현재 사용자가 바뀌면 채팅 상대방 정보도 업데이트
  useEffect(() => {
    if (users.length > 0) {
      // 채팅 상대방 정보를 찾기 (현재는 user1과 user2만 있다고 가정)
      const partnerId = currentUserId === "user2" ? "user1" : "user2";
      const partner = findUserById(users, partnerId);
      setChatPartner(partner);
    }
  }, [currentUserId, users]);

  // 새로운 메시지 전송 핸들러
  const handleSendMessage = (content: string) => {
    sendMessage(content, currentUserId);
  };

  return (
    <div className="flex flex-col h-full">
      <Header
        type="chatroom"
        title={chatPartner ? chatPartner.name : "대화상대"}
        onBack={() => navigate(-1)}
        onTitleClick={handleUserSwitch}
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