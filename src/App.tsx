// import { useState } from 'react';
import ChattingRoom from './pages/ChattingRoom';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <div className="font-sans">
        <ChattingRoom />
      </div>
    </ChatProvider>
  );
}

export default App;
