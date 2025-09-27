import Layout from "./views/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FriendPage from "./pages/FriendPage";
import ChatListPage from "./pages/ChatListPage";
import OpenChatPage from "./pages/OpenChatPage";
import ShopPage from "./pages/ShopPage";
import MorePage from "./pages/MorePage";
import ProfilePage from "./pages/ProfilePage";
import ChatRoomPage from "./pages/ChatRoom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 공통 프레임 */}
        <Route path="/" element={<Layout />}>
          {/* 탭 루트들 */}
          <Route index element={<FriendPage />} />
          <Route path="chatList" element={<ChatListPage />} />
          <Route path="openChat" element={<OpenChatPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="more" element={<MorePage />} />

          {/* 상세 */}
          <Route path="chat/:chatId" element={<ChatRoomPage />} />
          <Route path="profile/:userId" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
