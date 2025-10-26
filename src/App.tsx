import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/mainPage";
import ChatPage from "@/pages/ChatPage";
import ChatListPage from "@/pages/ChatListPage";
import NavBar from "@/components/NavBar";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/chatList" element={<ChatListPage />} />
                <Route path="/chatRoom" element={<ChatPage />} />
                <Route path="/chat/:id" element={<ChatPage />} />
            </Routes>
        </BrowserRouter>
    );
}