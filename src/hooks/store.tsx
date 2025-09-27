import type { Message } from '@/hooks/generateMsg';

export function persist(msg: Message) {
    sessionStorage.setItem(`msg:${msg.id}`, JSON.stringify(msg));
}