// src/pages/Profile.tsx
import { useParams } from 'react-router-dom';
import xIcon from '../../assets/xIcon.svg';
import profileImage from '../../assets/profileImage.png';
import instagramIcon from '../../assets/instagram.svg';
import editIcon from '../../assets/edit.svg';
import profileChatIcon from '../../assets/profileChat.svg';

interface ProfileProps {
  mode: 'my' | 'friend';
}

export default function Profile({ mode }: ProfileProps) {
  const { id } = useParams(); // 친구 id 같은 것 ("/profile/:id"에서 가져옴)

  return (
    <div className="font-pretendard relative mx-auto flex min-h-screen w-full max-w-[375px] bg-[url(/backgroundImage.jpg)]">
      {/* x버튼 */}
      <div className="flex h-[58px] w-full items-start pt-4 pl-4" onClick={() => window.history.back()}>
        <img src={xIcon} className="h-4 w-4 cursor-pointer" />
      </div>

      <div className="absolute top-[440px] left-[16px] h-[250px] w-[343px]">
        {/* 프로필 박스 */}
        <div className="mb-4 flex flex-col items-center">
          <img src={mode === 'my' ? profileImage : profileImage} alt="profile" className="h-24 w-24 rounded-full" />
          <p className="font-semibold text-white">{mode === 'my' ? '내 이름' : `친구 ${id}`}</p>
          <p className="font-regular text-white">{mode === 'my' ? '010 1234 5678' : '010 0000 0000'}</p>
        </div>

        {/* 버튼 영역 */}
        <div className="flex items-center justify-center gap-2">
          {mode === 'my' ? (
            <>
              <button className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-black opacity-70">
                <img src={profileChatIcon} />
                나와의 채팅
              </button>
              <button className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-black opacity-70">
                <img src={editIcon} />
                프로필 편집
              </button>
              <button
                className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-black opacity-70"
                onClick={() =>
                  window.open('https://www.instagram.com/hij_eong/?igsh=Z3c0a3ZzcDJodHU4&utm_source=qr#', '_blank')
                }
              >
                <img src={instagramIcon} />
                인스타그램
              </button>
            </>
          ) : (
            <>
              <button className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-black opacity-70">
                <img src={profileChatIcon} />
                채팅하기
              </button>
              <button
                className="bg-light-yellow flex h-[70px] w-[109px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl p-2 text-black opacity-70"
                onClick={() =>
                  window.open('https://www.instagram.com/hij_eong/?igsh=Z3c0a3ZzcDJodHU4&utm_source=qr#', '_blank')
                }
              >
                <img src={instagramIcon} />
                인스타그램
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
