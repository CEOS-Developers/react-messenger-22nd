import { Link } from "react-router-dom";
import type { ChatPreview } from "../types/chat";
import Header from "../components/layout/Header";

const LIST: ChatPreview[] = [
  {
    id: "c1",
    name: "MEOVV",
    avatarUrl: "https://i.pravatar.cc/100?img=1",
    lastMessage: "프리 릴리즈 커버?",
  },
  {
    id: "c2",
    name: "졸준위",
    avatarUrl: "https://i.pravatar.cc/100?img=2",
    lastMessage: "부스 전기 6시 마감",
  },
];

const ChatsList = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* 가로 343 고정 */}
      <div className="w-[343px] flex-1 py-4">
        <Header title="채팅" />

        <ul className="divide-y-0">
          {LIST.map((c) => (
            <li key={c.id}>
              <Link
                to={`/chats/${c.id}`}
                className="flex items-center gap-3 py-3 active:opacity-80"
              >
                <img
                  src={c.avatarUrl}
                  alt="avatar"
                  className="w-[56px] h-[56px] rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-base font-medium truncate">{c.name}</p>
                  <p className="text-sm text-gray-500 truncate">
                    {c.lastMessage ?? "메시지 없음"}
                  </p>
                </div>
                <span className="text-xs text-gray-400">›</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatsList;
