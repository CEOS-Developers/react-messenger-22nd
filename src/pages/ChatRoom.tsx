import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import type { Message, User } from '@/types/chat';
import usersData from '@/data/users.json';
import messagesData from '@/data/messages.json';

import Header from "@/components/header/Header";
import ChatArea from "@/components/chatroom/ChatArea";
import MessageInput from "@/components/chatroom/MessageInput";
import DefaultProfile from '@/assets/svgs/chatroom/default-profile.svg';

const ChatRoom = () => {
  const navigate = useNavigate();

  const { chatRoomId } = useParams<{ chatRoomId: string }>();
  
  // 사용자 데이터와 메시지 데이터를 상태로 관리합니다.
  const [users, setUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatPartner, setChatPartner] = useState<User | null>(null);

  // 현재 사용자 ID
  const currentUserId = "user2";

  // 컴포넌트 마운트 시 사용자 데이터를 불러오기 + 채팅 상대 설정
  useEffect(() => {
    // JSON 데이터에 프로필 이미지 매핑
    const loadedUsers = usersData.map(user => ({
      ...user,
      profile: DefaultProfile // 실제 경로로 매핑
    }));
    setUsers(loadedUsers);

    // 채팅 상대방 정보를 찾기
    const partner = loadedUsers.find(user => user.id !== currentUserId);
    if (partner) {
      setChatPartner(partner);
    }

    // 하드코딩 메시지 데이터
    setMessages(messagesData);

    }, [chatRoomId]); // chatRoomId가 변경될 때마다 실행

  // 새로운 메시지 전송 함수
  const handleSendMessage = (content: string) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const lastMessage = messages[messages.length - 1];
    let lastMessageDate: Date | null = null;
    if (lastMessage) {
      const lastTimestamp = new Date(lastMessage.timestamp);
      lastMessageDate = new Date(lastTimestamp.getFullYear(), lastTimestamp.getMonth(), lastTimestamp.getDate());
    }

    const newMessage: Message = {
      id: uuidv4(),
      userId: currentUserId,
      content,
      timestamp: now.toISOString()
    };
    
    // 마지막 메시지가 없거나 날짜가 다를 경우 date 속성 추가
    if (!lastMessageDate || today.getTime() !== lastMessageDate.getTime()) {
      newMessage.date = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;
    }

    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <div className="flex flex-col h-full">
      <Header
        type="chatroom"
        title={chatPartner ? chatPartner.name : "대화상대"}
        onBack={() => navigate(-1)}
      />

      <ChatArea
        messages={messages}
        users={users}
        currentUserId={currentUserId}
        isGroupChat={false}
      />

      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatRoom;