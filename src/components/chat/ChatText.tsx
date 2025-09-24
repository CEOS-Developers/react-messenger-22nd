import React from "react";

export type ChatTextProps = {
    text: string;
    //보낸시각
    sentAt: number | Date;
    //보낸이가 본인인지
    isMe: boolean;
    readBy: number;
    totalPeople: number;
    senderName?: string;
};
//시간 계산
function fmtTime(t: number | Date) {
    const d = typeof t === "number" ? new Date(t) : t;
    return d.toLocaleTimeString("ko-KR", { hour: "numeric", minute: "2-digit" });
}


export default function ChatText({text, sentAt, isMe, readBy, totalPeople, senderName}: ChatTextProps) {
    const unread = totalPeople - readBy;

    return (
        <div className={`flex ${isMe ? "justify-end" : "justify-start"} items-end`}>
            <div className="flex max-w-[75%]">
                {!isMe && senderName && (
                    <div className="text-[11px] text-slate-500 mb-1">{senderName}</div>
                )}
                {/*유저가 보낸 문자일떄 row-reverse, 시간을 안쪽에 표기*/}
                <div className={`flex items-end gap-1`}>
                    {/* 말풍선 */}
                    <div
                        className={[
                            "px-3 py-2 rounded-2xl whitespace-pre-wrap break-words",
                            isMe
                                ? "bg-indigo-200 text-slate-900 rounded-br-sm"
                                : "bg-white text-slate-900 rounded-bl-sm shadow",
                        ].join(" ")}
                    >
                        {text}
                    </div>

                    {/* 시간/읽음: 한 줄 고정, 줄바꿈/축소 방지 */}
                    <div className="text-[11px] text-slate-400 whitespace-nowrap shrink-0">
                        {isMe && (unread > 0 ? unread : "읽음")}
                        <span className="ml-1">{fmtTime(sentAt)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}