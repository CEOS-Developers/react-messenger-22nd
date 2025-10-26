
import React from "react";
import chatsData from "@/data/msg.json";
import ChatListItem from "@/components/chatList/chatListItem";
import NavBar from "@/components/NavBar";

const ChatListBody: React.FC = () => {
    return (
        <div className="flex flex-col w-[375px] h-[652px]">
            {chatsData.map((chat, idx) => (
                <div key={chat.id}>
                    <ChatListItem chat={chat} />
                </div>
            ))}
            <div className = "flex flex-col mt-auto z-20">
                <NavBar />
            </div>
        </div>
    );
};

export default ChatListBody;
