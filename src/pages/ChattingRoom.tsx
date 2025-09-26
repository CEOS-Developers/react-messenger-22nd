import StatusBar from '../components/MenuBar/StatusBar';
import ChattingRoomHeader from '@/components/MenuBar/ChattingRoomHeader';
import ChattingContextInput from '@/components/ChatttingroomExecptHeader/ChattingContextInput';
import ChatScreen from '@/components/ChatttingroomExecptHeader/ChatScreen';

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
