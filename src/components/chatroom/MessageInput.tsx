// src/components/chatroom/MessageInput.tsx

import { useState, useRef, useEffect } from 'react';
import smile from '@/assets/svgs/chatroom/smile.svg';
import AddPicutre from '@/assets/svgs/chatroom/add-picture.svg';
import SendIcon from '@/assets/svgs/chatroom/send.svg';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const [message, setMessage] = useState('');
  const [isMultiline, setIsMultiline] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // textarea 높이 자동 조정
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // 높이를 초기화하여 scrollHeight를 정확히 계산
    textarea.style.height = 'auto';
    
    const scrollHeight = textarea.scrollHeight;
    const maxHeight = 40; // 2줄 이상일 때의 고정 높이
    
    if (scrollHeight <= 36) { // 1줄 높이
      // 1줄: 기본 높이
      setIsMultiline(false);
      textarea.style.height = 'auto';
    } else {
      // 2줄 이상: 고정 높이
      setIsMultiline(true);
      textarea.style.height = `${maxHeight}px`;
    }
  };

  // 메시지 변경 시 높이 조정
  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  // 메시지 입력 및 전송 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  // 키보드 입력 시 호출되는 함수 (enter 누르면 전송, shift+enter는 줄바꿈)
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="bg-white">
      <div 
        className={`flex bg-white px-4 py-3 w-[375px] mx-auto transition-all duration-200 ${
          isMultiline ? 'h-[90px] items-end' : 'h-[70px] items-center'
        }`}
      >
        {/* 플러스 버튼 */}
        <button className='cursor-pointer mr-2'>
            <img src={AddPicutre} alt='Add Picture'/>
        </button>

       <div className={`flex flex-1 gap-2 ${isMultiline ? 'items-end' : 'items-center'}`}> 
        <div className={`flex flex-1 ${isMultiline ? 'items-end' : 'items-center'}`}>
          {/* 입력창 */}
          <div
            className="bg-gray-2 rounded-[10px] flex flex-1 py-2 pl-4 pr-3"
          >
            <form onSubmit={handleSubmit} className={`w-full flex ${isMultiline ? 'items-end' : 'items-center'}`}>
              <textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="메세지 입력"
                className="flex-1 bg-transparent border-none outline-none text-body3-m1 [&::placeholder]:text-body3-r [&::placeholder]:text-gray-5 resize-none leading-[19.5px] overflow-y-auto w-48 max-h-[55px]"
                rows={1}
              />
              {/* 이모티콘 버튼 */}
              <button type="button" className="cursor-pointer flex-shrink-0">
                <img src={smile} alt="smile" />
              </button>
            </form>
          </div>

          {/* 메시지가 있을 때만 전송 버튼 표시 */}
          {message && (
            <button
              onClick={handleSubmit}
              className="cursor-pointer ml-2 flex-shrink-0"
            >
              <img src={SendIcon} alt="Send" />
            </button>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;