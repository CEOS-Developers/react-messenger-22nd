// src/pages/chat/ChatRoomPage.tsx
import { useParams, Link } from "react-router-dom";

const ChatRoomPage = () => {
  const { chatId } = useParams();
  return (
    <section className="p-4 space-y-3">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-blue-600 text-sm">
          ← 채팅 목록
        </Link>
        <h1 className="text-lg font-semibold">채팅방 #{chatId}</h1>
      </div>
      <div className="h-96 rounded-xl border p-3">메시지 리스트 영역</div>
      <div className="rounded-xl border p-2 flex gap-2">
        <input className="flex-1 outline-none" placeholder="메시지 입력…" />
        <button className="px-3 py-1 rounded-lg bg-blue-600 text-white text-sm">
          전송
        </button>
      </div>
    </section>
  );
};
export default ChatRoomPage;
