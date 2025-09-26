export type User = {
  id: string;
  name: string;
  avatar?: string;
  statusMessage?: string;
};

export type Message = {
  id: string;
  userId: string;
  text: string;
  createdAt: number;
  channelId: string;
};

export type Channel = {
  id: string;
  name: string;
  memberIds: string[];
};
