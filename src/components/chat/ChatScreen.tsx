// src/components/chat/ChatScreen.tsx
import MobileFrame from '@/layouts/MobileFrame';
import StatusBar from '@/app/StatusBar';
import HeaderBar from '@/app/HeaderBar';
import MessageList from '@/components/chat/MessageList';
import ChatInput from '@/components/chat/ChatInput';
import BottomIndicator from '@/app/BottomIndicator';

export default function ChatScreen() {
  return (
    <MobileFrame>
      {/* 47px */}
      <StatusBar />
      {/* 47px */}
      <HeaderBar title="CEOS 22기 잡담방" />
      {/* 중간 영역 (가변) */}
      <div className="min-h-0 flex-1">
        <MessageList />
      </div>
      {/* 56px */}
      <ChatInput onSend={(t) => console.log('SEND:', t)} />
      {/* 32px */}
      <BottomIndicator />
    </MobileFrame>
  );
}
