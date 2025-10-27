async function http<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json() as Promise<T>;
}

export const api = {
  users: {
    list: () => http<any[]>("/data/users.json"),
  },
  collections: {
    list: () => http<any[]>("/data/collections.json"),
  },
  messages: {
    list: () => http<Record<string, any[]>>("/data/messages.json"),
  },
  rooms: {
    list: () => http<any[]>("/data/room.json"),
  },
  // messages는 localStorage 이용
};
