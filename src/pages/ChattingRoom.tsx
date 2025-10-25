import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StatusBar from '../components/MenuBar/StatusBar';
import ChattingRoomHeader from '@/components/MenuBar/ChattingRoomHeader';
import ChattingContextInput from '@/components/ChattingRoom/ChatContextInput';
import ChatScreen from '@/components/ChattingRoom/ChatScreen';
import chatData from '@/data/chatMessages.json';
import { useChat } from '@/hooks/useChat';

interface ChattingRoomProps {
  setHideLowerMenubar?: (hide: boolean) => void;
}

const ChattingRoom: React.FC<ChattingRoomProps> = ({ setHideLowerMenubar }) => {
  const params = useParams<{ roomId: string }>();
  const roomId = params.roomId;
  const { roomMessages } = useChat();

  useEffect(() => {
    setHideLowerMenubar?.(true);
    return () => setHideLowerMenubar?.(false);
  }, [setHideLowerMenubar]);

  if (!roomId) return <div>채팅방을 찾을 수 없음</div>;
  const room = chatData.find((room) => room.roomId === roomId);

  // Context에서 해당 방의 메시지 가져오기
  const messages = roomMessages[roomId] || [];

  return (
    <div className="flex h-full flex-col">
      <div className="flex-shrink-0">
        <StatusBar />
        <ChattingRoomHeader roomName={room?.name || '채팅방'} />
      </div>
      <div className="flex-1 overflow-y-auto">
        <ChatScreen messages={messages} />
      </div>
      <div className="flex-shrink-0">
        <ChattingContextInput roomId={roomId} />
      </div>
    </div>
  );
};

export default ChattingRoom;
