import { useState } from "react";
import { useTodayMD } from '@/hooks/todayDate';
import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import ChatText from "@/components/chat/ChatText";

type Message = {
    id: string;
    text: string;
    isMe: boolean;
    sentAt: number;
    readBy: number; // 보낸 직후: 1(나만 읽음) → 기본 '안 읽음' 상태
    date: string;
};

export default function ChatPage() {
    const [name] = useState("그룹메세지");
    const [numPeople] = useState(3);
    const [value, setValue] = useState("");
    const todayMD = useTodayMD(); //날짜

    //msg 배열
    const [messages, setMessages] = useState<Message[]>([
        // 데모용 초기 메시지 (Figma에 있는대로 구현)
        {
            id: "m1",
            text: "안녕하세요 혹시 오늘 이미지 전달주시나요?",
            isMe: false,
            sentAt: Date.now() - 1000 * 60 * 2,
            readBy: 3, //역시 Figma에 있는대로 구현
            date: todayMD
        }
    ]);

}
