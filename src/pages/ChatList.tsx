import Navbar from "@/components/layout/Navbar";
import ChatlistHeader from "@/components/header/ChatlistHeader";
import Searchbar from "@/components/chatlist/Searchbar";

const ChatList = () => {
  return (
    <div className="flex flex-col h-full bg-gray-0">
      <ChatlistHeader />
      <Searchbar />
      <div className="flex-1 flex flex-col items-center justify-center px-5 py-4 gap-6">
        <div></div>
      </div>

      <Navbar />
    </div>
  );
};

export default ChatList;