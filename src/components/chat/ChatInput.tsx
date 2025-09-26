// src/components/chat/ChatInput.tsx
import { useRef, useState, useCallback } from 'react';
import { Icon } from '@/components/Icon';

type Props = {
  onSend: (text: string) => Promise<void> | void;
};

export default function ChatInput({ onSend }: Props) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const send = useCallback(async () => {
    const text = value.trim();
    if (!text) return;
    await onSend(text);
    setValue('');
    // 포커스 유지
    inputRef.current?.focus();
  }, [onSend, value]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Shift+Enter는 줄바꿈으로 남겨두고, Enter만 전송
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void send();
    }
  };

  const hasText = value.trim().length > 0;

  return (
    <div className="flex h-14 items-center gap-3 bg-[var(--white)] px-3">
      {/* 좌측 기능 아이콘들: 24x24 */}
      <button type="button" className="grid h-6 w-6 place-items-center">
        <Icon name="cross" className="h-6 w-6" alt="추가" />
      </button>
      <button type="button" className="grid h-6 w-6 place-items-center">
        <Icon name="camera" className="h-6 w-6" alt="카메라" />
      </button>
      <button type="button" className="grid h-6 w-6 place-items-center">
        <Icon name="image" className="h-6 w-6" alt="이미지" />
      </button>

      {/* 입력창: 199 x 40, bg gray100, Body 2_M_14, placeholder gray400 */}
      <div className="flex flex-1 justify-center">
        <div className="rounded-full bg-[var(--gray-100)] px-4">
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            className="text-body2-medium h-10 w-[199px] bg-transparent text-[color:var(--gray-800)] placeholder-[color:var(--gray-400)] outline-none"
            placeholder="메시지를 입력하세요"
            aria-label="메시지 입력"
          />
        </div>
      </div>

      {/* 우측: 텍스트 없으면 voice, 있으면 send (둘 다 24x24) */}
      {hasText ? (
        <button type="button" onClick={() => void send()} className="grid h-6 w-6 place-items-center" aria-label="전송">
          <Icon name="send" className="h-6 w-6" alt="전송" />
        </button>
      ) : (
        <button type="button" className="grid h-6 w-6 place-items-center" aria-label="음성">
          <Icon name="voice" className="h-6 w-6" alt="음성" />
        </button>
      )}
    </div>
  );
}
