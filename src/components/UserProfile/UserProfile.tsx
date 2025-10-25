import ProfileIMG from '@/assets/svgs/profile/profileIMG-default.svg';
import ChatWithMe from '@/assets/svgs/profile/chat-with-me.svg';
import Edit from '@/assets/svgs/profile/edit.svg';
import MultiProfile from '@/assets/svgs/profile/multi-profile.svg';

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="justify-center">
        <img src={ProfileIMG} alt="프로필이미지" className="mb-[-77px] ml-5 h-25 w-25 drop-shadow-sm" />
        <div className="flex h-55 w-83.75 flex-col rounded-[10px] bg-white">
          <span className="title2-sb mt-6 ml-33.75">천영현</span>
          <span className="body-med mt-0.5 ml-34 cursor-pointer text-[#A1A3A5] underline">SNS 바로가기</span>

          <div className="caption1-reg mt-8.75 flex h-18 items-center justify-center gap-5">
            <div className="flex cursor-pointer flex-col items-center">
              <img src={ChatWithMe} alt="셀프채팅" className="mb-3 h-6 w-6" />
              <span className="">나와의 채팅</span>
            </div>
            <div className="h-18 border border-[#E4E4E4]"></div>
            <div className="flex cursor-pointer flex-col items-center">
              <img src={Edit} alt="프로필 편집" className="mb-3 h-6 w-6" />
              <span>프로필 편집</span>
            </div>
            <div className="h-18 border-[0.1px] border-[#E4E4E4]"></div>
            <div className="flex cursor-pointer flex-col items-center">
              <img src={MultiProfile} alt="멀티프로필" className="mb-3 h-6 w-6" />
              <span>멀티 프로필</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
