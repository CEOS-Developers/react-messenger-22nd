import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTodayMD } from '@/hooks/todayDate';
import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import ChatText from "@/components/chat/ChatText";
import {generateMessage} from "@/hooks/generateMsg";
import {Msg} from "@/hooks/generateMsg";
import chatsData from "@/data/msg.json";
import {fmtTime} from "@/components/chat/ChatText";
import {formatTodayMD} from "@/utils/dateCalculation";

const getStorageKey = (chatId: string) => `chat:${chatId}:messages`;

export default function ChatPage() {

    const [value, setValue] = useState("");
    const todayMD = useTodayMD(); //날짜
    const [messages, setMessages] = useState<Msg[]>([]);
    const { id } = useParams<{ id: string }>();
    const chat = chatsData.find(c => c.id === id) || chatsData[0];

    useEffect(() => {
        const stored = sessionStorage.getItem(getStorageKey(chat.id));

        if (stored) {
            // already have combined messages (demo + user-sent)
            setMessages(JSON.parse(stored));
        } else {
            // first time opening this chat: use demo messages from JSON
            setMessages(chat.messages as Msg[]);
            sessionStorage.setItem(
                getStorageKey(chat.id),
                JSON.stringify(chat.messages)
            );
        }
    }, [chat.id, chat.messages]);

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        // build a new message using the new shape
        const newMsg: Msg = generateMessage({
            senderName: "나",     // or whatever your display name is
            senderId: "000",      // you = "000" in your model
            text,
            sentAt: "어제",       // you can pretty-format current time here
        });


        const nextMessages = [...messages, newMsg];
        setMessages(nextMessages);

        // save to sessionStorage so it persists
        sessionStorage.setItem(
            getStorageKey(chat.id),
            JSON.stringify(nextMessages)
        )

        sessionStorage.setItem(
            `chat:${chat.id}:preview`,
            newMsg.text
        );

        // clear input
        setValue("");

    };
    return (
        <div className="min-h-screen bg-slate-200 flex items-start justify-center p-6">
            <div className="w-[375px] h-[812px] bg-[#ECEEF4] shadow flex flex-col">
                {/* Header */}
                <ChatHeader
                    name={chat.name}
                    numPeople={chat.memberIds.length}
                    onSearch={() => {}}
                    onMenu={() => {}}
                />

                {/* 날짜 배지 */}
                <div className="px-3 pt-3">
                    <div className="mx-auto w-fit text-[11px] bg-[#D9D9D9]/60 text-slate-600 px-3 py-1 rounded-full">
                        {todayMD}
                    </div>
                </div>

                {/* 메시지 리스트 */}
                <div className="flex-1 overflow-auto no-scrollbar px-3 py-4 space-y-3">
                    {messages.map((m) => (
                        <ChatText
                            key={m.id}
                            text={m.text}
                            sentAt={fmtTime(m.sentAt)}
                            isMe={m.senderId === "000"} // infer "me" based on senderId
                            readBy={m.iRead ? 1 : 0}    // fake read count
                            totalPeople={chat.memberIds.length}
                            senderName={m.senderName}   // can be undefined
                            profileSrc={`/avatars/${m.senderId}.svg`} // avatar per senderId
                        />
                    ))}
                </div>

                {/* 입력창 */}
                <ChatInput
                    value={value}
                    onChange={setValue}
                    onSend={handleSend}
                    onImageSend={() => {}}
                    onEmoji={() => {}}
                    onAdd={() => {}}
                />
            </div>
        </div>
    );
}