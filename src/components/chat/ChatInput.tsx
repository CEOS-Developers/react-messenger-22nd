// src/components/chat/ChatInput.tsx
import { useState } from 'react';
import { Icon } from '@/components/Icon';

export default function ChatInput({ onSend }: { onSend?: (t: string) => void }) {
  const [text, setText] = useState('');

  const send = () => {
    const t = text.trim();
    if (!t) return;
    onSend?.(t);
    setText('');
  };

  return (
    <div className="flex h-[56px] w-full items-center gap-3 bg-[var(--white)] px-4">
      <div className="flex items-center gap-4">
        <Icon name="plus" className="h-6 w-6" />
        <Icon name="camera" className="h-6 w-6" />
        <Icon name="image" className="h-6 w-6" />
      </div>

      <div className="flex h-10 flex-1 items-center rounded-full bg-[var(--gray-200)] px-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="메시지를 입력하세요"
          className="flex-1 bg-transparent outline-none"
        />
        {text.trim() ? (
          <button onClick={send} aria-label="전송">
            <Icon name="send" className="h-6 w-6" />
          </button>
        ) : (
          <Icon name="voice" className="h-5 w-5" />
        )}
      </div>
    </div>
  );
}
