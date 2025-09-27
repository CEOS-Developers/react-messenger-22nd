import StatusBar from '../components/MenuBar/StatusBar';
import ChattingRoomHeader from '@/components/MenuBar/ChattingRoomHeader';
import ChattingContextInput from '@/components/ChattingRoom/ChatContextInput';
import ChatScreen from '@/components/ChattingRoom/ChatScreen';

const ChattingRoom = () => {
  return (
    <div className="flex h-screen flex-col">
      <div>
        <StatusBar />
        <ChattingRoomHeader />
      </div>
      <div className="flex flex-grow flex-col">
        <ChatScreen />
      </div>
      <ChattingContextInput />
    </div>
  );
};

export default ChattingRoom;
