import Navbar from "@/components/layout/Navbar";
import ChatlistHeader from "@/components/header/ChatlistHeader";
import Searchbar from "@/components/chatlist/Searchbar";

const ChatList = () => {
  return (
    <div className="flex flex-col h-full bg-gray-0">
      <ChatlistHeader />
      <Searchbar />
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">채팅 목록 페이지</h1>
        <p className="text-gray-600">여기에 채팅 목록 표시</p>
      </div>

      <Navbar />
    </div>
  );
};

export default ChatList;