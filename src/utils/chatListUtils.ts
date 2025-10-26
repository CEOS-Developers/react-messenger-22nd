// chatUtils.ts
import { Chat, Message } from "@/components/chatList/types";

export function getLastMessage(chat: Chat): Message | undefined {
    const msgs = chat.messages;
    return msgs[msgs.length - 1];
}

export function getUnreadCount(chat: Chat): number {
    return chat.messages.filter(m => !m.iRead).length;
}

export function getDisplayTime(chat: Chat): string {
    const last = getLastMessage(chat);
    if (!last) return "";
    return last.sentAt || "어제";
}

export function getPreviewText(chat: Chat): string {
    const last = getLastMessage(chat);
    return last ? last.text : "";
}
