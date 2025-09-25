//MEssage type 정의
export type Message = {
    id: string;
    text: string;
    isMe: boolean;
    sentAt: number;
    readBy: number;
    date: string;
};

//각 메세지 ID 함수
export function getId() {
    return (typeof crypto !== 'undefined' && 'randomUUID' in crypto)
        ? crypto.randomUUID()
        : `${Date.now()}_${Math.random()}`;
}

//메세지 빌드 함수
export function generateMessage(text: string, date: string, opts?: { isMe: boolean; readBy?: number }): Message {
    const isMe = opts?.isMe ?? true;
    const readBy = opts?.readBy ?? (isMe ? 1 : 0);
    return {
        id: getId(),
        text,
        isMe,
        sentAt: Date.now(),
        readBy,
        date,
    };
}