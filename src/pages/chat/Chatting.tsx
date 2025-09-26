import banner from '../../assets/banner.svg';
import Header from '../../header/Header';
import searchIcon from '../../assets/find.png';
import camerIcon from '../../assets/camera.svg';
import chattingRoomIcon from '../../assets/chattingRoom.svg';
import profile from '../../assets/profileImage.png';
import { useNavigate } from 'react-router-dom';

function Chatting() {
  const navigate = useNavigate();
  return (
    <div className="items mx-auto min-h-screen w-full max-w-[375px] bg-white pb-[65px]">
      {/* 상단 헤더 재사용*/}
      <Header
        title="채팅"
        right={
          <div className="flex gap-2">
            <button onClick={() => alert('준비중입니다.')}>
              <img src={searchIcon} alt="search" />
            </button>
            <button>
              <img src={camerIcon} alt="camera" />
            </button>
            <button>
              <img src={chattingRoomIcon} alt="chattingRoom" />
            </button>
          </div>
        }
      />

      {/* 배너 */}
      <div className="mb-4 flex cursor-pointer items-center justify-center rounded px-4">
        <img src={banner} className="h-[71px] w-[343px]" />
      </div>

      {/* 채팅방 리스트 */}
      <div>
        <ul className="mb-4 flex cursor-pointer flex-col gap-4 px-4">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <li key={i} className="flex items-center gap-4 px-4" onClick={() => navigate('/chattingRoom')}>
              <img src={profile} /> {/* 채팅방 이미지 */}
              <div>
                <div className="font-bold">채팅방 이름</div> {/* 채팅방 이름 */}
                <div className="text-sm text-gray-500">마지막 메시지 내용</div> {/* 마지막 메시지 내용 */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Chatting;
