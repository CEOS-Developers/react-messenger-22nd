import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  roomId: string;
  likes?: number; // 공감 수
  likedByMe?: boolean; // 내가 공감했는지 여부(중복클릭 방지)
}

export default function ChattingRoom() {
  const navigate = useNavigate();
  const { roomId } = useParams<{ roomId: string }>();
  const [messages, setMessages] = useState<Message[]>(() => {
    const stored = localStorage.getItem('chatMessages');
    return stored ? JSON.parse(stored) : [];
  });
  const [input, setInput] = useState('');

  // 스크롤 끝부분 참조
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  // 메시지 변경될 때마다 스크롤 끝으로 이동
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // 처음 로드될 때 localStorage 확인
  useEffect(() => {
    if (!roomId) return;
    const stored = localStorage.getItem(`chatMessages_${roomId}`);
    if (stored) {
      setMessages(JSON.parse(stored)); // localStorage 우선
    } else {
      const roomMessages = chatData.filter((msg) => msg.roomId === roomId);
      setMessages(roomMessages); // 없으면 data.json fallback
    }
  }, [roomId]);

  const handleSend = () => {
    if (!input.trim() || !roomId) return;

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
      roomId,
    };

    // 상태 업데이트
    setMessages((prev) => {
      const updated = [...prev, newMessage];
      // localStorage에 저장
      localStorage.setItem(`chatMessages_${roomId}`, JSON.stringify(updated));
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
            className={`mb-3 flex items-start gap-2 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            {/* 친구 메시지일 때 프로필 */}
            {msg.sender === 'friend' && <img src={profileIcon} alt="상대 프로필" className="h-9 w-9 rounded-full" />}

            <div className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
              {/* 친구 이름 */}
              {msg.sender === 'friend' && <span className="mb-1 text-xs text-gray-500">친구 이름</span>}

              <div className="flex items-end gap-1">
                {msg.sender === 'me' && <span className="text-xs text-gray-700">{msg.time}</span>}

                <div
                  className={`max-w-[70%] rounded-tl-sm rounded-tr-xl rounded-br-xl rounded-bl-xl px-3 py-1 break-words ${
                    msg.sender === 'me' ? 'bg-green-50' : 'bg-white'
                  }`}
                >
                  {msg.message}
                </div>

                {msg.sender === 'friend' && <span className="text-xs font-extralight text-gray-600">{msg.time}</span>}
              </div>
            </div>
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
