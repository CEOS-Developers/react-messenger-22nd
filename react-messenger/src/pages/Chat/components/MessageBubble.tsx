import type { Message } from "@/types";
import { useFriends } from "../../../store/friendsStore";
import { toTimeLabelChat } from "@/utils/time";

export default function MessageBubble({ m }: { m: Message }) {
  const me = useFriends((s) => s.me);
  const users = useFriends((s) => s.friends);

  const myId = me?.id ?? "me";
  const isMine = m.userId === myId || m.userId === "me";

  const sender = isMine
    ? me
    : users.find((u) => u.id === m.userId) ?? {
        name: "알수없음",
        avatar: "/images/avatar.svg",
      };

  const time = m.createdAt ? toTimeLabelChat(m.createdAt) : "";

  if (isMine) {
    return (
      <div className="mb-3 flex w-full items-end justify-end gap-2 px-4">
        <time className="text-caption text-gray-600">{time}</time>
        <div className=" rounded-lg bg-yellow-500 !py-2 !px-4 text-body-6 text-gray-900 whitespace-pre-line">
          {m.text}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-3 flex w-full items-end gap-2 px-4">
      <img src={sender?.avatar} className="h-9 w-9 object-cover" />
      <div className=" rounded-lg bg-gray-200 !py-2 !px-4 text-body-6 text-gray-900 whitespace-pre-line">
        {m.text}
      </div>
      <time className="text-caption text-gray-600">{time}</time>
    </div>
  );
}
