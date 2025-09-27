export type ChatPreview = {
  id: string;
  name: string;
  avatarUrl?: string;
  lastMessage?: string;
  updatedAt?: string; // ISO string
};

export type Message = {
  id: string;
  chatId: string;
  sender: "me" | "other";
  text: string;
  createdAt: string; // ISO string
};
