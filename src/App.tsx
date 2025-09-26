import Call from './pages/calls/Call';
import Chatting from './pages/chat/Chatting';
import Community from './pages/community/Community';
import FriendList from './pages/friendList/FriendList';
import Setting from './pages/settings/Setting';
import Sidebar from './pages/sidebar/Sidebar';
import ChattingRoom from './pages/chat/ChattingRoom';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hideSidebarPaths = ['/chattingroom']; // 숨기고 싶은 페이지 경로
  const showSidebar = !hideSidebarPaths.includes(location.pathname);

  return (
    <div className="relative">
      {showSidebar && <Sidebar />}
      <div className="min-h-screen">{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<FriendList />} />
          <Route path="/friendList" element={<FriendList />} />
          <Route path="/chat" element={<Chatting />} />
          <Route path="/community" element={<Community />} />
          <Route path="/call" element={<Call />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/chattingroom" element={<ChattingRoom />} />
        </Routes>
      </AppLayout>
      {/*<Sidebar />  하단 고정 */}
    </Router>
  );
}
