import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChatProvider } from './context/ChatContext';
import FriendList from './pages/FriendList';
import ChattingList from './pages/ChattingList';
import CommonLowerMenubar from './components/MenuBar/CommonLowerMenubar';
import ChattingRoom from './pages/ChattingRoom';

function App() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [hideLowerMenubar, setHideLowerMenubar] = useState(false);

  // BottomMenubarItems의 메뉴 id 기준 렌더링 페이지 선택
  const renderPage = () => {
    switch (activeMenu) {
      case 0:
        return <FriendList setHideLowerMenubar={setHideLowerMenubar} />;
      case 1:
        return <ChattingList />;
      case 2:
        return <div className="flex h-full items-center justify-center">오픈채팅 페이지</div>;
      case 3:
        return <div className="flex h-full items-center justify-center">쇼핑 페이지</div>;
      default:
        return <div className="flex h-full items-center justify-center">더보기 페이지</div>;
    }
  };
  return (
    <ChatProvider>
      <Router>
        <div className="flex min-h-screen items-center justify-center">
          <div className="border-[ #815840] flex h-[812px] w-[375px] flex-col rounded-[20px] border-[5px]">
            <div className={`${hideLowerMenubar ? 'flex-1' : 'flex-1 overflow-y-auto'}`}>
              <Routes>
                <Route path="/" element={renderPage()} />
                <Route path="/chat/:roomId" element={<ChattingRoom setHideLowerMenubar={setHideLowerMenubar} />} />
              </Routes>
            </div>
            {!hideLowerMenubar && <CommonLowerMenubar active={activeMenu} setActive={setActiveMenu} />}
          </div>
        </div>
      </Router>
    </ChatProvider>
  );
}

export default App;
