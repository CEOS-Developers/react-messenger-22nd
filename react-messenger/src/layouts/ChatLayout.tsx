import { Outlet } from "react-router-dom";
import ChatHeader from "@/pages/Chat/components/ChatHeader";
import ChatInput from "@/pages/Chat/components/ChatInput";

export default function ChatLayout() {
  return (
    <div className="w-full h-full bg-yellow-300">
      <div className="!px-4">
        <ChatHeader />

        <main>
          <Outlet />
        </main>
      </div>

      <ChatInput />
    </div>
  );
}
