import { useState } from 'react';
import smile from '@/assets/svgs/chatroom/smile.svg';
import AddPicutre from '@/assets/svgs/chatroom/add-picture.svg';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const [message, setMessage] = useState('');

  // 메시지 입력 및 전송 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  // 키보드 입력 시 호출되는 함수 (shift + enter는 줄바꿈, enter는 전송)
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="bg-white">
      <div 
        className="flex items-center bg-white px-4 pt-3 pb-1"
        style={{ 
          width: '375px',
          height: '60px',
          margin: '0 auto'
        }}
      >
        {/* 플러스 버튼 */}
        <button className='cursor-pointer'>
            <img src={AddPicutre}/>
        </button>

        {/* 간격 */}
        <div style={{ width: '8px' }} />

        {/* 입력창 */}
        <div 
          className="bg-gray-2 rounded-[10px] flex flex-col justify-center items-start"
          style={{
            width: '297px',
            padding: '8px 12px 8px 16px',
            gap: '10px'
          }}
        >
          <form onSubmit={handleSubmit} className="w-full flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="메세지 입력"
              className="flex-1 bg-transparent border-none outline-none text-body3-r placeholder-gray-5"
            />
            
            {/* 이모티콘 버튼 */}
            <button className='cursor-pointer'>
              <img 
                src={smile}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;