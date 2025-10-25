import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MY_ID } from '@/type/ChatType.types';
import { useChat } from '@/hooks/useChat';
import InputAddButton from '@/assets/svgs/chat/input-add-button.svg';
import Imoji from '@/assets/svgs/chat/imoji.svg';
import SendButton from '@/assets/svgs/chat/send-button.svg';

interface ChattingContextInputProps {
  roomId: string;
}

const ChattingContextInput: React.FC<ChattingContextInputProps> = ({ roomId }) => {
  const { setRoomMessages } = useChat();
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // textarea 높이 자동 조절
  const adjustHeight = () => {
    if (!textareaRef.current) return;
    const textarea = textareaRef.current;

    const lineHeight = 21; // 단위 px
    const padding = 16; // 위아래 패딩 합
    const minHeight = lineHeight + padding;

    textarea.style.height = `${minHeight}px`; // 최소 높이로 초기화
    textarea.style.overflowY = 'hidden'; // 스크롤 방지

    if (textarea.scrollHeight > minHeight) {
      textarea.style.height = `${textarea.scrollHeight}px`; // 내용에 맞춰 늘리기
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    adjustHeight(); // 글자 입력될 때마다 자동 높이 조절
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // 해당 roomId의 메시지에 추가
    setRoomMessages((prev) => ({
      ...prev,
      [roomId]: [
        ...(prev[roomId] || []),
        {
          msgId: `msg-${uuidv4()}`,
          senderId: MY_ID,
          senderName: '나',
          content: inputValue,
          type: 'text' as const,
          sentAt: new Date(),
        },
      ],
    }));

    setInputValue('');
    if (textareaRef.current) {
      textareaRef.current.style.height = '36px'; // 초기 높이로 리셋
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        // Enter 단독 → 전송
        e.preventDefault();
        handleSend();
      }
      // Shift+Enter → 기본 줄바꿈 동작 그대로
    }
  };

  useEffect(() => {
    adjustHeight(); // 처음 렌더 시 높이 맞춤
  }, []);

  return (
    <div className="mt-1 flex items-end gap-2 rounded-b-[15.7px] bg-[#EBE4E0] px-5 py-4.25">
      <div className="relative bottom-1.75 flex h-9 w-9 items-center justify-center rounded-[6px] bg-white">
        <img src={InputAddButton} alt="추가" className="h-3.75 w-3.75 cursor-pointer" />
      </div>

      <div className="relative flex-1">
        <div>
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="메세지 입력"
            className="box-border max-h-[127px] w-full resize-none overflow-hidden rounded-[6px] bg-white px-3 py-2 pr-[45px] leading-[21.15px] outline-none"
          />
        </div>
        <img
          src={Imoji}
          alt="이모지"
          className="absolute right-3 bottom-0.25 h-6 w-6 -translate-y-1/2 cursor-pointer"
        />
      </div>

      {inputValue.trim() && (
        <img src={SendButton} alt="전송" onClick={handleSend} className="relative bottom-2 h-8 w-8 cursor-pointer" />
      )}
    </div>
  );
};

export default ChattingContextInput;
