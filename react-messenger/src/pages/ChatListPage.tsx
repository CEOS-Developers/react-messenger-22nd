// src/pages/chat/ChatListPage.tsx
import { Link } from "react-router-dom";

const ChatListPage = () => {
  const mock = [
    { id: "1", name: "친구 A", last: "안녕!" },
    { id: "2", name: "친구 B", last: "내일 보자" },
  ];
  return (
    <section className="p-4 space-y-3">
      <h1 className="text-lg font-semibold">채팅</h1>
      {mock.map((c) => (
        <Link
          key={c.id}
          to={`/chat/${c.id}`}
          className="block rounded-xl border p-3 hover:bg-neutral-50"
        >
          <div className="font-medium">{c.name}</div>
          <div className="text-sm text-neutral-500">{c.last}</div>
        </Link>
      ))}
    </section>
  );
};
export default ChatListPage;
