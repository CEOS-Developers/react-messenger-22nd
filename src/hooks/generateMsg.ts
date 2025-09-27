//MEssage type 정의
 type myMsg = {
    id: string;
    text: string;
    isMe: boolean;
    sentAt: number;
    readBy: number;
    date: string;

};

//상대가 보낸 (데모) 메세지 타입
 type receivedMsg = {
    id: string;
    text: string;
    isMe: false;
    sentAt: number;
    readBy: number;
    date: string;
    senderName: string;
    profileSrc: string; // 프사 경로/URL
}

export type Message = myMsg | receivedMsg;

//각 메세지 ID 함수
export function getId() {
    return (typeof crypto !== 'undefined' && 'randomUUID' in crypto)
        ? crypto.randomUUID()
        : `${Date.now()}_${Math.random()}`;
}

//프로필 사진 src
export function getPf(sender: string): string {
    const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
    return `${base}/profile/${sender}.svg`;
}
//메세지 빌드 함수
    export function generateMessage(sentBy: 'me' | 'demo', text: string, date: string, opts?: {
        isMe: boolean; readBy?: number; senderName?: string; profileSrc?: string}): Message {
    const isMe = opts?.isMe ?? true;
    const readBy = opts?.readBy ?? (isMe ? 1 : 0);
    if (sentBy === 'me') {
        return {
            id: getId(),
            text,
            isMe: true,
            sentAt: Date.now(),
            readBy,
            date,
        };
    }
    return {
        id: getId(),
        text,
        isMe: false,
        sentAt: Date.now(),
        readBy: opts?.readBy ?? 0,
        date,
        //확장 필요
        senderName: opts?.senderName ?? '상대방',
        profileSrc: opts?.profileSrc ?? getPf(opts?.profileSrc ?? ''),
    };
}