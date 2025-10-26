
export type Message = {
    id: string;
    senderId: string;
    senderName?: string;
    text: string;
    sentAt: string;
    unreadBy: number;
    iRead: boolean;
};

export type Chat = {
    id: string;
    avatar: string;
    name: string;
    memberIds: string[];
    messages: Message[];
};