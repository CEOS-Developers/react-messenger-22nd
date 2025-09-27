import profile from '../../assets/profileImage.png';
import findIcon from '../../assets/find.png';
import addFriendIcon from '../../assets/addFriend.png';
import { useNavigate } from 'react-router-dom';

function FriendList() {
  const navigate = useNavigate();
  return (
    <div className="items font-pretendard mx-auto min-h-screen w-full max-w-[375px] bg-white pb-[65px]">
      {/* 상단 헤더 */}
      <header className="top-[124px] mb-4 flex h-[65px] w-[375px] justify-between gap-4 p-4 px-4 opacity-100">
        <span className="flex items-center text-xl font-bold">친구</span>
        <div className="flex gap-4">
          <button onClick={() => alert('준비중입니다.')} className="cursor-pointer">
            <img src={findIcon} />
          </button>
          <button onClick={() => alert('준비중입니다.')} className="cursor-pointer">
            <img src={addFriendIcon} />
          </button>
        </div>
      </header>
      {/* 내 프로필 */}
      <section
        className="my-4 flex cursor-pointer items-center gap-4 px-4"
        onClick={() => {
          navigate('/profile/me');
        }}
      >
        <img src={profile} alt="프로필 이미지" className="h-[65px] w-[65px]" />
        <div>
          <div className="font-bold">내이름</div>
          <div className="text-sm text-gray-500">상태메시지 있는 경우입니다.</div>
        </div>
      </section>
      {/* 친구 리스트 */}
      <ul className="mb-4 flex flex-col gap-4 px-4">
        <p className="flex gap-3 border-b border-gray-300 px-4 py-3">ㄱ</p>
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <li key={i} className="flex cursor-pointer items-center gap-4 px-4" onClick={() => navigate(`/profile/${i}`)}>
            <img src={profile} />
            <div>
              <div className="font-bold">친구이름</div>
              <div className="text-sm text-gray-500">상태메시지 있는 경우입니다.</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FriendList;
