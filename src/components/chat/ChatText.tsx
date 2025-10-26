import React from "react";
import MagnifierBtn from "@/assets/chatroom/magnifier.svg";
import profile from "@/assets/chatroom/profile.svg"

export type ChatTextProps = {
    text: string;
    sentAt: string;
    isMe: boolean;
    readBy: number;
    totalPeople: number;
    senderName?: string;
    profileSrc?: string;
};
//시간 계산
export function fmtTime(t: string) {
    // If t is already a human-readable string just return it.
    return t.trim() !== "" ? t : "";
}

export default function ChatText({text, sentAt, isMe, readBy, totalPeople, senderName, profileSrc}: ChatTextProps) {
    const unread = totalPeople - readBy;

    return (
        <div className={`flex ${isMe ? "justify-end" : "justify-start"} items-start`}>
            {isMe ? (
                /*내 메시지*/
                <div className="flex items-end gap-[6px] max-w-[100%] min-w-0">
                    <div className="flex flex-col  items-end justify-center-safe ">
                        <div className="text-[11px] text-blue-400 whitespace-nowrap">
                            {unread > 0 ? unread : "읽음"}
                        </div>
                        <div className="text-[10px] text-gray-400 whitespace-nowrap">{fmtTime(sentAt)}</div>
                    </div>
                    <div className="min-w-0 px-3 py-2 font-normal text-[13px] leading-[1.4] rounded-2xl rounded-tr-none
                          bg-indigo-200 text-slate-900 whitespace-pre-wrap [overflow-wrap:anywhere]">
                        {text}
                    </div>
                </div>
            ) : (
                <div className="flex items-start gap-2 max-w-[100%] min-w-0">
                    {/*프로필 사진*/}
                    {profileSrc && (
                        <img
                            src={profile}
                            alt={senderName ?? "상대 프로필"}
                            className="w-8 h-8 rounded-full object-cover shrink-0"
                        />
                    )}
                    <div className="flex flex-col min-w-0 gap-[7px]">
                        {senderName && (
                            <div className="text-[11px] text-gray-400">{senderName}</div>
                        )}
                        <div className="flex items-end gap-1 min-w-0">
                            <div className="min-w-0 px-3 py-2 rounded-2xl rounded-tl-none
                              bg-white text-slate-900
                              whitespace-pre-wrap font-normal text-[13px] leading-[1.4] [overflow-wrap:anywhere]">
                                {text}
                            </div>
                            <div className="text-[10px] text-gray-400 whitespace-nowrap">{fmtTime(sentAt)}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}