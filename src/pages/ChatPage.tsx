import { useState, useCallback } from "react";
import { useTodayMD } from '@/hooks/todayDate';
import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import ChatText from "@/components/chat/ChatText";
import {generateMessage} from "@/hooks/generateMsg";
import {persist} from "@/hooks/store";
import {Message} from "@/hooks/generateMsg";
import {getPf} from "@/hooks/generateMsg";


export default function ChatPage() {
    const [name] = useState("그룹 메세지");
    const [numPeople] = useState(3);
    const [value, setValue] = useState("");
    const todayMD = useTodayMD(); //날짜

    //msg 배열
    const [messages, setMessages] = useState<Message[]>([
        // 데모용 초기 메시지 (Figma에 있는대로 구현)
        {
            id: "demo1",
            text: "안녕하세요 혹시 오늘 이미지 전달주시나요?",
            isMe: false,
            sentAt: Date.now() - 1000 * 60 * 2,
            readBy: 3, //역시 Figma에 있는대로 구현
            date: todayMD,
            senderName: "정희연",
            profileSrc: getPf("정희연")
        }
    ]);


    const handleSend = (text: string) => {
        //메세지 반환
        const sentBy = "me"
        const nextMsg = generateMessage(sentBy, text, todayMD, {isMe: true, readBy: 1});
        //새 메세지 배열에 추가
        setMessages(prev => [
            ...prev,
            nextMsg //기본으로 1명 읽음으로 세팅
        ]);
        persist(nextMsg);
        //console.log(sessionStorage.getItem(`msg:${nextMsg.id}`));
        setValue("");
    };

    return (
        <div className="min-h-screen bg-slate-200 flex items-start justify-center p-6">
            <div className="w-[375px] h-[812px] bg-[#ECEEF4] rounded-3xl shadow flex flex-col">
                {/* 헤더 */}
                <ChatHeader
                    name={name}
                    numPeople={numPeople}
                    onSearch={() => {}}
                    onMenu={() => {}}
                />

                {/* 날짜 배지 */}
                <div className="px-3 pt-3">
                    <div className="mx-auto w-fit text-[11px] bg-[#D9D9D9]/60 text-slate-600 px-3 py-1 rounded-full">
                        {todayMD}
                    </div>
                </div>

                {/* 보낸 메세지 위에서부터 나열 */}
                <div className="flex-1 overflow-auto no-scrollbar px-3 py-4 space-y-3 ">
                    {messages.map((m) => (
                        <ChatText
                            key={m.id}
                            text={m.text}
                            sentAt={m.sentAt}
                            isMe={m.isMe}
                            readBy={m.readBy}
                            totalPeople={numPeople}
                            //!isMe일 때 이름 표기
                            senderName={'senderName' in m ? m.senderName : undefined}
                            profileSrc={'profileSrc' in m? m.profileSrc : undefined}
                        />
                    ))}
                </div>


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
