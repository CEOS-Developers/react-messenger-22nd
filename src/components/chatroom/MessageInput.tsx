import { useState } from 'react';
import smile from '@/assets/svgs/chatroom/smile.svg';
import AddPicutre from '@/assets/svgs/chatroom/add-picture.svg';
import SendIcon from '@/assets/svgs/chatroom/send.svg';

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

  // 키보드 입력 시 호출되는 함수 (enter 누르면 전송)
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="bg-white">
      <div 
        className="flex items-center bg-white px-4 pt-3 pb-1 w-[375px] h-[60px] mx-auto">
        {/* 플러스 버튼 */}
        <button className='cursor-pointer'>
            <img src={AddPicutre} alt='Add Picture'/>
        </button>

       <div className="flex items-center flex-1 gap-2"> 
        <div className="flex items-center flex-1">
          {/* 입력창 */}
          <div
            className="bg-gray-2 rounded-[10px] flex flex-1 items-center py-2 pl-4 pr-3">
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
              <button type="button" className="cursor-pointer">
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