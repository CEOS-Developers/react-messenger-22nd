import { ChatPreview, useChat } from "../../../store/chatListStore";

export default function ChatRow({ item }: { item: ChatPreview }) {
  const markAsRead = useChat((s) => s.markAsRead);

  return (
    <>
      <div className="!mt-3">
        <button
          className="flex w-full items-center gap-3 px-4 py-3 hover:bg-gray-100/50"
          onClick={() => markAsRead(item.roomId)}
        >
          <img
            src={item.thumb}
            alt={item.title}
            className="h-12 w-12 rounded-xl object-cover"
          />

          <div className="min-w-0 flex-1 text-left">
            <div className="flex items-center gap-1">
              <p className="truncate text-[15px] font-medium text-gray-800">
                {item.title}
              </p>
              {item.muted && (
                <span className="ml-1 text-[11px] text-gray-500">•</span>
              )}
            </div>
            <p className="truncate text-[13px] text-gray-600">
              {item.lastText}
            </p>
          </div>

          <div className="flex min-w-[52px] flex-col items-end gap-1">
            <span className="text-[11px] text-gray-400">{item.timeLabel}</span>
            {item.unread > 0 ? (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-semibold text-white">
                {item.unread > 99 ? "99+" : item.unread}
              </span>
            ) : (
              <span className="h-5" />
            )}
          </div>
        </button>
      </div>
      <hr className="!mx-2 !my-2 h-px bg-gray-400 origin-top scale-y-10" />
    </>
  );
}
