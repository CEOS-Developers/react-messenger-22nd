import { Routes, Route } from "react-router-dom";
import FriendsLayout from "./layouts/FriendListLayout";
import ProfileLayout from "./layouts/ProfileLayout";

import FriendsList from "./pages/FriendsList/FriendsList";
import Profile from "./pages/Profile/Profile";
import ChattingListLayout from "./layouts/ChattingListLayout";
import ChattingList from "./pages/ChattingList/ChattingList";
import ChatLayout from "./layouts/ChatLayout";
import Chat from "./pages/Chat/Chat";

export default function App() {
  return (
    <div className="mx-auto w-full max-w-[375px] min-h-screen bg-white border border-gray-400 box-border">
      <Routes>
        <Route element={<FriendsLayout />}>
          <Route path="/" element={<FriendsList />} />
        </Route>

        <Route element={<ProfileLayout />}>
          <Route path="/profile/:name?" element={<Profile />} />
        </Route>

        <Route element={<ChattingListLayout />}>
          <Route path="/chatting" element={<ChattingList />} />
        </Route>

        <Route element={<ChatLayout />}>
          <Route path="/chat/:roomId" element={<Chat />} />
        </Route>
      </Routes>
    </div>
  );
}
