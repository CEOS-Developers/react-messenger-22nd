// src/components/chat/ChatInput.tsx
import { useEffect, useRef, useState, useCallback } from 'react';
import { Icon } from '@/components/Icon';

type Props = {
  onSend: (text: string) => Promise<void> | void;
};

export default function ChatInput({ onSend }: Props) {
  const [value, setValue] = useState('');
  const taRef = useRef<HTMLTextAreaElement>(null);

  // 스펙
  const BAR_MIN = 56; // 바 최소 높이
  const W_EMPTY = 199; // 입력 전 너비(콘텐츠 폭)
  const W_TYPED = 271; // 입력 시작 후 너비(콘텐츠 폭)
  const ONE_H = 40; // 1줄 높이
  const TWO_H = 60; // 2줄 높이(최대)
  const H_PADX = 32; // 버블 좌우 padding 16+16 (px)

  const [boxH, setBoxH] = useState<number>(ONE_H);
  const hasText = value.trim().length > 0;

  const autoResize = () => {
    const el = taRef.current;
    if (!el) return;

    // 1) 현재 상태(199/271)에 맞춰 측정용 너비를 먼저 반영
    const measureWidth = hasText ? W_TYPED : W_EMPTY;
    el.style.width = `${measureWidth}px`;

    // 2) 높이 초기화 후 실측
    el.style.height = 'auto';

    // 3) 1줄 임계값(라인하이트+패딩+보더)에 여유치(EPS) 포함
    const cs = window.getComputedStyle(el);
    const lineH = parseFloat(cs.lineHeight) || 20; // leading-5 기준 약 20px
    const padV = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
    const borderV = (parseFloat(cs.borderTopWidth) || 0) + (parseFloat(cs.borderBottomWidth) || 0);
    const EPS = 6; // 폰트/브라우저 오차 여유
    const oneLineThreshold = lineH + padV + borderV + EPS;

    const contentH = el.scrollHeight;

    // 4) 실제로 줄바꿈이 생겼을 때만 60으로 확대
    const target = contentH > oneLineThreshold ? TWO_H : ONE_H;
    setBoxH(target);

    // 5) textarea 자체 높이/최대높이 + 스크롤 처리
    el.style.height = `${Math.min(contentH, TWO_H)}px`;
    el.style.maxHeight = `${TWO_H}px`;
    el.style.overflowY = contentH > TWO_H ? 'auto' : 'hidden';
  };

  useEffect(() => {
    autoResize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]); // hasText는 value 변화에 종속

  const send = useCallback(async () => {
    const text = value.trim();
    if (!text) return;
    await onSend(text);
    setValue('');
    taRef.current?.focus();
  }, [onSend, value]);

  const onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void send();
    }
  };

  return (
    <div
      className="flex items-center gap-3 bg-[var(--white)] px-3"
      style={{ minHeight: BAR_MIN, height: Math.max(BAR_MIN, boxH) }}
    >
      {/* 좌측 아이콘: 텍스트 유무에 따라 토글 */}
      {!hasText ? (
        <>
          <button type="button" className="grid h-6 w-6 place-items-center" aria-label="추가">
            <Icon name="cross" className="h-6 w-6" alt="추가" />
          </button>
          <button type="button" className="grid h-6 w-6 place-items-center" aria-label="카메라">
            <Icon name="camera" className="h-6 w-6" alt="카메라" />
          </button>
          <button type="button" className="grid h-6 w-6 place-items-center" aria-label="이미지">
            <Icon name="image" className="h-6 w-6" alt="이미지" />
          </button>
        </>
      ) : (
        <button type="button" className="grid h-6 w-6 place-items-center" aria-label="닫기">
          <Icon name="arrow-down-2" className="h-6 w-6" alt="닫기" />
        </button>
      )}

      {/* 입력칸: 199×40 → (입력 후) 271×40 → (줄바꿈) 271×60 */}
      <div className="flex flex-1 justify-center">
        <div
          className="rounded-full bg-[var(--gray-100)] px-4"
          style={{
            width: (hasText ? W_TYPED : W_EMPTY) + H_PADX, // 콘텐츠폭 + 좌우 패딩
            height: boxH,
            display: 'flex',
            alignItems: 'center',
            transition: 'width 120ms ease, height 120ms ease',
          }}
        >
          <textarea
            ref={taRef}
            rows={1}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="메시지를 입력하세요"
            aria-label="메시지 입력"
            className={[
              'no-scrollbar',
              'text-body2-medium',
              'resize-none',
              'bg-transparent',
              'leading-5',
              'break-words',
              'whitespace-pre-wrap',
              'text-[color:var(--gray-800)]',
              'placeholder-[color:var(--gray-400)]',
              'outline-none',
              'p-0', // 높이계산 정확도 ↑
              'box-border', // 테두리 포함 박스모델
            ].join(' ')}
            // 초기 렌더에서도 정확한 측정을 위해 width를 style로 지정
            style={{ width: hasText ? W_TYPED : W_EMPTY }}
          />
        </div>
      </div>

      {/* 우측 아이콘: 텍스트 없으면 voice, 있으면 send */}
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
