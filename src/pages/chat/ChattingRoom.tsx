import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import beforeIcon from '../../assets/before.svg';
import profileIcon from '../../assets/profileImage.png';
import searchIcon from '../../assets/find.png';
import callChattingRoomIcon from '../../assets/call.svg';
import faceTimeIcon from '../../assets/facetimeIcon.svg';
import plusIcon from '../../assets/plus.svg';
import cameraIcon from '../../assets/camera.svg';
import microphoneIcon from '../../assets/microphone.svg';
import sendIcon from '../../assets/sendIcon.svg';
import chatData from '../../data.json';

interface Message {
  sender: string;
  message: string;
  time?: string;
}

export default function ChattingRoom() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>(() => {
    const stored = localStorage.getItem('chatMessages');
    return stored ? JSON.parse(stored) : [];
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    setMessages(chatData);
  }, []);

  // 스크롤 끝부분 참조
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // 처음 로드될 때 localStorage 확인
  useEffect(() => {
    const stored = localStorage.getItem('chatMessages');
    if (stored) {
      setMessages(JSON.parse(stored)); // localStorage 우선
    } else {
      setMessages(chatData); // 없으면 data.json fallback
    }
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    // 메시지 보낼때마다 현재 시간 가져오기
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHour = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const currentTime = `${formattedHour}:${formattedMinutes} ${ampm}`; // 예: 3:05 PM형태로 저장

    const newMessage: Message = {
      sender: 'me',
      message: input,
      time: currentTime,
    };

    // 상태 업데이트
    setMessages((prev) => {
      const updated = [...prev, newMessage];
      // localStorage에 저장
      localStorage.setItem('chatMessages', JSON.stringify(updated));
      return updated;
    });
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="bg-light-gray font-pretendard mx-auto min-h-screen w-full max-w-[375px] pb-[65px]">
      {/* 상단 헤더 */}
      <Header
        title={
          <div className="flex items-center gap-2">
            <span onClick={() => navigate('/chat')} className="cursor-pointer">
              <img src={beforeIcon} alt="before" className="h-6 w-6" />
            </span>
            <img src={profileIcon} alt="profile" className="h-9 w-9 rounded-full" />
            <h2>친구 이름</h2>
          </div>
        }
        right={
          <div className="flex gap-2">
            <button onClick={() => alert('준비중입니다.')}>
              <img src={searchIcon} alt="search" />
            </button>
            <button>
              <img src={callChattingRoomIcon} alt="call" />
            </button>
            <button>
              <img src={faceTimeIcon} alt="video" />
            </button>
          </div>
        }
      />

      {/* 채팅 메시지 */}
      <div className="top-[70px] mx-3 flex max-w-[345px] flex-col gap-1 overflow-y-auto">
        <div className="flex justify-center">
          <span className="mb-2 h-[32px] w-[115px] rounded-2xl bg-green-50 px-2 py-2 text-center text-xs font-normal text-gray-500">
            2024년 6월 19일{' '}
          </span>
        </div>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 flex items-end gap-1 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex max-w-[70%] items-end rounded-tl-sm rounded-tr-xl rounded-br-xl rounded-bl-xl px-3 py-1 ${
                msg.sender === 'me' ? 'bg-green-50' : 'bg-white'
              } `}
            >
              {msg.sender === 'me' ? (
                <>
                  <div className="text-base break-all">{msg.message}</div>
                </>
              ) : (
                <>
                  <div>{msg.message}</div>
                </>
              )}
            </div>
            {/* 시간 */}
            <span className={`text-xs font-light text-gray-700 ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
              {msg.time}
            </span>
          </div>
        ))}
        {/* 스크롤 위치 표시용 */}
        <div ref={messagesEndRef} />
      </div>

      {/* 하단 입력창 */}
      <div className="fixed bottom-0 left-1/2 z-10 flex w-full max-w-[375px] -translate-x-1/2 items-center gap-1 bg-white p-2">
        <span className="rounded-full bg-gray-50 p-2">
          <img src={plusIcon} alt="plus" />
        </span>

        <input
          type="text"
          placeholder="메시지 입력..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex h-10 w-[263px] rounded-full bg-gray-50 px-4 py-2 focus:outline-none"
        />

        {input.trim() ? (
          <button onClick={handleSend} className="rounded-full bg-green-600 p-2">
            <img src={sendIcon} alt="send" />
          </button>
        ) : (
          <>
            <button className="rounded-full bg-gray-50 p-2">
              <img src={cameraIcon} alt="camera" />
            </button>
            <button className="rounded-full bg-gray-50 p-2">
              <img src={microphoneIcon} alt="mic" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
