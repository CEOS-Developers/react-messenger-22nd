import ChattingRoom from './pages/ChattingRoom';
import Profile from './pages/Profile';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <div className="font-sans">
        <ChattingRoom />
        {/* <Profile /> */}
      </div>
    </ChatProvider>
  );
}

export default App;
