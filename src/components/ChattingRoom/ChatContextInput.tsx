import { useState } from 'react';
import { useChat, MY_ID } from '@/context/ChatContext';
import InputAddButton from '@/assets/svgs/chat/input-add-button.svg';
import Imoji from '@/assets/svgs/chat/imoji.svg';
import SendButton from '@/assets/svgs/chat/send-button.svg';

const ChattingContextInput = () => {
  const { setMessages } = useChat();
  const [inputValue, setInputValue] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        msgId: `msg-${Date.now()}`,
        senderId: MY_ID,
        senderName: '나',
        content: inputValue,
        type: 'text',
        sentAt: new Date(),
      },
    ]);

    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="flex h-[78px] w-full flex-row gap-[10px] bg-[#EBE4E0] p-[16px] px-[20px]">
      <img
        src={InputAddButton}
        alt="input-add-button"
        className="h-[36px] w-[36px] cursor-pointer rounded-[6px] bg-white p-[11px]"
      />
      <div
        className="relative flex flex-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="메세지 입력"
          className={`placeholder-[#BABCBE]} ${isHovered ? 'w-[85%]' : ''} absolute h-[36px] w-full flex-1 rounded-[6px] bg-white px-[10px] pr-[40px]`}
        />
        <img
          src={Imoji}
          alt="imoji"
          className={`absolute top-[18px] ${isHovered ? 'right-[10%]' : 'right-[12px]'} right-[12px] h-[24px] w-[24px] -translate-y-1/2 transform cursor-pointer`}
        />
      </div>
      {isHovered && (
        <img
          src={SendButton}
          alt="send-button"
          onClick={handleSend}
          className="relative top-[3px] right-[0.5%] z-10 h-[31px] w-[30px] cursor-pointer"
        />
      )}
    </div>
  );
};

export default ChattingContextInput;
