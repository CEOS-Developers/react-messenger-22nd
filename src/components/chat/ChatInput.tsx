// 핵심 로직만: src/components/chat/ChatInput.tsx
import { useCallback, useRef, useState } from 'react';
import { Icon } from '@/components/Icon';

export default function ChatInput({ onSend }: { onSend: (t: string) => void }) {
  const [text, setText] = useState('');
  const canSend = text.trim().length > 0;
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleSend = useCallback(() => {
    const t = text.trim();
    if (!t) return;
    onSend(t);
    setText('');
    ref.current?.focus();
  }, [text, onSend]);

  return (
    <div className="border-t bg-[var(--white)]">
      <div className="mx-2 my-2 flex items-center gap-3">
        <Icon name="cross" className="h-6 w-6" />
        <Icon name="camera" className="h-6 w-6" />
        <Icon name="image" className="h-6 w-6" />
        <div className="flex flex-1 items-center rounded-full bg-[var(--gray-100)] px-4">
          <textarea
            ref={ref}
            value={text}
            placeholder="메시지를 입력하세요"
            rows={1}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            className="block w-full resize-none bg-transparent py-2 outline-none"
          />
          {canSend ? (
            <button
              type="button"
              aria-label="전송"
              onClick={handleSend}
              className="ml-2 grid h-8 w-8 place-items-center rounded-full bg-[var(--green-300)]"
            >
              <Icon name="send" className="h-4 w-4" />
            </button>
          ) : (
            <Icon name="voice" className="ml-2 h-6 w-6" />
          )}
        </div>
      </div>
    </div>
  );
}
