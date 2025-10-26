import ChatListHeader from '@/components/chatList/chatListHeader'
import ChatListBody from "@/components/chatList/ChatListBody"
import NavBar from "@/components/NavBar";
import React from "react";

export default function HomePage() {

    return (
        <div className="min-h-screen bg-slate-200 flex items-start justify-center p-6">
            <div className="w-[375px] h-[812px] bg-white flex-col">
                <ChatListHeader />
                <ChatListBody />
            </div>
        </div>
    );
}
