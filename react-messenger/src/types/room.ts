export interface Room {
  id: string;
  type: "dm" | "group";
  title: string;
  participants: string[]; // user ids
  lastMessageId?: string;
  unread?: number;
  isPinned?: boolean;
  isMuted?: boolean;
  thumb?: string; // 대표 이미지
}
