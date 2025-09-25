import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import type { Message, User } from '@/types/chat';
import usersData from '@/data/users.json';
import messagesData from '@/data/messages.json';

import Header from "@/components/header/Header";
import ChatArea from "@/components/chatroom/ChatArea";
import MessageInput from "@/components/chatroom/MessageInput";

// chatroom 폴더의 모든 svg 파일을 동적으로 가져옴
const profileImages: Record<string, { default: string }> = import.meta.glob('@/assets/svgs/chatroom/*.svg', { eager: true });

// users.json의 프로필 경로를 실제 이미지 경로로 변환해주는 함수
const getProfileImage = (path: string) => {
  const formattedPath = `/src${path.substring(1)}`;
  return profileImages[formattedPath]?.default;
};

const ChatRoom = () => {
  const navigate = useNavigate();

  const { chatRoomId } = useParams<{ chatRoomId: string }>();
  
  // 사용자 데이터와 메시지 데이터를 상태로 관리
  const [users, setUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatPartner, setChatPartner] = useState<User | null>(null);

  // 현재 사용자 ID를 상태로 관리
  const [currentUserId, setCurrentUserId] = useState("user2");

  // 사용자 시점을 전환하는 함수
  const handleUserSwitch = () => {
    setCurrentUserId(prevUserId => (prevUserId === "user2" ? "user1" : "user2"));
  };

  // 컴포넌트 마운트 시 사용자 데이터를 불러오기 + 채팅 상대 설정
  useEffect(() => {
    // JSON 데이터에 프로필 이미지 매핑
    const loadedUsers = usersData.map(user => ({
      ...user,
      // users.json의 경로를 이용해 동적으로 프로필 이미지를 설정
      profile: getProfileImage(user.profile)
    }));
    setUsers(loadedUsers);

    // 하드코딩 메시지 데이터
    setMessages(messagesData);

    }, [chatRoomId]); // chatRoomId가 변경될 때마다 실행

  // 현재 사용자가 바뀌면 채팅 상대방 정보도 업데이트
  useEffect(() => {
    // 채팅 상대방 정보를 찾기
    const partner = users.find(user => user.id !== currentUserId);
    if (partner) {
      setChatPartner(partner);
    }
  }, [currentUserId, users]);

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
        onTitleClick={handleUserSwitch} // 헤더에 사용자 전환 함수 전달
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