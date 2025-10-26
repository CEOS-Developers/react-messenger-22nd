// ChatListItem.tsx
import React from "react";
import { Chat } from "./types";
import {getPreviewText, getUnreadCount } from "@/utils/chatListUtils";
import {Link} from "react-router-dom";

interface ChatListItemProps {
    chat: Chat;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ chat }) => {
    let preview = getPreviewText(chat);
    let lastSent = "어제";
    const getStorageKey = (chatId: string) => `chat:${chatId}:messages`;
    let unread = getUnreadCount(chat);
    if (sessionStorage.getItem(getStorageKey(chat.id))) {
        unread = 0;
        if (sessionStorage.getItem(`chat:${chat.id}:preview`)) {
            preview = JSON.stringify(sessionStorage.getItem(`chat:${chat.id}:preview`))
            preview = preview.substring(1, preview.length - 1);
        }
    }

    return (
        <div className="flex w-full bg-white px-4 py-3 items-center justify-center">
            {/*profile pic avatar*/}
            <div className="mr-[7px] flex items-center justify-center">
                <Link to={`/chat/${chat.id}`}>
                    <img src={`/profile/${chat.avatar}.svg`} alt={chat.name} />
                </Link>
            </div>
            <div className="flex flex-col h-[73px] flex-1 justify-center">
                {/* name row */}
                <div className="flex items-start mt-[4px]">
                    <div className="text-[14px] font-medium text-black leading-[1.4] truncate">
                        {chat.name}
                    </div>

                    <div className="ml-auto text-[11px] leading-[1.4] text-gray-400 shrink-0">
                        {lastSent}
                    </div>
                </div>

                <div className="text-[13px] w-[265px] leading-[1.4] text-gray-500 line-clamp-2 break-words">
                    {preview}
                </div>
                {unread > 0 && (
                    <div className="flex ml-auto flex-col">
                        <div className="bg-blue-400 text-white text-[10px] leading-[1.4] min-w-[15px] h-[15px]
                    rounded-full flex items-center justify-center mb-auto">
                            {unread}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatListItem;
