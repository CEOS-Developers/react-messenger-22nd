import React, { createContext, useContext, useReducer, useMemo } from 'react';
import type { ChatAction, ChatState, Message } from '@/types/chat';

const initialState: ChatState = { users: {}, messages: [], meId: null };

function reducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case 'LOAD': {
      const users = Object.fromEntries(action.payload.users.map((u) => [u.id, u]));
      const sorted = [...action.payload.messages].sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt));
      return { users, messages: sorted, meId: action.payload.meId };
    }
    case 'SEND_TEXT': {
      const msg: Message = {
        id: crypto.randomUUID(),
        kind: 'text',
        userId: action.payload.userId,
        text: action.payload.text,
        createdAt: new Date().toISOString(),
      };
      return { ...state, messages: [...state.messages, msg] };
    }
    case 'ADD_MESSAGE': {
      return { ...state, messages: [...state.messages, action.payload.message] };
    }
    default:
      return state;
  }
}

const ChatStateCtx = createContext<ChatState | null>(null);
const ChatDispatchCtx = createContext<React.Dispatch<ChatAction> | null>(null);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const stableState = useMemo(() => state, [state]); // 렌더 최적화
  return (
    <ChatStateCtx.Provider value={stableState}>
      <ChatDispatchCtx.Provider value={dispatch}>{children}</ChatDispatchCtx.Provider>
    </ChatStateCtx.Provider>
  );
}

export const useChatState = () => {
  const ctx = useContext(ChatStateCtx);
  if (!ctx) throw new Error('useChatState must be used within ChatProvider');
  return ctx;
};
export const useChatDispatch = () => {
  const ctx = useContext(ChatDispatchCtx);
  if (!ctx) throw new Error('useChatDispatch must be used within ChatProvider');
  return ctx;
};
