import StatusBar from '../components/MenuBar/StatusBar';
import ChattingRoomHeader from '@/components/MenuBar/ChattingRoomHeader';
import ChattingContextInput from '@/components/ChattingInput/ChattingContextInput';

const ChattingRoom = () => {
  return (
    <div className="flex h-screen flex-col">
      <StatusBar />
      <ChattingRoomHeader />
      <div className="overflow:auto flex-1"></div>'
      <ChattingContextInput />
    </div>
  );
};

export default ChattingRoom;
