//Message type 정의

 export type Msg = {
    id: string;
    senderName?: string;
    senderId: string;
    text: string;
    sentAt: string;
    unreadBy: number;
    iRead: boolean;

}

//각 메세지 ID 함수
export function getId() {
    return (typeof crypto !== "undefined" && "randomUUID" in crypto)
        ? crypto.randomUUID()
        : `${Date.now()}_${Math.random()}`;
}

const time = new Date().toLocaleTimeString("ko-KR", {
    hour: "numeric",
    minute: "2-digit",
});
//메세지 빌드 함수
export function generateMessage(params: {
    senderName: string; // e.g. "나"
    senderId: string;   // e.g. "000"
    text: string;
    sentAt: string;
}): Msg {
    return {
        id: getId(),
        senderName: params.senderName,
        senderId: params.senderId,
        text: params.text,
        sentAt: time,
        unreadBy: 0,
        iRead: true,
    };
}