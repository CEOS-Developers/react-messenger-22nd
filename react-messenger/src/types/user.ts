export interface User {
  id: string;
  name: string;
  avatar: string;
  status?: string;
  isUpdated?: boolean;
  isBirthday?: boolean;
  music?: { title: string; artist: string };
  groups?: string[];
}
