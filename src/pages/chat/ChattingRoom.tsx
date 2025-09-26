import Header from '../../components/Header';
import searchIcon from '../../assets/find.png';
import faceTimeIcon from '../../assets/facetimeIcon.svg';
import callchattingRoomIcon from '../../assets/callChattingRoom.svg';
import profileIcon from '../../assets/profileImage.png';
import beforeIcon from '../../assets/before.svg';
import cameraIcon from '../../assets/camera.svg';
import microphoneIcon from '../../assets/microphone.svg';
import plusIcon from '../../assets/plus.svg';
import { useNavigate } from 'react-router-dom';

function ChattingRoom() {
  const navigate = useNavigate();
  return (
    <div className="bg-light-gray mx-auto min-h-screen w-full max-w-[375px] pb-[65px]">
      {/* 상단 헤더 재사용*/}
      <Header
        title={
          <div className="flex">
            <span
              onClick={() => {
                navigate('/chat');
              }}
              className="cursor-pointer"
            >
              <img src={beforeIcon} alt="before" className="my-1 h-[24px] w-[24px]" />
            </span>

            <div className="flex items-center gap-2">
              <img src={profileIcon} alt="profile" className="h-[36px] w-[36px] rounded-full" />
              <span>
                <h2>친구이름</h2>
              </span>
            </div>
          </div>
        }
        right={
          <div className="flex gap-2">
            <button onClick={() => alert('준비중입니다.')}>
              <img src={searchIcon} alt="search" />
            </button>
            <button>
              <img src={callchattingRoomIcon} alt="call" />
            </button>
            <button>
              <img src={faceTimeIcon} alt="chattingRoom" />
            </button>
          </div>
        }
      />
      {/* 채팅방 내용 */}
      <div className="m-4 rounded-lg bg-transparent p-4">채팅방 내용</div>

      {/* 하단 입력창 */}
      <div className="fixed bottom-0 left-1/2 z-10 flex w-full max-w-[375px] -translate-x-1/2 items-center gap-1 bg-white">
        <p className="mx-4 my-2 flex h-[36px] w-[343px] cursor-pointer justify-between">
          <span className="rounded-full bg-gray-50 p-2">
            <img src={plusIcon} />
          </span>
          <input
            type="text"
            placeholder="메시지 입력..."
            className="h-[36px] w-[223px] rounded-full bg-gray-50 px-4 py-2 focus:outline-none"
          />
          <span className="rounded-full bg-gray-50 p-2">
            <img src={cameraIcon} />
          </span>
          <span className="rounded-full bg-gray-50 p-2">
            <img src={microphoneIcon} />
          </span>
        </p>
      </div>
    </div>
  );
}
export default ChattingRoom;
