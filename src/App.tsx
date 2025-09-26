import Call from './pages/calls/Call';
import Chatting from './pages/chat/Chatting';
import Community from './pages/community/Community';
import FriendList from './pages/friendList/FriendList';
import Setting from './pages/settings/Setting.tsx';
import Sidebar from './pages/sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Routes>
          <Route path="/" element={<FriendList />} />
          <Route path="/friendList" element={<FriendList />} />
          <Route path="/chat" element={<Chatting />} />
          <Route path="/community" element={<Community />} />
          <Route path="/call" element={<Call />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
        <Sidebar /> {/* 하단 고정 */}
      </div>
    </Router>
  );
}

export default App;
